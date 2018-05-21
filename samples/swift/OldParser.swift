//
//  CommonMarkParser.swift
//  SwiftCommonMark
//
//  Created by Cody Winton on 3/16/18.
//  Copyright © 2018 Cody Winton. All rights reserved.
//
// MARK: Imports
import Foundation

// MARK: -
extension NodeType {

	// MARK: Functions
	static func parse(markdown: String) -> Node {

		var blocks: [Node] = []
		var openBlocks: [NodeType] = [.document]

		for line in markdown.components(separatedBy: .newlines) {

			var foundMatch = false

			for type in blockTypes {
				guard let regex = type.blockRegex else { continue }

				let options: NSRegularExpression.MatchingOptions = .anchored
				guard let match = regex.firstMatch(in: line, options: options, range: NSRange(location: 0, length: line.count)),
					match.range.location != NSNotFound else {
						continue
				}

				let matchString = NSString(string: line).substring(with: match.range)
				var captures = Array(repeating: "", count: type.blockTemplates.count)

				for (index, template) in type.blockTemplates.enumerated() {
					let text: String = regex.replacementString(for: match, in: matchString, offset: 0, template: template)
					captures[index] = text
				}

				blocks.append(type.block(from: line, captures: captures))
				foundMatch = true
				break
			}

			guard !foundMatch else { continue }
			parseParagraph(line: line, &blocks, &openBlocks)
		}

		var document = Node.document(nodes: blocks)
		document.parseBlockInlines()
		return document
	}

	// MARK: Specific Parsing
	private static func parseParagraph(line: String, _ blocks: inout [Node], _ openBlocks: inout [NodeType]) {

		switch blocks.last {
		case .paragraph(var nodes)? where openBlocks.last == .paragraph:
			if let node = nodes.last, case .text(let text) = node, text.last != "\n" {
				blocks.removeLast()
				nodes.removeLast()

				nodes.append(.text(text + "\n" + line))
				blocks.append(.paragraph(nodes: nodes))
			} else if !line.isEmpty {
				blocks.append(.paragraph(nodes: [.text(line)]))
			}

		default:
			if !line.isEmpty {
				blocks.append(.paragraph(nodes: [.text(line)]))
				openBlocks.append(.paragraph)
			}
		}
	}
}

// MARK: -
private extension Node {

	mutating func parseBlockInlines() {
		switch self {
		case .paragraph(let nodes):
			self = .paragraph(nodes: nodes.flatMap { node -> [Node] in
				guard case .text(let text) = node else { return [] }
				return text.parseParagraphInlines()
			})
		case let .heading(level, nodes):
			self = .heading(level: level, nodes: nodes.flatMap { node -> [Node] in
				guard case .text(let text) = node else { return [] }
				return text.parseHeadingInlines()
			})
		case .document(var nodes):
			nodes.parseBlockInlines()
			self = .document(nodes: nodes)
		case .blockQuote(var nodes):
			nodes.parseBlockInlines()
			self = .blockQuote(nodes: nodes)
		case .list(let type, let isTight, var nodes):
			nodes.parseBlockInlines()
			self = .list(type: type, isTight: isTight, nodes: nodes)
		case .listItem(var nodes):
			nodes.parseBlockInlines()
			self = .listItem(nodes: nodes)
		case .code, .codeBlock, .emphasis, .image, .htmlBlock, .htmlInline,
			 .lineBreak, .link, .softBreak, .strong, .text, .thematicBreak:
			break
		}
	}
}

// MARK: -
private extension Array where Element == Node {

	mutating func parseBlockInlines() {
		for index in 0..<count {
			self[index].parseBlockInlines()
		}
	}
}

// MARK: -
private extension String {

	func parseParagraphInlines() -> [Node] {
		var nodes: [Node] = []

		let lines = trimmingCharacters(in: .newlines).components(separatedBy: .newlines)

		for (index, line) in lines.enumerated() {
			guard !line.isEmpty else { continue }
			nodes.append(.text(line))
			guard index < lines.count - 1 else { continue }
			nodes.append(.softBreak)
		}

		return nodes
	}

	func parseHeadingInlines() -> [Node] {
		return [.text(self)]
	}
}

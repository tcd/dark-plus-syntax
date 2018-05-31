//: Playground - noun: a place where people can play

import Cocoa
import Foundation

if let homePath = ProcessInfo.processInfo.environment["HOME"] {
    let completePath = homePath + "/Projects/Swift"
    print(completePath)
}

// var str = "Hello, playground"



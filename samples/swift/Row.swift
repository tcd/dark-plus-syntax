func verbYourNoun(verb: String, noun: String) {
    print("\(verb), \(verb), \(verb) your \(noun)")
    print("something, something, something...")
}

func adverbly(adverb: String) {
    print("\(adverb), \(adverb), \(adverb)")
    print("something, something, something...\n")
}

/* verbYourNoun(verb: "row", noun: "boat") */
// adverbly(adverb: "merrily")

func singSong(theVerb: String, theNoun: String, theAdverb: String) {
    verbYourNoun(verb: theVerb, noun: theNoun)
    adverbly(adverb: theAdverb)
}

singSong(theVerb: "row", theNoun: "boat", theAdverb: "merrily")

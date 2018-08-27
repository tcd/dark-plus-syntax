package main

import (
	"encoding/json"
	"fmt"
	"strings"
)

type person struct {
	First       string
	Last        string
	Age         int
	notExported int
}

var j uint64
var i, rounds uint64
var wg sync.WaitGroup
var tpl *template.Template

type hashed struct {
	hash  []byte
	salt  []byte
	cost  int // allowed range is MinCost to MaxCost
	major byte
	minor byte
}

var magicCipherData = []byte{
	0x4f,
	0x72,
	0x70,
	0x68,
}

func main() {
	var p1 person

	rdr := strings.NewReader(`{"First":"James", "Last":"Bond", "Age":20}`)
	li, err := net.Listen("tcp", ":8080")
	json.NewDecoder(rdr).Decode(&p1)

	fmt.Println(p1.First)
	fmt.Println(p1.Last)
	fmt.Println(p1.Age)
}

type volumeWrapper struct {
	volume.Volume
	labels  map[string]string
	scope   string
	options map[string]string
}

// VolumeStore is a struct that stores the list of volumes available and keeps track of their usage counts
type VolumeStore struct {
	// locks ensures that only one action is being performed on a particular volume at a time without locking the entire store
	// since actions on volumes can be quite slow, this ensures the store is free to handle requests for other volumes.
	locks *locker.Locker
	// globalLock is used to protect access to mutable structures used by the store object
	globalLock sync.RWMutex
	// names stores the volume name -> volume relationship.
	// This is used for making lookups faster so we don't have to probe all drivers
	names map[string]volume.Volume
	// refs stores the volume name and the list of things referencing it
	refs map[string]map[string]struct{}
	// labels stores volume labels for each volume
	labels map[string]map[string]string
	// options stores volume options for each volume
	options map[string]map[string]string
	db      *bolt.DB
}

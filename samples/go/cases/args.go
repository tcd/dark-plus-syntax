package main

import (
	"fmt"
)

// Simple Struct
type person struct {
	Name string
}

// Basic Method
func (p person) Greeting() {
	fmt.Println("I'm just a regular person.")
}

func (p *person) phoneHome(count int) {
	fmt.Println("Home: %v", p)
}

func handle(conn net.Conn) {
	scanner := bufio.NewScanner(conn)
	for scanner.Scan() {
		ln := scanner.Text()
		fmt.Println(ln)
	}
	defer conn.Close()

	// we never get here
	// we have an open stream connection
	// how does the above reader know when it's done?
	fmt.Println("Code got here.")
}

// Create creates a volume with the given name and driver.
// This is just like CreateWithRef() except we don't store a reference while holding the lock.
func (s *VolumeStore) Create(name, driverName string, opts, labels map[string]string) (volume.Volume, error) {
	return s.CreateWithRef(name, driverName, "", opts, labels)
}

// Refs gets the current list of refs for the given volume
func (s *VolumeStore) Refs(v volume.Volume) []string {
	name := v.Name()

	s.locks.Lock(name)
	defer s.locks.Unlock(name)

	return s.getRefs(name)
}

// FilterByDriver returns the available volumes filtered by driver name
func (s *VolumeStore) FilterByDriver(name string) ([]volume.Volume, error) {
	vd, err := volumedrivers.GetDriver(name)
	if err != nil {
		return nil, &OpErr{Err: err, Name: name, Op: "list"}
	}
	ls, err := vd.List()
	if err != nil {
		return nil, &OpErr{Err: err, Name: name, Op: "list"}
	}
	for i, v := range ls {
		options := map[string]string{}
		s.globalLock.RLock()
		for key, value := range s.options[v.Name()] {
			options[key] = value
		}
		ls[i] = volumeWrapper{v, s.labels[v.Name()], vd.Scope(), options}
		s.globalLock.RUnlock()
	}
	return ls, nil
}

func unwrapVolume(v volume.Volume) volume.Volume {
	if vol, ok := v.(volumeWrapper); ok {
		return vol.Volume
	}

	return v
}

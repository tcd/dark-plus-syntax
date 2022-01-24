package main

_ = getGroups(`^snippet\s+(?P<trigger>\S+)\s(?P<description>".+")(?P<options>\s[biemrstwA]+$)?`, header)

_ = regexp.MustCompile(`(?P<input>\w+)(?P<sep>\:)(?P<output>\w+)`)

_ = regexp.MustCompile(`(?ms:(^\s+.+))`)

type Inventory struct {
	Material string
	Count    uint
}
sweaters := Inventory{"wool", 17}
tmpl, err := template.New("test").Parse("{{.Count}} items are made of {{.Material}}")
if err != nil { panic(err) }
err = tmpl.Execute(os.Stdout, sweaters)
if err != nil { panic(err) }

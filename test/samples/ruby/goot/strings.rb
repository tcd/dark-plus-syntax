simple_string = "Hello World"           # looks good
interpolated_string = "Hello #{world}"  # looks good
escaped_string = "Hello \nWorld"        # looks good
regex_brace = %r[railties[\w.-]*/lib/rails|rack[\w.-]*/lib/rack] # looks good
regex_bracket = %r{railties[\w.-]*/lib/rails|rack[\w.-]*/lib/rack} # looks good
regex_paren = %r(railties[\w.-]*/lib/rails|rack[\w.-]*/lib/rack) # looks good
regex_string_2 = /[a-w&&[^c-g]z]/

def ip_address?(str)
    # We use !! to convert the return value to a boolean
    !!(str =~ /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)
end

# Converts the object into textual markup given a specific `format`
# (defaults to `:html`)
#
# == Parameters:
# format::
#   A Symbol declaring the format to convert the object to. This
#   can be `:text` or `:html`.
#
# == Returns:
# A string representing the object in a specified
# format.
#
def to_format(format = :html)
# format the object
end

# ==============================================================================
# yard
# ==============================================================================

# Converts the object into textual markup given a specific format.
#
# @param format [Symbol] the format type, `:text` or `:html`
# @return [String] the object converted into the expected format.
def to_format(format = :html)
    # format the object
end

# @param user [String] the username for the operation
# @param host [String] the host that this user is associated with
# @param time [Time] the time that this operation took place
def clean(user, host, time = Time.now) end

# @param (see #clean)
def activate(user, host, time = Time.now) end

class Resource
    # Defines a new property
    # @param [String] name the property name
    # @param [Class] type the property's type
    # @!macro [attach] property
    #   @return [$2] the $1 property
    def self.property(name, type) end
end

class Post < Resource
    property :title, String
    property :view_count, Integer
end

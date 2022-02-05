class Greeter
    # property name : String
    # property salutation : String
    @name : String
    @salutation : String

    def initialize(@name, @salutation)
      # @name = name
      # @salutation = salutation
    end

    def greet
      puts "Hey"
    end

    def salute
      puts "#{@salutation} #{@name}!"
    end

  end

  c = Greeter.new("Clay", "Wazzupp")
  c.salute

# https://www.rubyguides.com/2018/06/rubys-method-arguments/

class Point
    def initialize(x: , y:)
        @x, @y = x, y
    end
end
point = Point.new(x: 10, y: 20)

def print_all(*args); end
print_all(1, 2, 3, 4, 5)

def testing(a, b = 1, *c, d: 1, **x)
    puts(a, b, c, d, x)
end
testing('a', 'b', 'c', 'd', 'e', d: 2, x: 1)

def print_all(*); end

# https://blog.saeloun.com/2019/10/07/ruby-2-7-keyword-arguments-redesign.html

class C
    def hi(needed, needed2,
           maybe1 = "42", maybe2 = maybe1.upcase,
           *args,
           named1: 'hello', named2: a_method(named1, needed2),
           **options,
           &block)
    end
end

C.instance_method(:hi).parameters
# => [ [:req, :needed], [:req, :needed2],
#      [:opt, :maybe1], [:opt, :maybe2],
#      [:rest, :args],
#      [:key, :named1], [:key, :named2],
#      [:keyrest, :options],
#      [:block, :block] ]

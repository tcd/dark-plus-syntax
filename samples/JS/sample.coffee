fibonacci = ->
    [previous, current] = [1, 1]
        loop
            [previous, current] = [current, previous + current]
        yield current
    return

getFibonacciNumbers = (length) ->
    results = [1]
    for n from fibonacci()
        results.push n
        break if results.length is length
    results

class Hello extends World
    constructor: (name) ->
        @label = """
            Hello #{name}!
        """

    log: ->
        console.log(@label)

switch day
    when "Mon" then go work
    when "Tue" then go relax
    when "Thu" then go iceFishing
    when "Fri", "Sat"
        if day is bingoDay
            go bingo
            go dancing
    when "Sun" then go church
    else go work

date = if friday then sue else jill

-module(hello_world).
-export([hello/0, hello/1]).

hello() ->
    io:format("hello world~n").

hello(Name) ->
    io:format("hello ~p~n", [Name]).

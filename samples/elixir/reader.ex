defmodule HelloWorld.FileReader do

  def get_strings_to_tweet(path) do
    File.read!(path)
    |> String.split("\n")
  end

end

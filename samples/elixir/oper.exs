defmodule Sample.Enum do

  # def first(list) do
  #   hd(list)
  # end

  # def first([]) do
  #   nil
  # end

  # def first([head | _tail]) do
  #   head
  # end

  # def first(list) when length(list) == 0, do: nil

  def first(list, val \\ nil), do: val
  def first([head | _tail], val), do: head
  def first([], val \\ nil), do: val

  def add(list, val \\ 0) do
    [val | list]
  end

end

require 'time'

# Functions for converting Edge CSV filenames to timestamps.
# See [this post](http://tcd.lol/posts/timestamps/).
module Timestamp

  # Convert `yyyy-MM-dd-HH-mm-ss` to a Unix timestamp in UCT.
  #
  # @param stamp [String] Timestamp. `%F-%H-%M-%S` in strftime (`yyyy-MM-dd-HH-mm-ss`).
  # @raise [ArgumentError] If the argument is either too short or nil.
  # @return [Integer]
  def self.to_unix(stamp)
    raise ArgumentError, 'Invalid argument (nil)' if stamp.nil?()
    raise ArgumentError, "Invalid argument (too short): (#{stamp})" unless stamp.length() >= 19

    stamp = stamp[0..18]

    year  = stamp[0..3]
    month = stamp[5..6]
    day   = stamp[8..9]
    hour  = stamp[11..12]
    min   = stamp[14..15]
    sec   = stamp[17..18]

    return Time.utc(year, month, day, hour, min, sec).to_i()
  end

  # Convert a Unix timestamp to `yyyy-MM-dd-HH-mm-ss`.
  #
  # @param unix_time [Numeric,String] A Unix timestamp.
  # @raise [ArgumentError] If the argument is nil.
  # @return [String]
  def self.from_unix(unix_time)
    raise ArgumentError, 'Invalid argument (nil)' if unix_time.nil?()
    return Time.at(unix_time.to_i).utc().strftime('%F-%H-%M-%S')
  end

  # Convert `yyyy-MM-dd-HH-mm-ss` to an ISO8601 timestamp.
  #
  # @param stamp [String] Timestamp. `%F-%H-%M-%S` in strftime (`yyyy-MM-dd-HH-mm-ss`).
  # @raise [ArgumentError] If the argument is either too short or nil.
  # @return [String]
  def self.to_iso(stamp)
    raise ArgumentError, 'Invalid argument (nil)' if stamp.nil?()
    raise ArgumentError, 'Invalid argument (too short)' unless stamp.length() >= 19

    stamp = stamp[0..18]

    year  = stamp[0..3]
    month = stamp[5..6]
    day   = stamp[8..9]
    hour  = stamp[11..12]
    min   = stamp[14..15]
    sec   = stamp[17..18]

    return Time.utc(year, month, day, hour, min, sec).iso8601()
  end

  # Convert an ISO timestamp to `yyyy-MM-dd-HH-mm-ss`.
  #
  # @param iso_time [String] An ISO8601 timestamp.
  # @raise [ArgumentError]
  # @return [String]
  def self.from_iso(iso_time)
    raise ArgumentError, 'Invalid argument (nil)' if iso_time.nil?()
    return Time.iso8601(iso_time).utc().strftime('%F-%H-%M-%S')
  end

end

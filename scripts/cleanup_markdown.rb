#!/usr/bin/env ruby
Dir.glob(File.dirname(__FILE__) + '/../_posts/*.{md}') do |file|
  contents = ""
  File.open(file, "rb") do |opener|
    contents = opener.read
  end

  puts "Cleaning up '#{file}'"

  File.open(file, 'wb') do |writer|
    contents = contents
                .gsub(/&nbsp;/, ' ')
                .gsub(/&quot;/, '"')
                .gsub(/>/, '&gt;')
                .gsub(/</, '&lt;')
    writer.write contents
  end
end

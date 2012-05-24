#!/usr/bin/env ruby
require File.dirname(__FILE__) + '/reverse_markdown'

Dir.glob(File.dirname(__FILE__) + '/export/*.{raw}') do |file|
  contents = ""
  reverser = ReverseMarkdown.new
  File.open(file, "rb") do |opener|
    contents = opener.read.gsub(/\t+/, '').gsub(/^#\s.+$/,'')
  end

  puts "Converting '#{file}'"

  as_markdown = reverser.parse_string("<div>#{contents}</div>")

  File.open("#{file.gsub(/\.raw/, '.md')}", 'w') do |writer|
    as_markdown = as_markdown.gsub(/^slug:\s(.+)$/, 'slug: "\1"')
    writer.write as_markdown
  end
end

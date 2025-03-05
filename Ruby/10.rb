# Declare a variable and assign it to a non-empty string. Then construct a
# string that is formatted this way:
# "Coder" becomes "CoderCodeCodCoC"
# Print the newly formatted string. You must use string splicing.

word = "Coder"

result = (0..word.length).map { |i| word.slice(0, word.length - i) }.join
puts result

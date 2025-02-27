# Declare a variable and assign it to a string. The code should print "Yes" if
# all the words in the string begin with an uppercase letter. Print "No"
# otherwise. You cannot use a library for this solution.
# (40 pts)

str = "Hello World This Is My Sentence"

def all_words_caps?(str)
  str.split.all? do |word|
    word[0] == word[0].upcase
  end
end

arr = [1, 3, 5, 7, 9]

def all_odd?(arr)
  arr.all? do |n|
    n.odd?
  end
end

puts all_odd?(arr)
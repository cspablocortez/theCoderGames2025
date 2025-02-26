# Print the numbers from 1 to 100. For multiples of three, print 'Coder' instead
# of the number. For multiples of four, print 'School' instead of the number.
# For numbers which are multiples of both three and four, print 'CoderSchool'
# (30 pts)

(1..100).each do |n|
  if n % 3 == 0 && n % 4 == 0
    puts "CoderSchool"
  elsif n % 3 == 0
    puts "Coder"
  elsif n % 4 == 0
    puts "School"
  else
    puts n
  end
end
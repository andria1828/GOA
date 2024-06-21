# Define a list of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

# Initialize an empty list to store numbers divisible by 3
divisible_by_3 = []

# Iterate over each number in the 'numbers' list
for number in numbers:
    # Check if the number is divisible by 3
    if number % 3 == 0:
        # If divisible by 3, append it to the 'divisible_by_3' list
        divisible_by_3.append(number)

# Print the original list
print("Original list of numbers:", numbers)

# Print the list of numbers divisible by 3
print("Numbers divisible by 3:", divisible_by_3)
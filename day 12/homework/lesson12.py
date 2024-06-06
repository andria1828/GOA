

for i in range(21):
    print(i) 


num = int (input ("Enter any number to test whether it is odd or even: "))

if (num % 2) == 0:

              print ("The number is even")

else:

              print ("The provided number is odd")

sum = 0



for i in range(10):
    sum = sum + 2


    print(sum)


    # Initialize the sum variable outside the loop
total_sum = 0

# Iterate through the numbers from 50 to 100 (inclusive)
for num in range(50, 101):
    # Add the current number to the sum
    total_sum += num

# Print the total sum
print("The sum of numbers from 50 to 100 :", total_sum)


# Iterate through numbers from 1 to 50 inclusive
for num in range(1, 51):
    # Check if the number is divisible by 5
    if num % 5 == 0:
        # Print the number if it's divisible by 5
        print(num)


        # Get input from the user for two numbers
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

# Find the smallest and largest numbers
smallest = min(num1, num2)
largest = max(num1, num2)

# Print all the numbers from smallest to largest using a for loop
print("Numbers from smallest to largest:")
for num in range(smallest, largest + 1):
    print(num)




    # Get the word from the user
word = input("Enter a word: ")

# Print the word in reverse using a for loop
print("Word in the opposite direction:")
for i in range(len(word) - 1, -1, -1):
    print(word[i], end="")





# Get two numbers from the user
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Calculate the sum
sum = num1 + num2

# Display the result
print("The sum of", num1, "and", num2, "is", sum)



# Initialize the product variable to store the result
product = 1

# Iterate through numbers from 5 to 10 inclusive
for num in range(5, 11):
    # Multiply the current number with the product
    product *= num

# Print the product of numbers from 5 to 10
print("The product of numbers from 5 to 10 inclusive is:", product)
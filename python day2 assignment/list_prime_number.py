num = int(input("Enter the number: "))
print("prime number is")
primes = []

for i in range(2, num + 1):
   
	for j in range(2, int(i ** 0.5) + 1):
 		if i%j == 0:
 			break
	else:
		primes.append(i)

print(primes)
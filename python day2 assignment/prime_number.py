num = int(input("Enter the number"))
if num > 1:
    for i in range(2, num) :
        if (num%i)==0 :
            print(num, "It is not a Prime number")
            break

    else:
      print(num, "It is a prime number")

else:
    print(num, "It is not prime number")

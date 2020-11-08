// Example program
#include <iostream>
#include <string>
using namespace std;

int main()
{
  int myvar = 25;
  int* foo = &myvar; // here * declares the int type pointer variable named 'foo' that stores the address of (& = address of) variable myvar
  
  int res = *foo; // here * is used to dereference foo variable that gives the value that is stored in foo NOT the address
  
  cout <<foo <<endl;
  cout <<res <<endl;
}

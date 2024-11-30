Simple calculator that operates step by step, not by evaluating whole expressions.

Features:

- 4 main operations (addition, subtraction, multiplication and division).
- Result is always saved with max possible precision but displayed with an approximation on the second decimal.
- For numbers too big or too small to fit in the screen, scientific notation is used (although it can't be input by the user).
- Sign can be changed after typing the number.
- Accepts decimal inputs.
- Allows any digit or operator symbol to be deleted.
- Can operate between two numbers and, when "=" is pressed show the result:
    - Those two numbers can be input both by the user or equal to the previous result.
    - After the result is shown, the next digit pressed logs the previous result on top of screen.
- It therefore can operate in series, both on the same expression or on a result:
    - Can create a cycle where the user inputs a number, then an operator, then a second number,
    then another operator (and by doing so calculating the first result, showing it, and making it the first number) followed by
    a new second number and so on.
    - It also can operate on an explicit result, called with "=". 
    Meaning that a result can be shown with [firstNumber]->[operator]->[secondNumber]->[=]
    and still, if followed by an operator, be operated on.


To be added:

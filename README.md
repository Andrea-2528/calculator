Simple calculator that operates step by step, not by evaluating whole expressions.

Features:

- 4 main operations (addition, subtraction, multiplication and division).
- Result is always saved with max possible precision but displayed with an approximation on the second decimal.
    - Note: the result is shown with its decimal part only if that is != 0, 
        otherwise is just shown as a whole number (12.42974... is displayed as 12.43, but 12.0000... is displayed as 12).
- For numbers too big or too small to fit in the screen, scientific notation is used (although it can't be input by the user).
- Sign can be changed before, after, and while typing the number.
- Accepts decimal inputs.
    - Also prevents the input of multiple decimals.
- Allows any digit or operator symbol to be deleted.
- Can operate between two numbers and, when "=" is pressed, show the result:
    - Those two numbers can be input both by the user or equal to the previous result.
    - After the result is shown, the next digit pressed logs the previous result on top of screen.
- It therefore can operate in series, both on the same expression or on a result:
    - Can create a cycle where the user inputs a number, then an operator, then a second number,
    then another operator (and by doing so calculating the first result, showing it, and making it the first number) followed by
    a new second number and so on.
    - It also can operate on an explicit result, called with "=". 
    Meaning that a result can be shown with [firstNumber]->[operator]->[secondNumber]->[=]
    and still, if followed by an operator, be operated on.
- Different behaviour on illogic operations, for example pressing an equal after an operator.
    - The idea is to make the number operate on itself, so [5]->[+]->[=] should return 10 or [8]->[x]->[=] should return 64.
    - Note: this behaviour is useless for subtraction and division since it always returns the same value (0 or 1).
        - A different behavior should be thought for that case.


To be added:


- Regarding the behaviour on illogic operations, it should also handle cases like two operator presses in a row, 
    or an input that's not a number ("." followed by numbers or just ".").
    Full check of possible extreme cases to be done.
    In all cases, it should either do something logical or don't do anything at all.
- If possible, an input starting with "." should be treated as having a "0" as its first number
- More mathematical functions, like power, square root, factorial and so on.
- Keyboard support, allowing only necessary characters to be recognized.
    - If necessary, add a legend on the page for the keyboard support, listing what key corresponds to what button.


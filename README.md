Live preview: https://andrea-2528.github.io/calculator/

Simple calculator that operates step by step, not by evaluating whole expressions.

Features:

- 4 operations (addition, subtraction, multiplication and division).
- Result is always saved with max possible precision but displayed with an approximation on the second decimal.
    - Note: the result is shown with its decimal part only if that is != 0, 
        otherwise is just shown as a whole number (12.42974... is displayed as 12.43, but 12.0000... is displayed as 12).
- For numbers too big or too small to fit in the screen, scientific notation is used (although it can't be input by the user).
    - Note: For small numbers, scientific notation is displayed if said number is less or equal to 0.1, to avoid loosing precision on the displayed result.
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
- If possible, an input starting with "." should be treated as having a "0" as its first number.
    - By similar logic, an input containing only "." may be treated as the smallest quantity in the machine. (Which couldn't otherwise be input due to limits in the display).
- More mathematical functions, like power, square root, factorial and so on.
- Keyboard support, allowing only necessary characters to be recognized.
    - Add a legend on the page for the keyboard support, listing what key corresponds to what button.

NOTES:

- The limitations used are intended to make the calculator harder to program:
    - It would be easier to give the user a wider syntax that allows to input whole expressions instead of two numbers and an operator, and then evaluate (eval) the entire 
    expression with the given correct syntax.
    - That being said, even if that simplifies the logic, it would also allow for much more complex mathematical operations that would need their own handling of special cases (like the /0 in a division),
    and their own checks of syntax, thus making it simpler in the logic of operations but not in the handling of errors.
    - It follows that a scientific calculator would be an interesting future project to compare the differences, also considering that a complex scientific calculator allows for much more than evaluating 
    determined and explicit expressions, it would surely become a longer project.


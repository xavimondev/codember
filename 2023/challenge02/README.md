# Mini Compiler Challenge

In the world of espionage, a coding language is used with symbols that perform simple mathematical operations.

Your task is to create a mini compiler that interprets and executes programs written in this symbol language.

The operations of the language are as follows:

```
"#" Increases the numeric value by 1.
"@" Decreases the numeric value by 1.
"*" Multiplies the numeric value by itself.
"&" Prints the current numeric value.
```
The initial numeric value is 0 and the operations should be applied in the order in which they appear in the string of symbols.

## Examples

```
Input: "##*&"
Expected Output: "4"
Explanation: Increment (1), increment (2), multiply (4), print (4).
```

```
Input: "&##&*&@&"
Expected Output: "0243"
Explanation: Print (0), increment (1), increment (2), print (2), multiply (4), print (4), decrement (3), print (3).
```

## Your Challenge

Develop a mini compiler that takes a text string and returns another text string with the result of executing the program.

## How to Solve It

1. Solve the message you will find in this file: https://codember.dev/data/message_02.txt

2. Submit your solution with the "submit" command in the terminal, for example like this:
```bash
submit 024899488
```
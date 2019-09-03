# Luckyballs

A CLI to generate lottery numbers.


## Usage

`$ luckyballs <number of lines> <number of numbers>:<maximum ball number>`

- **number of lines**: Integer - optionally specifies how many lines you want to play (defaults to 0)
- **number of numbers**: Integer - how many numbers to pick per line
- **maximum ball number**: Integer - how many balls does this lottery have

You can select multiple ranges of numbers.

The following is an example of 2 lines for the Euromillions lottery which has 5 balls 1 to 50, and 2 balls 1 to 12:

`npx luckyballs 2 5:50 2:12`

The following is an example of 5 lines for the American Powerball which has 5 balls 1 to 69, and 1 ball 1 to 26:

`npx luckyballs 5 5:69 1:26`

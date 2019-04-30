# Smart Contract Testing Workshop

In case you don't have `solc` installed, run `npm install`.

### Task 1

We are going to write a simple calculator smart contract, which evaluates simple mathematical operations. Test cases and the functionality of the operations are missing. It is your task to add these and test your smart contract.

1. In the `test` directory you see a Javascript file `task1_Calculator.js`. Add the missing test cases for `subtraction`, `multiplication` and `division`, which you are going to add to the `Calculator` smart contract.

  What out for mistakes in your test cases!

  After adding the test cases, execute `embark` from the project directory with your test file in a terminal with the following command:

  `embark test test/task1_Calculator.js`

  The test should fail.

2. In the `contracts` directory you see a smart contract file `SimpleCalculator.sol`. You see that the calculator is incomplete.
Add the missing functionality for:

    - subtraction
    - multiplication
    - division

  Rerun the test and make sure that all tests pass.

### Task 2

This time we want to give our calculator the possibility to store the result from the last calculation done. As in Task 1, test cases and the functionality is missing and it is your task to add these. This time, we are working with transactions!

1. In the `test` directory you see a Javascript file `task2_Calculator.js`. Add the missing test cases for `subtraction`, `multiplication` and `division`, which you are going to add to the `Calculator` smart contract.

  What out for mistakes in your test cases!

  After adding the test cases, execute `embark` from the project directory with your test file in a terminal with the following command:

  `embark test test/task2_Calculator.js`

  The test should fail.

  You will have noticed, that the functions are called a bit different this time. Do you know why?

2. In the `contracts` directory you see a smart contract file `Calculator.sol`. You see that the calculator is incomplete.
Add the missing functionality for:

    - subtraction
    - multiplication
    - division

  Rerun the test and make sure that all tests pass.


### Task 3

Your code works as expected. Now it is time to verify that the `TokenSale.sol` smart contract does not contain any security vulnerabilities.

If you have `Mythril Classic` installed, you can use it (`myth -x TokenSale.sol`). Feel free to use also any other security analysis tool (`Securify (Chainsecurity)`, `Manticore (Trailofbits)
`).

In case there are vulnerabilities, fix those and run the tools again.

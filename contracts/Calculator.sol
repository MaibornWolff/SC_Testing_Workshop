pragma solidity ^0.5.0;

contract Calculator {
  uint public stored = 0;

  function clear() public {
    stored = 0;
  }

  /*
   Takes two numbers, adds them and returns the result.
   */
  function add(uint a, uint b) public{
    stored = a + b + stored;
  }

  /*
   Takes two numbers, subtracts them and returns the result.
   */
  function sub(uint a, uint b) public {
    // TODO: Fill in the missing code
  }

  // TODO: For a simple calculator we need multiplication and division.
  // Write the missing code.
}

const SimpleCalculator = embark.require('Embark/contracts/SimpleCalculator');
let accounts;
config({
  contracts: {
    "SimpleCalculator": {
}}}, (err, theAccounts) => {
  accounts = theAccounts;
});
 
contract("SimpleCalculator", function () {
  this.timeout(0);
  it("[Add] Adds two numbers", async function () {
    let result = await SimpleCalculator.methods.add('100', '200').call();
    assert.strictEqual(parseInt(result, 10), 300);
  });

  it("[Add] Adds two numbers", async function () {
    let result = await SimpleCalculator.methods.add('115792089237316195423570985008687907853269984665640564039457584007913129639936', '2').call();
    // Our Tester made here a mistake. Why is it failing?
    assert.strictEqual(parseInt(result, 10), 115792089237316195423570985008687907853269984665640564039457584007913129639938);
  });

  it("[Sub] Subtracts two numbers", async function () {
    let result = await SimpleCalculator.methods.sub('3', '2').call();
    assert.strictEqual(parseInt(result, 10), '1');
  });

  // TODO: add test cases for multiplication and division
});

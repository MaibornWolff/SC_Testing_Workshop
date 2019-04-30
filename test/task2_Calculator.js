const Calculator = embark.require('Embark/contracts/Calculator');
let accounts;
config({
  contracts: {
    "Calculator": {
}}}, (err, theAccounts) => {
  accounts = theAccounts;
});
 
contract("Calculator", function () {
  this.timeout(0);
  it("[Add] Adds two numbers", async function () {
    let tx = await Calculator.methods.add('100', '200').send();
    let result = await Calculator.methods.stored().call();
    assert.strictEqual(parseInt(result, 10), 300);
  });

  it("[Add] Adds number to previous result", async function () {
    let tx = await Calculator.methods.add('100', '0').send();
    let result = await Calculator.methods.stored().call();
    assert.strictEqual(parseInt(result, 10), 400);
  });

  // TODO: add test cases for subtraction, multiplication, devision
  // and also clearing the storage
});

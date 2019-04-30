const SimpleStorage = embark.require('Embark/contracts/SimpleStorage');
let accounts;
config({
  contracts: {
    "SimpleStorage": {
      args: [100]
}}}, (err, theAccounts) => {
  accounts = theAccounts;
});
 
contract("SimpleStorage", function () {
  this.timeout(0);
  it("[Get/Init] Sets the value during construction", async function () {
    let result = await SimpleStorage.methods.get().call();
    assert.strictEqual(parseInt(result, 10), 100);
  });
 
  it("[Set] Set storage value", async function () {
    await SimpleStorage.methods.set(150).send();
    let result = await SimpleStorage.methods.get().call();
    assert.strictEqual(parseInt(result, 10), 150);
  });
});

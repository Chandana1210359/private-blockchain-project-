let web3;
let contract;
const contractAddress = '0xYourDeployedContractAddress';
const abi = [ /* ABI from Truffle build */ ];

window.addEventListener('load', async () => {
  web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
  contract = new web3.eth.Contract(abi, contractAddress);
});

async function setValue() {
  const accounts = await web3.eth.getAccounts();
  const value = document.getElementById('value').value;
  await contract.methods.set(value).send({ from: accounts[0] });
}

async function getValue() {
  const value = await contract.methods.get().call();
  document.getElementById('output').innerText = 'Stored Value: ' + value;
}

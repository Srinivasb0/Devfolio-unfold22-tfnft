import blockchain from "./Web3.js";
import abi from "../abi/abi.json" assert {type: "json"};

// New NFT
const buttonMint = document.getElementById('mint');
buttonMint.addEventListener('click', mintNFT);

function mintNFT() {
    // If Metamask is not available
    if (typeof window.ethereum == "undefined") {
        rej("You should install Metamask to use it!");
    }

    // Web3 Instance 
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi, "0x107B52D3440432Ad90002849dEdfBB65f981B5eD");

    web3.eth.getAccounts().then((accounts) => {
        contract.methods.mintTo().send({ from: accounts[0] }).then((data) => {
            console.log("NFT Added");
        });
    });

}
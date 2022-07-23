// BTC
const getBtcData = async () => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
   .then(response => response.json())
   .then(data => {
     console.log(data);
     document.getElementById("btc-info").innerHTML = '$' + data.USD
   });
 }
 getBtcData();
 tcount=setInterval(function(){
   tcount++
   if (tcount==10) {getBtcData(); tcount=0}
   document.getElementById("btc-infotime").innerHTML = 'Next update in ' + (10-tcount) + ' seconds'
 },1000);


 // ETH 
 const getEthData = async () => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
   .then(response => response.json())
   .then(data => {
     console.log(data);
     document.getElementById("eth-info").innerHTML = '$' + data.USD
   });
 }
 getEthData();
 tcount2=setInterval(function(){
   tcount2++
   if (tcount2==10) {getEthData(); tcount2=0}
   document.getElementById("eth-infotime").innerHTML = 'Next update in ' + (10-tcount2) + ' seconds'
 },1000);

//  Dogecoin
const getDogeData = async () => {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=D&tsyms=USD')
 .then(response => response.json())
 .then(data => {
   console.log(data);
   document.getElementById("d-info").innerHTML = '$' + data.USD
 });
}
getDogeData();
tcount3=setInterval(function(){
 tcount3++
 if (tcount3==10) {getDogeData(); tcount3=0}
 document.getElementById("d-infotime").innerHTML = 'Next update in ' + (10-tcount3) + ' seconds'
},1000);

// Tron
const getTronData = async () => {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
 .then(response => response.json())
 .then(data => {
   console.log(data);
   document.getElementById("trx-info").innerHTML = '$' + data.USD
 });
}
getTronData();
tcount4=setInterval(function(){
 tcount4++
 if (tcount4==10) {getTronData(); tcount4=0}
 document.getElementById("trx-infotime").innerHTML = 'Next update in ' + (10-tcount4) + ' seconds'
},1000);

// Solana

const getSolData = async () => {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=USD')
 .then(response => response.json())
 .then(data => {
   console.log(data);
   document.getElementById("sol-info").innerHTML = '$' + data.USD
 });
}
getSolData();
tcount5=setInterval(function(){
 tcount5++
 if (tcount5==10) {getSolData(); tcount5=0}
 document.getElementById("sol-infotime").innerHTML = 'Next update in ' + (10-tcount5) + ' seconds'
},1000);

// Tether

const getTetherData = async () => {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=T&tsyms=USD')
 .then(response => response.json())
 .then(data => {
   console.log(data);
   document.getElementById("tether-info").innerHTML = '$' + data.USD
 });
}
getTetherData();
tcount6=setInterval(function(){
 tcount6++
 if (tcount6==10) {getTetherData(); tcount6=0}
 document.getElementById("tether-infotime").innerHTML = 'Next update in ' + (10-tcount6) + ' seconds'
},1000);

// USDC

const getUSDCData = async () => {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=USDC&tsyms=USD')
 .then(response => response.json())
 .then(data => {
   console.log(data);
   document.getElementById("usdc-info").innerHTML = '$' + data.USD
 });
}
getUSDCData();
tcount7=setInterval(function(){
 tcount7++
 if (tcount7==10) {getUSDCData(); tcount7=0}
 document.getElementById("usdc-infotime").innerHTML = 'Next update in ' + (10-tcount7) + ' seconds'
},1000);

// BNB

const getBNBData = async () => {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD')
 .then(response => response.json())
 .then(data => {
   console.log(data);
   document.getElementById("bnb-info").innerHTML = '$' + data.USD
 });
}
getBNBData();
tcount8=setInterval(function(){
 tcount8++
 if (tcount8==10) {getBNBData(); tcount8=0}
 document.getElementById("bnb-infotime").innerHTML = 'Next update in ' + (10-tcount8) + ' seconds'
},1000);

// XRP

const getXRPData = async () => {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD')
 .then(response => response.json())
 .then(data => {
   console.log(data);
   document.getElementById("xrp-info").innerHTML = '$' + data.USD
 });
}
getXRPData();
tcount9=setInterval(function(){
 tcount9++
 if (tcount9==10) {getXRPData(); tcount9=0}
 document.getElementById("xrp-infotime").innerHTML = 'Next update in ' + (10-tcount9) + ' seconds'
},1000);


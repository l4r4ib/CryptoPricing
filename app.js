

const cryptoNumber = 100;

const getApi = async (id) => {
	const url = `https://api.coinstats.app/public/v1/coins/?skip=0&limit=${cryptoNumber}&currency=INR`;
	const res = await fetch(url);
	const data = await res.json();
 
  let cryptoCoin = "" ;
  for ( let i = 0; i< cryptoNumber; i++){
    console.log(data.coins[i].name)
    console.log(data.coins[i].price)
    console.log(data.coins[i].rank)
    console.log(data.coins[i].symbol)
    const name = data.coins[i].name
    cryptoCoin += "<tr>";
    cryptoCoin += `<td> ${data.coins[i].rank}</td>`;
    cryptoCoin += `<td> ${data.coins[i].name} </td>`;
    cryptoCoin += `<td> ${data.coins[i].price}</td>`;
    cryptoCoin += `<td> ${data.coins[i].symbol}</td>`;
  }
 document.getElementById("data").innerHTML = cryptoCoin;

};

getApi();

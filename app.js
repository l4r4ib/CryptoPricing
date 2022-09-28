
const cardNumbers = 10;
// const fetchApi = async () => {
// 	for (let i = 1; i <= cardNumbers; i++) {
// 		await getApi(i);
// 	}
// };

const getApi = async (id) => {
	const url = `https://api.coinstats.app/public/v1/coins/?skip=0&limit=${cardNumbers}&currency=INR`;
	const res = await fetch(url);
	const data = await res.json(); //coin
    console.log(data.coins[0].name)
    
	
};

getApi();


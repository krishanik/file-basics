
const myArray = [
	{value: 10, date: new Date()},
	{value: 12, date: new Date()},
]
require('fs').writeFile('./database.json', JSON.stringify(myArray), ()=>{})
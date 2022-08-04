const content = require('fs').readFileSync("database.json").toString();
const myArray = JSON.parse(content)

data = {value: 33, date: new Date()}
myArray.push(data);

require('fs').writeFile('./database.json', JSON.stringify(myArray), ()=>{})
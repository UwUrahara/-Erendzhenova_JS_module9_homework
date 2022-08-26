/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
// console.log('data', data);
const listArr = data.list;
//console.log('list', list);


/* Этап 3. Запись данных в результирующий объект */
const result = {
  list: [
    {
      name: listArr[0].name, 
      age: Number(listArr[0].age), 
      prof: listArr[0].prof,
    },
    {
      name: listArr[1].name, 
      age: Number(listArr[1].age), 
      prof: listArr[1].prof,
    }
  ]
};
console.log(result);
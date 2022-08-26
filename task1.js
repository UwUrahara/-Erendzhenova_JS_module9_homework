/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
// console.log('xmlString', xmlString);

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод и имени сразу 
const listNode = xmlDOM.querySelector("list");
const childrenNode = listNode.querySelectorAll("student");

const nameArr = [ 
	childrenNode[0].querySelector("name").querySelector("first").textContent + ' ' + childrenNode[0].querySelector("name").querySelector("second").textContent,
	childrenNode[1].querySelector("name").querySelector("first").textContent + ' ' + childrenNode[1].querySelector("name").querySelector("second").textContent 
];

const ageNodeArr = [ 
	childrenNode[0].querySelector("age"), 
	childrenNode[1].querySelector("age") 
];
const profNodeArr = [ 
	childrenNode[0].querySelector("prof"), 
	childrenNode[1].querySelector("prof") 
];


// Получение данных из атрибутов
const langAttrArr = [ 
	childrenNode[0].querySelector("name").getAttribute('lang'), 
	childrenNode[1].querySelector("name").getAttribute('lang'), 
];

/* Этап 3. Запись данных в результирующий объект */
const result = {
	list: [
		{name: nameArr[0], age: Number(ageNodeArr[0].textContent), prof: profNodeArr[0].textContent, lang: langAttrArr[0]},
		{name: nameArr[1], age: Number(ageNodeArr[1].textContent), prof: profNodeArr[1].textContent, lang: langAttrArr[1]}
	]
}
console.log(result);
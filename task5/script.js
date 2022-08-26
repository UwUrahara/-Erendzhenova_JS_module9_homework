// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.result');

/**
  * Функция обработки полученного результата
  * apiData - объект с результатом запроса
  */
function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
}

// Вешаем обработчик на кнопку для запроса
document.picture.btn.addEventListener('click', () => {
  //Получаем значения инпутов
  const page = document.picture.page.value;
  const limit = document.picture.limit.value;
  const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
  
  if ((page<1 || page>10)&&(limit<1 || limit>10)) {
    resultNode.innerHTML = `<div class="result"> Номер страницы и лимит вне диапазона от 1 до 10 </div>`;
  } else  if (page<1 || page>10) {
    resultNode.innerHTML = `<div class="result"> Номер страницы вне диапазона от 1 до 10 </div>`;
  } else  if (limit<1 || limit>10) {
    resultNode.innerHTML = `<div class="result"> Лимит вне диапазона от 1 до 10 </div>`;
  } else {
    // Делаем запрос за данными
    fetch(url)
      .then((response) => {
        // Объект ответа на запрос
        // console.log('response', response);
        // Превращаем объект в JSON. Мы не можем его сразу прочитать,
        // надо отдать в следующий then
        const result = response.json();
        // console.log('result', result);
        return result;
      })
      .then((data) => {
        // Объект результата в формате JSON
        // console.log(data);
        displayResult(data);
      })
      .catch(() => { console.log('error') });
  }
});
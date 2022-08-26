// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.btn');
// Ищем инпуты
const inpNodesArr = document.querySelectorAll('input');


// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
  const value1 = inpNodesArr[0].value;
  const value2 = inpNodesArr[1].value;
  if (value1>=100 && value1<=300 && value2>=100 && value2<=300) {
    const link = `https://picsum.photos/${value1}/${value2}`;
    fetch(link)
      .then((response) => {
        // Абсолютно не понимаю почему я в этом then делаю именно так, мне подсказали, а из модуля я ничего не поняла, почему надо сделать так, а не как во ВСЕХ примерах
        const result = response.url;
        return result;
      })
      .then((data) => {
        resultNode.innerHTML = `<img src="${data}"></img>`;
      })
      .catch(() => { console.log('error') })
  } else {
    resultNode.innerHTML = `<div class="result"> Введенное число вне диапазона от 100 до 300 </div>`;
  }
  
})
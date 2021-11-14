function getFromAPI() {
  return fetch('https://jsonplaceholder.typicode.com/todos?userId=' + randomUserId)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json;
    });
}

function appendNewRows(Data) {
  const container = document.querySelector('.table');
  const template = document.querySelector('#fetch-row');
  for (let i = 0; i < Data.length; i++) {
    const clone = template.content.cloneNode(true);
    const userId = clone.querySelector('.table__row__userId');
    const todoId = clone.querySelector('.table__row__todoId');
    const title = clone.querySelector('.table__row__title');
    const completed = clone.querySelector('.table__row__completed');

    userId.innerHTML = Data[i]['userId'];
    todoId.innerHTML = Data[i]['id'];
    title.innerHTML = Data[i]['title'];
    completed.innerHTML = Data[i]['completed'];

    container.appendChild(clone);

  }
}

function removeLoadingAndDisplayTable() {
  document.querySelector('.fetch__spinner').style.display = 'none';
  document.querySelector('.fetch__table').style.display = 'inherit';
}

function displayError() {
  document.querySelector('.fetch__table').style.display = 'none';
  document.querySelector('.fetch__spinner').style.display = 'none';
  document.querySelector('.fetch__oops').style.display = 'inherit';
}

const randomUserId = Math.floor(Math.random() * 10) + 1;
console.log(randomUserId);

getFromAPI().then(function(data) {
  appendNewRows(data)
}).then(() => removeLoadingAndDisplayTable()).catch(() => displayError())

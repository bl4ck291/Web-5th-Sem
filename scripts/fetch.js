function getFromAPI() {
  const randomUserId = Math.floor(Math.random() * 10) + 1;
  console.log(randomUserId);
  return fetch('https://jsonplaceholder.typicode.com/todos?userId=' + randomUserId)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json;
    });
}

function appendNewRows(Data) {

  const header = document.getElementById('header__template').content.cloneNode(true);
  const container = document.querySelector('.table');
  const template = document.querySelector('#fetch-row');
  container.appendChild(header);

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

function refresh() {
  document.querySelector('.fetch__table').style.display = 'inherit';
  document.querySelector('.fetch__spinner').style.display = 'inherit';
  document.querySelector('.fetch__oops').style.display = 'none';
}

function deleteOldRows() {
  document.querySelector('.fetch__table').innerHTML = "";
}

function run() {
  refresh();
  deleteOldRows();
  getFromAPI().then(function(data) {
    appendNewRows(data)
  }).then(() => removeLoadingAndDisplayTable()).catch(() => displayError())
}

function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if(!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input')
      checkbox.type = "checkbox";

      checkbox.onclick = function() {
        if (checkbox.checked == true) {
          checkbox.complete = true;
        } else {
          checkbox.complete = false;
        }
      }

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();

  localStorage.setItem('toDos', JSON.stringify(toDos));

  let restoredSession = JSON.parse(localStorage.getItem('toDos'));

  console.log(restoredSession);
}

window.onload = function() {
  onReady();
};

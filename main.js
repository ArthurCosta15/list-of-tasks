function addNewTask() {
  var list = document.getElementById("list");
  var text = document.getElementById("task_name").value;

  if(text.length === 0) {
    alert("Tarefa precisa ter mais de 1 caracter");
    return;
  }


  var lisItem = document.createElement("li");
  lisItem.className = "list-item";


  const texElement = document.createTextNode(text);
  lisItem.appendChild(texElement);
  list.appendChild(lisItem);
}
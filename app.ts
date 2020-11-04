var container = document.getElementById('container');

var todo = {
  id:734,
  name: "Jonathan Smith",
  completed: false,
}
var displayStringLiteral: string = `here is the number ${todo.id} and call ${todo.name}, then complete the task ${todo.completed}`;

container.innerHTML = `<div todo=${todo.id}  class="{list-group-item}">
<i class="[[ add 'hidden' class if todo is NOT completed]] text-success glyphicon glyphicon-ok"></i>
<span class="name">${todo.name}</span>
</div>`
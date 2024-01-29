const taskList = document.getElementById('taskList');
function getCurrentDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (mm < 10) mm = '0' + mm;
  if (dd < 10) dd = '0' + dd;
  return `${yyyy}-${mm}-${dd}`;
}
function addTask() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const taskElement = document.createElement('div');
  taskElement.className = 'task';
  taskElement.innerHTML = `
    <strong>${title}</strong><br>
    ${description}<br>
    Date: ${date}<br>
    <button onclick="editTask(this)">Edit</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(taskElement);
}
function editTask(button) {
    
}
function deleteTask(button) {
}

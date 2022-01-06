/**
 * Generate a unique id of strings
 * @param {Number} length the length of the unique string 
 * @returns 
 */
const generateUniqueString = (length)=>{
    return Math.random().toString(36).substring(2,2+length)
}

const createTaskElement = (uniqueId,newTaskValue)=>{
  // Create Task
  const taskElement = document.createElement("li")
  taskElement.classList.add("task")
  taskElement.innerHTML = DOMPurify.sanitize(`<input type="checkbox" name="${uniqueId}" id = "${uniqueId}">
  <label for = "${uniqueId}">
    <svg viewBox="0 0 20 15">
      <path d="M0 8l2-2 5 5L18 0l2 2L7 15z" fill-rule="nonzero" />
    </svg>
  </label>
  <span class="task__name">${newTaskValue}</span>
  <button type="button" class="task__delete-button">
    <svg viewBox="0 0 20 20">
      <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
    </svg>
  </button>`)
  return taskElement
}

const todoList = document.querySelector(".todolist")
const taskList = todoList.querySelector(".todolist__tasks")
todoList.addEventListener("submit",(e)=>{
    e.preventDefault()

    const uniqueId = generateUniqueString(10)
    
    // Get task value
    const newTaskField = todoList.querySelector("input")
    const newTaskValue = DOMPurify.sanitize(newTaskField.value.trim())
    // Clear the task text

    newTaskField.value=""
    newTaskField.focus()
    // Don't allow empty task
    if(!newTaskValue) return

    const taskElement = createTaskElement(uniqueId,newTaskValue)

    // Append Task
    taskList.appendChild(taskElement)
})

todoList.addEventListener("click",(e)=>{
  if(!e.target.matches(".task__delete-button")) return
  const taskElement = e.target.closest(".task")
  taskList.removeChild(taskElement)

  if(taskList.children.length===0)
    taskList.innerHTML=""
})
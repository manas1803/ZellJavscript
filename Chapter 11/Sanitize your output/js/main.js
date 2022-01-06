const form = document.querySelector("form")
const output = document.querySelector('.output')

form.addEventListener('submit', event => {
  event.preventDefault()
  const input = event.target.querySelector('input')
  const value = input.value.trim()

  output.innerHTML = DOMPurify.sanitize(value)
})
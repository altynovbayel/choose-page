const $moscow = document.querySelector('.moscow')
const $bish = document.querySelector('.bish')
const $london = document.querySelector('.london')
const $text = document.querySelector('.text')

$bish.addEventListener('click', e => {
  e.preventDefault()
  $london.classList.remove('active')
  $moscow.classList.remove('active')

  $bish.classList.toggle('active')
  $text.innerHTML = ` Bishkek the capital of Kyrgyzstan`
})

$moscow.addEventListener('click', e => {
  e.preventDefault()

  $bish.classList.remove('active')
  $london.classList.remove('active')

  $moscow.classList.toggle('active')
  $text.innerHTML = ` Moscow the capital of Russian`
})

$london.addEventListener('click', e => {
  e.preventDefault()

  $bish.classList.remove('active')
  $moscow.classList.remove('active')

  $london.classList.toggle('active')
  $text.innerHTML = ` London the capital of UK`
})
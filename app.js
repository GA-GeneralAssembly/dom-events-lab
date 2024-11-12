const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const displayElement = document.querySelector('.display')


let tempnum = document.createElement('p')
let fullNum1 = document.createElement('p')
fullNum1.textContent = ''
let fullNum2 = document.createElement('p')
fullNum2.textContent = ''
let result = document.createElement('p')
let operator = document.createElement('p')


calculator.addEventListener('click', (event) => {

  if (event.target.classList.contains('number')) {
    tempnum.textContent = event.target.innerText
    fullNum1.textContent += tempnum.textContent
    updateDisplay(fullNum1.textContent)
  }

  if (event.target.innerText === '*') {
    operator = '*'
    fullNum2.textContent = fullNum1.textContent
    fullNum1.textContent = ''

    updateDisplay(operator)
  }

  if (event.target.innerText === '/') {
    operator = '/'
    fullNum2.textContent = fullNum1.textContent
    fullNum1.textContent = ''
   
    updateDisplay(operator)
  }

  if (event.target.innerText === '-') {
    operator = '-'
    fullNum2.textContent = fullNum1.textContent
    fullNum1.textContent = ''
   
    updateDisplay(operator)
  }

  if (event.target.innerText === '+') {
    operator = '+'
    fullNum2.textContent = fullNum1.textContent
    fullNum1.textContent = ''
    updateDisplay(operator)
  }

  if (event.target.innerText === '='){

    if (fullNum1.textContent != ''){
      let test = equation()
      updateDisplay(test)
    }
  }

  if (event.target.innerText === 'C') {
    clearCalculator()
  }

});

function updateDisplay(value) {
  displayElement.textContent = value;
}

function clearCalculator() {
  tempnum.textContent = '';
  fullNum1.textContent = '';
  fullNum2.textContent = '';
  operator = '';
  updateDisplay('')
}

function equation(){
  let expression = `${fullNum2.textContent} ${operator} ${fullNum1.textContent}`;
  result = eval(expression)
  return result
}

const form = document.getElementById('form')
const email = document.getElementById('email')
const error = document.getElementById('error')

form.addEventListener('submit', (e) =>{
  e.preventDefault()
  checkInputs()
})

function checkInputs(){

  const emailValue = email.value

  if(emailValue === '' || !checkValidity(emailValue)){
    errorValidation(email, error)
  }else{
    successValidation(email, error)
  }
}

function errorValidation(input,span){
  const inputEmail = input;
  const spanError = span;

  inputEmail.className = 'email errado'
  spanError.className = 'error errado'
}

function successValidation(input,span){
  const inputEmail = input;
  const spanError = span;

  inputEmail.className = 'email'
  spanError.className = 'error'
}

function checkValidity(email){
  const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  if (emailRegex.test(email)){
    return true
  }
  return false
}

var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input, message){
    // input.value = input.value.trim()
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message 
}
function showSuccess(input){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = '' 
}
function checkEmptyError(listInput){
    let isEmptyError = false
    listInput.forEach(input=>{
        input,value = input.value.trim()
        if(input.value == ""){
            isEmptyError = true;
            showError(input, "khong duoc de trong")
        }else{
            showSuccess(input)
        }
    });
    return isEmptyError
}
// regex

function checkEmailError(input){
    const regexEmail =  /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}/;
    input.value = input.value.trim()
    let isEmailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess
    }else{
        showError(input, "email invalid")
    }
    return isEmailError
}

function checkLength (input, min, max){
    input.value = input.value.trim()
    if(input.value.length < min ){
        showError(input, `phai co it nhat ${min} ky tu`)
        return true;
    }
    if(input.value.length > max ){
        showError(input, `khong duoc qua ${max} ky tu`)
        return true;
    }
    // showSuccess(input)
    return false
}
function checkMatchPassword(passwordInput, cfPasswordInput){
    if(passwordInput.value !== cfPasswordInput.value){
        showError(cfPasswordInput, "mk khong trung khop")
        return true
    }else{
        return false
    }
}
form.addEventListener('submit', function(e){
    e.preventDefault()
    
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmailError = checkEmailError(email)
    let isUserNameError = checkLength(username, 3, 10)
    let isPasswordLengthError = checkLength(password, 3, 10)
    let isMatchError = checkMatchPassword(password, confirmPassword)
    if(isEmptyError || isEmailError || isPasswordLengthError || isMatchError){
        //do nothing
    }else{
        // logic, call api...
    }
    //  confirm(`name: ${username.value}` + '\n' + `email: ${email.value}` +'\n' + `password: ${password.value}` +'\n' + `confirmPassword: ${confirmPassword.value}`)
})
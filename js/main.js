// menu all department
const icon_down = document.querySelector('.icon-down')
const icon_menu = document.querySelector('.icon-menu')
const listOption = document.querySelector('.list-option')

icon_down.addEventListener('click', function(){
    listOption.classList.add('hide');
})
icon_menu.addEventListener('click', function(){
    listOption.classList.remove('hide');
})

// all categories
let optionCategories = document.querySelectorAll('.categories-option option')
let inputCategories = document.querySelector('#do__u__need')
let btnSearch = document.querySelector('.search__cates')

console.log(btnSearch)
btnSearch.addEventListener('click', function(){
    confirm(`lua chon: ${optionCategories[0].innerText}` + '\n' + `noi dung: ${inputCategories.value}`)
    inputCategories.value = ""
})


// subscribe
let inpFooter = document.querySelector('.inp__ft')
let subscribe = document.querySelector('.sub')

subscribe.addEventListener('click', ()=>{
    confirm(inpFooter.value)
    inpFooter.value = ""
})

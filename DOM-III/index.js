

let form=document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()
    console.log(form.value)

})
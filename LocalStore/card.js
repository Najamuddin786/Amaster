function setCard(i){
    console.log(i)
    let l=JSON.parse(localStorage.getItem('card'))
    if(l){
        l.splice(i,1)
        let s=localStorage.setItem('card',JSON.stringify(l))
        if(i){
            alert("Your item Remove form card")
        }
       showCard()
    }
    
}

function showCard(){
    let user=JSON.parse(localStorage.getItem('card'))
    let main=document.getElementById('ca')
        main.innerHTML=''
    if(user){
        user.map((ele,i)=>{
            let container=document.createElement('div')
                container.id='container'
            let name=document.createElement('div')
                name.innerHTML=`Name ${ele.name}`
            let email=document.createElement('div')
                email.innerHTML=`Name ${ele.email}`
            let button=document.createElement('button')
                button.innerHTML=`Delete`
                button.addEventListener('click',function(){
                    setCard(i)
                })
    
            container.append(name,email,button)
            main.append(container)
            
        })
    }


}

showCard()
let user = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];

function setCard(e){
    console.log(e)
    let l=JSON.parse(localStorage.getItem('card'))
    if(l){
        l.push(e)
        let s=localStorage.setItem('card',JSON.stringify(l))
    }else{
        let s=localStorage.setItem('card',JSON.stringify([e]))
    }
    if(e){
        alert("Your item add in card")
    }
}

function showCard(){
    let main=document.getElementById('main')
    user.map((ele,i)=>{
        let container=document.createElement('div')
            container.id='container'
        let name=document.createElement('div')
            name.innerHTML=`Name ${ele.name}`
        let email=document.createElement('div')
            email.innerHTML=`Name ${ele.email}`
        let button=document.createElement('button')
            button.innerHTML=`Add to Card`
            button.addEventListener('click',function(){
                setCard(ele)
            })

        container.append(name,email,button)
        main.append(container)
        
    })


}
showCard()
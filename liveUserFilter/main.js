const userList= document.querySelector('.user-list')
const searchBox = document.querySelector('input')
const listItems=[]

getData()

searchBox.addEventListener('input', (e)=> filterData(e.target.value))

async function getData(){
    const res= await fetch('https://randomuser.me/api?results=50')

    const {results}=await res.json()
    //clearing results
    userList.innerHTML = ''

    results.forEach(user =>{
        const li= document.createElement('li')

        listItems.push(li)
        li.innerHTML=`
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        userList.appendChild(li)
    
    })
}

function filterData(searchTerm){
    listItems.forEach(item=> {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }
        else{
            item.classList.add('hide')
        }
    })
}

let characters = []
document.addEventListener("DOMContentLoaded",function(){
    getChars()
})



//here we are fetching data from the json database
function getChars(){
fetch("http://localhost:3000/characters", {
    method: "GET",
    header:{
        "Content-Type": "appliction/json"
    }
}).then((data)=> data.json())
.then((response)=> {
    characters= [...response]
    displayChars(response)
      
}) 
}




//this function is for displaying data
function displayChars(characters){
    const characterbar = document.querySelector("#character-bar")
    for (character of characters){
        const span = document.createElement("span");
        span.innerText = character.name;
        span.setAttribute("id", character.id)

        span.addEventListener("click", (event)=> {
            displayCharDetails(getCharById(characters, parseInt (event.target.id)))
        });

        characterbar.appendChild(span);
    } 
}


function displayCharDetails(character){
    const image = document.querySelector("#image")
    image.src = character.image
}

function getCharById(characters, id){
    return characters.find((charcater)=>{
        return charcater.id === id 
    })
}



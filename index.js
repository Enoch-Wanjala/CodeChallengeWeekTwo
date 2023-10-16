
let characters = []
document.addEventListener("DOMContentLoaded",function(){
    getCharacters()
})



//here we are fetching data from the json database
function getCharacters(){
fetch("http://localhost:3000/characters", {
    method: "GET",
    header:{
        "Content-Type": "appliction/json"
    }
}).then((data)=> data.json())
.then((response)=> {
    characters= [...response]
    displayCharacters(response)
      
}) 
}




//this function is for displaying data
function displayCharacters(characters){
    const characterbar = document.querySelector("#character-bar")
    for (character of characters){
        const span = document.createElement("span");
        span.innerText = character.name;
        span.setAttribute("id", character.id)

        span.addEventListener("click", (event)=> {
            displayCharacterDetails(getCharacterById(characters, parseInt (event.target.id)))
        });

        characterbar.appendChild(span);
    } 
}


function displayCharacterDetails(character){
    const image = document.querySelector("#image")
    image.src = character.image
}

function getCharacterById(characters, id){
    return characters.find((charcater)=>{
        return charcater.id === id 
    })
}



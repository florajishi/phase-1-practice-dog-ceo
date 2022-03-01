console.log('%c HI', 'color: firebrick')
console.log('%c HI', 'color: firebrick')

/* CHALLENGE 1 */
document.addEventListener(`DOMContentLoaded`, () =>{
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function loadImages(dogImages){
    const imgContainer = document.getElementById(`dog-image-container`)
    dogImages.forEach(dogPic => {
        const img = document.createElement(`img`)
        img.src = dogPic
        imgContainer.appendChild(img)
    }
)}
fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        loadImages(data.message)
    }).catch((error) =>{
        throw error
    })
})

/* CHALLENGE 2 & 3 */
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
function listBreeds(dogBreeds){
    const breedList = document.getElementById(`dog-breeds`)
    dogBreeds.forEach(breed => {
        const li = document.createElement(`li`)
        li.innerHTML = `${breed}`
        li.addEventListener(`click`, () =>{
            li.classList.toggle(`pinkText`)
        })
        breedList.appendChild(li)
    })
}
function filterBreeds(){
    const dropdown = document.getElementById(`breed-dropdown`)
    let dropdownLetter = dropdown.value
    dropdown.addEventListener(`change`, (e) =>{
        const filteredList = breedList.filter((breed) => breed.substring(0,1) === dropdownLetter)
        while(breedList.firstChild) {
            breedList.removeChild(breedList.firstChild)
        }
        listBreeds(filteredList)
    })
}
fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        listBreeds(Object.keys(data.message))
    }).catch((error) => {
        throw error
    })

const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

const namy = document.createElement("input")
namy.type = "text"
namy.classList.add("name")

const napy = document.createElement("input")
napy.type = "text"
napy.classList.add("rating")

const button = document.createElement("button")
button.id = "button"
button.innerText = "Enter"

container.appendChild(namy)
container.appendChild(napy)
container.appendChild(button)

let all = []
let parsed

let Make = class {
    constructor(name, rating) {
      this.name = name;
      this.rating = rating;
    }
}

makeThem = () => {
    let item = new Make()
    item.name = document.querySelector(".name").value 
    item.rating = document.querySelector(".rating").value
    all.push(item)
}

const displayData = (item) => {
    const container = document.getElementById("container")
    const p = document.createElement("p");
    p.id = "name";
    p.innerText = "name: " + item.name;
  
    const rating = document.createElement("p");
    rating.id = "rating";
    rating.innerText = "rating: " + item.rating;
  
    container.appendChild(p);
    container.appendChild(rating);
}
  
const setlocalStorage = (item) => {
    localStorage.setItem(item, JSON.stringify(item));
}

const parseIt = (item) => {
    parsed = JSON.parse(localStorage.getItem(item))
}

const displayFromArray = () => { // this function displays all objects everytime it is called, which is not ideal
    array = all
    array.forEach(obj => {
        setlocalStorage(obj)
        parseIt(obj)
        displayData(obj)
    })
}

const displaying = () => {   // this function only displays the last item added
    array = all
    let last = array.slice(-1)[0]
    last.name = array.slice(-1)[0].name 
    last.rating = array.slice(-1)[0].rating 
    setlocalStorage(last)
    parseIt(last)
    displayData(last)
}

button.addEventListener("click", () => {
    makeThem()
    console.table(all)
    displaying()
    document.querySelector(".name").value = "";
    document.querySelector(".rating").value = "";
})
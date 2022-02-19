const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

const namy = document.createElement("input")
namy.type = "text"
namy.classList.add("name")

const ccc = document.createElement("div")
ccc.id = "items-collector"

const contain = document.createElement("div")
contain.id = "buttons"

const button = document.createElement("button")
button.id = "set-data"
button.innerText = "Set"

const otherbutton = document.createElement("button")
otherbutton.id = "get-data"
otherbutton.innerText = "Get"

container.appendChild(namy)
container.appendChild(contain)
contain.appendChild(button)
contain.appendChild(otherbutton)
container.appendChild(ccc)

let item 

let Make = class {                   
    constructor(name) {
      this.name = name;
    }
}

if (localStorage.getItem(item) === null) {         
    console.log("setting item to empty array! []")
    localStorage.setItem(item, JSON.stringify([]))  // if localstorage is null, i set items to an empty array //
}     

let all = JSON.parse(localStorage.getItem(item))  // every item that is saved into localstorage will be parsed and saved as the array all //

makeItem = () => {        
    let item = new Make()
    item.name = document.querySelector(".name").value 
    all.push(item)        // every item made will be pushed into the array all //
}

const displayItems = (item) => {
    let collector = document.getElementById("items-collector")
    const p = document.createElement("p");
    p.id = "name";
    p.innerText = item.name;
    collector.appendChild(p);
}

button.addEventListener("click", () => {
    makeItem()
    localStorage.setItem(item, JSON.stringify(all));   // i save the items in the array all //
    document.querySelector(".name").value = "";
})

otherbutton.addEventListener("click", () => {
    let last = all.slice(-1)[0]
    displayItems(last)      
})


all.forEach(item => {
    displayItems(item)
})


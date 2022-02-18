let all = []
let over

const toast = {
  name: "toast",
  rating: 7,
};

const panini = {
    name: "panini",
    rating: 8,
}

all.push(toast)
all.push(panini)

const displayData = (item) => {
    const container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
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
    over = JSON.parse(localStorage.getItem(item))
}

const displayFromArray = () => {
    all.forEach(obj => {
        setlocalStorage(obj)
        parseIt(obj)
        displayData(obj)
    })
}

displayFromArray()
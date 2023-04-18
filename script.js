function loadFunction() {
    let table = document.createElement("div");
    table.className = "box"
    
    let title = document.createElement("h1");
    title.className = "title";
    title.innerHTML = "Inventory";
    table.appendChild(title);

    let category = document.createElement("div");
    category.className = "category outer";
    let list = ["vegetables", "spices", "fruits"];
    list.forEach((item, index) =>{
        const child = document.createElement("div");
        child.id = item;
        child.className = "unClick inner";
        child.onclick = function(){generateTable(item)}; ;
        child.innerHTML = "(" + String(index) + ") " + item.charAt(0).toUpperCase() + item.slice(1);
        category.appendChild(child);
    })
    table.appendChild(category);

    let listAmount = document.createElement("div");
    let heading = document.createElement("p");
    heading.id = "listAmount";
    let productList = document.createElement("div");
    productList.id = "productList";
    productList.className = "category";
    listAmount.appendChild(heading);
    listAmount.appendChild(productList);
    table.appendChild(listAmount);

    const main = document.getElementById("main");
    main.innerHTML = "";
    main.appendChild(table);
}
window.onload = loadFunction;

const vegetables = ['Carrot', 'Cucumber']
const spices = ['Salt', 'Pepper', 'Chilli', 'Herbs', 'Curry']
const fruits = ['Apple', 'Banana', 'Pear', 'Watermelon', 'Grape', 'Strawberry', 'Mango', 'Blackberry']
    
function generateTable(id) {
    const category = document.getElementById(String(id));
    const categoryList = category.parentNode.children;
    for (let i = 0; i < categoryList.length; i++) {
      const childElement = categoryList[i];
      childElement.classList.remove("unClick");
      childElement.classList.remove("clicked");
      childElement.classList.add("unClick");
      childElement.classList.add("inner");
    }

    category.setAttribute("class", "clicked inner")
    let list = [];
    switch (id) {
        case 'vegetables':
            list = vegetables;
            break;
        case 'spices':
            list = spices;
            break;
        case 'fruits':
            list = fruits;
            break;
        default:
            list = ['1', '2']
    }

    let length = 'List ( ' + list.length + ' )';
    let amount = document.getElementById("listAmount");
    amount.innerText = length;

    let productList = document.getElementById("productList");
    
    let table = document.createElement("div");
    table.id = "productList";
    table.className = "category"
    list.forEach((item, index) => {
        const child = document.createElement("div");
        child.innerHTML = '' + item;
        child.setAttribute("onclick", "changeColor(" + index + ")");
        child.setAttribute("id", String(index));
        child.setAttribute("class", "unClick");
        table.appendChild(child);
    });
    let parent = productList.parentNode;
    parent.replaceChild(table, productList);
}

function changeColor(num) {
    className = document.getElementById(String(num));

    if (className.className == "clicked") {
        className.className = "unClick";
    } else {
        className.className = "clicked";
    }
}
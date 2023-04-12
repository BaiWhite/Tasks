document.getElementById("vegetables").addEventListener("click", function() {
    generateTable('vegetables')});
document.getElementById("spices").addEventListener("click", function() {
    generateTable('spices')});
document.getElementById("fruits").addEventListener("click", function() {
    generateTable('fruits')});

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
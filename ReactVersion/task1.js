let title = React.createElement("h1", { className: "title" }, "Inventory");

let list = ["vegetables", "spices", "fruits"];
let categoryList = list.map((item, index) =>
(
    <div className="unClick inner" id={item} onClick={() => { generateTable(item) }} key={item}>
        {"(" + String(index) + ") " + item.charAt(0).toUpperCase() + item.slice(1)}
    </div>
));
let category = React.createElement(
    "div",
    { className: "category outer" },
    categoryList
);

let heading = React.createElement("p", { id: "listAmount" });
let productList = React.createElement("div", { id: "productList", className: "category" });
let listAmount = React.createElement("div", {}, heading, productList);

let table = React.createElement("div", { className: "box" }, title, category, listAmount);

ReactDOM.render(table, document.getElementById("main"));

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

    let childList = list.map((item, index) =>
    (
        <div className="unClick" id={index} onClick={() => { changeColor(index) }} key={item}>
            {item}
        </div>
    ));
    let table = React.createElement(
        "div",
        { id: "productList", className: "category" },
        childList
    );
    ReactDOM.render(table, document.getElementById("productList"));
}

function changeColor(num) {
    const element = document.getElementById(String(num));

    if (element.className == "clicked") {
        element.className = "unClick";
    } else {
        element.className = "clicked";
    }
}
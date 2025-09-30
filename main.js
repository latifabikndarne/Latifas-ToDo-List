//Variable deklarieren
const completedElement = document.querySelector("#Completed");
const inputTodo = document.querySelector("#inputTodo");
const addTodoButton = document.querySelector("#addTodoButton");
const todoList = document.querySelector("#todoList");
const infoTextElement = document.querySelector("small");

//för att inputfältet ska vara tomt när uppgiften har lagts till
let todoText = "";
let Completed = 0;
let text = inputTodo.value;
 infoTextElement.textContent="";
let todoArray = [];
//EventListerner för knappen
addTodoButton.addEventListener("click", addToDo);

//funktion för att lägga till todoText
function addToDo() {
   
    todoText = inputTodo.value;
    todoArray.push(todoText);

    //Validering för att inte lägga till tomma uppgifter

    if (todoText == 0) {
        infoTextElement.textContent="Skriv en uppgift!";
        return
    }
//Att deklarera li element och sedan lägga till dem i todoList
const item = document.createElement("li");
todoList.appendChild(item);



// span element för att behålla texten
const itemText = document.createElement("span");
itemText.innerText = todoText;

//EventListerner på varje li element för att markera som klar
itemText.addEventListener("click",
     function() {
        if (itemText.getAttribute("class") == "completed") {
            itemText.setAttribute("class", "");
            Completed--;
            completedElement.textContent ="Utförda uppgifter: " + Completed;        
        } else {
            itemText.setAttribute("class", "completed");
            Completed++;
            completedElement.textContent ="Utförda uppgifter: " + Completed;
        }
        
    }
);
//För att få in text i li elementet
item.appendChild(itemText);

//Lägger till en papperskorgsikon för att ta bort uppgifter
const trashcan = document.createElement("span");
trashcan.innerHTML = "&#128465;";
trashcan.setAttribute("class", "trashcan");
item.appendChild(trashcan);

//EventListener för att ta bort uppgifter
trashcan.addEventListener("click", function() {
    todoList.removeChild(item);
    todoArray = todoArray.filter(function(todo) {
        return todo !== todoText;
    });
});


//För att tömma inputfältet efter varje inmatning
inputTodo.value = "";
}
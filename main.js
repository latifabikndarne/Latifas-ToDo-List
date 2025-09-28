//Variable deklarieren
const completedElement = document.querySelector("#Completed");
const inputTodo = document.querySelector("#inputTodo");
const addTodoButton = document.querySelector("#addTodoButton");
const todoList = document.querySelector("#todoList");
const infoTextElement = document.querySelector("small");

//för att inputfältet ska vara tomt när sidan laddas
let todoText = "";
let Completed = 0;
//EventListerner för knappen
addTodoButton.addEventListener("click", addToDo);

//funktion för att lägga till todoText
function addToDo() {
    infoTextElement.textContent="";
    todoText = inputTodo.value;
    if (todoText == 0) {
        infoTextElement.textContent="Skriv en uppgift!";
        return
    }
//Att deklarerali element och sedan lägga till dem i todoList
const item = document.createElement("li");
todoList.appendChild(item);
// span element för att hålla texten
const itemText = document.createElement("span");
itemText.innerText = todoText;

//EventListerner på varje li element för att markera som klar
itemText.addEventListener("click",
     function() {
        if (item.getAttribute("class") == "completed") {
            item.setAttribute("class", "");
            Completed--;
            completedElement.textContent ="Utförda uppgifter: " + Completed;        
        } else {
            item.setAttribute("class", "completed");
            Completed++;
            completedElement.textContent ="Utförda uppgifter: " + Completed;
        }
        
    }
);
//För att få in text i li elementet
item.appendChild(itemText);
//För att tömma inputfältet efter varje inmatning
inputTodo.value = "";
}
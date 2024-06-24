//Selectors

const enterButton = document.querySelector("#enter"); 
const list = document.querySelector("#list");
const completedList = document.querySelector("#completed-list") 
const textInput = document.querySelector("#new-todo"); 
const textOutput = document.querySelector("#text-output");
const addToDo = document.querySelector("#todo-form");
const showDateButton = document.querySelector("#show-date"); 
const dateDisplay = document.querySelector("#date-display"); 

//Logic

// textInput.addEventListener("input", (event) => {
//     textOutput.innerText = event.target.value; 
// })

// enterButton.addEventListener("click", () => {
//     console.log("button clicked");

// });

addToDo.addEventListener("submit", formSubmit);

function formSubmit (event) {
    event.preventDefault();
    createToDoItem(event);
}


function createToDoItem (event) {

        const newItem = document.createElement("li");
        newItem.innerText = event.target[0].value;
        list.appendChild(newItem); 

        const completeButton = createButton ("complete", completedItems);
        completeButton.textContent = "Completed";
        newItem.appendChild(completeButton);
        
        const deleteButton = createButton("delete", canDeleteToDoItem);
        deleteButton.textContent = "Delete";
        newItem.appendChild(deleteButton);

    //     deleteButton.addEventListener("click", () => {
    //         list.removeChild(newItem);
    //     });
    //     newItem.appendChild(deleteButton);
    //     list.appendChild(newItem);
}

function canDeleteToDoItem (event) {
    console.log(event);
    const item = event.target.parentElement;
    list.removeChild(item);
}

// extension

function completedItems (event) {
    const item = event.target.parentElement;
    item.classList.add("completed");
    item.querySelector("button").remove();
    completedList.appendChild(item);
}

function createButton (text, onClick) {
    
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
}



showDateButton.addEventListener("click", () => {
    const currentDate = new Date(); 
    dateDisplay.textContent = currentDate.toDateString()
})




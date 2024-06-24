//Selectors

const enterButton = document.querySelector("#enter"); 
const list = document.querySelector("#list"); 
const textInput = document.querySelector("#new-todo"); 
const textOutput = document.querySelector("#text-output");
const addToDo = document.querySelector("#todo-form");

//Logic

textInput.addEventListener("input", (event) => {
    textOutput.innerText = event.target.value; 
})

enterButton.addEventListener("click", () => {
    console.log("button clicked");

});

addToDo.addEventListener("submit", (event) => {
    event.preventDefault();
    const newItem = document.createElement("li");
    newItem.innerText = event.target[0].value;
    list.appendChild(newItem); 
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", () => {
        list.removeChild(newItem);
    });
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
});




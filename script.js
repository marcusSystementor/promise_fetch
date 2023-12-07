function createFetch(id) {
  return fetch("https://jsonplaceholder.typicode.com/users/" + id);
}

function getPersonData(id) {
  let fetchPromise = createFetch(id);

  fetchPromise
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      addData(json.name);
    })
    .catch(function (err) {
      console.log(err + " error");
    });
}

function inputChange(event) {
  getPersonData(event.target.value);
}

let storeData = [];

function addData(inputValue) {
  if (inputValue !== "") {
    storeData.push(inputValue);
    inputValue.value = "";
    renderInputValue();
  } else {
    alert("Please enter a valid task!");
  }
}

function deleteTodo(index) {
  storeData.splice(index, 1);
  renderInputValue();
}

function renderInputValue() {
  const dataListContainer = document.getElementById("placeholder");
  dataListContainer.innerText = "";

  storeData.forEach((input, index) => {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    listItem.textContent = input;
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => deleteTodo(index));

    listItem.appendChild(deleteButton);
    dataListContainer.appendChild(listItem);
  });
}

// Initial rendering
// renderInputValue();

class User {
  constructor(id, name, price, detail, color) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.detail = detail;
    this.color = color;
  }
}

class App {
  renderUser(users) {
    let userTableTbody = document.querySelector("#tbody");
    let userTableBodyHtml = "";
    for (let user of users) {
      userTableBodyHtml += `<tr id="row${user.id}">
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.price}</td>
            <td>${user.detail}</td>
            <td>${user.color}</td>
            <td>
              <button class="btn btn-warning btn-edit" data-id="${user.id}">Edit</button>
              <button class="btn btn-danger btn-delete m-2" data-id="${user.id}" >Delete</button>
            </td>
          </tr>`;
    }
    userTableTbody.innerHTML = userTableBodyHtml;
    initsDeleteHandle();
    initseditHandle();
  }
}

function setUserToLocalStorage(users = []) {
  localStorage.users = JSON.stringify(users);
}

let users = localStorage?.["users"] ? JSON.parse(localStorage?.["users"]) : [];
console.log(users);
let app = new App();
app.renderUser(users);

let submitBtn = document.querySelector("#submit");
let editBtns = document.querySelectorAll(".btn-edit");

let nameEl = document.querySelector("#name");
let priceEl = document.querySelector("#price");
let detailEl = document.querySelector("#detail");
let colorEl = document.querySelector("#color");
let editId = "";

class ValidateInput {
  constructor(formData) {
    this.formData = formData;
    this.errors = [];
  }

  require(mess = "khong duoc de trong") {
    for (const [key, value] of this.formData.entries()) {
      console.log(key, value);
      if (!Boolean(value)) {
        // true
        let errorMess = `${key} ${mess}`;
        this.errors.push([key, errorMess]);
      }
    }
    return this.errors;
  }
}

submitBtn.addEventListener("click", function () {
  if (editId) {
    let userEditIndex = users.findIndex((item) => item.id == editId);
    let userEdit = users[userEditIndex];
    userEdit.name = nameEl.value;
    userEdit.price = priceEl.value;
    userEdit.detail = detailEl.value;
    userEdit.color = colorEl.value;
    app.renderUser(users);
    resetForm();
    // clear
  } else {
    let id = parseInt(Math.random() * 100);

    let formData = new FormData(document.querySelector("#form-data"));

    let errors = new ValidateInput(formData).require("is required!!!");
    resetError();
    if (errors.length > 0) {
      for (let [key, mess] of errors) {
        document.querySelector(`.${key}-error`).innerHTML = mess;
      }
      return;
    }

    let userCreate = new User(
      id,
      nameEl.value,
      priceEl.value,
      detailEl.value,
      colorEl.value
    );
    users.push(userCreate);
    app.renderUser(users);
    resetForm();
  }
  setUserToLocalStorage(users);
});

function resetError() {
  document.querySelectorAll(".error").forEach((item) => (item.innerHTML = ""));
}

function resetForm() {
  nameEl.value = "";
  priceEl.value = "";
  detailEl.value = "";
  colorEl.value = "";
  editId = "";
}

function initseditHandle() {
  let editBtns = document.querySelectorAll(".btn-edit");
  editBtns.forEach((item) => {
    item.addEventListener("click", function () {
      editId = this.getAttribute("data-id");
      let userEditIndex = users.findIndex((item) => item.id == editId);
      let userEdit = users[userEditIndex];
      nameEl.value = userEdit.name;
      priceEl.value = userEdit.price;
      detailEl.value = userEdit.detail;
      colorEl.value = userEdit.color;
    });
  });
}

function initsDeleteHandle() {
  let deleteBtns = document.querySelectorAll(".btn-delete");
  deleteBtns.forEach((item) => {
    item.addEventListener("click", function () {
      let isDelete = confirm("Are you sure to delete this data?");
      if (isDelete) {
        let id = item.getAttribute("data-id");
        let userIndex = users.findIndex((item) => item.id == id);
        console.log(users);
        users.splice(userIndex, 1);
        app.renderUser(users);
      }
      setUserToLocalStorage(users);
    });
  });
}

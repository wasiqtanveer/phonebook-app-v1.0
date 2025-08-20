let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let addContactButton = document.getElementById("add-contact");
let displaySection = document.getElementById("Display-information");

// targeting delete


addContactButton.addEventListener("click", function(e) {
    e.preventDefault(); // stop form refresh

    if (name.value === "" || phone.value === "" || email.value === "") {
        alert("Please fill in all fields.");
        return;
    }
    else {
        let newContact = document.createElement("div");
        newContact.classList.add("contact-card");

    newContact.innerHTML = `
      <div class="name">
        <h2>${name.value}</h2>
      </div> 
      <div class="information">
        <div class="info">
          <p>${phone.value}</p>
          <p>${email.value}</p>
        </div>
        <div class="icons">
          <i class="fas fa-trash" id="delete"></i>
          <i class="fas fa-edit" id="edit"></i>

        </div>
      </div>
    `;

    // delete contact, added here because we need to remove the contact card from the display
    let deleteContact = newContact.querySelector("#delete");
    deleteContact.addEventListener("click" , function() {
    newContact.remove()
})

let editContact = newContact.querySelector("#edit");
// adding event listener for editContact
editContact.addEventListener("click",function()
{
  //takes information of the contact and takes it back to the form
  // any changes there will reflect in the contact
  name.value = newContact.querySelector(".name h2").textContent;
  phone.value = newContact.querySelector(".info p:nth-child(1)").textContent;
  email.value = newContact.querySelector(".info p:nth-child(2)").textContent;
  addContactButton.textContent = "Update Contact"; // change button text to Update Contact

  newContact.remove()// removes the old contact card
  name.focus()// takes the focus to the name field

})


    displaySection.appendChild(newContact);//

    // clear input fields after adding
    name.value = "";
    phone.value = "";
    email.value = "";
    addContactButton.textContent = "Add Contact"; // reset button text
}});


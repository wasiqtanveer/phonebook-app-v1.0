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

        </div>
      </div>
    `;

    // delete contact, added here because we need to remove the contact card from the display
    let deleteContact = newContact.querySelector("#delete");
    deleteContact.addEventListener("click" , function() {
    newContact.remove()
})


    displaySection.appendChild(newContact);//

    // clear input fields after adding
    name.value = "";
    phone.value = "";
    email.value = "";
}});


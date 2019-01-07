import contactCollection from "./contactCollection"

const contactForm = {
    // time to build the HTML Form
    createAndAppendForm() {
        let formHeader = document.createElement("h3");
        formHeader.textContent = "Add a new contact"

        let contactNameField = document.createElement("fieldset");

        let contactNameLabel = document.createElement("label");
        contactNameLabel.textContent = "Name"
        contactNameLabel.setAttribute("for", "contactName")
        let contactNameInput = document.createElement("input");
        contactNameInput.setAttribute("id", "contactName")
        contactNameInput.setAttribute("name", "contactName")

        contactNameField.appendChild(contactNameLabel);
        contactNameField.appendChild(contactNameInput);

        let contactAddressField = document.createElement("fieldset");

        let contactAddressLabel = document.createElement("label");
        contactAddressLabel.textContent = "Address"
        contactAddressLabel.setAttribute("for", "contactAddress")
        let contactAddressInput = document.createElement("input");
        contactAddressInput.setAttribute("id", "contactAddress")
        contactAddressInput.setAttribute("name", "contactAddress")

        contactAddressField.appendChild(contactAddressLabel);
        contactAddressField.appendChild(contactAddressInput);

        let contactNumberField = document.createElement("fieldset");

        let contactNumberLabel = document.createElement("label");
        contactNumberLabel.textContent = "Number"
        contactNumberLabel.setAttribute("for", "contactNumber")
        let contactNumberInput = document.createElement("input");
        contactNumberInput.setAttribute("id", "contactNumber")
        contactNumberInput.setAttribute("name", "contactNumber")

        contactNumberField.appendChild(contactNumberLabel);
        contactNumberField.appendChild(contactNumberInput);

        let submitButton = document.createElement("button")
        submitButton.textContent = "Add contact"
        submitButton.setAttribute = ("class", "contactSave")

        submitButton.addEventListener("click", this.handleAddNewContact)

        let contactFormFragment = document.createDocumentFragment()
        contactFormFragment.appendChild(formHeader)
        contactFormFragment.appendChild(contactNameField)
        contactFormFragment.appendChild(contactAddressField)
        contactFormFragment.appendChild(contactNumberField)
        contactFormFragment.appendChild(submitButton)

        let formArticle = document.querySelector(".form")
        formArticle.appendChild(contactFormFragment)
    },

    handleAddNewContact(event) {
        let inputContactName = document.querySelector("#contactName").value
        let inputContactAddress = document.querySelector("#contactAddress").value
        let inputContactNumber = document.querySelector("#contactNumber").value

        let newContact = {
            name: inputContactName,
            address: inputContactAddress,
            number: inputContactNumber
        }

        contactCollection.postNewContact(newContact)
    }
}

export default contactForm
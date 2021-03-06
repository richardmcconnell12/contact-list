const contact = {

    contactBuilder(contactObject) {
        let contactArticle = document.createElement("article");

        let contactName = document.createElement("h3");
        contactName.textContent = contactObject.name

        let contactAddress = document.createElement("p");
        contactAddress.textContent = contactObject.address

        let contactNumber = document.createElement("p");
        contactNumber.textContent = contactObject.number

        contactArticle.appendChild(contactName);
        contactArticle.appendChild(contactAddress);
        contactArticle.appendChild(contactNumber);

        return contactArticle
    }
}

export default contact
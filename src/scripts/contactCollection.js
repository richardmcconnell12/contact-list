const contactCollection = {

    getAllContacts() {
        return fetch ("http://localhost:8088/contact")
        .then(response => response.json())
    },

    postNewContact(newContactToSave) {
        fetch("http://localhost:8088/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContactToSave)
        })
        location.reload(true);
    }
}

export default contactCollection
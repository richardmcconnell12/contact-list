import contactCollection from "./contactCollection"
import contact from "./contacts"

const contactList = {
    contactify() {

        contactCollection.getAllContacts()
            .then(allContacts => {

                let contactDocFragment = document.createDocumentFragment()

                allContacts.forEach(contactItem => {
                    let contactHtml = contact.contactBuilder(contactItem);
                    contactDocFragment.appendChild(contactHtml)

                });

                let outputArticle = document.querySelector(".output")
                outputArticle.appendChild(contactDocFragment)

            });
    }
}

export default contactList
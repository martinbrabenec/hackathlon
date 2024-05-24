import {Event} from "./Event.js";

const phRegulars = document.querySelector(".anchor_regularEvent")
const phFeature = document.querySelector(".anchor_featureEvent")

// Get the modal
const modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

///URLs
const urlEvent = "https://test-api.codingbootcamp.cz/api/0c9c5953/events"
const urlAllRegistrations = "https://test-api.codingbootcamp.cz/api/0c9c5953/events/registrations"
const urlRegistrationsOfEvent = (eventID) => `https://test-api.codingbootcamp.cz/api/0c9c5953/events/${eventID}/registrations`

const testNewObjData = {
    id: 5,
    name:
        "Prague Rooftop Festival",
    date:
        "2024-08-11",
    description:
        "Views, unique venues and great atmosphere creates a backdrop of amazing sunsets . More information on website and instagram Prague Rooftop Festival 2024.",
    image_url:
        "https://goout.net/i/127/1273302-800.jpg"
}
const getAllEvents = async () => {
    const res = await fetch(urlEvent)
    return await res.json()

}
const postNewEvent = async (objInfo) => {
    const res = await fetch(urlEvent, makeOptions(objInfo))
    return (await res).json()
}

const getAllRegistrations = async () => {
    const res = await fetch(urlAllRegistrations)
    return await res.json()
}

const getRegistrationsOfEvent = async (eventID) => {
    const res = await fetch(urlRegistrationsOfEvent(eventID))
    return await res.json()
}

const postNewRegistrationToEvent = async (eventID, email) => {
    const res = await fetch(urlRegistrationsOfEvent(eventID), makeOptions({"email": email}))
    return res.json()
}

const makeOptions = (info) => {
    return {
        "method": "POST",
        "body": JSON.stringify(info),
        "headers": {
            'Content-Type': 'application/json'
        }
    }
}

const fromHTML = (id) => {
    return `
<h2>Register Form</h2>
<form id="inputForm">
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" >
    </div>
    <div class="form-group">
        <label for="surname">Surname:</label>
        <input type="text" id="surname" name="surname" >
    </div>
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" >
    </div>
    <div class="form-group">
        <label for="phone">Phone Number (Czech format):</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3} [0-9]{3} [0-9]{3}" placeholder="123 456 789" >
        <small>Format: 123 456 789</small>
    </div>
    <div class="form-group">
        <label for="dob">Date of Birth (dd/mm/yyyy):</label>
        <input type="text" id="dob" name="dob" pattern="\\d{1,2}/\\d{1,2}/\\d{4}" placeholder="dd/mm/yyyy" >
        <small>Format: dd/mm/yyyy</small>
    </div>
    <div class="form-group" >
        <input type="submit" id="submitButton-${id}" value="Submit">
    </div>
</form>`
}
const makeForm = (id) => {
    const container = document.createElement("div")
    container.classList.add("form-container")
    container.innerHTML = fromHTML(id)
    const submitButton = container.querySelector(`#submitButton-${id}`)
    submitButton.addEventListener("click", async (e) => {
        e.preventDefault()
        const form = container.querySelector('form')
        const formData = new FormData(form)
        const email = formData.get('email')
        await postNewRegistrationToEvent(id, email)
        modal.style.display = "none"
    })
    modal.appendChild(container)
}

const makeModalVisible = (id) => {
    modal.style.display = "block"
    makeForm(id)
}


const arrEvents = await getAllEvents()
console.log(arrEvents)

const arrEventObjects = arrEvents.map((eventData) => {
    const objEvent = new Event(eventData, makeModalVisible)
    phRegulars.appendChild(objEvent.makeHTMLforRegEvent())
    console.log(objEvent)
    return objEvent
})

phFeature.appendChild(arrEventObjects[3].makeHTMLforFeatEvent())
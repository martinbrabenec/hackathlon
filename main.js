import {Event} from "./Event.js";

const urlEvent = "https://test-api.codingbootcamp.cz/api/0c9c5953/events"
const urlAllRegistrations = "https://test-api.codingbootcamp.cz/api/0c9c5953/events/registrations"
const urlRegistrationsOfEvent = (eventID) => `https://test-api.codingbootcamp.cz/api/0c9c5953/events/${eventID}/registrations`


const makeOptions = (objInfo) => {
    return {
        "method": "POST",
        "body": JSON.stringify(objInfo),
        "headers": {
            'Content-Type': 'application/json'
        }
    }
}

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
    return await res.json()
}


const testEvent = new Event(testNewObjData)
await testEvent.makeNewRegistration("clarablair@google.com")


document.getElementById("button").addEventListener("click", async () => {
    // console.log(await postNewRegistrationToEvent("5", "johnsimons@post.com"))
    // console.log(await getRegistrationsOfEvent("5"))
})

///// make fx that openas modal, pass id


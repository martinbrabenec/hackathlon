export class Event {
    constructor(obj, callback) {
        this.id = obj.id;
        this.name = obj.name;
        this.date = obj.date;
        this.description = obj.description;
        this.image_url = obj.image_url;
        this.callback = callback
    }


    makeHTML() {
        const widget = document.createElement("div")
        widget.setAttribute("id", `${String(this.id)}`)
        widget.innerHTML = ``


        //// make el on reg. btn callback with this.id
        return widget
    }

    makeOptions(info) {
        return {
            "method": "POST",
            "body": JSON.stringify(info),
            "headers": {
                'Content-Type': 'application/json'
            }
        }
    }

    async makeNewRegistration(email) {
        const url = `https://test-api.codingbootcamp.cz/api/0c9c5953/events/${this.id}/registrations`
        const options = this.makeOptions({"email": email})
        const res = await fetch(url, options)
        return await res.json()
    }

    activateRegisterButton(email) {
        email = "lorensmith@email.cz"
        const submitRegistrationButton = this.element.querySelector("button")
        submitRegistrationButton.addEventListener("click", async () => {
            await this.makeNewRegistration(email)
            // const message = "You're registered"
        })
    }
}

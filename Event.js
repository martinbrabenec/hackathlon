export class Event {
    constructor(obj, callback) {
        this.id = obj.id;
        this.name = obj.name;
        this.date = obj.date;
        this.description = obj.description;
        this.image_url = obj.image_url;
        this.callback = callback
    }

    makeHTMLforFeatEvent() {
        const widget = document.createElement("div")
        widget.setAttribute("id", `${String(this.id)}`)
        widget.innerHTML = `
             <h2> Feature Event </h2>
             <img src=${this.image_url} alt=${this.name}/>
             <h3>${this.name}</h3>
             <p>${this.description}</p>
             <button id =${String(this.id)}_button>Register</button>`

        console.log('widget', widget)
        const button = widget.querySelector(`button`)
        console.log('buttion', button)
        button.addEventListener("click", () => {
            this.callback(this.id)
        })
        //// make el on reg. btn callback with this.id
        return widget
    }

    makeHTMLforRegEvent() {
        const widget = document.createElement("div")
        widget.setAttribute("id", `${String(this.id)}`)
        widget.innerHTML = `
             <h3>${this.name}</h3>
             <button>Read more</button>`
        return widget
    }


    async makeNewRegistration(email) {
        const url = `https://test-api.codingbootcamp.cz/api/0c9c5953/events/${this.id}/registrations`
        const options = this.makeOptions({"email": email})
        const res = await fetch(url, options)
        return await res.json()
    }
}

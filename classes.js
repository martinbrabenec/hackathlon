class Event {

    constructor(object) {

        this.id = object.id;

        this.name = object.name;

        this.date = object.date;

        this.description = object.description;

        this.image = object.image_url;

    }

    createRegularEvent() {
        return
        `
    <h3>${this.name}</h3>
    <button type="button" id=btn_register> More </button>
`
    }


    createFeatureEvent() {
        return
        `
    <h2> Feature Event </h2>
    <img src=${this.image} alt=${this.name}/>
    <h3>${this.name}</h3>
    <p>${this.description}</p>
`
    }

} 





// const createFeatureEvent = () => {

// const featureEvent = new Event (/*parameters from the API*/);

// const anchorFeatureEvent = document.querySelector("feature_event");

// anchorFeatureEvent.innerHTML += `
//     <h2> Feature Event </h2>
//     <img src=${featureEvent.image} alt=${featureEvent.name}/>
//     <h3>${featureEvent.name}</h3>
//     <p>${featureEvent.description}</p>
// `
// }

// const createRegularEvent = () => {

// const regularEvent = new Event (/*parameters from the API*/);

// const anchorRegularEvent = document.querySelector("regular_event");

// anchorRegularEvent.innerHTML += `
//     <h3>${regularEvent.name}</h3>
//     <button type="button"> More </button>
// `
// }
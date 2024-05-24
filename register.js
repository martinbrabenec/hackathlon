// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("btn_register");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

//Create a div inside the modal with the information from API

const modalContent = () => {

    const modalAnchor = document.querySelector('modal-content');
    const modalDiv = document.createElement('div')
        modalDiv.innerHTML = `
        <img src=${this.image} alt=${this.name}
        <h3>${this.name}</h3>
        <p class=window_date>${this.date}</p>
        <p>${this.description}</p>
        `
    modalAnchor.appendChild(modalDiv);
}

modalContent();


// THIS IS THE DOCUMENTATION EXEMPLE I USED ABOVE

/*
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
*/



// BELOW IS STUFF I TRIED TO MAKE MYSELF // PROBABLY TO DELETE

// const registerBtn = document.getElementById('#btn_register');


// registerBtn.addEventListener('click') (openWindow);



// // get somewhere here info collected from the event class probably, so it can be displayed in the modal windows

// const createWindow = () => {

//     const anchor = document.querySelector('.anchor_modal')    
//     const moreDetails = document.querySelector('.more_details')
//     const modalDiv = document.createElement('div')
//         modalDiv.innerHTML = `
//         <img src=${this.image} alt=${this.name}
//         <h3>${this.name}</h3>
//         <p class=window_date>${this.date}</p>
//         <p>${this.description}</p>
//         `
//     anchor.insertBefore(modalDiv, moreDetails);
// }


// const openWindow = () => {
//     const modal = document.querySelector('.modal-content');
//     createWindow();
//     modal.classList.remove('modal_off'); // makes the modal window appear

// }

// const closeWindow = () => {
//     const closebtn = document.querySelector('.close_btn');
//     closebtn.addEventListener('click') => {
//         const modal = document.querySelector('.modal-content');
//         modal.classList.add('modal_off');
//     }
// };
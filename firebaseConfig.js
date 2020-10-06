// Initialize Firebase


const config = {
    apiKey: "AIzaSyBXRU3fwc0VtT8nI5FGLJgGExvkN00XmXc",
    authDomain: "portfolio-7c5e0.firebaseapp.com",
    databaseURL: "https://portfolio-7c5e0.firebaseio.com",
    projectId: "portfolio-7c5e0",
    storageBucket: "portfolio-7c5e0.appspot.com",
    messagingSenderId: "957206786916",
    appId: "1:957206786916:web:a983b27592b559588dc071",
    measurementId: "G-JEKP12YG7V"
}

firebase.initializeApp(config);
firebase.analytics();

const database = firebase.database();
const messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contact-form').addEventListener('submit',
submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

 // Get Values
 const name = getInputVal('name');
 const subject = getInputVal('subject');
 const email = getInputVal('email');
 const message = getInputVal('message');

 // Save Message
 saveMessage(name, subject, email, message);

}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to Firebase
function saveMessage(name, subject, email, message){
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        subject: subject,
        email: email,
        message: message
    });
}
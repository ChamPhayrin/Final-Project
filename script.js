

let form = document.querySelector("form")

function validateForm(data){
    let name = data.name
    let email = data.email
    let message = data.message
    if(name == ""){
        alert("Please enter your name")
        document.getElementById("name").style.background="#FF474C"
    } else {
        document.getElementById("name").style.background=""
    }
    if(email == ""){
        alert("Please enter your email")
            document.getElementById("email").style.background="#FF474C"
    } else if(email.indexOf("@")== -1){
        document.getElementById("email").style.background="#FF474C"
        alert("Enter valid email")
    }
    else {
        document.getElementById("email").style.background=""
    }
    if(message == ""){
        alert("Please enter your message")
            document.getElementById("message").style.background="#FF474C"
    } else {
        document.getElementById("message").style.background=""
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let data = new FormData(form)
    data = Object.fromEntries(data)
    validateForm(data)
})


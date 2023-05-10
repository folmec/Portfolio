const target = document.getElementById("target");
let array =["Développeur Web", "Designer Web", "Travailleur", "Réactif et Créatif" ];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () =>{
    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.textContent= array[wordIndex][letterIndex];

    setTimeout( ()=>{
        letter.remove();
    },2800);
};


const loop = () => {
    setTimeout(()=>{
        if(wordIndex>=array.length){
            wordIndex=0;
            letterIndex=0;
            loop();
        }
        else if(letterIndex<array[wordIndex].length)
        {
            createLetter();
            letterIndex++;
            loop();
        }
        else
        {
            wordIndex++;
            letterIndex=0;
            setTimeout(()=>{
                loop();
            },2800);
            
        }
    },100)
};
loop();



const serviceId = "service_elv8jtu";
const templateId = "template_d06h8fr";

const form = document.querySelector("form");
const inputs = document.querySelectorAll('input[type="text"]');

let name = document.getElementById('from_name');
let email = document.getElementById('email_id');
let message = document.getElementById('message');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (name && email && message) {
    let params = {
        from_name: name.value,
        email_id: email.value,
        message: message.value
    };
    emailjs.send(serviceId,templateId,params)
    .then( (res) => {
            name.value = "";
            email.value = "";
            message.value = "";
            alert("Votre message a été envoyé avec succes");
        })
    }
    else {
        alert("Veuillez remplir correctement les champs");
    }
});


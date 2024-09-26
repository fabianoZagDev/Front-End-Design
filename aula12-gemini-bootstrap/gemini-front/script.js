/* Input da mensagem do usuario */

let inputMessage = document.getElementById("message");

/* Div onde está o chat */
let chatlog = document.getElementById("chat-log");

/* Array que salva as mensagens */
let messagesGemini = [];

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let messageText = inputMessage.value;

    let newMessageGemini = {
        "role": "user",
        "parts": [{ "text": messageText }],
    };

    messagesGemini.push(newMessageGemini);

    inputMessage.value = "";

    let messageElement = document.createElement("div");

    messageElement.classList.add("message");
    messageElement.classList.add("message--sent");
    messageElement.innerHTML = `
        <div class="message__text">${messageText}</div>
    `;
    chatlog.appendChild(messageElement);

    fetch("http://localhost:3000/sendMessage/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messagesGemini
        })
    }).then(res => res.json());
});
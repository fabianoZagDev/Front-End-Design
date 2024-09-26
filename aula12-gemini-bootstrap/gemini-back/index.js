import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

// IMPORTANDO O GEMINI


const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

/* Criando o endpoint para receber e enviar mensagens a API do gemini e retornar a resposta pro Front */

app.post("/sendMesage", async (req, res) => {

    const { messages } = req.body;
    console.log(messages)

});
app.listen(port, () => {
    console.log(`Exemplo de app consumido http://localhost:${3000}`)
})
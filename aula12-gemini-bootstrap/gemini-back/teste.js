// const { GoogleGenerativeAI } = require("@google/generative-ai");

// IMPORTANDO O GEMINI
import { GoogleGenerativeAI } from "@google/generative-ai";

// Acessando a API do Gemini via sua API Key
const genAI = new GoogleGenerativeAI("AIzaSyA_kRZPqTXzKyamg4I5foNKd7fE006o8G8");

// Instanciando o modelo
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// colocando o prompt
const prompt = "Me explica a fórmula de baskhara";

// enviando o prompt para o gemini e ESPERANDO a resposta dele
const result = await model.generateContent(prompt);
console.log(result.response.text());
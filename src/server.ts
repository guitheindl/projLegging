import express, { request, response } from "express";
import api from "./services/api";

const app = express()

app.get("/buscaentrega", async (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    const body = {
        tipoBusca: "D",
        nroBusca: request.query.CPF
    }
    const resposta = await api.post("Rastreamentos/Rastreamento/rastrear", null, {
        params : body
    });

    response.send(resposta.data);
});

app.listen(3000, () => console.log("Server is running"));
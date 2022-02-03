import express, { request, response } from "express";
import api from "./services/api";

const app = express()

app.get("/", (request, response) => {
    return response.json({
        message: "Funcionando"
    });
});

app.get("/vtex", async (request, response) => {
    const resposta = await api.get("v1/cliente", {
        params: {
            key: "WADAWDAW"
        }
    });

    resposta.data
    return response.json({
        message: "Funcionando"
    });
});

app.listen(3000, () => console.log("Server is running"));
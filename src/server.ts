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
        params: body
    });
    const data = resposta.data.replace('<img alt="OT Cargo" src="https://storage.googleapis.com/sinclog-cdn/tms/logotipos/ontime/1/logotipo_topo.png">', '<img alt="logo" src="https://leggingbrasiloficial.s3.sa-east-1.amazonaws.com/Logo+Legging+Brasil.png" width="250px" height="45px">')
        .replace('<a href="/Rastreamentos/Rastreamento" class="link-back fs-14">Voltar</a>', '')
        .replace('type="submit"', 'type="button" id="btnConsultar"')
        .replace('<option value="S">Nro. Solicita&#231;&#227;o</option>', '')
        .replace('<option value="N">Nota Fiscal</option>', '')
        .replace('<option value="P">Nro. Pedido</option>', '')
        .replace('<option value="V">Nro. Volume</option>', '')
        .replace('<option value="E">Nro. Etiqueta</option>', '')
        .replace('<option value="NE">Nro. Documento Entrega</option>', '')

    response.send(data);
});

app.listen(3000, () => console.log("Server is running"));
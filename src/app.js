import  express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/teste", (req, res) => {
    res.send("Funcionou")
})

app.listen(5000, () => console.log('App está rodando na porta 5000'));



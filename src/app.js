import  express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const usuarios = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    usuarios.push({username, avatar});
    res.send('OK!');
})



app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body;

    const userExiste = usuarios.find((user) => user.username === username)
    if(!userExiste) {
        return res.send('UNAUTHORIZED')
    }
    tweets.push({username, tweet})
    res.send('OK!');
})



app.get("/tweets", (req, res) => {
    const tweetscomp = tweets.map((tweet) => {
        const user = usuarios.find((user) => user.username === tweet.username)
        return { ...tweet, avatar: user.avatar}
    })
    res.send(tweetscomp.slice(-10));
})



const PORT = 5000;
app.listen(PORT, () => console.log(`App está rodando na porta ${PORT}`));



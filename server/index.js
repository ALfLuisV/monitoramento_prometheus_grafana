import express from 'express'
const app = express()


const PORT = process.env.PORT || 3003

app.get('/getNumber', async (req, res) =>{
    try {
        res.send("Ola amigo, seu numero é 31993855676")
    } catch (error) {
        alert("Erro no servidor")
    }
})

app.listen(PORT, () =>{
    console.log(`Listening to port ${PORT}`)
})


const express = require('express')
const app = express()

app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))


app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.post("/", (req, res) => {
    res.send(req.body)
})


const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server Up in Port ${port}`);
})

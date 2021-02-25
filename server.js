const express = require("express");
const app = express();


const PORT = process.env.PORT || 5000



app.get('/', (req,res)=>{
    res.json({msg: "Dobrodošli u contact-keeper API"})
})

app.listen(PORT, ()=> console.log(`server je pokrenut na portu ${PORT}`))
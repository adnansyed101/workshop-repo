const express = require('express')
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors())
app.use(express.json())


app.get("/", (req,res )=>{
    res.send('Server is us')
})

app.listen(PORT, ()=>{
    console.log('Coffee server is running on port ' + PORT);
    
})
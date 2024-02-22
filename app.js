const express = require("express")
const cors = require("cors")
const axios = require("axios")
const port = 5001;
const app = express();
const bodyParser = require('body-parser')


app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(express.json())

app.get("/movies", async(req, res)=>{
  let movie = req.query.movie;

   let movies = await axios.get(`http://www.omdbapi.com/?apikey=ADD API KEY HERE&t=${movie}`);

    res.json(movies.data)
})


app.listen(port, ()=>{
    console.log(`Movie Server running at port ${port}`);
})
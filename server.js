const app = require("express")();

const bodyParser = require("body-parser").json;
const cors = require("cors");

app.use(cors());

app.use(bodyParser());

// import routes



// import middlewares




// use routes


// set trust proxy to true if you are behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
app.set('trust proxy', true)


app.get("/",(req,res)=>{
    res.send("Hello World")
})



module.exports = app;








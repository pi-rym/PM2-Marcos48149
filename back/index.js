
const app= require("./src/server")
const mongoose= require('./src/config/dbconnection');
const dbconnection = require("./src/config/dbconnection");

dbconnection()
.then(()=>{
    app.listen(3000, ()=>{console.log("apenas estoy arreglando esto")});
}).catch(()=>{
    console.log("tenemos problemas con la base de datos", error.message)
})





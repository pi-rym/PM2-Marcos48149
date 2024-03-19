
const app= require("./src/server")

const dbconnection = require("./src/config/dbconnection");

dbconnection()
.then(()=>{
    app.listen(3000, ()=>{console.log("ESCUCHANDO")});
}).catch((err)=>{
    console.log("tenemos problemas con la base de datos", err.message)
})





const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/codenotch",{
    useNewUrlParser: true, useUnifiedTopology:true
})
.then((db)=>{
    console.log("database conectada en, ", db.connection.host, db.connection.port);
})
.catch((err)=>{
    console.log(err);
})
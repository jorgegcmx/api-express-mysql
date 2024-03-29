
const express = require("express");
const app = express();
const entradas = require("./entradas/entradas");
const { swaggerDocs } = require("./documentacion/config_docs");
var cors = require('cors')




app.use(express.json());
const PORT =process.env.PORT || 8080;

app.use(cors())
app.use('/entradas', entradas);


app.listen(PORT, () => {
    console.log("server node run port: " + PORT);
    swaggerDocs(app, PORT);
});
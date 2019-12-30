const express = require('express');
const app = express();
const mongoose = require('mongoose');

//This option allows us to use the new mongoose methods
var opctions = {
    useNewUrlParser:true,
    useUnifiedTopology: true
};
//We assign the server listening port
app.set('port',process.env.PORT || 1337);
//This is a middleware function built into Express. Analyze incoming requests with JSON payloads
app.use(express.json());

//The permissions to the resources within the api are defined
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


app.use(require('./routes/apimarketplace'));


app.listen(app.get('port'), ()=>{ 
    console.log('server on port ', app.get('port')); 
    mongoose.connect("mongodb://willianr:willian25@ds359118.mlab.com:59118/marketplace",opctions)
    .then(()=>{ 
        console.log("Conexion a mongoDB Exitosa");
    });
});


module.exports = app;
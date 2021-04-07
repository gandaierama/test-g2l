const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const connectionString ='mongodb+srv://g2lUser:741852g2l@cluster0.mbkdx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('g2l');

    //Tabelas
    const motoristasCollection = db.collection('motoristas');
    const veiculosCollection = db.collection('veiculos');


  	app.get('/', function (req, res) {
		res.render(__dirname + '/view/pages/index', {title: "Teste"});
	})
////////////////////////////////////
	
	/////form and list
  	app.get('/veiculos', function (req, res) {
		const data= db.collection('veiculos').find().toArray()
	    .then(results => {
	    	
	    }).catch(error => console.error(error))
		    
		res.render(__dirname + '/view/pages/veiculos', {title: "Teste", data: data});
	})

  	/////add 
	app.post('/veiculos/add', (req, res) => {
	  motoristasCollection.insertOne(req.body)
	    .then(result => {
	      console.log(result)
	    })
	    .catch(error => console.error(error))
	})

//////////////////////////////////
	
	/////form and list
	app.get('/motoristas', function (req, res) {
		const data= db.collection('motoristas').find().toArray()
	    .then(results => {
	    	
	    }).catch(error => console.error(error))
		    
		res.render(__dirname + '/view/pages/motoristas', {title: "Teste", data: data});
	})

	/////add 
	app.post('/motoristas/add', (req, res) => {
	  motoristasCollection.insertOne(req.body)
	    .then(result => {
	      console.log(result)
	    })
	    .catch(error => console.error(error))

	    res.render(__dirname + '/view/motoristas', {title: "Teste", resposta:{type:"Ok"}});

	})

  })




app.listen(3000, function() {
	console.log('listening on 3000')
})
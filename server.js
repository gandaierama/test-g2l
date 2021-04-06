const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
const connectionString ='mongodb+srv://g2lUser:741852g2l@cluster0.mbkdx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('g2l');

    const motoristasCollection = db.collection('motoristas');
    const veiculosCollection = db.collection('veiculos');
  	console.log(db);

  	app.get('/', function (req, res) {

	const data= db.collection('motoristas').find().toArray()
    .then(results => {
      console.log(results)
    }).catch(error => console.error(error))
	    
	res.render(__dirname + '/view/motoristas.ejs', {title: "Teste", data: data});
	})


	app.post('/veiculos/add', (req, res) => {
	  motoristasCollection.insertOne(req.body)
	    .then(result => {
	      console.log(result)
	    })
	    .catch(error => console.error(error))
	})

	/////add 
	app.post('/motoristas/add', (req, res) => {
	  motoristasCollection.insertOne(req.body)
	    .then(result => {
	      console.log(result)
	    })
	    .catch(error => console.error(error))

	    res.render(__dirname + '/view/motoristas.ejs', {title: "Teste", resposta:{type:"Ok"}});

	})

  })





///////
app.get('/motoristas', (req, res) => {
	res.sendFile(__dirname + '/view/motoristas.html');
})

app.get('/veiculos', (req, res) => {
	res.sendFile(__dirname + '/view/motoristas.html');
})







app.listen(3000, function() {
	console.log('listening on 3000')
})
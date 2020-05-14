const express = require('express'); // importando a biblioteca express 
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes  = express.Router(); // .Router permite uso de req, res

const boxControler =  require("./controllers/boxController");
const fileControler =  require("./controllers/fileControler");


//GET--realizar buscas  /POST--criar registro  /PUT-- quando for editar / DELETE-- quando for deletar 

routes.post("/boxes", boxControler.store );
routes.post("/boxes/:id/files",
 multer(multerConfig).single('file'),
  fileControler.store );


module.exports = routes; //

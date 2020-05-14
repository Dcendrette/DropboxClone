const Box = require('../models/box');

class boxControler {
    async store ( req, res ) {

        

        const box = await Box.create({ title: req.body.title});

        return res.json(box);

    }
}


module.exports = new boxControler();
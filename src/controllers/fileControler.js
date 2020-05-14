const file = require('../models/file');


class fileControler {
    async store ( req, res ) {
        console.log(req.file);
        return res.send ('OK');
    }
}


module.exports = new fileControler();
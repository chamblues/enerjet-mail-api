const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { Mailing } = require('./functions')
const { isEmail } = require('./helpers')

const API_PORT = process.env.PORT || 5000;
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());



server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Content-Type', 'application/json');
        
    return next();
});

// All OPTIONS requests return a simple status: 'OK'
server.options('*', (req, res) => {
    res.json({
        status: 'OK'
    });
});

server.listen(API_PORT, () => {
    console.log('Listening on port:', API_PORT)

})

// Middleware for header authentication
const checkAuth = (req, res, next) => {
    const header = req.headers.authorization
    
    if(!header) {
        return res.status(403).send("Forbidden (Error 403): A token is required for authentication");
    }
    
    const token = header.split(' ')[1]

    jwt.verify(token, process.env.SECRET_TOKEN, function(err, decoded){
        if(err) {
            return res.status(403).send("Forbidden (Error 403): Invalid token");
        }

        if(decoded.username === 'enerjet' && decoded.password === 'Mailings2022!') {
            return next();
        }

        return res.status(403).send("Forbidden (Error 403): Bad token value");

    })

    
}

server.post('/api/gardi/bienvenida', checkAuth, async (req, res) => {
    try {
        
        const { name, email } = req.body

        if (name === undefined || email === undefined) {
            throw new Error('You made a bad request, parameters name and email are required.')
        }

        if (!isEmail(email)) {
            throw new Error('The email is not valid')
        }

        const mailing = new Mailing(name, email)
        const bienvenida = await mailing.bienvenida()

        return res.status(200).json(bienvenida)
        
    } catch (error) {
        return res.status(400).json({
            status: 'failed',
            message: error.message,

        })
    }


})

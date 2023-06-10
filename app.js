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

const ctaMap = {
    PE: "https://enerjet.com.pe/garantias",
    NAC: "https://enerjet.com.pe/garantias",
    VE: "http://enerjet.com.ve/gardi/",
    EC: "https://enerjet.cl/gardi/",
    CL: "https://www.enerjet.com.ec/gardi/"
}

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

server.post('/api/gardi/callService', checkAuth, async (req, res) => {
    try {
        debugger;
        const data = req.body
        
        if (data.idSolicitud === undefined || data.Cliente === undefined || data.observacion === undefined || data.CodigoProducto === undefined) {
            throw new Error('You made a bad request, parameters idSolicitud, Cliente, observacion and CodigoProducto are required.')
        }

        if (!isEmail(data.email)) {
            throw new Error('The email is not valid')
        }

        const mailing = new Mailing(data)
        const callServices = await mailing.CallServices()

        return res.status(200).json(callServices)
        
    } catch (error) {
        return res.status(400).json({
            status: 'failed2',
            message: error.message,

        })
    }

})

server.post('/api/gardi/bienvenida', checkAuth, async (req, res) => {
    try {
        
        const data = req.body;
        const { country } = data;

        if (data.name === undefined || data.email === undefined || data.qr_code === undefined || country === undefined) {
            throw new Error('You made a bad request, parameters name, email and qr_code are required.')
        }

        if (!isEmail(data.email)) {
            throw new Error('The email is not valid')
        }

        data.ctaHref = ctaMap[country] || 'https://enerjet.com.pe/garantias';

        const mailing = new Mailing(data)
        const bienvenida = await mailing.bienvenida()

        return res.status(200).json(bienvenida)
        
    } catch (error) {
        return res.status(400).json({
            status: 'failed',
            message: error.message,

        })
    }

})

server.post('/api/gardi/mantenimiento', checkAuth, async (req, res) => {
    try {
        
        const data = req.body

        if (data.name === undefined || data.email === undefined || data.qr_code === undefined || data.service_name === undefined || data.service_address === undefined || data.maintenance_date === undefined || country === undefined) {
            throw new Error('You made a bad request, parameters name, email, qr_code, etc. are required.')
        }

        if (!isEmail(data.email)) {
            throw new Error('The email is not valid')
        }

        data.ctaHref = ctaMap[country] || 'https://enerjet.com.pe/garantias';

        const mailing = new Mailing(data)
        const mantenimiento = await mailing.mantenimiento()

        return res.status(200).json(mantenimiento)
        
    } catch (error) {
        return res.status(400).json({
            status: 'failed',
            message: error.message,

        })
    }

})



server.post('/api/gardi/recordatorio', checkAuth, async (req, res) => {
    try {
        
        const data = req.body

        if (data.name === undefined || data.email === undefined || data.qr_code === undefined || data.service_name === undefined || data.service_address === undefined || data.guarantee === undefined) {
            throw new Error('You made a bad request, parameters name, email, qr_code,  etc. are required.')
        }

        if (!isEmail(data.email)) {
            throw new Error('The email is not valid')
        }

        const mailing = new Mailing(data)
        const recordatorio = await mailing.recordatorio()

        return res.status(200).json(recordatorio)
        
    } catch (error) {
        return res.status(400).json({
            status: 'failed',
            message: error.message,

        })
    }

})



server.post('/api/gardi/perdida-garantia', checkAuth, async (req, res) => {
    try {
        
        const data = req.body

        if (data.name === undefined || data.email === undefined || data.qr_code === undefined ) {
            throw new Error('You made a bad request, parameters name, email, qr_code,  etc. are required.')
        }

        if (!isEmail(data.email)) {
            throw new Error('The email is not valid')
        }

        const mailing = new Mailing(data)
        const perdidaGarantia = await mailing.perdidaGarantia()

        return res.status(200).json(perdidaGarantia)
        
    } catch (error) {
        return res.status(400).json({
            status: 'failed',
            message: error.message,

        })
    }

})



server.post('/api/gardi/renovacion', checkAuth, async (req, res) => {
    try {
        
        const data = req.body

        if (data.name === undefined || data.email === undefined || data.qr_code === undefined || data.service_name === undefined || data.service_address === undefined || data.purchase_date === undefined) {
            throw new Error('You made a bad request, parameters name, email, qr_code,  etc. are required.')
        }

        if (!isEmail(data.email)) {
            throw new Error('The email is not valid')
        }

        const mailing = new Mailing(data)
        const renovacion = await mailing.renovacion()

        return res.status(200).json(renovacion)
        
    } catch (error) {
        return res.status(400).json({
            status: 'failed',
            message: error.message,

        })
    }

})



server.post('/api/gardi/completa-activacion', checkAuth, async (req, res) => {
    try {
        
        const data = req.body
        
        if (data.name === undefined || data.service_address === undefined || data.CodigoProducto === undefined) {
            throw new Error('You made a bad request, parameters name, email, CodigoProducto and service_address are required.')
        }

        if (!isEmail(data.email)) {
            throw new Error('The email is not valid')
        }

        const mailing = new Mailing(data)
        const completaActivacion = await mailing.completaActivacion()

        return res.status(200).json(completaActivacion)
        
    } catch (error) {
        return res.status(400).json({
            status: 'failed',
            message: error.message,

        })
    }

})
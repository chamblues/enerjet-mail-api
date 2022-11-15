const { transporter } = require('./config')
const bienvenidaMail = require('./templates/bienvenida')
const mantenimientoMail = require('./templates/mantenimiento')
const recordatorioMail = require('./templates/recordatorio')
const perdidaGarantiaMail = require('./templates/perdida-garantia')
const renovacionMail = require('./templates/renovacion')
const completaActivacionMail = require('./templates/completa-activacion')
const CallServicesMail = require('./templates/call-services')

class Mailing {
    constructor(
        { name,
            email,
            qr_code,
            service_name,
            service_address,
            purchase_date,
            maintenance_date,
            guarantee,
            idSolicitud,
            Cliente,
            observacion,
            CodigoProducto
        } = data
    ) {
        this.name = name;
        this.email = email;
        this.qr_code = qr_code;
        this.service_name = service_name;
        this.service_address = service_address;
        this.purchase_date = purchase_date;
        this.maintenance_date = maintenance_date;
        this.guarantee = guarantee;

        this.idSolicitud = idSolicitud;
        this.Cliente = Cliente;
        this.observacion = observacion;
        this.CodigoProducto = CodigoProducto;
    }

    async CallServices() {

        let sendMail;

        try {
            sendMail = await transporter.sendMail({
                from: `"Corporación ENERJET ⚡" <${process.env.EMAIL_USER}>`, // sender address
                to: `${this.email}`, // list of receivers
                subject: `Nuevo registro de solicitud de garantía ${this.idSolicitud}`, // Subject line
                html: CallServicesMail(this.idSolicitud, this.Cliente, this.observacion, this.CodigoProducto), // html body
            });

            return {
                status: 'successful',
                message: 'The email was sent',
            }

        } catch (error) {
            return {
                status: 'failed',
                message: 'There was a problem sending the email '+ error
            }
        }

    }
    async bienvenida() {

        let sendMail;

        try {
            sendMail = await transporter.sendMail({
                from: `"Corporación ENERJET ⚡" <${process.env.EMAIL_USER}>`, // sender address
                to: `${this.email}, garantiavirtual@corporacionenerjet.com.pe`, // list of receivers
                subject: "¡Gracias por unirte a Gardi! Ahora tu garantía es digital 🎉", // Subject line
                html: bienvenidaMail(this.name, this.qr_code), // html body
            });

            return {
                status: 'successful',
                message: 'The email was sent',
            }

        } catch (error) {
            return {
                status: 'failed',
                message: 'There was a problem sending the email'
            }
        }

    }

    async mantenimiento() {

        let sendMail;

        try {
            sendMail = await transporter.sendMail({
                from: `"Corporación ENERJET ⚡" <${process.env.EMAIL_USER}>`, // sender address
                to: `${this.email}, garantiavirtual@corporacionenerjet.com.pe`, // list of receivers
                subject: "Es hora de darle mantenimiento a tu Batería Enerjet ⚡", // Subject line
                html: mantenimientoMail(this.name, this.qr_code, this.service_name, this.service_address, this.maintenance_date), // html body
            });

            return {
                status: 'successful',
                message: 'The email was sent',
            }

        } catch (error) {
            return {
                status: 'failed',
                message: 'There was a problem sending the email'
            }
        }

    }

    async recordatorio() {

        let sendMail;

        try {
            sendMail = await transporter.sendMail({
                from: `"Corporación ENERJET ⚡" <${process.env.EMAIL_USER}>`, // sender address
                to: `${this.email}, garantiavirtual@corporacionenerjet.com.pe`, // list of receivers
                subject: `${this.name}, ⚠ evita perder tu garantía ⚠ ️ Asiste al mantenimiento de tu batería Enerjet.`, // Subject line
                html: recordatorioMail(this.name, this.qr_code, this.service_name, this.service_address, this.guarantee), // html body
            });

            return {
                status: 'successful',
                message: 'The email was sent',
            }

        } catch (error) {
            return {
                status: 'failed',
                message: 'There was a problem sending the email'
            }
        }

    }

    async perdidaGarantia() {

        let sendMail;

        try {
            sendMail = await transporter.sendMail({
                from: `"Corporación ENERJET ⚡" <${process.env.EMAIL_USER}>`, // sender address
                to: `${this.email}, garantiavirtual@corporacionenerjet.com.pe`, // list of receivers
                subject: `Tu batería Enerjet ha perdido su garantía. 💔`, // Subject line
                html: perdidaGarantiaMail(this.name, this.qr_code), // html body
            });

            return {
                status: 'successful',
                message: 'The email was sent',
            }

        } catch (error) {
            return {
                status: 'failed',
                message: 'There was a problem sending the email'
            }
        }

    }

    async renovacion() {

        let sendMail;

        try {
            sendMail = await transporter.sendMail({
                from: `"Corporación ENERJET ⚡" <${process.env.EMAIL_USER}>`, // sender address
                to: `${this.email}, garantiavirtual@corporacionenerjet.com.pe`, // list of receivers
                subject: `${this.name},  ¡es hora de renovar tu batería Enerjet ⚡Tenemos la ideal para ti`, // Subject line
                html: renovacionMail(this.name, this.qr_code, this.service_name, this.service_address, this.purchase_date), // html body
            });

            return {
                status: 'successful',
                message: 'The email was sent',
            }

        } catch (error) {
            return {
                status: 'failed',
                message: 'There was a problem sending the email'
            }
        }

    }

    async completaActivacion() {

        let sendMail;

        try {
            sendMail = await transporter.sendMail({
                from: `"Corporación ENERJET ⚡" <${process.env.EMAIL_USER}>`, // sender address
                to: `${this.email}, garantiavirtual@corporacionenerjet.com.pe`, // list of receivers
                subject: `¡No dejes pasar más tiempo! Activa tu garantía digital y verifica el estado de tu batería en tiempo real.`, // Subject line
                html: completaActivacionMail(this.name, this.service_address, this.CodigoProducto), // html body
            });

            return {
                status: 'successful',
                message: 'The email was sent',
            }

        } catch (error) {
            return {
                status: 'failed',
                message: 'There was a problem sending the email'
            }
        }

    }


}


module.exports = {
    Mailing
}
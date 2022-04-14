const { transporter } = require('./config')
const bienvenidaMail = require('./templates/bienvenida')
const mantenimientoMail = require('./templates/mantenimiento')

class Mailing {
    constructor(
        { name,
            email,
            qr_code,
            service_name,
            service_address,
            purchase_date,
            maintenance_date,
            guarantee
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
    }

    async bienvenida() {

        let sendMail;

        try {
            sendMail = await transporter.sendMail({
                from: `"Corporación ENERJET ⚡" <${process.env.EMAIL_USER}>`, // sender address
                to: `${this.email}, chamblues@gmail.com`, // list of receivers
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
                to: `${this.email}, chamblues@gmail.com`, // list of receivers
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
}


module.exports = {
    Mailing
}
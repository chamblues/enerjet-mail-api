const { transporter } = require('./config')

class Mailing {
    constructor(
        name,
        email,
        qr_code,
        service_name,
        service_address,
        purchase_date,
        maintenance_date,
        guarantee,
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
                subject: "Tu garantía ha sido activada", // Subject line
                html: `<b>Email Bienvenida <br> datos: <br> ${this.name}, ${this.email} </b>`, // html body
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
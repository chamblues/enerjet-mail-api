const { transporter } = require('@app/config')
const bienvenidaMail = require('@app/templates/bienvenida')
const mantenimientoMail = require('@app/templates/mantenimiento')
const recordatorioMail = require('@app/templates/recordatorio')
const perdidaGarantiaMail = require('@app/templates/perdida-garantia')
const renovacionMail = require('@app/templates/renovacion')
const completaActivacionMail = require('@app/templates/completa-activacion')
const CallServicesMail = require('@app/templates/call-services')
const graph = require("@app/graph");

const createEmail = (emailObj) => ({
	subject: emailObj.subject,
	toRecipients: [
		{
			emailAddress: {
				address: emailObj.to,
			},
		},
        
	],
    ccRecipients: [
        {
            emailAddress: {
                address: 'garantiavirtual@corporacionenerjet.com.pe'
            }
        }
    ],
	body: {
		content: emailObj.html,
		contentType: "html",
	},
    from: {
        emailAddress: {
            address: "garantiavirtual@corporacionenerjet.com.pe",
            // name: "Corporación ENERJET ⚡"
        }
    }
});


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
            CodigoProducto,
            ctaHref,
            banner,
            supportEmail
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
        this.ctaHref = ctaHref;
        this.banner = banner;
        this.supportEmail = supportEmail;
    }

    async CallServices(token) {


        try {
            const sendMail = {
                from: "Corporación ENERJET ⚡", // sender address
                to: this.email, // list of receivers
                subject: `Nuevo registro de solicitud de garantía ${this.idSolicitud}`, // Subject line
                html: CallServicesMail(this.idSolicitud, this.Cliente, this.observacion, this.CodigoProducto), // html body
            };

            const emailTemplate = createEmail(sendMail);

            const sendEmailResponse = await graph.sendEmail(token, emailTemplate)

            if(sendEmailResponse !== 'sent') throw new Error ('Something happened sending the email.')

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

    async bienvenida(token) {


        try {
            const sendMail = {
                to: this.email, // list of receivers
                subject: "¡Gracias por unirte a Gardi! Ahora tu garantía es digital 🎉", // Subject line
                html: bienvenidaMail(this.name, this.qr_code, this.ctaHref, this.banner, this.supportEmail), // html body
            };

            const emailTemplate = createEmail(sendMail);

            const sendEmailResponse = await graph.sendEmail(token, emailTemplate)

            if(sendEmailResponse !== 'sent') throw new Error ('Something happened sending the email.')


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

    async mantenimiento(token) {


        try {
            const sendMail = {
                to: this.email, // list of receivers
                subject: "Es hora de darle mantenimiento a tu Batería Enerjet ⚡", // Subject line
                html: mantenimientoMail(this.name, this.qr_code, this.service_name, this.service_address, this.maintenance_date, this.ctaHref), // html body
            };

            const emailTemplate = createEmail(sendMail);

            const sendEmailResponse = await graph.sendEmail(token, emailTemplate)

            if(sendEmailResponse !== 'sent') throw new Error ('Something happened sending the email.')

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

    async recordatorio(token) {

        try {
            const sendMail = {
                to: this.email, // list of receivers
                subject: `${this.name}, ⚠ evita perder tu garantía ⚠ ️ Asiste al mantenimiento de tu batería Enerjet.`, // Subject line
                html: recordatorioMail(this.name, this.qr_code, this.service_name, this.service_address, this.guarantee), // html body
            };

            const emailTemplate = createEmail(sendMail);

            const sendEmailResponse = await graph.sendEmail(token, emailTemplate)

            if(sendEmailResponse !== 'sent') throw new Error ('Something happened sending the email.')

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

    async perdidaGarantia(token) {


        try {
            const sendMail = {
                to: this.email, // list of receivers
                subject: `Tu batería Enerjet ha perdido su garantía. 💔`, // Subject line
                html: perdidaGarantiaMail(this.name, this.qr_code), // html body
            };

            const emailTemplate = createEmail(sendMail);

            const sendEmailResponse = await graph.sendEmail(token, emailTemplate)

            if(sendEmailResponse !== 'sent') throw new Error ('Something happened sending the email.')

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

    async renovacion(token) {


        try {
            const sendMail = {
                from: `"Corporación ENERJET ⚡" <${process.env.EMAIL_USER}>`, // sender address
                to: this.email, // list of receivers
                subject: `${this.name},  ¡es hora de renovar tu batería Enerjet ⚡Tenemos la ideal para ti`, // Subject line
                html: renovacionMail(this.name, this.qr_code, this.service_name, this.service_address, this.purchase_date), // html body
            };

            const emailTemplate = createEmail(sendMail);

            const sendEmailResponse = await graph.sendEmail(token, emailTemplate)

            if(sendEmailResponse !== 'sent') throw new Error ('Something happened sending the email.')

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

    async completaActivacion(token) {

        
        try {
            const sendMail = {
                from: `"Corporación ENERJET ⚡" <${process.env.EMAIL_USER}>`, // sender address
                to: this.email, // list of receivers
                subject: `¡No dejes pasar más tiempo! Activa tu garantía digital y verifica el estado de tu batería en tiempo real.`, // Subject line
                html: completaActivacionMail(this.name, this.service_address, this.CodigoProducto), // html body
            };

            const emailTemplate = createEmail(sendMail);

            const sendEmailResponse = await graph.sendEmail(token, emailTemplate)

            if(sendEmailResponse !== 'sent') throw new Error ('Something happened sending the email.')

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
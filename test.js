
const sendTest = () => {
    const response = fetch("https://enerjet.com.pe/mail/api/gardi/bienvenida", {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify({
            name: 'Christian',
            email: 'christianchangh@gmail.com'
        })
    })

    return response;
}

sendTest()
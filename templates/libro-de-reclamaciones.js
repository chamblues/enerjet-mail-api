const libroDeReclamaciones = (data) => {
	return `
        <!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title>
  </title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
        <noscript>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        </noscript>
        <![endif]-->
  <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    }
  </style>
  <style media="screen and (min-width:480px)">
    .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width: 760px) {
      .xs_center>div {
        text-align: center !important;
      }
  </style>
</head>

<body style="word-spacing:normal;">
  <div style="">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#000000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#000000;background-color:#000000;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                          <tbody>
                            <tr>
                              <td style="width:150px;">
                                <img height="auto" src="https://enerjet.com.pe//mailings/enerjet-logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:14px;" width="150" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
    <!-- <mj-section background-color="#000" background-url="https://enerjet.com.pe//mailings/2022/mailing_mantenimiento/banner.jpg" background-repeat="no-repeat" padding-top="100px" padding-bottom="50px">
      <mj-column>
        
        <mj-text align="center" color="#fff" font-size="16px">
          ¡Hola!
          <br />
          <strong style="font-size:20px ;color:#feee00">{CUSTOM_CLIENTE}</strong>

        </mj-text>

      </mj-column>
    </mj-section> -->
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:20px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="justify" style="font-size:0px;padding:0 15px;word-break:break-word;">
                        <div style="font-family:Verdana, sans-serif;font-size:14px;line-height:1;text-align:justify;color:#252c4b;">
                          <h3 align="left" margin-bottom="10px">Hola hemos recibido tu registro en nuestro libro de reclamaciones </h3>
                          <p>A continuación te mostramos un detalle de la información que nos brindaste:</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#252c4b;font-family:Verdana, sans-serif;font-size:14px;line-height:22px;table-layout:auto;width:100%;border:none;">
                          <tr style="border-bottom:1px solid #ecedee;text-align:left;padding:15px 0;">
                            <th style="padding: 0 15px 0 0;">Detalle</th>
                            <th style="padding: 0 15px;">Información</th>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Nombres:</td>
                            <td style="padding: 0 15px;">${data?.firstname || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Apellidos:</td>
                            <td style="padding: 0 15px;">${data?.lastname || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Email:</td>
                            <td style="padding: 0 15px;">${data?.email || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">DNI:</td>
                            <td style="padding: 0 15px;">${data?.identification || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Nº de Contacto:</td>
                            <td style="padding: 0 15px;">${data?.phone || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Dirección:</td>
                            <td style="padding: 0 15px;">${data?.address || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Departamento:</td>
                            <td style="padding: 0 15px;">${data?.departments || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Provincia:</td>
                            <td style="padding: 0 15px;">${data?.provinces || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Distrito:</td>
                            <td style="padding: 0 15px;">${data?.districts || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Fecha de Incurrencia:</td>
                            <td style="padding: 0 15px;">${data?.incurrence_date || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Menor de edad:</td>
                            <td style="padding: 0 15px;">${data?.underAge || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Nombre Completo del apoderado:</td>
                            <td style="padding: 0 15px;">${data?.fullname_parent || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">DNI Apoderado:</td>
                            <td style="padding: 0 15px;">${data?.identification_parent || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Email apoderado edad:</td>
                            <td style="padding: 0 15px;">${data?.email_parent || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Reclamo o Queja:</td>
                            <td style="padding: 0 15px;">${data?.request_type || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Canal:</td>
                            <td style="padding: 0 15px;">${data?.channel || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Detalle del reclamo:</td>
                            <td style="padding: 0 15px;">${data?.info_detail || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Pedido del reclamo:</td>
                            <td style="padding: 0 15px;">${data?.info_request || ""}</td>
                          </tr>
                          <tr>
                            <td style="padding: 0 15px 0 0;">Fecha de solicitud:</td>
                            <td style="padding: 0 15px;">${data?.created_at || ""}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#0A0B0B" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#0A0B0B;background-color:#0A0B0B;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#0A0B0B;background-color:#0A0B0B;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:5px 10px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:580px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                        <table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#252c4b;font-family:Verdana, sans-serif;font-size:14px;line-height:22px;table-layout:auto;width:100%;border:none;">
                          <table align='center' border='0' cellpadding='0' cellspacing='0'>
                            <tr>
                              <td width="249" height="43" style=" color: #fff; font-size: 10px; font-family: 'Trebuchets MS', sans-serif;"> 2024 Corporación Enerjet. <br /> Todos los Derechos Reservados </td>
                              <td width="73" height="43" style="background-color:#0A0B0B; color: #fff; font-size: 10px; font-family: 'Trebuchets MS', sans-serif;">Síguenos en:</td>
                              <td><a href="https://www.facebook.com/bateriasenerjet" target="_blank">
                                  <img style="display:block; margin: 0; border: 0; min-width:100%; min-height:100%; line-height:100%" name="mailing_mesa_trabajo_28" src="https://www.enerjet.com.pe/mailings/2022/mailing_ibk/mailing_mesa_trabajo_28.png" width="24" height="43" id="mailing_mesa_trabajo_28" alt="" />
                                </a>
                              </td>
                              <td>
                                <a href="https://www.instagram.com/enerjetbaterias" target="_blank">
                                  <img style="display:block; margin: 0; border: 0; min-width:100%; min-height:100%; line-height:100%" name="mailing_mesa_trabajo_29" src="https://www.enerjet.com.pe/mailings/2022/mailing_ibk/mailing_mesa_trabajo_29.png" width="26" height="43" id="mailing_mesa_trabajo_29" alt="" />
                                </a>
                              </td>
                              <td>
                                <a href="https://www.youtube.com/channel/UCSU7DnGR0HfSuf5bjPT-j-w/featured" target="_blank">
                                  <img style="display:block; margin: 0; border: 0; min-width:100%; min-height:100%; line-height:100%" name="mailing_mesa_trabajo_30" src="https://www.enerjet.com.pe/mailings/2022/mailing_ibk/mailing_mesa_trabajo_30.png" width="25" height="43" id="mailing_mesa_trabajo_30" alt="" />
                                </a>
                              </td>
                            </tr>
                          </table>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
  </div>
</body>

</html>
        `;
};


module.exports = libroDeReclamaciones
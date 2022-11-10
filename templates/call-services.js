const CallServicesMail = (idSolicitud, Cliente, observacion, CodigoProducto) => {
    return `<!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
      <title>
      </title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
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
      <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
      </style>
      <!--<![endif]-->
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
        .alto div {
          height: 100px !important;
        }
    
        @media only screen and (max-width: 760px) {
          .text_texto {
            padding: 15px !important;
          }
    
          .text_texto>div {
            font-size: 14px !important;
          }
    
          .text_texto_tyc>div {
            font-size: 10px !important;
          }
        }
      </style>
    </head>
    
    <body style="word-spacing:normal;">
      <div style="">
        <div style="margin:0px auto;max-width:650px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0 0;padding-bottom:0px;padding-top:0px;text-align:center;">
                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                      <tbody>
                        <tr>
                          <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                              <tbody>
                                <tr>
                                     <td style="width:650px;">
                                     <img height="auto" src="https://enerjet.com.pe/mailings/2022/callServices/gardi_logo_rec.png" style="background-color:#0b0b0b;border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="650" />
                                 
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="margin:0px auto;max-width:650px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0 0;text-align:center;background-color:white;">
                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                      <tbody>
                        <tr>
                          <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:18px;line-height:1;text-align:center;color:black;">
                              <h1>Solicitud de Garantía</h1>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="margin:0px auto;max-width:650px;padding:20px">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
              <tr>
            <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;background-color:white;">
            <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1.4;text-align:left;color:black;">Numero de Solicitud <strong>${idSolicitud}</strong></div>
            </td>
              </tr> 
          
              <tr>
            <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;background-color:white;">
            <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1.4;text-align:left;color:black;">El cliente <strong>${Cliente}</strong> ha generado una nueva solicitud de garantía.</div>
            </td>
              </tr> 
          
              <tr>
            <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;background-color:white;">
            <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1.4;text-align:left;color:black;">Observacion: <strong>${observacion}</strong></div>
            </td>
              </tr> 
          
              <tr>
            <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;background-color:white;">
            <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1.4;text-align:left;color:black;">Producto: <strong>${CodigoProducto}</strong></div>
            </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="margin:0px auto;max-width:650px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;text-align:center;background-color:black;">
                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                      <tbody>
                        <tr>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="margin:0px auto;max-width:650px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;text-align:center;background-color:black;">
                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                      <tbody>
                        <tr>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      
      <div style="margin:0px auto;max-width:650px;padding-top:30px;background-color:white;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0 0;text-align:center;background-color:white;">
                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                      <tbody>
                        <tr>
                          <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                              <tr>
                                <td align="center" bgcolor="#ffde00" role="presentation" style="border:none;border-radius:20px;cursor:auto;mso-padding-alt:10px 25px;background:#ffde00;" valign="middle">
                                  <a href="http://172.17.1.13:8078/Servicio/MantenimientoSolicitudGarantia_Consultar?Solicitud=${idSolicitud}" style="display:inline-block;background:#ffde00;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;font-weight:700;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:20px;" target="_blank"> Revisar solicitud de garantía </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:650px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;background-color:black;">
                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                      <tbody>
                        <tr>
                          <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                            <table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none;">
                              <table align='center' border='0' cellpadding='0' cellspacing='0'>
                                <tr align='center'>
                                  <td width="249" height="43" style=" color:#000000; font-size: 16px; font-family: 'Trebuchets MS', sans-serif;">
                                    <a href="https://www.enerjet.com.pe/"target="_blank">www.enerjet.com.pe</a>
                                  </td>
                                </tr>
                              </table>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </body>
    
    </html>`
}

module.exports = CallServicesMail
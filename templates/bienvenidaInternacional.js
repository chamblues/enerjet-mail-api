const bienvenidaMail = (name, qr_code, ctaHref, banner = "https://enerjet.com.pe/mailings/2022/gardi_bienvenida/banner.jpg", supportEmail) => {
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
	  <!--[if !mso]><!-->
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
	
		  .mj-column-per-33-333333333333336 {
			width: 33.333333333333336% !important;
			max-width: 33.333333333333336%;
		  }
		}
	  </style>
	  <style media="screen and (min-width:480px)">
		.moz-text-html .mj-column-per-100 {
		  width: 100% !important;
		  max-width: 100%;
		}
	
		.moz-text-html .mj-column-per-33-333333333333336 {
		  width: 33.333333333333336% !important;
		  max-width: 33.333333333333336%;
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
		  height: 150px !important;
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
		<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:595px;" width="595" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		<div style="margin:0px auto;max-width:595px;">
		  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
			<tbody>
			  <tr>
				<td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;text-align:center;">
				  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:595px;" ><![endif]-->
				  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
					<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:25px solid #000;vertical-align:top;" width="100%">
					  <tbody>
						<tr>
						  <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
							<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
							  <tbody>
								<tr>
								  <td style="width:595px;">
									<img height="auto" src="${banner}" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="595" />
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
		<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:595px;" width="595" bgcolor="#eaeaea" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		<div style="background:#eaeaea;background-color:#eaeaea;margin:0px auto;max-width:595px;">
		  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#eaeaea;background-color:#eaeaea;width:100%;">
			<tbody>
			  <tr>
				<td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
				  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:595px;" ><![endif]-->
				  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
					<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
					  <tbody>
						<tr>
						  <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
							<div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#000000;">
							  <h1>Congratulations ${name}!</h1> We confirm that the DIGITAL WARRANTY for your Enerjet  battery  ${qr_code} has been successfully activated. Here are the benefits of using Gardi along with our terms and conditions.
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
		<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:595px;" width="595" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		<div style="margin:0px auto;max-width:595px;">
		  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
			<tbody>
			  <tr>
				<td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
				  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:595px;" ><![endif]-->
				  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
					<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
					  <tbody>
						<tr>
						  <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
							<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
							  <tr>
								<td align="center" bgcolor="transparent" role="presentation" style="border:2px solid #333;border-radius:15px;cursor:auto;mso-padding-alt:10px 25px;background:transparent;" valign="middle">
								  <p style="display:inline-block;background:transparent;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:19px;font-weight:700;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:15px;"> Discover all you can accomplish with Gardi </p>
								</td>
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
		<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:595px;" width="595" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		<div style="margin:0px auto;max-width:595px;">
		  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
			<tbody>
			  <tr>
				<td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
				  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:198.33333333333337px;" ><![endif]-->
				  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
					<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
					  <tbody>
						<tr>
						  <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:0px;word-break:break-word;">
							<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
							  <tbody>
								<tr>
								  <td style="width:96px;">
									<img height="auto" src="https://enerjet.com.pe/mailings/2022/gardi_bienvenida/paso-1.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="96" />
								  </td>
								</tr>
							  </tbody>
							</table>
						  </td>
						</tr>
						<tr>
						  <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
							<div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#000000;">Monitor the battery status in real-time.</div>
						  </td>
						</tr>
					  </tbody>
					</table>
				  </div>
				  <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:198.33333333333337px;" ><![endif]-->
				  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
					<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
					  <tbody>
						<tr>
						  <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:0px;word-break:break-word;">
							<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
							  <tbody>
								<tr>
								  <td style="width:96px;">
									<img height="auto" src="https://enerjet.com.pe/mailings/2022/gardi_bienvenida/paso-2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="96" />
								  </td>
								</tr>
							  </tbody>
							</table>
						  </td>
						</tr>
						<tr>
						  <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
							<div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#000000;">Receive reminders based on battery lifespan</div>
						  </td>
						</tr>
					  </tbody>
					</table>
				  </div>
				  <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:198.33333333333337px;" ><![endif]-->
				  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
					<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
					  <tbody>
						<tr>
						  <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:0px;word-break:break-word;">
							<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
							  <tbody>
								<tr>
								  <td style="width:96px;">
									<img height="auto" src="https://enerjet.com.pe/mailings/2022/gardi_bienvenida/paso-3.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="96" />
								  </td>
								</tr>
							  </tbody>
							</table>
						  </td>
						</tr>
						<tr>
						  <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
							<div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#000000;">Access the history of inspections and/or maintenance</div>
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
		<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:595px;" width="595" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		<div style="margin:0px auto;max-width:595px;">
		  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
			<tbody>
			  <tr>
				<td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
				  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:595px;" ><![endif]-->
				  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
					<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
					  <tbody>
						<tr>
						  <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
							<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
							  <tbody>
								<tr>
								  <td style="width:350px; text-align:center;font-size:17px">
									<a href="${ctaHref}" target="_blank" style="display:inline-block;background:#ffed00;color:#000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:17px;font-weight:bold;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:7px 25px;mso-padding-alt:0px;border-radius:30px;">Review your battery portal</a>
								  </td>
								</tr>
							  </tbody>
							</table>
						  </td>
						</tr>
						<tr>
						  <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
							<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
							  <tr>
								<td align="center" bgcolor="#dddddd" role="presentation" style="border:none;border-radius:20px;cursor:auto;mso-padding-alt:10px 25px;background:#dddddd;" valign="middle">
								  <p style="display:inline-block;background:#dddddd;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:20px;"> Do you need assistance with anything? </p>
								</td>
							  </tr>
							</table>
						  </td>
						</tr>
						<tr>
						  <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
							<div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#000000;"><a href="mailto:${supportEmail}" style="color: #000">${supportEmail}</a></div>
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
		<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:595px;" width="595" bgcolor="#000000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
		<div style="background:#000000;background-color:#000000;margin:0px auto;max-width:595px;">
		  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
			<tbody>
			  <tr>
				<td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
				  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:595px;" ><![endif]-->
				  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
					<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
					  <tbody>
						<tr>
						  <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
							<table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none;">
							  <table align='center' border='0' cellpadding='0' cellspacing='0'>
								<tr>
								  <td width="249" height="43" style=" color: #fff; font-size: 10px; font-family: 'Trebuchets MS', sans-serif;">
									<img width="65px" padding="0px" src="https://enerjet.com.pe/mailings/2022/gardi_bienvenida/enerjet.png" />
								  </td>
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

module.exports = bienvenidaMail;

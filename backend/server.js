import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	},
});

const sendEmail = (name, email, info, key) => {
	transport.sendMail({
					from: process.env.MAIL_USER,
					to: "as453196@gmail.com",
					subject: "You added an asset",
					html: `<h1>Asset Added</h1>
		  <h2>Hello </h2>
		  <p>Thank you for adding an asset.</p>`,
				})
				.catch((err) => console.log(err));
};

export { sendEmail };
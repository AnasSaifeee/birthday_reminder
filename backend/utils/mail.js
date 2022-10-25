import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

const transport = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

const sendEmail = (recieverName, recieverEmail, birthdayPersonName) => {
	console.log(2, recieverName, recieverEmail, birthdayPersonName);
	transport
		.sendMail({
			from: process.env.EMAIL,
			to: recieverEmail,
			subject: `CyPsi Birthday Notification`,
			html: `It is ${birthdayPersonName}'s birthday today,wish them a very happy bdday ka`,
		})
		.catch((err) => console.log(err));
};

export { sendEmail };

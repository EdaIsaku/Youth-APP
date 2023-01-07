import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
import twilio from "twilio";
dotenv.config();

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const SERVICE_SID = process.env.SERVICE_SID;
const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

const app: Express = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) =>
  res.send("Welcome to Verfication service!")
);

app.post("/message", (req: Request, res: Response) => {
  client.messages
    .create({
      messagingServiceSid: "MG2a5ba5daea4a50536439c4ce291fa436",
      body: req.body.body,
      to: req.body.to,
    })
    .then((message) => {
      res.send({
        msg: message,
        success: true,
      });
    })
    .catch((error) => {
      res.send({
        msg: error,
        success: false,
      });
    });
});

app.post("/verify/:to", (req: Request, res: Response) => {
  const { to } = req.params;
  if (SERVICE_SID) {
    client.verify.v2
      .services(SERVICE_SID)
      .verifications.create({ to, channel: "sms" })
      .then((verification) => res.json(verification))
      .catch((error) => {
        res.json(error);
      });
  }
});

app.post("/check/:to/:code", (req: Request, res: Response) => {
  const { to, code } = req.params;
  if (SERVICE_SID) {
    client.verify
      .services(SERVICE_SID)
      .verificationChecks.create({ to, code })
      .then((verification) => {
        res.json(verification);
      })
      .catch((err) => {
        res.json(err);
      });
  }
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING AT PORT: ${PORT}`);
});

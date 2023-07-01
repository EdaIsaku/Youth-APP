import { VerifyNumber } from "../components/VerifyNumber";
import { PhoneNumber } from "../components/PhoneNumber";
import { IMAGES } from "./images";

type Slide = {
  key: number;
  appName?: string;
  title?: string;
  text?: string;
  image?: any;
  component?: any;
  code?: any;
};

const SLIDES: Slide[] = [
  {
    key: 1,
    appName: "Youth",
    text: "Concerts, exhibitions, free/paid events - you will found out where they are and how to get there. Also, using our application, you can buy ticket for any event.",
    image: IMAGES.intro_2,
  },
  {
    key: 2,
    title: "Explore & get Notified",
    text: "Get access to the latest events and regular update by allowing notification service.",
    image: IMAGES.intro_1,
  },
  {
    key: 3,
    title: "Sign Up",
    text: "Register using your mobile phone. It will save a lot of time for new events to make easy payments. After verification you can go to main page and start your adventure!",
    image: IMAGES.intro_3,
  },
  {
    key: 4,
    title: "Enter phone number",
    text: "We will send you a One Time SMS message",
    component: <PhoneNumber />,
  },
  {
    key: 5,
    title: "Verification Code",
    text: "Please type the verification code sent to your phone number.",
    component: <VerifyNumber />,
  },
];

export { SLIDES };

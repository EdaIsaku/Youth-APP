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
    title: "Welcome !",
    text: "Youth-APP is designed to fulfill every need in your next important event.",
    image: IMAGES.intro_1,
  },
  {
    key: 2,
    title: "Explore & get notifications.",
    text: "You will get access to the popular events & regular update by notifications.",
    image: IMAGES.intro_2,
  },
  {
    key: 3,
    title: "Pay and go!",
    text: "Register with your phone number to be able to fill it with points and buy while enjoying the show!",
    image: IMAGES.intro_3,
  },
  {
    key: 4,
    title: "Enter phone number",
    text: "You will receive a code via SMS on this mobile number",
    component: <PhoneNumber />,
  },
  {
    key: 5,
    title: "Verification",
    text: "Please enter the 4-digit code we send to your phone number.",
    component: <VerifyNumber />,
  },
];

export { SLIDES };

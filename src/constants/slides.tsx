import { PhoneNumber } from "../components/PhoneNumber";

type Slide = {
  key: number;
  appName?: string;
  title: string;
  text?: string;
  image?: any;
  component?: any;
};

const SLIDES: Slide[] = [
  {
    key: 1,
    appName: "Youth",
    title: "Welcome!",
    text: "Youth-APP is designed to fulfill every need in your next important event.",
    image: require("../../assets/images/1.jpg"),
  },
  {
    key: 2,
    title: "Explore & get notifications.",
    text: "You will get access to the popular events & regular update by notifications.",
    image: require("../../assets/images/2.jpg"),
  },
  {
    key: 3,
    title: "Pay and go!",
    text: "Register with your phone number to be able to fill it with points and buy while enjoying the show!",
    image: require("../../assets/images/pay.jpg"),
  },
  {
    key: 4,
    title: "Enter your number and start YOUTH journey!",
    component: <PhoneNumber />,
  },
];

export { SLIDES };

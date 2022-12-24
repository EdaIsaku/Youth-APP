type Slide = {
  key: number;
  appName?: string;
  title: string;
  text?: string;
  image: any;
  // backgroundColor?: string;
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
    title: "Explore top events & get notified about them.",
    text: "You will get access to the popular events & regular update by notifications.",
    image: require("../../assets/images/2.jpg"),
  },
  {
    key: 3,
    title: "Pay and go!",
    text: "Register with your phone number to be able to fill it with points and buy while enjoying the show!",
    image: require("../../assets/images/pay.jpg"),
  },
];

export { SLIDES };

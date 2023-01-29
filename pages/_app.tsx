import "../styles/globals.css";
import type { AppProps } from "next/app";

import dayjs from "dayjs";

import isLeapYear from "dayjs/plugin/isLeapYear"; // import plugin
import "dayjs/locale/ko"; // import locale

dayjs.extend(isLeapYear); // use plugin
dayjs.locale("ko"); // use locale

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

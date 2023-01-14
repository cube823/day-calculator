// import Image from "next/image";
// import styles from "styles/Home.module.css";
import Head from "next/head";
import HomeComponent from "components/pages/Home";
import dayjs from "dayjs";

import isLeapYear from "dayjs/plugin/isLeapYear"; // import plugin
import "dayjs/locale/ko"; // import locale

dayjs.extend(isLeapYear); // use plugin
dayjs.locale("ko"); // use locale

export default function Home() {
  return (
    <>
      <Head>
        <title>날짜 계산기</title>
        <meta name="description" content="Generated by minky" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <HomeComponent />
    </>
  );
}

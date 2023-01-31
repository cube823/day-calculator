import { Inter } from "@next/font/google";
import DateMinusDate from "components/pages/Home/DateMinusDate";
import ReferenceDate from "components/pages/Home/ReferenceDate";
import Today from "components/pages/Home/Today";
import { BColor } from "components/ui/atoms/BColor";
import BFlex from "components/ui/atoms/BFlex";
import BTypography from "components/ui/atoms/BTypography";
import dayjs from "dayjs";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import styled from "styled-components";

import { ResponsivePie } from "@nivo/pie";

// TODO: 고ㅇ휴일 api 가져오기 추가하기
const data = [
  {
    id: "lisp",
    label: "lisp",
    value: 330,
    color: "hsl(114, 70%, 50%)",
  },
  {
    id: "elixir",
    label: "elixir",
    value: 477,
    color: "hsl(48, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 229,
    color: "hsl(350, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 89,
    color: "hsl(202, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 205,
    color: "hsl(13, 70%, 50%)",
  },
];

const D_DAY_CALCULATOR_TEXT = "디데이 계산기";
const UNTIL_TODAY_DAYS_COUNT = dayjs().diff(
  `${dayjs().year() - 1}-12-31`,
  "days"
);

const ALL_DAYS_COUNT = dayjs().isLeapYear() ? 366 : 365;
console.log(UNTIL_TODAY_DAYS_COUNT);

const inter = Inter({ subsets: ["latin"] });
const today = new Intl.DateTimeFormat("ko", { dateStyle: "full" });
const daysPlaceholder = "100";
const datePlaceholder = dayjs(new Date())
  .format("YYYY/MM/DD")
  .replaceAll("/", "");

const HomeComponent = () => {
  const [fromNowOnDays, setFromNowOnDays] = useState(100);
  const [referenceDate, setReferenceDate] = useState(0);
  const [fromReferenceDateOnDays, setFromReferenceDateOnDays] = useState(100);

  const onChangeFromNowOnDays = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const numerableDate = parseInt(e.currentTarget.value, 10);
      if (!Number.isNaN(numerableDate)) {
        setFromNowOnDays(numerableDate);
      } else {
        setFromNowOnDays(0);
      }
    },
    []
  );

  const onChangeReferenceDate = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const numerableDate = parseInt(e.currentTarget.value, 10);
      if (!Number.isNaN(numerableDate)) {
        setReferenceDate(numerableDate);
      } else {
        setReferenceDate(0);
      }
    },
    []
  );

  const onChangeFromReferenceDateOnDays = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const numerableDate = parseInt(e.currentTarget.value, 10);
      if (!Number.isNaN(numerableDate)) {
        setFromReferenceDateOnDays(numerableDate);
      } else {
        setFromReferenceDateOnDays(0);
      }
    },
    []
  );

  const targetDate = useMemo(() => {
    if (!Number.isNaN(fromNowOnDays)) {
      return dayjs(new Date())
        .add(fromNowOnDays, "days")
        .format("YYYY. MM. DD.")
        .replace(".", "년")
        .replace(".", "월")
        .replace(".", "일");
    }

    return "";
  }, [fromNowOnDays]);

  const targetReferenceDate = useMemo(() => {
    if (!Number.isNaN(fromReferenceDateOnDays)) {
      return dayjs(new Date())
        .add(fromReferenceDateOnDays, "days")
        .format("YYYY. MM. DD.")
        .replace(".", "년")
        .replace(".", "월")
        .replace(".", "일");
    }

    return "";
  }, [fromReferenceDateOnDays]);

  return (
    <MainContainer className={inter.className}>
      <HeaderComponent>
        <BTypography
          text={D_DAY_CALCULATOR_TEXT}
          size={20}
          color="mono08"
          isBold
        />
      </HeaderComponent>

      <ContentComponent>
        <BTypography
          text={`오늘은 ${today.format()} 입니다.`}
          color="mono08"
          size={20}
        />

        <BTypography
          text={`${dayjs().year()}년은 ${(
            (UNTIL_TODAY_DAYS_COUNT / ALL_DAYS_COUNT) *
            100
          ).toFixed(2)}% 지났습니다.`}
          color="mono08"
          size={20}
        />

        <BFlex>
          <ResponsivePie
            data={data}
            // margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "ruby",
                },
                id: "dots",
              },
              {
                match: {
                  id: "c",
                },
                id: "dots",
              },
              {
                match: {
                  id: "go",
                },
                id: "dots",
              },
              {
                match: {
                  id: "python",
                },
                id: "dots",
              },
              {
                match: {
                  id: "scala",
                },
                id: "lines",
              },
              {
                match: {
                  id: "lisp",
                },
                id: "lines",
              },
              {
                match: {
                  id: "elixir",
                },
                id: "lines",
              },
              {
                match: {
                  id: "javascript",
                },
                id: "lines",
              },
            ]}
            // legends={[
            //   {
            //     anchor: "bottom",
            //     direction: "row",
            //     justify: false,
            //     translateX: 0,
            //     translateY: 56,
            //     itemsSpacing: 0,
            //     itemWidth: 100,
            //     itemHeight: 18,
            //     itemTextColor: "#999",
            //     itemDirection: "left-to-right",
            //     itemOpacity: 1,
            //     symbolSize: 18,
            //     symbolShape: "circle",
            //     effects: [
            //       {
            //         on: "hover",
            //         style: {
            //           itemTextColor: "#000",
            //         },
            //       },
            //     ],
            //   },
            // ]}
          />
        </BFlex>

        <BFlex isColumn gap={8}>
          <Today
            fromNowOnDays={fromNowOnDays}
            onChangeFromNowOnDays={onChangeFromNowOnDays}
            daysPlaceholder={daysPlaceholder}
            targetDate={targetDate}
          />

          <ReferenceDate
            referenceDate={referenceDate}
            onChangeReferenceDate={onChangeReferenceDate}
            fromReferenceDateOnDays={fromReferenceDateOnDays}
            onChangeFromReferenceDateOnDays={onChangeFromReferenceDateOnDays}
            targetReferenceDate={targetReferenceDate}
            daysPlaceholder={daysPlaceholder}
            datePlaceholder={datePlaceholder}
          />
          <DateMinusDate />
        </BFlex>
      </ContentComponent>
      <FooterComponent>
        <address>
          <BTypography
            text="copyright to minky yoon"
            size={16}
            color="mono08"
          />
        </address>
      </FooterComponent>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;

  background-color: ${BColor.mono01};

  // @media (max-width: 960px) {
  //   align-items: flex-start;
  // }
`;

const HeaderComponent = styled.header`
  display: flex;
  width: 100%;
  height: 3rem;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.2);
  background-color: ${BColor.mono02};
`;

const ContentComponent = styled.section`
  display: flex;
  flex-direction: column;
  // width: 960px;
  flex-wrap: wrap;
  min-height: calc(100vh - 5rem);
  align-items: center;
  gap: 1rem;
`;

const FooterComponent = styled.footer`
  display: flex;
  height: 2rem;
`;

export default HomeComponent;

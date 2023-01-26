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

// TODO: 고ㅇ휴일 api 가져오기 추가하기

const D_DAY_CALCULATOR_TEXT = "디데이 계산기";

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

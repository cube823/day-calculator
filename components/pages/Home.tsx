import { Inter } from "@next/font/google";
import BFlex from "components/ui/atoms/BFlex";
import BTextInput from "components/ui/atoms/BTextInput";
import BTypography from "components/ui/atoms/BTypography";
import dayjs from "dayjs";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import styled from "styled-components";

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

  console.log("targetDate", targetDate);

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

        <BFlex isColumn>
          <BFlex alignItems="center" gap={8}>
            <BTypography text={"오늘로부터"} size={20} color="mono08" isBold />
            <BTextInput
              textInputSizeType={"md"}
              value={fromNowOnDays}
              onChange={onChangeFromNowOnDays}
              type={"text"}
              width={240}
              placeholder={daysPlaceholder}
              isFullTextInputWidth
            />
            <BTypography
              text={"일 째 되는 날은?"}
              size={20}
              color="mono08"
              isBold
            />
            <BTypography text={targetDate} size={20} color="mono08" isBold />
          </BFlex>

          <BFlex alignItems="center" gap={8}>
            <BTypography
              text={"기준일"}
              size={20}
              color="mono08"
              isBold
              justNoWrap
            />
            <BTextInput
              textInputSizeType={"md"}
              value={
                referenceDate > 10_000_000
                  ? dayjs(`${referenceDate}`).format("YYYY. MM. DD")
                  : referenceDate || ""
              }
              onChange={onChangeReferenceDate}
              type={"text"}
              width={240}
              placeholder={datePlaceholder}
              isFullTextInputWidth
            />
            <BTypography
              text={"로 부터"}
              size={20}
              color="mono08"
              isBold
              justNoWrap
            />
            <BTextInput
              textInputSizeType={"md"}
              value={fromReferenceDateOnDays}
              onChange={onChangeFromReferenceDateOnDays}
              type={"text"}
              width={240}
              placeholder={daysPlaceholder}
              isFullTextInputWidth
            />
            <BTypography
              text={"일 째 되는 날은?"}
              size={20}
              color="mono08"
              isBold
              justNoWrap
            />
            <BTypography
              text={targetReferenceDate}
              justNoWrap
              size={20}
              color="mono08"
              isBold
            />
          </BFlex>
        </BFlex>
      </ContentComponent>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;

  background-color: var(--background-start-rgb);

  @media (max-width: 960px) {
    align-items: flex-start;
  }
`;

const HeaderComponent = styled.header`
  display: flex;
  width: 100%;
  height: 3rem;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.2);
`;

const ContentComponent = styled.div`
  display: flex;
  flex-direction: column;
  // width: 960px;
  flex-wrap: wrap;
  min-height: calc(100vh - 3rem);
  align-items: center;
  gap: 1rem;
`;

export default HomeComponent;

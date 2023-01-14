import { Inter } from "@next/font/google";
import { BColor } from "components/ui/atoms/BColor";
import BFlex from "components/ui/atoms/BFlex";
import BTextInput from "components/ui/atoms/BTextInput";
import BTypography from "components/ui/atoms/BTypography";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const today = new Intl.DateTimeFormat("ko-KR").format();

const D_DAY_CALCULATOR_TEXT = "디데이 계산기";
const FROM_NOW_ON_TEXT = "오늘로부터 며칠인지 계산";

const HomeComponent = () => {
  const [fromNowOnDate, setFromNowOnDate] = useState("");

  const onChangeFromNowOnDate = (e: ChangeEvent<HTMLInputElement>) => {
    setFromNowOnDate(e.currentTarget.value);
  };

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
        <BFlex>{today}</BFlex>

        <BFlex>
          <BTypography
            text={FROM_NOW_ON_TEXT}
            size={20}
            color="mono08"
            isBold
          />

          <BFlex>
            <BTextInput
              textInputSizeType={"lg"}
              value={fromNowOnDate}
              onChange={onChangeFromNowOnDate}
              type={"text"}
              placeholder={"예: "}
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
  width: 960px;
  min-height: calc(100vh - 3rem);
  // background-color: ${BColor.primary01};
  gap: 1rem;
`;

export default HomeComponent;

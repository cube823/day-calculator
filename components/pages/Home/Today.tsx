import BFlex from "components/ui/atoms/BFlex";
import BTextInput from "components/ui/atoms/BTextInput";
import BTypography from "components/ui/atoms/BTypography";
import { ChangeEvent } from "react";
import styled from "styled-components";

interface TodayProps {
  fromNowOnDays: number;
  onChangeFromNowOnDays: (e: ChangeEvent<HTMLInputElement>) => void;
  daysPlaceholder: string;
  targetDate: string;
}

const Today = ({
  fromNowOnDays,
  onChangeFromNowOnDays,
  targetDate,
  daysPlaceholder,
}: TodayProps) => {
  return (
    <TodayContainer>
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
      <BTypography text={"일 째 되는 날은?"} size={20} color="mono08" isBold />
      <BTypography text={targetDate} size={20} color="mono08" isBold />
    </TodayContainer>
  );
};

const TodayContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export default Today;

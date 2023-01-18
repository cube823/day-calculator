import BFlex from "components/ui/atoms/BFlex";
import BTextInput from "components/ui/atoms/BTextInput";
import BTypography from "components/ui/atoms/BTypography";
import dayjs from "dayjs";
import { ChangeEvent } from "react";

interface ReferenceDateProps {
  referenceDate: number;
  onChangeReferenceDate: (e: ChangeEvent<HTMLInputElement>) => void;
  fromReferenceDateOnDays: number;
  onChangeFromReferenceDateOnDays: (e: ChangeEvent<HTMLInputElement>) => void;
  targetReferenceDate: string;
  daysPlaceholder: string;
  datePlaceholder: string;
}

const ReferenceDate = ({
  referenceDate,
  onChangeReferenceDate,
  fromReferenceDateOnDays,
  onChangeFromReferenceDateOnDays,
  targetReferenceDate,
  daysPlaceholder,
  datePlaceholder,
}: ReferenceDateProps) => {
  return (
    <BFlex alignItems="center" gap={8}>
      <BTypography text={"기준일"} size={20} color="mono08" isBold justNoWrap />
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
  );
};

export default ReferenceDate;

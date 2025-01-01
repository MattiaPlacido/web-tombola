import { useNumberContext } from "../contexts/NumbersContext";
import NumberedButton from "../components/NumberedButton";

export default function ButtonList() {
  const { numbersData } = useNumberContext();
  const { boxesNumber } = numbersData;
  const buttons = Array(boxesNumber).fill(null);

  return (
    <>
      {buttons.map((_, index) => (
        <NumberedButton key={index} number={index + 1} />
      ))}
    </>
  );
}

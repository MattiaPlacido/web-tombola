import { useNumberContext } from "../contexts/NumbersContext";
import NumberedButton from "../components/NumberedButton";

export default function ButtonList() {
  const { numbersData } = useNumberContext();
  const { nMax } = numbersData;
  const buttons = Array(nMax).fill(null);

  return (
    <>
      {buttons.map((_, index) => (
        <NumberedButton key={index} number={index + 1} />
      ))}
    </>
  );
}

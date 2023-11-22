import useStore from "../../../contex";
import TextArea from "../../textArea";
import { Animated } from "react-animated-css";

const FirstStep = () => {
  const setValueStep = useStore((state: any) => state.setValueStep);
  const step = useStore((state: any) => state.step);
  return (
    <div>
      <TextArea callBack={(e) => setValueStep(e.target.value)}></TextArea>
    </div>
  );
};

export default FirstStep;

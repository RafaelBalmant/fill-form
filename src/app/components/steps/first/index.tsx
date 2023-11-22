import useStore from "../../../contex";
import Question from "../../question";
import TextArea from "../../textArea";
import { Container } from "../styles";

const FirstStep = () => {
  const setValueStep = useStore((state: any) => state.setValueStep);
  const step = useStore((state: any) => state.step);
  return (
    <Container visible={step === 0 || false} className="w-100 h-64">
      <Question
        question="Quais são os principais sintomas da amnésia e como ela pode afetar a
        vida cotidiana das pessoas que a experimentam?"
      />
      <TextArea onChange={(e: any) => setValueStep(e.target.value)}></TextArea>
    </Container>
  );
};

export default FirstStep;

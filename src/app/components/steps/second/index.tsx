import useStore from "../../../contex";
import Input from "../../input";
import Question from "../../question";
import { Container } from "../styles";

const SecondStep = () => {
  const setValueStep = useStore((state: any) => state.setValueStep);
  const step = useStore((state: any) => state.step);
  return (
    <Container visible={step === 1 || false}>
      <Question question="ti ti ti ti fu quantos de fu deram?" />
      <Input
        onChange={(e) => setValueStep(e.target.value)}
        className="rounded-sm bg-slate-300 border-2 border-gray-400 w-100 h-10 p-2"
      />
    </Container>
  );
};

export default SecondStep;

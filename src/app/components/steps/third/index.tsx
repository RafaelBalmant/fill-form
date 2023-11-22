import { useCallback, useRef } from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import useStore from "../../../contex";
import { Container } from "../styles";
import Question from "../../question";
import Button from "../../button";

const ThirdStep = () => {
  const setData = useStore((state: any) => state.setData);
  const step = useStore((state: any) => state.step);
  const sigCanvas: any = useRef({});
  const sigPad = useRef({});
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      sigCanvas.current = node.getCanvas();
      sigPad.current = node.getSignaturePad();
    }
  }, []);

  const setSignatureOnChange = () => {
    const dataURL = sigCanvas.current.toDataURL();
    setData(dataURL);
  };
  return (
    <Container visible={step === 2 || false}>
      <Question question="Voce concorda com todos os termos de uso" />
      <ReactSignatureCanvas
        ref={measuredRef}
        penColor="black"
        backgroundColor="white"
        canvasProps={{ width: 300, height: 200, className: "sigCanvas" }}
      />
      <div className="w-full flex justify-end">
        <Button callback={setSignatureOnChange} width="w-max">
          Confirmar
        </Button>
      </div>
    </Container>
  );
};

export default ThirdStep;

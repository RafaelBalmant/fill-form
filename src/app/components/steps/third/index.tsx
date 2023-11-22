import { useCallback, useRef } from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import useStore from "../../../contex";

const ThirdStep = () => {
  const setData = useStore((state: any) => state.setData);
  const sigCanvas = useRef({});
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
    <div>
      <h1>Third Step</h1>
      <ReactSignatureCanvas
        ref={measuredRef}
        penColor="green"
        backgroundColor="gray"
        canvasProps={{ width: 300, height: 200, className: "sigCanvas" }}
      />
      <button
        type="submit"
        className="rounded-md bg-blue-500 text-white px-4 py-2 m-109"
        onClick={setSignatureOnChange}
      >
        Confirmar
      </button>
    </div>
  );
};

export default ThirdStep;

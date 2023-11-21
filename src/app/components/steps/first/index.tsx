import useStore from "../../../contex";

const FirstStep = () => {
  const setValueStep = useStore((state: any) => state.setValueStep);
  return (
    <div>
      <h1>First Step</h1>
      <input
        type="text"
        onChange={(e) => setValueStep(e.target.value)}
        className="rounded-sm bg-slate-300 border-2 border-gray-400 w-100 h-10 p-2"
      />
    </div>
  );
};

export default FirstStep;

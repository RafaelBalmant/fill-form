const TextArea = ({ callBack }) => {
  return (
    <div>
      <textarea
        onChange={callBack}
        placeholder="Digite sua resposta"
        className="w-full rounded-md p-2  mx-2 
        bg-lavender-indigo text-white focus:outline-none
         placeholder-indigo-50 border-2 border-dull-lavender"
      />
    </div>
  );
};

export default TextArea;

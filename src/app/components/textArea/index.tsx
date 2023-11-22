const TextArea = ({ callBack }) => {
  return (
    <div className="mt-2">
      <label className="text-white text-xl ml-2 bg-connecticut-lilac font-bold p-2 rounded-md">
        Resposta
      </label>
      <textarea
        onChange={callBack}
        placeholder="Digite sua resposta"
        className="w-90 rounded-b-lg p-2  mx-2 
        bg-connecticut-lilac text-white focus:outline-none
         placeholder-indigo-50 shadow-sm"
      />
    </div>
  );
};

export default TextArea;

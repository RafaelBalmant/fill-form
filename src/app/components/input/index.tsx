const Input = (props) => {
  return (
    <div>
      <input
        {...props}
        placeholder="Digite sua resposta"
        className="w-full h-full rounded-md p-2
        bg-lavender-indigo text-white focus:outline-none
         placeholder-indigo-50 border-2 border-dull-lavender"
      />
    </div>
  );
};

export default Input;

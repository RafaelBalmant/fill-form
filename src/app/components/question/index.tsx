const Question = ({question}: {question: string}) => {
  return (
    <div className="mb-2">
      <p className="text-lavender-indigo font-extrabold font-poppins text-lg">
          {question}
      </p>
    </div>
  );
};

export default Question;

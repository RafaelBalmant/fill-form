const Button = ({ callback, children, width }: any) => {
  return (
    <button
      type="submit"
      className={`rounded-md bg-bluish-purple border-solid border-2 border-lavender-indigo ease-in-out duration-300 text-white px-4 py-2 m-10 ${width}`}
      onClick={callback}
    >
      <span className="tracking-wide font-bold uppercase">{children}</span>
    </button>
  );
};

export default Button;

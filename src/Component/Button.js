const Button = ({ onClickHandler, value, title }) => {
  return (
    <>
      <button onClick={onClickHandler} value={value} className="btnss">
        {title}
      </button>
    </>
  );
};

export default Button;

import Button from "../Component/Button";

const Recommend = ({ handleClick }) => {
  return (
    <>
      <div>
        <div className="recommended-flex">
          <Button
            onClickHandler={handleClick}
            value="ALL"
            title="All Products"
          />
          <Button onClickHandler={handleClick} value="Chair" title="Chair" />
          <Button onClickHandler={handleClick} value="Living" title="Living" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommend;

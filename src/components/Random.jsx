function Random(props) {
  const randomNumber =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

  return (
    <div className="randomContainer">
      <p>
        Random value between {props.min} and {props.max} = {randomNumber}
      </p>
    </div>
  );
}

export default Random;
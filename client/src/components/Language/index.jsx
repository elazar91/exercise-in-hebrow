import "./lang.css";

const Language = (props) => {
  return (
    <div className="lang-ticket" onClick={() => props.click(props.id)}>
      <img src={props.icon} alt="icon" />
      <div>{props.name}</div>
    </div>
  );
};

export default Language;

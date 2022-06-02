export default function Balance(props) {
  return (
    <div className="balance">
      <p>{props.data.cardname}</p>
      <p>Total Balance</p>
      <div
        style={{
          border: "1px solid #ccc",
          width: "100%",
          height: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f00",
            width: `${(props.data.usebalance / props.data.cardlimit) * 100}%`,
            height: "28px",
            transition: "ease 1s",
          }}
        ></div>
      </div>

      <div className="valuebalance">
        <p>R$ {props.data.usebalance}</p>
        <p>R$ {props.data.cardlimit}</p>
      </div>
    </div>
  );
}

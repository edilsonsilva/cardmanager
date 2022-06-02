export default function Balance(props) {
  return (
    <div className="balance">
      <p>{props.data.cardname}</p>
      <p>{props.data.usebalance}</p>
      <p>{props.data.cardlimit}</p>
    </div>
  );
}

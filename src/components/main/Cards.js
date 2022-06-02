export default function Cards(props) {
  const passarDados = (pr) => {
    props.action(pr);
  };

  return (
    <div className="cards">
      {props.data.map((itens, ix) => (
        <div key={ix} onClick={() => passarDados(itens)}>
          <p>
            {itens.cardname.substring(0, 4) === "Visa" ? (
              <img src="../img/visa.png" />
            ) : (
              <img src="../img/mastercard.png" />
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

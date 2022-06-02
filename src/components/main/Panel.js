export default function Panel(props) {
  var caminho = "./img/maomaster.jpg";

  if (props.data.cardname == "") {
    caminho = "./img/maovisa.jpg";
  } else if (props.data.cardname == "Mastercard Simple") {
    caminho = "./img/maomaster.jpg";
  } else {
    caminho = "./img/maovisa.jpg";
  }

  return (
    <div className="panel">
      <img src={caminho} />
      {console.log(caminho)}
    </div>
  );
}

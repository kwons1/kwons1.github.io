const CLUBS = [{ name: "Melting Point", president: "김민재" }, {name: "Unplugged", president: "김희원"}];

function makeSelectBox(data) {
  let clubSelectBox = document.createElement("select");

  data.forEach(function (element) {
    let clubChoose = document.createElement("option");
    clubChoose.value = element.name;
    clubChoose.appendChild(document.createTextNode(element.name));

    clubSelectBox.appendChild(clubChoose);
  });
  return clubSelectBox;
}

let selectbox = document.querySelector("#selectbox");
selectbox.appendChild(makeSelectBox(CLUBS));
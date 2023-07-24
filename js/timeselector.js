function makeTimeSelector(){
  let timebox = document.createElement("select");
  let now = Date();
  let stand = Date() + 3600 * 72
  
  while(now <  stand){
    let timeChoose = document.createElement("option");
    timeChoose.value = now + 3600;
    timeChoose.appendChild(document.createTextNode(now));

    timebox.appendChild(timeChoose);
    now += 3600;
  }
  
  return timebox;
}

let selbox = document.querySelector("#timeselector");
selbox.appendChild(makeTimeSelector());
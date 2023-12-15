function updateTime() {
  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDateElement = brisbaneElement.querySelector(".date");
  let brisbaneTimeElement = brisbaneElement.querySelector(".time");
  let brisbaneTime = moment().tz("Australia/Brisbane");

  brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM Do, YYYY");
  brisbaneTimeElement.innerHTML = brisbaneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let budapestElement = document.querySelector("#budapest");
  let budapestDateElement = budapestElement.querySelector(".date");
  let budapestTimeElement = budapestElement.querySelector(".time");

  let budapestTime = moment().tz("Europe/Budapest");

  budapestDateElement.innerHTML = budapestTime.format("MMMM Do, YYYY");
  budapestTimeElement.innerHTML = budapestTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

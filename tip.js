function calculateTip() {
    const cost = document.querySelector(".amount").value;
    const service = document.querySelector(".service").value;
    const people = document.querySelector(".numOfPeo").value;
  
    if (cost === "") {
      document.querySelector("#alert-1").innerHTML =
        "Please tell me amount of your bill!";
    } else {
      document.querySelector("#alert-1").innerHTML = "";
    }
  
    if (service === "0") {
      document.querySelector("#alert-2").innerHTML =
        "Please tell me how your service was!";
    } else {
      document.querySelector("#alert-2").innerHTML = "";
    }
  
    if (people === "" || people < 1) {
      document.querySelector("#alert-3").innerHTML =
        "Please tell me how many people are sharing!";
    } else {
      document.querySelector("#alert-3").innerHTML = "";
    }
  
    if (
      cost &&
      cost > 0 &&
      service &&
      service > 0 &&
      people &&
      people > 0
    ) {
      const tip = (cost * service) / 100;
      const total = tip / people;
  
      document.getElementById("totalTip").style.display = "block";
      document.getElementById("tip").innerHTML = total + "£";
      document.getElementById("each").textContent = "each"
    }
  };
  
  btn.addEventListener("click", calculateTip);
  
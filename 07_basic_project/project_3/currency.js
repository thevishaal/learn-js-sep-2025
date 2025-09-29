const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/usd.json"

const dropdowns = document.querySelectorAll(".dropdown select")

for (let select of dropdowns) {
    for (let currCode in countryList) {
       let newOption = document.createElement("option");
       newOption.innerText = currCode;
       newOption.value = currCode;
       if(select.name === "from" && currCode === "USD"){
        newOption.selected = "selected";
       } else if (select.name === "to" && currCode === "INR") {
        newOption.selected = "selected"
       }
       select.append(newOption)
    }
    select.addEventListener("change", (event) => {
        updateFlag(event.target);
    } );
}

const updateFlag = function(element){
    let currCode = element.value
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc;
}
let input = document.getElementById("userInput")
let method = document.getElementById("conversion")
let result = document.getElementById("result")

const converse = (ChosenInput, ChosenMethod) => {
  let solution;

  switch(ChosenMethod){
    case 1: //Celcius naar Kelvin
     solution = `${ChosenInput + 273.15} °K`;
      break; 

    case 2: //Celcius naar Fahrenheit
     solution = `${(ChosenInput* 1.8) +32} °F`; 
      break; 

    case 3: //Fahrenheit naar Kelvin
    solution = `${(ChosenInput+ 459.67) / 1.8} °K`;
      break;

    case 4: //Fahrenheit naar Celcius
    solution = `${(ChosenInput- 32) / 1.8} °C`;
      break;

    case 5: //Kelvin naar Fahrenheit
    solution = `${(ChosenInput* 1.8) - 459.67} °F`;
      break;

    case 6: //Kelvin naar Celcius
    solution = `${ChosenInput- 273.15} °C`;
      break;

    default:
      return false;

    }
    return solution;
}



const inputChanger = () => {
  const inputValue = parseFloat(input.value)
  const methodValue = parseInt(method.value)

  if (inputValue&&methodValue) {
    const resultToResult = converse (inputValue, methodValue);
    decideTemp(inputValue, methodValue);
      if (resultToResult){
        result.textContent = resultToResult;
    }
    else {
    result.textContent = "";
    }
  }
};

const decideTemp = (inputValue, methodValue) => {

  let temperatureInCelsius;

if (methodValue == 1 || methodValue == 2) {
  temperatureInCelsius = inputValue; 

} else if (methodValue == 3 || methodValue == 4) {
  temperatureInCelsius = (inputValue - 32) / 1.8; 

} else if (methodValue == 5 || methodValue == 6) {
  temperatureInCelsius = inputValue - 273.15; 


}
if (temperatureInCelsius >= 25){
  document.body.classList.add ("hot")
}
else {
  document.body.classList.remove ("hot")
}
}




input.addEventListener('input', inputChanger, decideTemp);
method.addEventListener('input', inputChanger, decideTemp);


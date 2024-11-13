//FEEDBACK Met onderstaande code kan de positie van een bezoeker bepaald worden. Bij toestellen met ingebouwde GPS is dit het meest accuraat.
function getUserLocation(callBack){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
            //console.log("Position", position);
            callBack(position);
        }, (error)=>{
            console.error(error);
        });
    }
}

async function FetchSunTimes(locationData) {
    try {
        // wacht tot de API gegevens binnens zijn en zet de 2 belangerijken in variabelen
        /*const LocationResponse = await fetch("https://apip.cc/api-json/8.8.8.8");
        const LocationData = await LocationResponse.json(); // opgezocht hoe ik dit moest selecteren omdat ik dit niet in de cursus vond*/

        const latitude = locationData.latitude; //FEEDBACK Gebruik steeds camelCase (LocationData => locationData) + Eigenschappen Latitude & Longitude met kleine letters.
        const longitude = locationData.longitude;

        // zet deze variabelen in de API dat jou dan info over de zon geeft en zet de 2 belangerijken tijden in variabelen
        const sunResponse = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`);
        const sunData = await sunResponse.json(); // opgezocht, zie vorige => FEEDBACK .then() omzetten naar async/await was inderdaad een deel van de opdracht, dit hebt je goed gedaan.

        const sunrise = sunData.results.sunrise; //FEEDBACK Niet strikt noodzakelijk om deze in een variabele te plaatsen.
        const sunset = sunData.results.sunset;

        // steek de 2 veriabelen over de zon in het html
        document.getElementById("sunrise").innerText = sunrise; //FEEDBACK .textContent geniet de voorkeur.
        document.getElementById("sunset").innerText = sunset;
    } catch (error) {
        console.error("Er trad een fout op bij het ophalen van de data:", error); //FEEDBACK Fout eventueel communiceren via DOM.
    }
}

//FetchSunTimes(); //FEEDBACK Met voorgestelde aanpassing voor locatie, deze functie eventueel aanroepen als callback.
getUserLocation(FetchSunTimes);
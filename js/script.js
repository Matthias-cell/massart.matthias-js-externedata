async function FetchSunTimes() {
    try {
        // wacht tot de API gegevens binnens zijn en zet de 2 belangerijken in variabelen
        const LocationResponse = await fetch("https://apip.cc/api-json/8.8.8.8");
        const LocationData = await LocationResponse.json(); // opgezocht hoe ik dit moest selecteren omdat ik dit niet in de cursus vond

        const latitude = LocationData.Latitude;
        const longitude = LocationData.Longitude;
        
        // zet deze variabelen in de API dat jou dan info over de zon geeft en zet de 2 belangerijken tijden in variabelen
        const sunResponse = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`);
        const sunData = await sunResponse.json(); // opgezocht, zie vorige

        const sunrise = sunData.results.sunrise;
        const sunset = sunData.results.sunset;

        // steek de 2 veriabelen over de zon in het html
        document.getElementById("sunrise").innerText = sunrise;
        document.getElementById("sunset").innerText = sunset;
    } catch (error) {
        console.error("Er trad een fout op bij het ophalen van de data:", error);
    }
}

FetchSunTimes();
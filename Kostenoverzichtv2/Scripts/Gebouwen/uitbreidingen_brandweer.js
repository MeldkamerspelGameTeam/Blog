let BrandweerUitbreidingen = [];

fetch("https://raw.githubusercontent.com/MeldkamerspelGameTeam/Blog/main/Kostenoverzichtv2/Scripts/Data/uitbreidingen_brandweer.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Brandweeruitbreidingen laden mislukt: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        BrandweerUitbreidingen = data;
        VerwerkBrandweerGebouwen();
    })
    .catch(error => console.error(error));

function VerwerkBrandweerGebouwen() {
    let html = "";

    html += "<h2>Brandweer Kazerne</h2>"
    html += "<table class='table' id='Rood'>"
    html += "<thead>"
    html += "<tr>"
    html += "<th>Soort Uitbreiding</th>"
    html += "<th>Parkeerplaatsen</th>"
    html += "<th>Level</th>"
    html += "<th>Kosten</th>"
    html += "<th>Bouwduur</th>"
    html += "<th>Versneld bouwen</th>"
    html += "</tr >"
    html += "</thead >"
    html += "<tbody>"
    var temp = "";
    BrandweerUitbreidingen.forEach((uitbreiding) => {
        temp += "<tr>";
        temp += "<td>" + uitbreiding.type + "</td>";
        temp += "<td>" + uitbreiding.parkings + "</td>";
        temp += "<td>" + uitbreiding.level + "</td>";
        temp += "<td>" + uitbreiding.costs + "</td>";
        temp += "<td>" + uitbreiding.buildingTime + "</td>";
        temp += "<td>" + uitbreiding.speedup + "</td>";
        temp += "</tr>"
    });
    html += temp

    html += "</tbody >"
    html += "</table >"


    document.getElementById('mksBrandweerBuilding').innerHTML = html;

}


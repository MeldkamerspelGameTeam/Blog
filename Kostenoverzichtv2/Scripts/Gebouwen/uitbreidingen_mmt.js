const mmtUitbreidingen = [
    {
        "type": "Nieuwbouw",
        "parkings": 1,
        "level": 0,
        "costs": "800.000 credits / 35 coins",
        "buidingTime": "Direct",
        "speedup": "-",
        "groep": "mmt"
    },
    {
        "type": "Uitbouw",
        "parkings": 2,
        "level": 1,
        "costs": "800.000 credits / 13 coins",
        "buidingTime": "Direct",
        "speedup": "-",
        "groep": "mmt"
    },
    {
        "type": "Uitbouw",
        "parkings": 3,
        "level": 2,
        "costs": "800.000 credits / 12 coins",
        "buidingTime": "Direct",
        "speedup": "-",
        "groep": "mmt"
    },
    {
        "type": "Uitbouw",
        "parkings": 4,
        "level": 3,
        "costs": "800.000 credits / 13 coins",
        "buidingTime": "Direct",
        "speedup": "-",
        "groep": "mmt"
    }
]

VerwerkMmtGebouwen();

function VerwerkMmtGebouwen() {
    html = "";

    html += "<h2>MMT standplaats</h2>"
    html += "<table class='table' id='Geel'>"
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
    mmtUitbreidingen.forEach((uitbreiding) => {
        temp += "<tr>";
        temp += "<td>" + uitbreiding.type + "</td>";
        temp += "<td>" + uitbreiding.parkings + "</td>";
        temp += "<td>" + uitbreiding.level + "</td>";
        temp += "<td>" + uitbreiding.costs + "</td>";
        temp += "<td>" + uitbreiding.buidingTime + "</td>";
        temp += "<td>" + uitbreiding.speedup + "</td>";
        temp += "</tr>"
    });
    html += temp

    html += "</tbody >"
    html += "</table >"


    document.getElementById('mksAmbulanceMMTBuilding').innerHTML = html;

}


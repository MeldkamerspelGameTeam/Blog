const AmbulanceUitbreidingen = [
    {
        "type": "Nieuwbouw",
        "parkings": 1,
        "level": 0,
        "costs": "200.000 credits / 35 coins",
        "buidingTime": "Direct",
        "speedup": "-",
        "groep": "ambu"
    },
    {
        "type": "Uitbouw",
        "parkings": 2,
        "level": 1,
        "costs": "10.000 credits / 10 coins",
        "buidingTime": "Direct",
        "speedup": "-",
        "groep": "ambu"
    },
    {
        "type": "Uitbouw",
        "parkings": 3,
        "level": 2,
        "costs": "50.000 credits / 15 coins",
        "buidingTime": "Direct",
        "speedup": "-",
        "groep": "ambu"
    },
    {
        "type": "Elke volgende uitbouw<br>&emsp;&#8226; maximaal 15 parkeerplaatsen",
        "parkings": "-",
        "level": "-",
        "costs": "100.000 credits / 20 coins",
        "buidingTime": "Direct",
        "speedup": "-",
        "groep": "ambu"
    },
    {
        "type": "Elke volgende nieuwbouw<br>&emsp;&#8226; Tot oneindig",
        "parkings": "-",
        "level": 0,
        "costs": "200.000 credits / 35 coins",
        "buidingTime": "Direct",
        "speedup": "-",
        "groep": "ambu"
    },
]

VerwerkAmbulanceGebouwen();

function VerwerkAmbulanceGebouwen() {
    html = "";

    html += "<h2>Ambulance post</h2>"
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
    AmbulanceUitbreidingen.forEach((uitbreiding) => {
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


    document.getElementById('mksAmbulanceBuilding').innerHTML = html;

}


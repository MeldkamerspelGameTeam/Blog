const BrandweerUitbreidingen = [
    {
        "type": "Nieuwbouw",
        "parkings": 1,
        "level": 0,
        "costs": "100.000 credits / 30 coins",
        "buidingTime": "Direct",
        "speedup": "-"
    },
    {
        "type": "Uitbouw",
        "parkings": 1,
        "level": 1,
        "costs": "10.000 credits / 10 coins",
        "buidingTime": "Direct",
        "speedup": "-"
    },
    {
        "type": "Uitbouw",
        "parkings": 1,
        "level": 2,
        "costs": "50.000 credits / 15 coins",
        "buidingTime": "Direct",
        "speedup": "-"
    },
    {
        "type": "Elke volgende uitbouw<br>&emsp;&#8226; maximaal 25 parkeerplaatsen",
        "parkings": "-",
        "level": "-",
        "costs": "100.000 credits / 20 coins",
        "buidingTime": "Direct",
        "speedup": "-"
    },
    {
        "type": "25 Brandweerposten (zie uitleg hieronder)",
        "parkings": 1,
        "level": 0,
        "costs": "300.000 credits / 30 coins",
        "buidingTime": "Direct",
        "speedup": "-"
    },
    {
        "type": "Ambulance standplaats",
        "parkings": "",
        "level": "",
        "costs": "100.000 credits / 20 coins",
        "buidingTime": "7 dagen",
        "speedup": "10 coins"
    },
    {
        "type": "Waterongevallenbestrijding",
        "parkings": "",
        "level": "",
        "costs": "400.000 credits / 25 coins",
        "buidingTime": "7 dagen",
        "speedup": "10 coins"
    },
    {
        "type": "Vliegtuigbrandbestreiding",
        "parkings": "",
        "level": "",
        "costs": "400.000 credits / 25 coins",
        "buidingTime": "7 dagen",
        "speedup": "10 coins"
    },
    {
        "type": "Haakarmbakparkeerplaats (container) (10x)",
        "parkings": "",
        "level": "",
        "costs": "400.000 credits / 25 coins",
        "buidingTime": "7 dagen",
        "speedup": "10 coins"
    }
]

VerwerkBrandweerGebouwen();

function VerwerkBrandweerGebouwen() {
    html = "";

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
        temp += "<td>" + uitbreiding.buidingTime + "</td>";
        temp += "<td>" + uitbreiding.speedup + "</td>";
        temp += "</tr>"
    });
    html += temp

    html += "</tbody >"
    html += "</table >"


    document.getElementById('mksBrandweerBuilding').innerHTML = html;

}


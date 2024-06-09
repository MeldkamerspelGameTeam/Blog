const GebouwUitbreidingGroepen = [
    {
        "name": "ambu",
        "display": "Ambulancepost",
        "table": "Geel"
    },
    {
        "name": "mmt",
        "display": "MMT Standplaats",
        "table": "Geel"
    }
]

var voertuigen = []

fetch("https://raw.githubusercontent.com/MeldkamerspelGameTeam/Blog/main/Kostenoverzichtv2/Scripts/Data/gebouwen.json").then(
    res => {
        res.json().then(
            data => {
                if (data.length > 0) {
                    voertuigen = data;
                    Verwerkgebouwen();
                }
            }
        )
    }
)

function Verwerkgebouwen() {
    html = "";

    for (var groep in GebouwUitbreidingGroepen) {
        html += "<h2>" + GebouwUitbreidingGroepen[groep].display + "</h2>"
        html += "<table class='table' id='" + GebouwUitbreidingGroepen[groep].table + "'>"
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
        var uitbreidingenInGroep = voertuigen.filter(v => v.groep === GebouwUitbreidingGroepen[groep].name)
        uitbreidingenInGroep.sort((a, b) => (a.afkorting > b.afkorting) ? 1 : -1)
        var temp = "";
        uitbreidingenInGroep.forEach((uitbreiding) => {
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
    }

    document.getElementById('mksAmbulanceBuilding').innerHTML = html;

}


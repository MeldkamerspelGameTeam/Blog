const VoertuigGroepen = [
    {
        "name": "Blusvoertuigen",
        "display": "Blusvoertuigen",
        "table": "Rood"
    },
    {
        "name": "Overige voertuigen",
        "display": "Overige voertuigen",
        "table": "Rood"
    },
    {
        "name": "Haakarm",
        "display": "Haakarmbakken (containers)",
        "table": "Rood"
    },
    {
        "name": "waterongevallen",
        "display": "Waterongevallen",
        "table": "Rood"
    },
    {
        "name": "vbb",
        "display": "Vliegtuigbrandbestrijding",
        "table": "Rood"
    },
    {
        "name": "schuim",
        "display": "Schuimblussing",
        "table": "Rood"
    },
    {
        "name": "nbb",
        "display": "Natuurbrandbestrijding",
        "table": "Rood"
    },
    {
        "name": "sth",
        "display": "STH & USAR",
        "table": "Rood"
    },
    {
        "name": "politie_opkomst",
        "display": "Politievoertuigen, Opkomstbureau",
        "table": "Blauw"
    },
    {
        "name": "politie_hoofd",
        "display": "Politievoertuigen, Hoofdbureau",
        "table": "Blauw"
    },
    {
        "name": "politie_heli",
        "display": "Politievoertuigen, Helikoperstandplaats",
        "table": "Blauw"
    },
    {
        "name": "ambu",
        "display": "Ambulancevoertuigen",
        "table": "Geel"
    },
    {
        "name": "mmt",
        "display": "Mobiel Medisch Team",
        "table": "Geel"
    },
    {
        "name": "kustwacht",
        "display": "Kustwacht",
        "table": "Oranje"
    },
    {
        "name": "rws",
        "display": "Rijkswaterstaat",
        "table": "Geel"
    },
    {
        "name": "berger",
        "display": "Berger Standplaats",
        "table": "Geel"
    }
]

var voertuigen = []

fetch("https://raw.githubusercontent.com/MeldkamerspelGameTeam/Blog/main/Kostenoverzichtv2/Scripts/Data/voertuigen.json").then(
    res => {
        res.json().then(
            data => {
                if (data.length > 0) {
                    voertuigen = data;
                    Verwerkvoertuigen();
                }
            }
        )
    }
)

function Verwerkvoertuigen() {
    html = "";

    for (var groep in VoertuigGroepen) {
        html += "<h2>" + VoertuigGroepen[groep].display + "</h2>"
        html += "<table class='table' id='" + VoertuigGroepen[groep].table + "'>"
        html += "<thead>"
        html += "<tr>"
        html += "<th>Afbeelding</th>"
        html += "<th>Afkorting</th>"
        html += "<th>Omschrijving</th>"
        html += "<th>Vanaf</th>"
        html += "<th>Kosten</th>"
        html += "<th>Opleiding</th>"
        html += "<th>Duur</th>"
        html += "<th>Pers.</th>"
        html += "</tr >"
        html += "</thead >"
        html += "<tbody>"
        var voertuigenInGroep = voertuigen.filter(v => v.groep === VoertuigGroepen[groep].name)
        voertuigenInGroep.sort((a, b) => (a.afkorting > b.afkorting) ? 1 : -1)
        var temp = "";
        voertuigenInGroep.forEach((voertuig) => {
            temp += "<tr>";
            temp += "<td>" + `<img src=${voertuig.afbeelding}></img >` + "</td>";
            temp += "<td>" + voertuig.afkorting + "</td>";
            temp += "<td>" + voertuig.omschrijving + "</td>";
            temp += "<td>" + voertuig.vanaf + "</td>";
            temp += "<td>" + voertuig.kosten + "</td>";
            temp += "<td>" + voertuig.opleiding + "</td>";
            temp += "<td>" + voertuig.duur + "</td>";
            temp += "<td>" + voertuig.personeel + "</td>";
            temp += "</tr>"
        });
        html += temp

        html += "</tbody >"
        html += "</table >"
    }

    document.getElementById('mksvehicles').innerHTML = html;

}


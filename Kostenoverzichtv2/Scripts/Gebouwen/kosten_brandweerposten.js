let BrandweerpostKosten = [];

fetch("https://raw.githubusercontent.com/MeldkamerspelGameTeam/Blog/main/Kostenoverzichtv2/Scripts/Data/kosten_brandweerposten.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Kosten per brandweerpost laden mislukt: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        BrandweerpostKosten = data;
        VerwerkBrandweerpostKosten();
    })
    .catch(error => console.error(error));

function VerwerkBrandweerpostKosten() {
    let html = "";

    html += "<h2>Kosten per aantal brandweerposten</h2>"
    html += "<table class='table table-rood brandweerpost-kosten'>"
    html += "<thead>"
    html += "<tr>"
    html += "<th>Aantal Brandweerposten</th>"
    html += "<th>Kosten</th>"
    html += "<th>Aantal Brandweerposten</th>"
    html += "<th>Kosten</th>"
    html += "</tr>"
    html += "</thead>"
    html += "<tbody>"

    BrandweerpostKosten.forEach((kosten) => {
        html += "<tr>";
        html += "<td>" + kosten.leftCount + "</td>";
        html += "<td>" + kosten.leftCosts + "</td>";
        html += "<td>" + kosten.rightCount + "</td>";
        html += "<td>" + kosten.rightCosts + "</td>";
        html += "</tr>";
    });

    html += "</tbody>"
    html += "</table>"

    document.getElementById("mksBrandweerpostCosts").innerHTML = html;
}

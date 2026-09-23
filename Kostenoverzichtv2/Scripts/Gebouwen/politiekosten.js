(() => {
    const dataBaseUrl = "https://raw.githubusercontent.com/MeldkamerspelGameTeam/Blog/main/Kostenoverzichtv2/Scripts/Data";

    function loadTable(fileName, targetId, render) {
        fetch(`${dataBaseUrl}/${fileName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${fileName} laden mislukt: ${response.status}`);
                }

                return response.json();
            })
            .then(data => {
                const target = document.getElementById(targetId);
                if (target) {
                    target.innerHTML = render(data);
                }
            })
            .catch(error => console.error(error));
    }

    function renderExpansionTable(title, rows) {
        let html = `<h2>${title}</h2>`;
        html += "<table class='table table-blauw gebouw-uitbreidingen'>";
        html += "<thead><tr>";
        html += "<th>Soort Uitbreiding</th>";
        html += "<th>Parkeerplaats(en)</th>";
        html += "<th>Level</th>";
        html += "<th>Kosten</th>";
        html += "<th>Bouwduur</th>";
        html += "<th>Versneld bouwen</th>";
        html += "</tr></thead><tbody>";

        rows.forEach(row => {
            html += "<tr>";
            html += `<td>${row.type}</td>`;
            html += `<td>${row.parkings}</td>`;
            html += `<td>${row.level}</td>`;
            html += `<td>${row.costs}</td>`;
            html += `<td>${row.buildingTime}</td>`;
            html += `<td>${row.speedup}</td>`;
            html += "</tr>";
        });

        return html + "</tbody></table>";
    }

    function renderPoliceStationCosts(rows) {
        let html = "<h2>Kosten per aantal politieposten</h2>";
        html += "<table class='table table-blauw aantal-posten-kosten'>";
        html += "<thead><tr>";
        html += "<th>Aantal Politieposten</th><th>Kosten</th>";
        html += "<th>Aantal Politieposten</th><th>Kosten</th>";
        html += "</tr></thead><tbody>";

        rows.forEach(row => {
            html += "<tr>";
            html += `<td>${row.leftCount}</td><td>${row.leftCosts}</td>`;
            html += `<td>${row.rightCount}</td><td>${row.rightCosts}</td>`;
            html += "</tr>";
        });

        return html + "</tbody></table>";
    }

    function renderCellComplex(data) {
        let html = "<h2>Cellencomplex in Teamverband</h2>";
        html += "<table class='table table-blauw cellencomplex-kosten'>";
        html += "<thead><tr><th>Soort Uitbreiding</th><th>Kosten</th><th>Bouwduur</th></tr></thead><tbody>";

        data.rows.forEach(row => {
            html += `<tr><td>${row.type}</td><td>${row.costs}</td><td>${row.buildingTime}</td></tr>`;
        });

        html += "</tbody></table>";
        html += "<ul class='kosten-notities'>";
        data.notes.slice(0, 3).forEach(note => {
            html += `<li>${note}</li>`;
        });
        html += `<li>${data.notes[3]}<ul>`;
        data.notes.slice(4).forEach(note => {
            html += `<li>${note}</li>`;
        });
        html += "</ul></li></ul>";

        return html;
    }

    loadTable("uitbreidingen_politiepost.json", "mksPolitieBuilding", data => renderExpansionTable("Politiepost", data));
    loadTable("kosten_politieposten.json", "mksPolitiepostCosts", renderPoliceStationCosts);
    loadTable("uitbreidingen_hoofdbureau_politie.json", "mksPolitieHoofdbureau", data => renderExpansionTable("Hoofdbureau Politie", data));
    loadTable("uitbreidingen_politiehelikopter.json", "mksPolitieHelikopter", data => renderExpansionTable("Politiehelikopter standplaats", data));
    loadTable("cellencomplex.json", "mksCellencomplex", renderCellComplex);
})();

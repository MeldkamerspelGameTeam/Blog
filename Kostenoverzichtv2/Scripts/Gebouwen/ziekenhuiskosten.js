(() => {
    const dataBaseUrl = "https://raw.githubusercontent.com/MeldkamerspelGameTeam/Blog/main/Kostenoverzichtv2/Scripts/Data";

    function loadData(fileName, targetId, render) {
        fetch(`${dataBaseUrl}/${fileName}`)
            .then(response => {
                if (!response.ok) throw new Error(`${fileName} laden mislukt: ${response.status}`);
                return response.json();
            })
            .then(data => {
                const target = document.getElementById(targetId);
                if (target) target.innerHTML = render(data);
            })
            .catch(error => console.error(error));
    }

    function renderTable(title, rows, includeSpeedup) {
        const tableShape = includeSpeedup ? "gebouw-kosten-vijf" : "gebouw-kosten-vier";
        let html = `<h2>${title}</h2><table class='table table-paars ${tableShape}'>`;
        html += "<thead><tr><th>Soort Uitbreiding</th><th>Level</th><th>Kosten</th><th>Bouwduur</th>";
        if (includeSpeedup) html += "<th>Versneld bouwen</th>";
        html += "</tr></thead><tbody>";
        rows.forEach(row => {
            html += `<tr><td>${row.type}</td><td>${row.level}</td><td>${row.costs}</td><td>${row.buildingTime}</td>`;
            if (includeSpeedup) html += `<td>${row.speedup}</td>`;
            html += "</tr>";
        });
        return html + "</tbody></table>";
    }

    function renderNotes(notes) {
        let html = "<ul class='kosten-notities'>";
        notes.slice(0, 3).forEach(note => { html += `<li>${note}</li>`; });
        html += `<li>${notes[3]}<ul>`;
        notes.slice(4).forEach(note => { html += `<li>${note}</li>`; });
        return html + "</ul></li></ul>";
    }

    loadData("ziekenhuis.json", "mksZiekenhuis", rows => renderTable("Ziekenhuis", rows, true));
    loadData("team_ziekenhuis.json", "mksTeamZiekenhuis", data => renderTable("Team Ziekenhuis", data.rows, false) + renderNotes(data.notes));
})();

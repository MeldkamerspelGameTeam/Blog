(() => {
    const dataUrl = "https://raw.githubusercontent.com/MeldkamerspelGameTeam/Blog/main/Kostenoverzichtv2/Scripts/Data/overige_kosten.json";

    fetch(dataUrl)
        .then(response => {
            if (!response.ok) throw new Error(`Overige kosten laden mislukt: ${response.status}`);
            return response.json();
        })
        .then(rows => {
            const target = document.getElementById("mksOverigeCosts");
            if (!target) return;

            let html = "<h2>Overige kosten</h2><table class='table table-rood overige-kosten'>";
            html += "<thead><tr><th>Soort</th><th>Optie's</th><th>Kosten</th></tr></thead><tbody>";
            rows.forEach(row => {
                html += `<tr><td>${row.type}</td><td>${row.option}</td><td>${row.costs}</td></tr>`;
            });
            target.innerHTML = html + "</tbody></table>";
        })
        .catch(error => console.error(error));
})();

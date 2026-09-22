(() => {
    const dataUrl = "https://raw.githubusercontent.com/MeldkamerspelGameTeam/Blog/main/Kostenoverzichtv2/Scripts/Data/premium.json";

    fetch(dataUrl)
        .then(response => {
            if (!response.ok) throw new Error(`Premiumkosten laden mislukt: ${response.status}`);
            return response.json();
        })
        .then(rows => {
            const target = document.getElementById("mksPremiumCosts");
            if (!target) return;

            let html = "<h2>Premium Account</h2><table class='table table-rood premium-kosten'>";
            html += "<thead><tr><th>Duur</th><th>Wat is je voordeel</th><th>Kosten</th></tr></thead><tbody>";
            rows.forEach(row => {
                html += `<tr><td>${row.duration}</td><td>${row.benefit}</td><td>${row.costs}</td></tr>`;
            });
            target.innerHTML = html + "</tbody></table>";
        })
        .catch(error => console.error(error));
})();

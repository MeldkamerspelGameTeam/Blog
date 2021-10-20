// blusvoertuigen
fetch("https://raw.githubusercontent.com/MeldkamerspelGameTeam/Blog/main/Kostenoverzicht/Data/Blusvoertuigen.json").then(
  res => {
    res.json().then(
      data => {
        console.log(data);
        console.log(data.length);
        if (data.length > 0) {

          var temp = "";
          data.forEach((itemData) => {
            console.log(itemData)
            temp += "<tr>";
            temp += "<td>" + `<img src=${itemData.afbeelding}></img >` + "</td>";
            temp += "<td>" + itemData.afkorting + "</td>";
            temp += "<td>" + itemData.omschrijving + "</td>";
            temp += "<td>" + itemData.vanaf + "</td>";
            temp += "<td>" + itemData.kosten + "</td>";
            temp += "<td>" + itemData.opleiding + "</td>";
            temp += "<td>" + itemData.duur + "</td>";
            temp += "<td>" + itemData.personeel + "</td></tr>";
          });
          document.getElementById('Blusvoertuigen').innerHTML = temp;
        }
      }
    )
  }
)

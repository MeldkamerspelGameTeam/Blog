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
            temp += "<td>" + itemData.id + "</td>";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td> Credits " + itemData.price.credits + " / coins " + itemData.price.coins + "</td>";
            temp += "<td>" + itemData.staff.min + "/" + itemData.staff.max + "</td></tr>";
          });
          document.getElementById('test1').innerHTML = temp;
        }
      }
    )
  }
)

function clima() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=metric&lang=es&appid=1b3e082e56decfa222665b2c3eb570aa")
      .then(response => response.json())
      .then(data => {
        
        let infoClima = document.getElementById('infoClima');
  
        
        let contenidoHTML = `
          <p>Temperatura: ${data.main.temp} °C</p>
          <p>Humedad: ${data.main.humidity} %</p>
          <p>Descripción: ${data.weather[0].description}</p>
        `;
  
    
        infoClima.innerHTML = contenidoHTML;
      });
  }
  
  window.addEventListener('load', clima);
  



  function example_1(moon){    
    var day = new Date().getDate()
    var dayWeek=moon.phase[day].dayWeek
    var html = "<div>" +
    "<b>" + moon.nameDay[dayWeek]+ "</b>" +
    "<div>" + day + " <b>" + moon.monthName + "</b> " +
    moon.year + "</div>" +
    "<div shadow>" + moon.phase[day].svg + "</div>" +
    "<div>" + moon.phase[day].phaseName + " " +
    "" + ((moon.phase[day].isPhaseLimit )? ""  :   Math.round(moon.phase[day].lighting) + "%") +
    "</div>" +
    "</div>"
    document.getElementById("ex1").innerHTML = html
}   
var configMoon = {
    lang  		:'es', 
    month 		:new Date().getMonth() + 1,
    year  		:new Date().getFullYear(),
    size		:120, 
    lightColor	:"rgb(255,255,210)", 
    shadeColor	:"black", 
    texturize	:false, 
}
load_moon_phases(configMoon,example_1)




function load_moon_phases(obj,callback){
    var gets=[]
    for (var i in obj){
        gets.push(i + "=" +encodeURIComponent(obj[i]))
    }
    gets.push("LDZ=" + new Date(obj.year,obj.month-1,1) / 1000)
    var xmlhttp = new XMLHttpRequest()
    var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&")
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(JSON.parse(xmlhttp.responseText))
        }
    }
    xmlhttp.open("GET", url, true)
    xmlhttp.send()
}
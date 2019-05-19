
var key = '8bdbe56b03b21f8818e00158e7241696'


function getJSONx() {
    
    var oras = document.getElementById('inp').value
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+oras+"&appid="+key, function(json){
        
       
        oras2 = document.getElementById('o');
        oras2.append(json.name)

        var tara = document.getElementById('t')
        tara.append(json.sys.country)

        var temp = document.getElementById('te')
        temp.append(Math.round((json.main.temp-273.15)*10/10))
        temp.append(" °C")

        var tempmax = document.getElementById('tma')
        tempmax.append(Math.round((json.main.temp_max-273.15)*10/10))
        tempmax.append(" °C")

        var tempmin = document.getElementById("tmi")
        tempmin.append(Math.round((json.main.temp_min-273.15)*10/10))
        tempmin.append(" °C")

        var vant = document.getElementById("vv")
        vant.append(json.wind.speed)
        vant.append(" Km/ora")

        var stare = document.getElementById('sv')
        stare.append(json.weather[0].description)



    });
}


var lat;
var lon;
var api = 'https://api.openweathermap.org/data/2.5/weather?';
var icons = ["wi-cloudy", "wi-snow" , "wi-sprinkle", "wi-rain", "wi-day-sunny", "wi-thunderstorm", "wi-fog"];
var celsius;
$(document).ready(function(){
	$(".b").hide();

	if(navigator.geolocation){
  		navigator.geolocation.getCurrentPosition(getLocation, errorHandler);
	} else {
  		errorHandler('Gelocation not supported');
	}


	function getLocation(position){

		$.get("https://ipinfo.io", function (response) {
    	$("#city").html( response.city + ", " + response.region);
		}, "jsonp");

		lat = 'lat=' + position.coords.latitude;
		lon = 'lon=' + position.coords.longitude;

		$.ajax({
			url: api + lat + '&' + lon +'&APPID=b24124515a1cea6ce6fc278f03f40bca',
			success: function(response){
				$('#weather').text(response.weather[0].description);
				celsius = Math.round(response.main.temp - 273.15);
				$('#temp').html('<h3>' + celsius+ '<span>&#176;</span>C</h3>');
				$(".b").show();
				
				switch(response.weather[0].main){
					case "Mist": 
						$("#icon").children().addClass(icons[6]);
						break;
					case "Drizzle":
						$("#icon").children().addClass(icons[2]);
						break;
					case "Clouds":
						$("#icon").children().addClass(icons[0]);
						break;
					case "Rain":
						$("#icon").children().addClass(icons[3]);
						break;
					case "Snow":
						$("#icon").children().addClass(icons[1]);
						break;
					case "Clear":
						$("#icon").children().addClass(icons[4]);
						break;
					case "Thunderstorm":
						$("#icon").children().addClass(icons[5]);
						break;
					default:
						$("#icon").children().addClass(icons[5]);
						break;
				}
			}
		});
		setTimeout(getLocation, 1000);
	}

	function errorHandler(err) {
  		console.error(err);
  		$(".b").hide();
	}

	function updateClock(){
		var today = new Date(); 
		var AM_PM;
		var hour = today.getHours(); 
		var minute = today.getMinutes();
		var year = today.getFullYear();
		var month = today.getMonth() + 1;
		var date = today.getDate();

		if (hour > 12) {
	        AM_PM = "PM";
	        hour = hour - 12;

	        } else if (hour <= 12) {
	        AM_PM = "AM";
	        
	        if (hour == 12) {
	            AM_PM = "PM";
	        } else if (hour == 0) {
	            hour = 12;
	        }
	    }

	    switch(month){
	    	case 1: month = "January"; break;
	    	case 2: month = "Febuary"; break;
	    	case 3: month = "March"; break;
	    	case 4: month = "April"; break;
	    	case 5: month = "May"; break;
	    	case 6: month = "June"; break;
	    	case 7: month = "July"; break;
	    	case 8: month = "August"; break;
	    	case 9: month = "September"; break;
	    	case 10: month = "October"; break;
	    	case 11: month = "November"; break;
	    	case 12: month = "December"; break;
	    	default: month = ""; break;
	    }

		hour = (hour < 10) ? ("0" + hour ): (hour);
	    minute = (minute < 10) ? ("0" + minute) : (minute);
	    var time = hour + ':' + minute + " " + AM_PM;
	    date = (date  < 10) ? ("0" + date) : (date);
	    var date = month + " " + date + ", " + year;

		$('#time').text(time);
		$('#date').text(date);

		setTimeout(updateClock, 1000);
	}

	updateClock();
	var fahrenheit;
	var CF = true;
	$(".b").on("click", function(){

		if(CF) {
		
			fahrenheit = Math.round(celsius * (9/5) + 32);
			$('#temp').html('<h3>' + fahrenheit + '<span>&#176;</span>F</h3>');
			$(".b").removeClass("fa-toggle-off").addClass("fa-toggle-on");
			CF = false;

		}else{
			$('#temp').html('<h3>' + celsius + '<span>&#176;</span>C</h3>');
			$(".b").removeClass("fa-toggle-on").addClass("fa-toggle-off");
			CF = true;
		}		
	});
});


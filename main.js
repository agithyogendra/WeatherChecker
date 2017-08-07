var lat;
var lon;
var api1 = 'https://api.openweathermap.org/data/2.5/weather?';
var api2 = 'https://api.openweathermap.org/data/2.5/forecast?';
var icons = ["wi-cloudy", "wi-snow" , "wi-sprinkle", "wi-rain", "wi-day-sunny", "wi-thunderstorm", "wi-fog", "wi-day-haze"];
var celsius;
var celsius1;
var celsius2;
var celsius3;

$(document).ready(function(){
	$(".b").hide();

	if(navigator.geolocation){
  		navigator.geolocation.getCurrentPosition(getLocation, errorHandler);
	} else {
  		errorHandler('Gelocation not supported');
	}


	function getLocation(position){

		$.get("http://ipinfo.io", function (response) {
    	$("#city").html(response.city + ", " + response.region);
    	}, "jsonp");

		lat = 'lat=' + position.coords.latitude;
		lon = 'lon=' + position.coords.longitude;

		$.ajax({
			url: api1 + lat + '&' + lon +'&APPID=b24124515a1cea6ce6fc278f03f40bca',
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
					case "Haze":
						$("#icon").children().addClass(icons[7]);
						break;
					default:
						$("#icon").children().addClass(icons[5]);
						break;
				}
			}
		});

		$.ajax({
			url: api2 + lat + '&' + lon +'&APPID=b24124515a1cea6ce6fc278f03f40bca',
			success: function(response){
				celsius1 = Math.round(response.list[0].main.temp - 273.15);
				$('#temp-1').html('<h3>' + celsius1+ '<span>&#176;</span>C</h3>');
				$(".b").show();
				
				switch(response.list[0].weather[0].main){
					case "Mist": 
						$("#icon-1").children().addClass(icons[6]);
						break;
					case "Drizzle":
						$("#icon-1").children().addClass(icons[2]);
						break;
					case "Clouds":
						$("#icon-1").children().addClass(icons[0]);
						break;
					case "Rain":
						$("#icon-1").children().addClass(icons[3]);
						break;
					case "Snow":
						$("#icon-1").children().addClass(icons[1]);
						break;
					case "Clear":
						$("#icon-1").children().addClass(icons[4]);
						break;
					case "Thunderstorm":
						$("#icon-1").children().addClass(icons[5]);
						break;
					default:
						$("#icon-1").children().addClass(icons[5]);
						break;
				}
				celsius2 = Math.round(response.list[1].main.temp - 273.15);
				$('#temp-2').html('<h3>' + celsius2 + '<span>&#176;</span>C</h3>');
				$(".b").show();
				
				switch(response.list[1].weather[0].main){
					case "Mist": 
						$("#icon-2").children().addClass(icons[6]);
						break;
					case "Drizzle":
						$("#icon-2").children().addClass(icons[2]);
						break;
					case "Clouds":
						$("#icon-2").children().addClass(icons[0]);
						break;
					case "Rain":
						$("#icon-2").children().addClass(icons[3]);
						break;
					case "Snow":
						$("#icon-2").children().addClass(icons[1]);
						break;
					case "Clear":
						$("#icon-2").children().addClass(icons[4]);
						break;
					case "Thunderstorm":
						$("#icon-2").children().addClass(icons[5]);
						break;
					default:
						$("#icon-2").children().addClass(icons[5]);
						break;
				}
				celsius3 = Math.round(response.list[2].main.temp - 273.15);
				$('#temp-3').html('<h3>' + celsius3 + '<span>&#176;</span>C</h3>');
				$(".b").show();
				
				switch(response.list[2].weather[0].main){
					case "Mist": 
						$("#icon-3").children().addClass(icons[6]);
						break;
					case "Drizzle":
						$("#icon-3").children().addClass(icons[2]);
						break;
					case "Clouds":
						$("#icon-3").children().addClass(icons[0]);
						break;
					case "Rain":
						$("#icon-3").children().addClass(icons[3]);
						break;
					case "Snow":
						$("#icon-3").children().addClass(icons[1]);
						break;
					case "Clear":
						$("#icon-3").children().addClass(icons[4]);
						break;
					case "Thunderstorm":
						$("#icon-3").children().addClass(icons[5]);
						break;
					default:
						$("#icon-3").children().addClass(icons[5]);
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

	function printTime(hour,minute){
		var AM_PM ;
		if(hour > 24){
			hour = hour - 24;
			AM_PM = "AM";
			} else if (hour == 24) {
	            hour = 12;
	            AM_PM = "AM";
	        } else if((hour < 24) && hour > 12){
 				AM_PM = "PM";
	        	hour = hour - 12;
	        }else if(hour == 12){
				AM_PM = "PM";
	        }else if(hour < 12){
				AM_PM = "AM";
	        }

	    hour = (hour < 10) ? ("0" + hour ): (hour);
	    minute = (minute < 10) ? ("0" + minute) : (minute);
	    return (hour + ':' + minute + " " + AM_PM);
	}

	function updateClock(){
		var today = new Date(); 
		var hour = today.getHours(); 
		var minute = today.getMinutes();
		var year = today.getFullYear();
		var month = today.getMonth() + 1;
		var date = today.getDate();

		
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
	    
	    var time = printTime(hour, minute);
	    var time1 = printTime(hour + 3, minute);
	    var time2 = printTime(hour + 6, minute);
	    var time3 = printTime(hour + 9, minute);
	    date = (date  < 10) ? ("0" + date) : (date);
	    var date = month + " " + date + ", " + year;

		$('#time').text(time);

		$('#date').text(date);

		$('#time-1').text(time1);
		$('#time-2').text(time2);
		$('#time-3').text(time3);

		setTimeout(updateClock, 1000);

	}

	updateClock();
	var fahrenheit;
	var fahrenheit1;
	var fahrenheit2;
	var fahrenheit3;
	var CF = true;
	$(".b").on("click", function(){

		if(CF) {
		
			fahrenheit = Math.round(celsius * (9/5) + 32);
			fahrenheit1 = Math.round(celsius1 * (9/5) + 32);
			fahrenheit2 = Math.round(celsius2 * (9/5) + 32);
			fahrenheit3 = Math.round(celsius3 * (9/5) + 32);
			$('#temp').html('<h3>' + fahrenheit + '<span>&#176;</span>F</h3>');
			$('#temp-1').html('<h3>' + fahrenheit1 + '<span>&#176;</span>F</h3>');
			$('#temp-2').html('<h3>' + fahrenheit2 + '<span>&#176;</span>F</h3>');
			$('#temp-3').html('<h3>' + fahrenheit3 + '<span>&#176;</span>F</h3>');
			$(".b").removeClass("fa-toggle-off").addClass("fa-toggle-on");
			CF = false;

		}else{
			$('#temp').html('<h3>' + celsius + '<span>&#176;</span>C</h3>');
			$('#temp-1').html('<h3>' + celsius1 + '<span>&#176;</span>C</h3>');
			$('#temp-2').html('<h3>' + celsius2 + '<span>&#176;</span>C</h3>');
			$('#temp-3').html('<h3>' + celsius3 + '<span>&#176;</span>C</h3>');
			$(".b").removeClass("fa-toggle-on").addClass("fa-toggle-off");
			CF = true;
		}		
	});
});


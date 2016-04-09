
$(document).ready(function() {
	getWeather();
})

function searchWeather() {
  var searchQuery = $(.'search').val();
  getWeather(searchQueary);
}

function getWeather(searchQuery){
	var url = 'http://api.openweathermap.org/data/2.5/weather?';
	var params = {
		APPID: apiKey.
		units: 'imperial'
	};
	if(searchQuery)
	{
		params.q = searchQuery;
	}
	else
	{
		params.id = 4930956
	}
	
	$.ajax(url + $.param(params), {
		success: function (data) {
			var countryName = getCountryName(data.sys.country)
			$('.city').text('${data.name}, ${countryName}');
			$('.temp').text('${data.main.temp} °F');
			$('.summary').html(parseSummary(data));
		},
		error: function(error){
			$('.error-message').text('An error occurred');
		}
	});
}

function parseSummary(data){
	if(data.weather){
		var weatherItems = data.weather.map(function(weatherItem){
			var description = weatherItem.description;
			var iconSrc = 'http://openweathermap.org/img/w/' + weatherItem.icon + '.png';
		});
		return weatherItems.join('');
	}
}
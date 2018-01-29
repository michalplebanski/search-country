var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var capitalsList = $('#capitals');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';

    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item){
        var string = `
            <div class="response">
                <div class="title-country">${item.name}</div>
                <div class="title-info">Background Information:</div>
                <div class="info">
                    <ul class="list-title">
                        <li>Region</li>
                        <li>Alt spelling</li>
                        <li>Capital</li>
                        <li>Land area</li>
                        <li>Population</li>
                        <li>Language(s)</li>
                        <li>Currency</li>
                    </ul>
                     <ul class="list-value">
                        <li>${item.region}</li>
                        <li>${item.altSpellings[1]}</li>
                        <li>${item.capital}</li>
                        <li>${item.area}km</li>
                        <li>${item.population}</li>
                        <li>${item.languages}</li>
                        <li>${item.currencies}</li>
                    </ul>
                </div> 
            </div>
        `
        
        $(string).appendTo(countries);
        
    });
}
/*
    Assignment 4
    Yuxuan Liu 0752597
*/

$(document).ready(function(){
    // your code here
        
        navigator.geolocation.getCurrentPosition(function(position){
            let newlat = position.coords.latitude;
            let newlong = position.coords.longitude;
            $('#youarehere').html(`Current latitude is: ${newlat}<br>Current longitude is: ${newlong}`);

            
            let oldlat = parseFloat(localStorage.getItem("latitude"));
            let oldlong = parseFloat(localStorage.getItem("longitude"));
            
            if ( oldlat == null && oldlong == null) {
                alert("Welcome!");
            } else {
                
                $('#new').html(`The stored location is: ${oldlat}, ${oldlong}`);
                let move = calcDistance(newlat, newlong, oldlat, oldlong );
                $('#new').html(`<br>The distance between these two points is ${move} m`);                
            }

            localStorage.setItem("latitude", newlat);
            localStorage.setItem("longitude", newlong);
            
            
        },
            function(){
                alert("No geolocation available!");
            }
        );

       

       
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});



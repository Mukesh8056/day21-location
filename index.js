 //https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en

   function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      window.alert("Allow to Continue");
    }
    function showPosition() {
        var location2 = fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en`)
        
    location2.then((data)=>data.json()).then((data1)=>
    {  
    console.log(data1)

    console.log(data1.continent)
    console.log(data1.countryName)
        console.log(data1.principalSubdivision)
            console.log(data1.locality)
        let continent=document.getElementById("continent").innerHTML=`<b>Continent:${data1.continent} </b>`
        let countryName=document.getElementById("countryName").innerHTML=`<b>countryName:${data1.countryName} </b>`
        let principalSubdivision=document.getElementById("principalSubdivision").innerHTML=`<b>principalSubdivision:${data1.principalSubdivision} </b>`
        let locality=document.getElementById("locality").innerHTML=`<b>locality:${data1.locality}</b>`

      })
  }


   }
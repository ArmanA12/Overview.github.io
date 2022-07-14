const button = document.querySelector("button");

button.addEventListener("click", ()=>{
    if(navigator.geolocation){
        button.innerText = "Allow to detect location";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        button.innerText = "Your browser not support";
    }
});

function onSuccess(position){
    button.innerText = "Detecting your location...";
    let {latitude, longitude} = position.coords;
    console.log(latitude +"latitude");
    console.log(longitude+"langitude");
    // latitude 
    // longitude
    let m = latitude;
    let n = longitude;
    let con = document.getElementById('n');
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=c94942cc467b4bd5b8d3f3f86f2552f9`)
    .then(response => response.json()).then(response =>{
        let allDetails = response.results[0].components;
        console.log(allDetails)
        let count = document.getElementById('country');
        count.append( "Country  : "+allDetails.country);
        let state = document.getElementById('state');
        state.append("State  : " +allDetails.state);
        let std = document.getElementById('state_district');
        std.append("dist  : "+allDetails.state_district);
        let muni = document.getElementById('postcode');
        muni.append("ZipCode  : "+allDetails.postcode);
        let road = document.getElementById('road');
        road.append(" Road : "+allDetails.road);
        let sub = document.getElementById('suburb');
        sub.append("Area : "+allDetails.suburb);
        let loc = document.getElementById('location');
        loc.append( "   :  " +allDetails.state_district);
        
        let {suburb, postcode, country} = allDetails;
      //  button.innerText = `${suburb} ${postcode}, ${country}`;

    }).catch(()=>{
        button.innerText = "Something went wrong";
        n.style.background ="red";
        
    });
}

function onError(error){
    if(error.code == 1){
        button.innerText = "You denied the request";
    }else if(error.code == 2){
        button.innerText = "Location is unavailable";
    }else{
        button.innerText = "Something went wrong";
    }
    button.setAttribute("disabled", "true");
}
let map = document.getElementById('iframe');
let x = document.getElementById('map');
let welp = document.getElementById('par');
x.addEventListener('click',function(){
    map.style.display='block';
    x.style.display = "none";
    welp.style.display='none';
})
// data coming from rapid API
async function getResponse() {
	const response = await fetch(
		'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude=18.99285&longitude=72.8263',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
				'x-rapidapi-key': '8bf9f6989amshadf19d1ff50a4cfp1b7591jsn416ad07ffbfb'
			}
		}
 );

	const data = await response.json(); // Extracting data as a JSON Object from the response
    console.log(data);
    let image1 = document.getElementById('image1');
    let image2= document.getElementById('image2');
    let image3= document.getElementById('image3');
    let im1 = data.data[2].photo.images.large.url;
    let im2 = data.data[5].photo.images.large.url;
    let im3 = data.data[2].photo.images.large.url;
    console.log(im1);
    image1.innerHTML =`<img src="${im1}"/>`
    image2.innerHTML =`<img src="${im2}"/>`
    image3.innerHTML =`<img src="${im3}"/>`
    let hotelname = document.getElementById('hotelname');
    let hotalrating = document.getElementById('hotelrating');
    let hotelclass = document.getElementById('hotelclass');
    let hotelopen = document.getElementById('hotelopen');
    let hotelprice= document.getElementById('hotelprice');
    let hotelreview = document.getElementById('hotelreview');
    hotelname.append("Hotel Name :  "+data.data[0].name);
    hotalrating.append("rating :  "+data.data[0].rating);
    hotelclass.append("Hotel Class : " +data.data[0].hotel_class+" star");
    if(data.data[0].is_closed == false){
        hotelopen.append("Hotel : " +"Open");
    }
    hotelprice.append("price  :"+data.data[0].price);
    hotelreview.append(" reviews : "+data.data[0].num_reviews);
    let hotelname1 = document.getElementById('hotelname1');
    let hotalrating1 = document.getElementById('hotelrating1');
    let hotelclass1 = document.getElementById('hotelclass1');
    let hotelopen1 = document.getElementById('hotelopen1');
    let hotelprice1= document.getElementById('hotelprice1');
    let hotelreview1 = document.getElementById('hotelreview1');
    hotelname1.append("Hotel Name :  "+data.data[1].name);
    hotalrating1.append("rating :  "+data.data[1].rating);
    hotelclass1.append("Hotel Class : " +data.data[1].hotel_class+" star");
    if(data.data[0].is_closed == false){
        hotelopen1.append("Hotel : " +"Open");
    }
    hotelprice1.append("price  :"+data.data[1].price);
    hotelreview1.append(" reviews : "+data.data[1].num_reviews);
  
    let hotelname2 = document.getElementById('hotelname2');
    let hotalrating2 = document.getElementById('hotelrating2');
    let hotelclass2 = document.getElementById('hotelclass2');
    let hotelopen2 = document.getElementById('hotelopen2');
    let hotelprice2= document.getElementById('hotelprice2');
    let hotelreview2 = document.getElementById('hotelreview2');
    hotelname2.append("Hotel Name :  "+data.data[2].name);
    hotalrating2.append("rating :  "+data.data[2].rating);
    hotelclass2.append("Hotel Class : " +data.data[2].hotel_class+" star");
    if(data.data[2].is_closed == false){
        hotelopen2.append("Hotel : " +"Open");
    }
    hotelprice2.append("price  :"+data.data[2].price);
    hotelreview2.append(" reviews : "+data.data[2].num_reviews);
}
getResponse();
async function getResponseh() {
	const response = await fetch(
		'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=18.9928&longitude=72.8263',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
				'x-rapidapi-key': '8bf9f6989amshadf19d1ff50a4cfp1b7591jsn416ad07ffbfb'
			}
    	}
 );

	const data1 = await response.json(); // Extracting data as a JSON Object from the response
    console.log(data1);
    let rimag1 = document.getElementById('rimage1');
    let rm1 = data1.data[3].photo.images.large.url;

    rimag1.innerHTML =`<img src="${rm1}"/>`
    let frname = document.getElementById('frname');
    let frprise =document.getElementById('frprise');
    let frating = document.getElementById('frating');
    let franking = document.getElementById('franking');
    let fweb  = document.getElementById('fweb');
    frname.append("Name  : "+data1.data[2].name);
    frprise.append("price  : "+data1.data[2].price_level);
    frating.append("Rating  : " +data1.data[2].rating+" * ");
    franking.append("Ranking  : "+data1.data[2].ranking);
    fweb.append("Visite :"+data1.data[0].website);
}
getResponseh();

async function getResponsea() {
	const response = await fetch(
		'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng?longitude=72.8263&latitude=18.9928',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
				'x-rapidapi-key': '8bf9f6989amshadf19d1ff50a4cfp1b7591jsn416ad07ffbfb'
			}
    	}
 );

 const data2 = await response.json();

 let abimage = document.getElementById('abimage');
 let abimage1 = document.getElementById('abimage1');
 let abimage2 = document.getElementById('abimage2');
  let ab = data2.data[4].photo.images.large.url;
  let ab1 = data2.data[5].photo.images.large.url;
  let ab2 = data2.data[7].photo.images.large.url;
  abimage.innerHTML =`<img  src="${ab}"/img>`
  abimage1.innerHTML=`<img  src="${ab1}"/img>`
  abimage2.innerHTML=`<img  src="${ab2}" /img>`
  let abname = document.getElementById('abname');
  let abadd =document.getElementById('abadd');
  let abrating = document.getElementById('abrating');
  abname.append("Name  : "+ data2.data[4].name);
  abadd.append("Address  : "+data2.data[4].address_obj.street1);
  abrating.append("Reviews : "+data2.data[4].num_reviews);

  let abname1 = document.getElementById('abname1');
  let abadd1 =document.getElementById('abadd1');
  let abrating1 = document.getElementById('abrating1');
  abname1.append("Name  : "+ data2.data[2].name);
  abadd1.append("Address  : "+data2.data[2].address_obj.street1);
  abrating1.append("Reviews  : "+data2.data[2].num_reviews);
  let abname2 = document.getElementById('abname2');
  let abadd2 =document.getElementById('abadd2');
  let abrating2 = document.getElementById('abrating2');
  abname2.append("Name  : "+ data2.data[3].name);
  abadd2.append("Address  :  "+data2.data[3].address_obj.street1);
  abrating2.append("Reviews : "+data2.data[3].num_reviews);

 
 console.log(data2);
    }
    getResponsea();

    // Main paginations through javsript
     document.getElementById('demo').innerHTML = "hello arman how are you";


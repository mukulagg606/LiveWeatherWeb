const cityName= document.getElementById("cityName");
const city_name= document.getElementById("city_name");
const submitBtn=document.getElementById("submitBtn");
const temp=document.getElementById("temp");
const temp_status=document.getElementById("temp_status");


const getInfo= async(event) => {
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
            city_name.innerText="Please write city name before search"
    }
    else{
       try{ let url="https://live-weather-demoapp.herokuapp.com/weather/data";
        const response= await fetch(url, {
            mode: 'no-cors',
            method: 'GET'
        });
       console.log(response);
        const data=await response.json();
        const arrData=[data];

        city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;

        temp.innerText=arrData[0].main.temp;
        temp_status.innerText=arrData[0].weather[0].main;


    }
    catch{
        city_name.innerHTML=`please write city name`;
    }
}
};

submitBtn.addEventListener('click', getInfo);
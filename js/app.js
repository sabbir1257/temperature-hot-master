// Do Not show API key on your js file
const API_KEY = `7f0dcc59182da8adf24002e3070a0d91`; 

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data =>{
    setInnerTextById('temperature', data.main.temp)
    console.log(data.weather[0].main)
}

const setInnerTextById = (id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;

}


document.getElementById('btn-serach').addEventListener('click', function(){
    const serachField = document.getElementById('search-fild');
    const city = serachField.value;
    // set city
    document.getElementById('city').innerText = city;

    loadTemperature(city);
})


loadTemperature('dhaka');
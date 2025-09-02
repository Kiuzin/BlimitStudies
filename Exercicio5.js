fetch('https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&hourly=temperature_2m,windspeed_10m')
.then(response => response.json())
.then(responseJSON => {
    const temperatures = responseJSON.hourly.temperature_2m;
    const windSpeeds = responseJSON.hourly.windspeed_10m;

    const totalTemperature = temperatures.reduce((min, max) => min + max, 0);
    const mediaTemperature = totalTemperature / temperatures.length;

    const maxWindSpeed = Math.max(...windSpeeds);

    console.log(`Temperatura média prevista: ${mediaTemperature.toFixed(2)} ºC`,
     `\nVelocidade máxima do vento prevista: ${maxWindSpeed} km/h`)})

.catch(e => console.error(e))
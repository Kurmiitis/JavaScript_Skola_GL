async function getData(latitude, longitude, start_date, end_date) {
    try{
        const res=await fetch(`https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${start_date}&end_date=${end_date}&hourly=temperature_2m&hourly=precipitation&hourly=wind_speed_10m`);
        const data=await res.json();
        const garais=data.hourly;

        const tbody=document.getElementById("results");
        tbody.innerHTML=" ";

        for (let i=0; i<garais.time.length; i++){
            const row=document.createElement("tr");
            const time=garais.time[i];
            
            if (time.includes("00:00") || time.includes("06:00") || time.includes("12:00") || time.includes("18:00")){
                row.innerHTML=`
                <td>${time.replace("T", ", ")}</td>
                <td>${garais.temperature_2m[i]+" °C"}</td>
                <td>${garais.precipitation[i]+" mm"}</td>
                <td>${garais.wind_speed_10m[i]+" km/h"}</td>`;
                tbody.appendChild(row);
            }  
        } //peak temperature was 12.1
        
    }catch(err){
        console.error(err);
    }
}

document.getElementById("submit").addEventListener("click",function(){
    const latitude=document.getElementById("latitude").value;
    const longitude=document.getElementById("longitude").value;
    const start_date=document.getElementById("start_date").value;
    const end_date=document.getElementById("end_date").value;
    getData(latitude,longitude,start_date,end_date);
});
window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;

           const api = `https://api.darksky.net/forecast/44a6232ce3d9423b69341c3f3dba5728/${lat},${long}`;
       });

       fetch
    } 
});
function getLiveLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const coords = {
        lat: position.coords.latitude.toFixed(5),
        lng: position.coords.longitude.toFixed(5)
      };
      callback(coords);
    }, () => {
      alert("Location access denied ❌");
    });
  } else {
    alert("Geolocation not supported ❌");
  }
}

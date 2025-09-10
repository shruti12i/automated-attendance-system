function simulateFaceRecognition() {
  document.getElementById("camera").style.display = "block";
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      document.getElementById("video").srcObject = stream;
    });

  setTimeout(() => {
    alert("Face Verified ✔️");
    getLiveLocation(coords => {
      markAttendance(coords);
    });
  }, 3000); // Simulate recognition delay
}

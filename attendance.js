function verifyStudent() {
  const id = document.getElementById("studentId").value;
  if (!id) {
    alert("Enter Student ID ❗");
    return;
  }

  // Mock student IDs
  const students = ["S101", "S102", "S103"];
  if (students.includes(id)) {
    document.getElementById("camera").style.display = "block";
    localStorage.setItem("currentStudent", id);
  } else {
    alert("Invalid Student ID ❌");
  }
}

function markAttendance(coords) {
  const studentId = localStorage.getItem("currentStudent");
  const now = new Date();
  const log = {
    studentId,
    time: now.toLocaleString(),
    location: `${coords.lat}, ${coords.lng}`
  };

  let logs = JSON.parse(localStorage.getItem("attendanceLogs")) || [];
  logs.push(log);
  localStorage.setItem("attendanceLogs", JSON.stringify(logs));

  document.getElementById("attendanceResult").innerHTML =
    `<p>Attendance marked for <b>${studentId}</b> ✔️</p>
     <p>Time: ${log.time}</p>
     <p>Location: ${log.location}</p>`;
}

function viewAttendance() {
  let logs = JSON.parse(localStorage.getItem("attendanceLogs")) || [];
  let reportDiv = document.getElementById("report");

  if (logs.length === 0) {
    reportDiv.innerHTML = "<p>No attendance records ❌</p>";
    return;
  }

  let table = "<table><tr><th>Student ID</th><th>Time</th><th>Location</th></tr>";
  logs.forEach(log => {
    table += `<tr><td>${log.studentId}</td><td>${log.time}</td><td>${log.location}</td></tr>`;
  });
  table += "</table>";

  reportDiv.innerHTML = table;
}

function clearAttendance() {
  localStorage.removeItem("attendanceLogs");
  document.getElementById("report").innerHTML = "<p>Logs cleared ✔️</p>";
}

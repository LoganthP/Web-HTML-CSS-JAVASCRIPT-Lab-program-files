document.addEventListener("DOMContentLoaded", function() 
{
    const outputDiv = document.getElementById("output");
    fetch("Database.json")
    .then(response => response.json())
    .then(data => {
        outputDiv.innerHTML = "<h2>Student Information</h2>";
        data.forEach(student => {
            outputDiv.innerHTML += `<p><strong>Name:</strong> ${student.studentName}, <strong>USN:</strong> ${student.usn}</p>`;
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        outputDiv.innerHTML = "<p>Error fetching data. Please try again later.</p>";
    });
});
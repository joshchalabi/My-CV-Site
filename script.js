document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("site-title");
    const text = "Joshghun Chalabizada";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            title.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    title.innerHTML = ""; // Clear title first
    typeWriter();
});

document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("form-result").innerHTML = "✅Message wurde gesendet!";
        document.getElementById("form-result").style.color = "green";
        document.getElementById("messageForm").reset(); // Reset Form
    } else {
        document.getElementById("form-result").innerHTML = "❌ Bitte füllen Sie alle Felder aus.";
        document.getElementById("form-result").style.color = "red";
    }
});

document.getElementById("downloadCV").addEventListener("click", function() {
    window.location.href = "files/JoshCV.docx"; //  // 'JoshCV.docx' Open
});


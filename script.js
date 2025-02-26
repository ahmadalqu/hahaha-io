// Name Entry Validation
function submitName() {
    var name = document.getElementById("nameInput").value.trim();

    // If name is NOT Lina, ask to be honest
    if (name.toLowerCase() !== "lina") {
        alert("🤨 Be honest! Enter your REAL name.");
        return;
    }

    // Store the name and move to the next page
    localStorage.setItem("userName", name);
    window.location.href = "sec.html";
}

// Set Name and Handle Video
document.addEventListener("DOMContentLoaded", function() {
    var userName = localStorage.getItem("userName");
    if (userName) {
        document.getElementById("userName").textContent = userName;
        document.getElementById("userButton").textContent = userName;
    }

    var video = document.getElementById("introVideo");
    video.onended = function() {
        document.getElementById("question").classList.remove("hidden");
    };
});

// Move "Your Name" Button on Hover
document.getElementById("userButton").addEventListener("mouseover", function() {
    var button = this;
    var container = document.querySelector(".button-container");

    var newX = Math.random() * (container.offsetWidth - button.offsetWidth);
    var newY = Math.random() * (container.offsetHeight - button.offsetHeight);

    button.style.transform = `translate(${newX}px, ${newY}px) rotate(${Math.random() * 360}deg)`;
    button.style.transition = "transform 0.3s ease-in-out";
});

// Play Video on Button Click
document.getElementById("playVideoButton").addEventListener("click", function() {
    var video = document.getElementById("introVideo");
    video.muted = false;
    video.play();
    this.style.display = "none"; // Hide button after click
});

// Ahmad Button Triggers Fun Effects
document.getElementById("ahmadButton").addEventListener("click", function() {
    var catImage = document.getElementById("laughingCat");
    var catSound = document.getElementById("catSound");

    catImage.classList.remove("hidden");
    catSound.play();

    // Confetti Explosion
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    // Screen Shake
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 500);

    // Background Color Flashing
    let colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff"];
    let i = 0;
    let interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i % colors.length];
        i++;
        if (i > 20) clearInterval(interval);
    }, 200);
});

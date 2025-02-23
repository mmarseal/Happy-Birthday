// confetti
const end = Date.now() + 15 * 450;
const colors = [
  "#ff66b2",
  "#66ccff",
  "#ffd700",
  "#ffffff",
  "#c0c0c0",
  "#ff4500",
];

(function frame() {
  confetti({
    particleCount: 7,
    angle: 60,
    spread: 5,
    origin: { x: 0, y: 0.9 },
    colors: colors,
  });

  confetti({
    particleCount: 7,
    angle: 120,
    spread: 5,
    origin: { x: 1, y: 0.9 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();

function showBirthdayContent() {
  const reminder = document.getElementById("reminder");
  const birthdayContent = document.getElementById("birthday-content");
  reminder.classList.add("hidden");
  const music = document.getElementById("bg-music");

  setTimeout(() => {
    reminder.style.display = "none";
    birthdayContent.style.display = "block";

    setTimeout(() => {
      birthdayContent.classList.add("show");
    }, 50);
    if (music) {
      music.play().catch((error) => {
        console.warn("Autoplay dicegah oleh browser:", error);
      });
    }

    currentMessage = 0;
    charIndex = 0;
    isTyping = false;
    isAnimating = false;
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }
    typeMessage();
  }, 500);
}

document.querySelector(".notification-button button").onclick =
  showBirthdayContent;

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const button = document.querySelector(".music-button");

  if (music.paused) {
    music.play();
    button.textContent = "Pause Music";
  } else {
    music.pause();
    button.textContent = "Play Music";
  }
}

const messages = [
  "Happy Birthday! 🎉 ",
  "May your year be filled with success, happiness, and great opportunities.",
  "Stay strong, keep hustling, and make your dreams come true",
  "Wishing you health, wealth, and endless joy",
  "Enjoy your special day",
  "Click on the gift below-right to get the gift :D",
];

let currentMessage = 0;
let charIndex = 0;
let isTyping = false;
let isAnimating = false;
let messageTimeout = null;

function typeMessage() {
  const messageElement = document.querySelector(".message");

  // Clear any existing timeout
  if (messageTimeout) {
    clearTimeout(messageTimeout);
  }

  // Reset message element if starting new message
  if (!isTyping) {
    isTyping = true;
    messageElement.innerHTML = "";
  }

  if (charIndex < messages[currentMessage].length) {
    messageElement.innerHTML += messages[currentMessage].charAt(charIndex);
    charIndex++;
    messageTimeout = setTimeout(typeMessage, 100);
  } else {
    isTyping = false;

    if (currentMessage < messages.length - 1) {
      messageTimeout = setTimeout(() => {
        charIndex = 0;
        currentMessage++; // Hapus operator modulo
        typeMessage();
      }, 2000);
    }
  }
}

function blowCandle() {
  if (isAnimating) return;
  isAnimating = true;

  document.querySelector(".cake").textContent = "🎉";
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  setTimeout(() => {
    document.querySelector(".cake").textContent = "🎂";
    isAnimating = false;
  }, 1000);
}

window.onload = () => {
  const notificationSound = document.getElementById("notificationSound");

  try {
    notificationSound.play().catch(function (error) {
      console.log("Autoplay was prevented:", error);
      document.addEventListener(
        "click",
        function playSound() {
          notificationSound.play();
          document.removeEventListener("click", playSound);
        },
        { once: true }
      );
    });
  } catch (e) {
    console.log("Error playing sound:", e);
  }

  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, 500);

  setTimeout(typeMessage, 1000);
};

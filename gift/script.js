// modal box
const itemDetail = document.querySelectorAll(".image");
itemDetail.forEach((btn, index) => {
  btn.onclick = (e) => {
    e.preventDefault();

    // modal yang sesuai berdasarkan index tombol yang diklik
    const itemDetailModal = document.querySelector(
      `#item-detail-modal${index + 1}`
    );
    itemDetailModal.style.display = "flex";
  };
});

//semua tombol close
const closeIcons = document.querySelectorAll(".modal .close-icon");
closeIcons.forEach((icon, index) => {
  icon.onclick = (e) => {
    e.preventDefault();
    //modal yang sesuai berdasarkan index tombol close yang diklik
    const itemDetailModal = document.querySelector(
      `#item-detail-modal${index + 1}`
    );
    itemDetailModal.style.display = "none";
  };
});

//change img
document.addEventListener("DOMContentLoaded", function () {
  let boxImages = document.querySelectorAll(".box-image");
  let openBox = new Audio("../assets/sound/boxOpen.mp3");

  boxImages.forEach(function (box) {
    box.addEventListener("click", function () {
      let currentSrc = box.getAttribute("src");

      if (currentSrc.includes("closeBox.png")) {
        box.setAttribute("src", "../assets/img/openBox.png");
      } else {
        box.setAttribute("src", "../assets/img/closeBox.png");
      }
    });
  });

  //open box sound
  boxImages.forEach(function (box) {
    box.addEventListener("click", function () {
      openBox.play();
    });
  });
});

// onclick close box3
function showPict() {
  const gift = document.getElementById("yourGift");
  const pictures = document.getElementById("picturesContent");
  gift.classList.add("hidden");
  const music = document.getElementById("proudOfYou");

  setTimeout(() => {
    gift.style.display = "none";
    pictures.style.display = "flex";

    setTimeout(() => {
      pictures.classList.add("show");
    }, 50);
    if (music) {
      music.play().catch((error) => {
        console.warn("Autoplay dicegah oleh browser:", error);
      });
    }
  });
}

document.getElementById("closeGift").onclick = showPict;

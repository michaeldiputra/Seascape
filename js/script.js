console.log("hello world!");

// Fungsi untuk menghapus kelas "no-scroll" setelah beberapa detik
function enableScrolling() {
    document.body.classList.remove('no-scroll');
}

// Tambahkan kelas "no-scroll" saat halaman dimuat
document.body.classList.add('no-scroll');

// Tunggu selama 3 detik (atau waktu yang sesuai) sebelum menghapus kelas "no-scroll"
setTimeout(function() {
  enableScrolling(); // Hapus kelas "no-scroll"
}, 300k0); // Ganti dengan waktu yang sesuai

// Seleksi elemen dengan kelas "seeunder-text"
const seeunderTextElement = document.querySelector('.seeunder-text p');

// Fungsi untuk mengganti teks ke "Tunggu sebentar.."
function setLoadingText() {
    seeunderTextElement.textContent = 'Tunggu sebentar..';
}

// Fungsi untuk mengembalikan teks ke "Mau Lihat Ekosistem Laut?"
function restoreOriginalText() {
    seeunderTextElement.textContent = 'Mau Lihat Ekosistem Laut?';
}

// Panggil setLoadingText() saat halaman dimuat
setLoadingText();

// Simulasikan proses loading (Anda dapat menggantinya dengan perintah loading sesungguhnya)
setTimeout(function () {
    // Panggil restoreOriginalText() setelah loading selesai
    restoreOriginalText();
}, 3000); // Ganti dengan waktu yang sesuai dengan proses loading sesungguhnya


// Animation

gsap.to("#sun", {
  scrollTrigger: {
    scrub: 1,
  },
  y: 100,
});

gsap.to(".cloud", {
  scrollTrigger: {
    scrub: 1,
  },
  x: -500,
});

gsap.to("#wave1", {
  scrollTrigger: {
    scrub: 1,
  },
  top: 100,
});

gsap.to("#wave2", {
  scrollTrigger: {
    scrub: 1,
  },
  top: 50,
});

gsap.to("#wave3", {
  scrollTrigger: {
    scrub: 1,
  },
  top: 0,
});

gsap.to("#wave4", {
  scrollTrigger: {
    scrub: 1,
  },
  top: -50,
});

gsap.to("#wave5", {
  scrollTrigger: {
    scrub: 1,
  },
  top: -100,
});

gsap.to("#boat", {
  scrollTrigger: {
    scrub: 1,
  },
  left: -70,
  top: -150,
});

gsap.to(".seeunder", {
  scrollTrigger: {
    scrub: 1,
  },
  left: -10,
  top: 30,
});

gsap.to(".bg-wave", {
  scrollTrigger: {
    scrub: 1,
  },
  top: -70,
});

// Corousel
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// Click to see
setTimeout(() => {
  $(".card-box-outer").addClass("transition");
}, 3000);

$("#bintanglaut").click(function () {
  $("#outer-bintanglaut").addClass("card-box-buka");
  setTimeout(() => {
    $("#exit-bintanglaut").css("opacity", "1");
  }, 500);
});
$("#exit-bintanglaut").click(function () {
  $("#exit-bintanglaut").css("opacity", "0");
  setTimeout(() => {
    $("#outer-bintanglaut").removeClass("card-box-buka");
  }, 500);
});

$("#babilaut").click(function () {
  $("#outer-babilaut").addClass("card-box-buka");
  setTimeout(() => {
    $("#exit-babilaut").css("opacity", "1");
  }, 500);
});
$("#exit-babilaut").click(function () {
  $("#exit-babilaut").css("opacity", "0");
  setTimeout(() => {
    $("#outer-babilaut").removeClass("card-box-buka");
  }, 500);
});

$("#cacinglaut").click(function () {
  $("#outer-cacinglaut").addClass("card-box-buka");
  setTimeout(() => {
    $("#exit-cacinglaut").css("opacity", "1");
  }, 500);
});
$("#exit-cacinglaut").click(function () {
  $("#exit-cacinglaut").css("opacity", "0");
  setTimeout(() => {
    $("#outer-cacinglaut").removeClass("card-box-buka");
  }, 500);
});

$("#kepiting").click(function () {
  $("#outer-kepiting").addClass("card-box-buka");
  setTimeout(() => {
    $("#exit-kepiting").css("opacity", "1");
  }, 500);
});
$("#exit-kepiting").click(function () {
  $("#exit-kepiting").css("opacity", "0");
  setTimeout(() => {
    $("#outer-kepiting").removeClass("card-box-buka");
  }, 500);
});

$("#udang").click(function () {
  $("#outer-udang").addClass("card-box-buka");
  setTimeout(() => {
    $("#exit-udang").css("opacity", "1");
  }, 500);
});
$("#exit-udang").click(function () {
  $("#exit-udang").css("opacity", "0");
  setTimeout(() => {
    $("#outer-udang").removeClass("card-box-buka");
  }, 500);
});

$("#burungpantai").click(function () {
  $("#outer-burungpantai").addClass("card-box-buka");
  setTimeout(() => {
    $("#exit-burungpantai").css("opacity", "1");
  }, 500);
});
$("#exit-burungpantai").click(function () {
  $("#exit-burungpantai").css("opacity", "0");
  setTimeout(() => {
    $("#outer-burungpantai").removeClass("card-box-buka");
  }, 500);
});

$("#batukarang").click(function () { 
  $("#outer-batukarang").addClass("card-box-buka");
  setTimeout(() => {
    $("#exit-batukarang").css("opacity", "1");
  }, 500);
});
$("#exit-batukarang").click(function () {
  $("#exit-batukarang").css("opacity", "0");
  setTimeout(() => {
    $("#outer-batukarang").removeClass("card-box-buka");
  }, 500);
});

$("#mangrove").click(function () {
  $("#outer-mangrove").addClass("card-box-buka");
  setTimeout(() => {
    $("#exit-mangrove").css("opacity", "1");
  }, 500);
});
$("#exit-mangrove").click(function () {
  $("#exit-mangrove").css("opacity", "0");
  setTimeout(() => {
    $("#outer-mangrove").removeClass("card-box-buka");
  }, 500);
});

$("#rumputlaut").click(function () {
  $("#outer-rumputlaut").addClass("card-box-buka");
  setTimeout(() => {
    $("#exit-rumputlaut").css("opacity", "1");
  }, 500);
});
$("#exit-rumputlaut").click(function () {
  $("#exit-rumputlaut").css("opacity", "0");
  setTimeout(() => {
    $("#outer-rumputlaut").removeClass("card-box-buka");
  }, 500);
});

$("#siput").click(function () {
  $("#outer-siput").addClass("card-box-buka");
  setTimeout(() => {
    $("#exit-siput").css("opacity", "1");
  }, 500);
});
$("#exit-siput").click(function () {
  $("#exit-siput").css("opacity", "0");
  setTimeout(() => {
    $("#outer-siput").removeClass("card-box-buka");
  }, 500);
});

// neritic
const flexBox = document.querySelector(".flex-box");

flexBox.addEventListener("mouseover", function () {
  const paragraph = this.querySelector(".flex-box-text p");
    $(".flex-box").addClass("flex-box-buka");
    $(".flex-box-text").addClass("flex-box-text-buka");
    paragraph.style.display = "block";
});

flexBox.addEventListener("mouseout", function () {
  const paragraph = this.querySelector(".flex-box-text p");
    $(".flex-box").removeClass("flex-box-buka");
    $(".flex-box-text").removeClass("flex-box-text-buka");
    paragraph.style.display = "none";
});

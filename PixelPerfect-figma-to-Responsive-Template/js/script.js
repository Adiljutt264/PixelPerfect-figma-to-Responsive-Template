/* --------------------------------------------------
--------------Search BOX-----------------------------
----------------------------------------------------- */
const searchIcon = document.getElementById("search-icon");
const searchModalElement = document.getElementById("searchModal");
const searchModal = new bootstrap.Modal(searchModalElement);

searchIcon.addEventListener("click", function () {
  searchModal.show();
});

/* --------------------------------------------------
--------------Owl Carousel Meet the Partners --------
----------------------------------------------------- */
// Owl Carousel for Meet the Partners
$(document).ready(function () {
  const carousel = $("#owl-demo");
  carousel.owlCarousel({
    navigation: true,
    navigationText: [
      "<img src='img/arrow.png'>",
      "<img src='img/right-arrow.png'>",
    ],
  });
});

/* --------------------------------------------------
--------------Accordion------------------------------
----------------------------------------------------- */
// Accordion Functionality
const accordions = document.querySelectorAll(".accrodion");

accordions.forEach((accordion) => {
  const title = accordion.querySelector(".accrodion-title");
  const content = accordion.querySelector(".accrodion-content");

  title.addEventListener("click", () => {
    if (accordion.classList.contains("active")) {
      accordion.classList.remove("active");
      content.style.display = "none";
    } else {
      accordions.forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".accrodion-content").style.display = "none";
      });

      accordion.classList.add("active");
      content.style.display = "block";
    }
  });
});

/* --------------------------------------------------
--------------Testimonials Slider -------------------
----------------------------------------------------- */
const stageItems = document.querySelectorAll(".stage-item");

// Get next and previous buttons
const nextButton = document.querySelector(".testimonials-next");
const prevButton = document.querySelector(".testimonial");

let currentIndex = 0;

// Show the current slide
function showSlide(index) {
  if (index < 0) {
    currentIndex = stageItems.length - 1;
  } else if (index >= stageItems.length) {
    currentIndex = 0;
  }

  // Hide all slides
  stageItems.forEach((item) => {
    item.style.display = "none";
  });

  // Show the current slide
  stageItems[currentIndex].style.display = "block";
}

// Next button click event
nextButton.addEventListener("click", () => {
  currentIndex++;
  showSlide(currentIndex);
});

// Previous button click event
prevButton.addEventListener("click", () => {
  currentIndex--;
  showSlide(currentIndex);
});

// Initial show
showSlide(currentIndex);
/* --------------------------------------------------
-------------- Drop Down Navbar----------------------
----------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const customDropdownToggles = document.querySelectorAll(
    ".custom-dropdown-toggle"
  );

  customDropdownToggles.forEach(function (toggle) {
    const dropdownMenu = toggle.nextElementSibling;

    toggle.addEventListener("click", function (event) {
      event.preventDefault();

      dropdownMenu.classList.toggle("show");
    });

    window.addEventListener("click", function (e) {
      if (!dropdownMenu.contains(e.target) && !toggle.contains(e.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  });
});

/* --------------------------------------------------
-------------- Tab switcher -------------------------
----------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab");

  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tabBtns.forEach(function (otherBtn) {
        otherBtn.classList.remove("active-btn");
      });
      this.classList.add("active-btn");

      const targetTab = this.getAttribute("data-tab");
      tabContents.forEach(function (tab) {
        tab.classList.remove("active-tab");
      });

      document.querySelector(targetTab).classList.add("active-tab");
    });
  });
});
/* --------------------------------------------------
-------------- Animate the odometer counters---------
----------------------------------------------------- */
function animateCounters() {
  const counters = document.querySelectorAll(".modified-odometer");

  counters.forEach((counter) => {
    const targetValue = parseInt(counter.getAttribute("data-count"));
    let currentValue = 0;

    const updateCounter = () => {
      if (currentValue < targetValue) {
        currentValue += Math.ceil(targetValue / 50);
        counter.textContent = currentValue;
        setTimeout(updateCounter, 50);
      } else {
        counter.textContent = targetValue;
      }
    };

    updateCounter();
  });
}

function handleScroll() {
  const countersSection = document.querySelector(".modified-counters");
  const countersTop = countersSection.offsetTop - window.innerHeight + 100;

  if (window.pageYOffset > countersTop) {
    animateCounters();
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);

/* --------------------------------------------------
--------------News letter----------------------------
----------------------------------------------------- */
class NewsletterForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.emailInput = formElement.querySelector("#email-input");
    this.submitButton = formElement.querySelector(
      ".footer-widget__newsletter-btn"
    );

    this.submitButton.addEventListener("click", this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = this.emailInput.value.trim();

    if (email !== "") {
      this.saveEmail(email);
      this.clearInput();
      alert("Successfully subscribed!");
    } else {
      alert("Please enter a valid email address.");
    }
  }

  saveEmail(email) {
    const existingEmails = this.getSavedEmails();
    existingEmails.push(email);
    localStorage.setItem("newsletterEmails", JSON.stringify(existingEmails));
  }

  getSavedEmails() {
    const savedEmails = localStorage.getItem("newsletterEmails");
    return savedEmails ? JSON.parse(savedEmails) : [];
  }

  clearInput() {
    this.emailInput.value = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const formElement = document.getElementById("newsletter-form");
  if (formElement) {
    const newsletterForm = new NewsletterForm(formElement);
  }
});

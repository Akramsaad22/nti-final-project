document.addEventListener("DOMContentLoaded", function () {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const hiddenCards = document.getElementById("hidden-cards");

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", function () {
      hiddenCards.classList.remove("d-none");

      this.style.display = "none";
    });
  }

  const loadCoursesBtn = document.getElementById("loadMoreCoursesBtn");
  const hiddenCourses = document.getElementById("hidden-courses");

  if (loadCoursesBtn) {
    loadCoursesBtn.addEventListener("click", function () {
      hiddenCourses.classList.remove("d-none");

      this.style.display = "none";
    });
  }
});

/* ===============================


$(document).ready(function () {
    $(".dropdown-btn").click(function () {
        let content = $(this).next();

        $(".dropdown-content").not(content).slideUp();
        $(".dropdown-btn").not(this).removeClass("active");

        content.stop(true, true).slideToggle();
        $(this).toggleClass("active");
    });
});

$("#cta-btn, .buytickets").hover(
    function () {
        $(this).stop().animate({ opacity: 0.8 }, 200);
    },
    function () {
        $(this).stop().animate({ opacity: 1 }, 200);
    }
);

const maps = document.querySelectorAll('.map');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  maps.forEach(map => {
    observer.observe(map);
  });
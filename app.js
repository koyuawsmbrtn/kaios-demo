$(document).ready(function() {
  $(document).keydown(function(e) {
    if (e.key == "SoftLeft") {
      location.href = "next.html";
      e.preventDefault();
    }
  });
});

$(document).ready(function() {
  $(document).keydown(function(e) {
    if (e.key == "SoftLeft") {
      location.href = "index.html";
      e.preventDefault();
    }
  });
});

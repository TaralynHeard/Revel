// const video = document.getElementById("video__content");

// video.addEventListener("loadstart", function() {
//   document.video.style.display = "block";
// });

$(window).on("beforeunload", function() {
  $(video).hide();
});

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("reserveForm");
  const msg = document.getElementById("successMsg");

  form.addEventListener("submit", function(e){
    e.preventDefault();
    msg.style.display = "block";
    form.reset();
  });

});

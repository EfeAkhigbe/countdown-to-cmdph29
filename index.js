const countDownDate = new Date("July 29, 2021 00:00:01").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML =
      "Happy Birthday Highly Esteemed CMD, Pastor Henry Akasili";
  }
}, 1000);

window.onload = function () {
  var backgroundImg = [
    "photos/PastorHenrySir1.jpeg",
    "photos/PastorHenrySir2.jpg",
    "photos/PastorHenrySir3.jpeg",
    "photos/PastorHenrySir4.jpg",
    "photos/PastorHenrySir5.jpg",
    "photos/PastorHenrySir6.jpg",
    "photos/PastorHenrySir7.jpg",
    "photos/PastorHenrySir8.jpg",
    "photos/PastorHenrySir9.jpg",
  ];

  setInterval(changeImage, 5000);
  function changeImage() {
    var i = Math.floor(Math.random() * 9);

    document.body.style.backgroundImage =
      "linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url('" +
      backgroundImg[i] +
      "')";
  }
};

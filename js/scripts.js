function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('CET').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('MARS').innerHTML = (h+6) + ":" + m + ":" + s;
    document.getElementById('JUPITER').innerHTML = (h+9) + ":" + m + ":" + s;


    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

  function startDay(){
    var today = new Date();
    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById('daytoday').innerHTML = weekdays[today.getDay()] + " " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
    document.getElementById('daytodaymars').innerHTML = weekdays[(today.getDay() + 2)] + " " + (today.getDate() + 4) + " " + months[(today.getMonth() + 3)] + " " + (today.getFullYear() + 25);
    document.getElementById('daytodayjupiter').innerHTML = weekdays[(today.getDay() + - 2)] + " " + (today.getDate() + 9) + " " + months[(today.getMonth() + 7)] + " " + (today.getFullYear() + 52);

  }

  function checkSeason(){
  var today = new Date();
  var month = today.getMonth();

  if (month >= 3 && month <= 5){
    document.getElementById("season").src = "img/spring.png";
  }
  else if (month >= 6 && month <= 8) {
    document.getElementById("season").src = "img/summer.png";
  }
  else if (month >= 9 && month <= 11){
    document.getElementById("season").src = "img/autumn.png";
  }
  else{
    document.getElementById("season").src = "img/winter.png";
}
  }

  function checkDayNight(){
  var today = new Date();
  var hour = today.getHours();

  if (hour >= 7 && hour <= 22){
    document.body.style.backgroundImage = "url('img/day.jpg')";
    document.getElementById("blok").style.backgroundColor='lightblue';
    document.getElementById("blok2").style.backgroundColor='lightblue';
    document.getElementById("blok3").style.backgroundColor='lightblue';

  }
  else {
    document.body.style.backgroundImage = "url('img/night.jpg')";
    document.getElementById("blok").style.backgroundColor='#24242c';
    document.getElementById("blok2").style.backgroundColor='#24242c';
    document.getElementById("blok3").style.backgroundColor='#24242c';
  }

  }



  startDay();
  startTime();
  checkSeason();
  checkDayNight();

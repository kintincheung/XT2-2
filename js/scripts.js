function startTime() {
    var today = new Date();
    var h = today.getHours();
    var hh = today.getHours();
    var hhh = today.getHours();

    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('CET').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('MARS').innerHTML = hh + ":" + m + ":" + s;
    document.getElementById('JUPITER').innerHTML = hhh + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  startTime();

  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

  function startDay(){
    var today = new Date();
    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById('daytoday').innerHTML = weekdays[today.getDay()] + " " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
    document.getElementById('daytodaymars').innerHTML = weekdays[(today.getDay() + 1)] + " " + (today.getDate() + 4) + " " + months[(today.getMonth() + 3)] + " " + (today.getFullYear() + 25);
    document.getElementById('daytodayjupiter').innerHTML = weekdays[(today.getDay() + - 2)] + " " + (today.getDate() + 9) + " " + months[(today.getMonth() + 7)] + " " + (today.getFullYear() + 52);
  }
  startDay();

  function checkSeason(){
  var today = new Date();
  var month = today.getMonth();

  if (month >= 2 && month <= 4){
    document.getElementById("season").src = "img/spring.png";
  }
  else if (month >= 5 && month <= 6) {
    document.getElementById("season").src = "img/summer.png";
  }
  else if (month >= 9 && month <= 10){
    document.getElementById("season").src = "img/autumn.png";
  }
  else{
    document.getElementById("season").src = "img/winter.png";
}
  }
  checkSeason();

  function checkSeason2(){
  var today = new Date();
  var month = (today.getMonth() + 3);

  if (month >= 2 && month <= 4){
    document.getElementById("season2").src = "img/spring.png";
  }
  else if (month >= 5 && month <= 6) {
    document.getElementById("season2").src = "img/summer.png";
  }
  else if (month >= 9 && month <= 10){
    document.getElementById("season2").src = "img/autumn.png";
  }
  else{
    document.getElementById("season2").src = "img/winter.png";
}
  }
  checkSeason2();

  function checkSeason3(){
  var today = new Date();
  var month = (today.getMonth() + 7);

  if (month >= 2 && month <= 4){
    document.getElementById("season3").src = "img/spring.png";
  }
  else if (month >= 5 && month <= 6) {
    document.getElementById("season3").src = "img/summer.png";
  }
  else if (month >= 9 && month <= 10){
    document.getElementById("season3").src = "img/autumn.png";
  }
  else{
    document.getElementById("season3").src = "img/winter.png";
}
  }
  checkSeason3();

  function checkDayNight(){
  var today = new Date();
  var hour = today.getHours();

  if (hour >= 7 && hour <= 24){
    document.body.style.backgroundImage = "url('img/day.jpg')";
    document.getElementById("blok").style.backgroundColor='lightblue';
    document.getElementById("blok2").style.backgroundColor='lightblue';
    document.getElementById("blok3").style.backgroundColor='lightblue';
    document.getElementById("blok").style.border=' thick solid white ';
    document.getElementById("blok2").style.border=' thick solid white ';
    document.getElementById("blok3").style.border=' thick solid white ';
  }
  else {
    document.body.style.backgroundImage = "url('img/night.jpg')";
    document.getElementById("blok").style.backgroundColor='#efefef1a';
    document.getElementById("blok2").style.backgroundColor='#efefef1a';
    document.getElementById("blok3").style.backgroundColor='#efefef1a';
    document.getElementById("blok").style.border=' thick solid white ';
    document.getElementById("blok2").style.border=' thick solid white ';
    document.getElementById("blok3").style.border=' thick solid white ';
  }
  }
  checkDayNight();

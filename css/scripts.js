function akanName() {
    var input = document.getElementById('birth').value;
    var d = new Date(input);
    var CC, MM, YY;
    if (!!d.valueOf()) {
      YY = d.getFullYear();
      MM = d.getMonth();
      CC = d.getDate();
  
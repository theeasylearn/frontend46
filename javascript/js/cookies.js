//setCookie function is used to set/change/delete cookies 
function setCookie(name,value='',days=100) {
  var d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
//getCookie function is used to get value of specific cookie by name
function getCookie(name) {
  var name = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
   var c = ca[i];
   while (c.charAt(0) == ' ') {
    c = c.substring(1);
   }
   if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
   }
  }
  return "";
 }

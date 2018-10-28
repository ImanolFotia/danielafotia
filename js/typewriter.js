var i = 0;
var txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\
            dolore magna aliqua.\
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
            consequat. Duis aute irure dolor\
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\
            occaecat cupidatat non proident,\
            sunt in culpa qui officia deserunt mollit anim id est laborum.'; /* The text */
var speed = 25;


function typeWriterbiography() {
  if (i < txt.length) {
    //$('#Biography_text').text += txt.charAt(i);
    document.getElementById("Biography_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriterbiography, speed);
  }
}


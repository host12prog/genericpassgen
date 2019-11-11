var x = document.getElementById("length");
var y = document.getElementById("generate");

function makepass(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

x.onclick = function() {
    var s = document.createElement("strong");
    s.innerText = "Your generated password is: " + makepass(y.value);
    document.body.appendChild(s);
}

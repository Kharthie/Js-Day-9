
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    let ans=t.filter(asia =>asia.region=="Asia").map(asia =>asia.name)
    console.log(ans)
    
  } else {
   console.log("error");
 }
};
xhr.send();
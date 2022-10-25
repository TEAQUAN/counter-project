let number = document.querySelector(".counter");
let followers = document.querySelector(".followers");

var count = 1;
setInterval(function hey() {
if (count <=  1000){
    count++
    number.innerHTML = count;
} else {
    count = `${count} warning do not run this if you have a shitty laptop`
  number.innerHTML =  count
}
}, 1)
 
// if you are reading this there was no need for the else i was just having fun my friend
setTimeout( function() {
    followers.innerText = "followers on instagram"
},1)
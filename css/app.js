/*addEventListener('click', createBox);

function createBox(event) {
    var mark = document.createElement('div');
    mark.className = 'mark';
    mark.style.left = event.pageX + 'px';
    mark.style.top = event.pageY + 'px';
    document.body.appendChild(mark);
}*/

window.onload = function() {
    if ( document.URL.includes("index.html") ) {
        var somenum = 0
        localStorage.setItem("storageName", somenum);
    } else {
        var distance = 0;
        distance = localStorage.getItem("storageName");
        let txt = document.getElementById("text")
        txt.textContent = "Your score: " + Math.round(parseInt(distance));
    }
};

/*window.onload = function() {
    if (localStorage.getItem("storageName") == null) {
        var somenum = 0
        localStorage.setItem("storageName", somenum);
    }
    if ( document.URL.includes("index.html") ) {
        var somenum = 0
        localStorage.setItem("storageName", somenum);
    } else {
        var distance = localStorage.getItem("storageName");
        let txt = document.getElementById("text")
        txt.textContent = "Your score: " + Math.round(parseInt(distance));
    }
};*/

/*window.onload = function() {
    try{        
        if ( document.URL.includes("index.html") ) {
            var somenum = 0
            localStorage.setItem("storageName", somenum);
        } else {
            var distance = localStorage.getItem("storageName");
            let txt = document.getElementById("text")
            txt.textContent = "Your score: " + Math.round(parseInt(distance));
        }
    }catch (e){
        var somenum = 0
        localStorage.setItem("storageName", somenum);
    }
};*/

/*window.onload = function() {

    if ( document.URL.includes("index.html") || localStorage.getItem("storageName") == NaN || localStorage.getItem("storageName") == null) {
        var somenum = 0
        localStorage.setItem("storageName", somenum);
    } else {
        var distance = localStorage.getItem("storageName");
        let txt = document.getElementById("text")
        txt.textContent = "Your score: " + Math.round(parseInt(distance));
    }
    
};*/

/*var box = document.getElementById("mark");
    let map = document.getElementById("map")
    map.addEventListener('click', function(event) {
    box.style.visibility="visible";
    box.style.left = event.pageX + 'px';
    box.style.top = event.pageY + 'px';
    let sub = document.getElementById("btn");
    sub.style.visibility = "visible";
    let bt = document.getElementById("next");
    bt.style.width = 9 + 'vw';
}/*, { once: true });*/

document.body.addEventListener("click", function(event) {
    let guess = document.getElementById("mark");
    let check = document.getElementById("btn");
    
    if (event.target.id != "box-2" && event.target.id != "box" && event.target.id != "text" && event.target.id != "btn") {
        //console.log(event.target.id);
        //console.log(event.pageY, ", ", event.pageX);           
        //gue.style.width = window.innerWidth / 1920 * 20 + 'px';
        guess.style.visibility = "visible";
        guess.style.top = event.pageY + "px";
        guess.style.left = event.pageX + "px";
        //guess.style.top = event.pageY - map.offsetHeight / 1080 * gue.offsetHeight + 'px';
        //guess.style.left = event.pageX - map.offsetWidth / 1920 * 10 + 'px';
        check.style.visibility = "visible";
    
        console.log("click: " + event.pageX + ", " + event.pageY);
    }
});

let button = document.getElementById("btn");

button.addEventListener("click", () => {
    let guess = document.getElementById("mark");
    let real = document.getElementById("fs");

    const pos1 = guess.getBoundingClientRect();
    const pos2 = real.getBoundingClientRect();

    var xa = pos2.left - pos1.left
    var ya = pos2.top - pos1.top
    if (xa < 0) {
        var xaw = xa/-1
    } else {
        var xaw = xa
    }
    if (ya < 0) {
        var yaw = ya/-1
    } else {
        var yaw = ya
    }
    var dis = xaw*2 + yaw*2
    /*if (dis < 0) {
        var dis2 = dis/-1;
    } else {
        var dis2 = dis;
    }*/
    var distance = Math.sqrt(dis);

    if (Math.round(distance) > 15) {
        distance = 0;
    } else if (Math.round(distance) <= 3) {
        distance = 15
    } else {
        distance = 15 - distance
    }

    distance = Math.round(parseInt(localStorage.getItem("storageName")) + distance)

    let txt = document.getElementById("text");
    txt.textContent = "Your score: " + distance;
    
    localStorage.setItem("storageName", parseInt(distance));

    real.style.visibility="visible";
    let sub = document.getElementById("btn");
    let nxt = document.getElementById("next");

    sub.style.visibility = "hidden";
    nxt.style.visibility = "visible";
});

/*I guess. here are some building blocks:
to get an element based on its id, you use document.getElementById(id_goes_here)
let myElement = document.getElementById("the-id-to-select");
To run code when a certain element is clicked, you use the addEventListener function:
element.addEventListener("click", () => {
  // code here will run when the element is clicked
});
to get the position of elements on a page, you can use the getClientBoundingRect method:
const myRect = element.getClientBoundingRect();*/
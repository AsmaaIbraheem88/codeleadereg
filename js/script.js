/*global document */

/////////////////////////// active link ///////////////////////////




var li = document.getElementsByClassName("nav-item"),
    i,
    z;

for (i = 0; i < li.length; i++) {




    li[i].onclick = function () {

        for (z = 0; z < li.length; z++) {
            li[z].classList.remove("active1");
        }

        this.classList.add("active1");
    }


}



///////////////////////////////////

var btn = document.getElementById('bt');


window.onscroll = function () {

    if (scrollY > 700) {

        btn.removeAttribute('class', 'hidden');


    } else {

        btn.setAttribute('class', 'hidden');
    }

}


btn.onclick = function () {

    scrollTo(0, 0);
}

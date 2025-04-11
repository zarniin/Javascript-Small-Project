const slides = document.getElementsByClassName('carousel-item');
const dots = document.querySelectorAll('.dot');
// console.log(slides);
// console.log(dots);

let currslide = 1;

// slides[currslide-1].style.display = "block";

document.getElementById('prev').addEventListener('click',function(){
    // console.log('i am hay prev');

    // console.log(currslide -= 1);
    // console.log(currslide--);

    carousel(currslide -= 1);
});

document.getElementById('next').addEventListener('click',function(){
    // console.log('i am hay next');

    // console.log(currslide += 1);
    // console.log(currslide++);

    carousel(currslide += 1);

});

carousel(currslide);

function carousel(slidenum){
    // currslide 1 to 3 & 3 to 1 
    // console.log(slidenum);

    var x,y;

    for(x=0;x < slides.length;x++){
        slides[x].style.display = "none";
    }

    for(y=0;y < dots.length;y++){
        // dots[y].className = "dot";
        // dots[y].classList.remove('active');
                                            // replace(searchvalue,replacevalue) 
        dots[y].className = dots[y].className.replace('active',"");
    }

    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = slides.length;
    }

    console.log(currslide);

    slides[currslide - 1].style.display = "block";

    // dots[currslide - 1].className = "dot active";
    dots[currslide - 1].classList.add('active');

}


for(var q=0;q < dots.length;q++){

    dots[q].addEventListener('click',function(){
        console.log('hay');
        // console.log(this.getAttribute('data-bs-slide-to'));

        currslide = this.getAttribute('data-bs-slide-to');
        
        carousel(currslide);

    });

}



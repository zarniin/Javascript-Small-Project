// UI 
const getacctitles = document.getElementsByClassName("acctitle");
// console.log(getacctitles); // HTMLCollection
const getactivecontents = document.querySelectorAll(".acccontent"); 
// console.log(getacccontents);// NodeList 

// console.log(getacctitles.length);// 4

// console.log(getacctitles[0]);
// console.log(getacctitles[1]);
// console.log(getacctitles[2]);
// console.log(getacctitles[3]);

for(var x = 0; x < getacctitles.length;x++){
    // console.log(x);// 0 to 3
    // console.log(getacctitles[x]);

    // Method 1 
    getacctitles[x].addEventListener('click',function(e){
        // console.log("hello");

        // console.log(e);
        // console.log(e.target);
        // console.log(this);

        // h1
        // e.target.classList.toggle("active");
        this.classList.toggle('active');

        const getcontent = this.nextElementSibling;

        if(getcontent.style.height){
            // remove
            getcontent.style.height = null;  // beyound can't set 0 
        }else{
            // add 
            getcontent.style.height = getcontent.scrollHeight+"px";
        }

    });

    // Method 2 

    // getacctitles[x].addEventListener('click',getacctitle);

    // function getacctitle(e){
        // console.log("hello");

        // console.log(e);
        // console.log(e.target);
        // console.log(this);

        // Start 1 
        // e.target.classList.toggle("active");

        // Start 2 
                            // h1    accontent 
        // const getcontent = this.nextElementSibling;
        // console.log(getcontent); 
        // console.log(getcontent.scrollHeight+"px");

        // getcontent.style.height = getcontent.scrollHeight+"px";

        // Start 3 
        // if(getcontent.style.height){
        //     // remove
        //     getcontent.style.height = null;  // beyound can't set 0 
        // }else{
        //     // add 
        //     getcontent.style.height = getcontent.scrollHeight+"px";
        // }

        
    // }

    // Start 4
    if(getacctitles[x].classList.contains('active')){
        getactivecontents[x].style.height = getactivecontents[x].scrollHeight+"px";
    }

};




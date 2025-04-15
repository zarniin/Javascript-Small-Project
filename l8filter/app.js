// Get UI 

var getinput = document.getElementById('search');

var getsortazm1btn = document.getElementById('sortazm1'),
    getsortzam1btn = document.getElementById('sortzam1'),
    getsortazm2btn = document.getElementById('sortazm2'),
    getsortzam2btn = document.getElementById('sortzam2');

var getul = document.getElementById('members');
var getlis = getul.getElementsByTagName('li');
// console.log(getlis);
// console.log(getlis[0]);

getinput.addEventListener('keyup',filter);

getsortazm1btn.addEventListener('click',sortazm1btn);
getsortzam1btn.addEventListener('click',sortzam1btn);

getsortazm2btn.addEventListener('click',sortazm2btn);
getsortzam2btn.addEventListener('click',sortzam2btn);


function filter(){

    var getlink;

    var filter = this.value.toLowerCase();
    // console.log(filter);

    for(var x = 0;x < getlis.length;x++){
        // console.log(x); 0 to 27

        // getlink = getlis[x].getElementsByTagName('a')[0];
        // getlink = getlis[x].querySelectorAll('a')[0];
        getlink = getlis[x].querySelector('a');
        console.log(getlink);

        var getatext = getlink.textContent || getlink.innerText;
        // console.log(getatext);
        // console.log(getatext.toLowerCase());

        if(getatext.toLowerCase().indexOf(filter) > -1){
            getlis[x].style.display = "";
        }else{
            getlis[x].style.display = "none";
        }


    }

}


// Method 1  A to Z 

function sortazm1btn(){
    // console.log('Method 1 AZ');

    var lis = [];

    for(var i = 0; i < getlis.length;i++){
        // console.log(getlis[i]);
        // console.log(getlis[i].innerHTML);
        // console.log(getlis[i].textContent);

        lis.push(getlis[i].textContent);
    }

    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.reverse());
    // console.log(lis.sort().reverse());

    var azlis = lis.sort();

    getul.innerHTML = "";

    azlis.forEach(function(azli){
        // console.log(azli);

        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = "javascript:void(0);";

        newlink.appendChild(document.createTextNode(azli));
        // console.log(newlink);

        newli.appendChild(newlink);
        // console.log(newli);

        getul.appendChild(newli);
    });

    
}

// Method 1  Z to A 

function sortzam1btn(){
    // console.log('Method 1 ZA');

    var lis = [];

    for(var i = 0; i < getlis.length;i++){
        // console.log(getlis[i]);
        // console.log(getlis[i].innerHTML);
        // console.log(getlis[i].textContent);

        lis.push(getlis[i].textContent);
    }

    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.reverse());
    // console.log(lis.sort().reverse());

    var zalis = lis.sort().reverse();

    getul.innerHTML = "";

    zalis.forEach(function(zali){
        // console.log(azli);

        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = "javascript:void(0);";

        newlink.appendChild(document.createTextNode(zali));
        // console.log(newlink);

        newli.appendChild(newlink);
        // console.log(newli);

        getul.appendChild(newli);
    });

}

// Method 2  A to Z 

function sortazm2btn(){
    console.log('Method 2 AZ');
}

// Method 2  Z to A 

function sortzam2btn(){
    console.log('Method 2 ZA');
}











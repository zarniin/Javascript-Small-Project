// Get UI 
var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',(e) => {
    // console.log('hay');

    addnew();

    e.preventDefault();
});

function addnew(){
    // console.log('hi');

    let todotext = gettextbox.value;

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todotext));
    getul.appendChild(li);
    gettextbox.value = "";
    gettextbox.focus();

    li.addEventListener('click',function(){
        li.classList.toggle('completed');
    });

    li.addEventListener('contextmenu',function(e){
        li.remove();

        e.preventDefault();
    });

}










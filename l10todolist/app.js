// Get UI 
var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',(e) => {
    // console.log('hay');

    addnew();

    e.preventDefault();
});

var gettodos = JSON.parse(localStorage.getItem('todos'));
// console.log(typeof gettodos);

if(gettodos){
    // Method 1 
    // gettodos.forEach(function(gettodo){
    //     console.log(gettodo);
    // addnew(getodo);
    // });

    // Method 2 
    // gettodos.forEach(gettodo=>{
    //     // console.log(gettodo);
    //     addnew(gettodo);
    // });

    // Method 3 
    gettodos.forEach(gettodo=>addnew(gettodo));
}

function addnew(gettodo){

    let todotext = gettextbox.value;

    if(gettodo){
        todotext = gettodo.text;
    }

    if(todotext){
        const li = document.createElement('li');

        if(gettodo && gettodo.done){
            li.classList.add('completed');
        }
        li.appendChild(document.createTextNode(todotext));
        getul.appendChild(li);
        gettextbox.value = "";
        gettextbox.focus();

        updatelocalStorage();

        li.addEventListener('click', function () {
            li.classList.toggle('completed');
            updatelocalStorage();
        });

        li.addEventListener('contextmenu', function (e) {
            li.remove();
            updatelocalStorage();
            e.preventDefault();
        });
    }

}

function updatelocalStorage(){
    
    var getalllis = document.querySelectorAll('li');
    // console.log(getalllis);

    const todos = [];

    getalllis.forEach(getallli =>{
        // console.log(getallli.textConent);

        todos.push({
            text: getallli.textContent,
            done: getallli.classList.contains('completed')
        });
    });

    console.log(todos);

    localStorage.setItem('todos',JSON.stringify(todos));
 
}










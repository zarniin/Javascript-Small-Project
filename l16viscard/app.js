// Get UI 
const inputs = document.querySelectorAll('input');
let datas = [];

inputs.forEach(function(input){
    // console.log(input);

    input.addEventListener('keyup',function(){
        // console.log(this.value);

        datas.push({
            // key: value 
            digit: inputs[0].value,
            name: inputs[1].value,
            exp: inputs[2].value,
            ccv: inputs[3].value
        });

        console.log(datas[datas.length-1]);


    });
});







    











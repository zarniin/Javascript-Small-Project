// GET UI
const minnum = document.querySelector('.minnumber'),
	  maxnum = document.querySelector('.maxnumber'),
	  getinput = document.querySelector('.form-control'),
	  getbtn = document.querySelector('.btn'),
	  message1 = document.querySelector('.message1'),
	  message2 = document.querySelector('.message2');
	  getgameform = document.getElementById('gameform');

const getmicbtn = document.getElementById('mic-btn');
const getvocctn = document.getElementById('voice-container');

const min = 1,
	  max = 5,
	  warningnum = 5;
	//   warningnum = randomnum(min,max);

let gameleft = 3;

minnum.innerHTML = min;
maxnum.innerText = max;

// For Chrome Browser Support 
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.msSpeechRecognition || window.mozSpeechRecognition;

let getrec = new window.SpeechRecognition;

getmicbtn.addEventListener('click',function(){
	// console.log('i am working');
	console.log(getrec);

	// start() default function from Recognition api
	getrec.start();

	getrec.addEventListener('result',(e)=> talking(e));

});

function talking(ele){
	// console.log(ele);
	// console.log(ele.results[0][0].transcript);
	
	const micresult = ele.results[0][0].transcript;
	console.log(micresult);

	msgmessage(micresult);
	getnumber(micresult);
}

function msgmessage(msg){
	getvocctn.innerHTML = `<span>Did you say !!! ${msg}</span>`;
}

function getnumber(msg){
	const getnum = +msg;
	console.log(getnum);
	console.log(typeof getnum);

	// console.log('abcd');

	if(Number.isNaN(getnum)){
		getvocctn.innerHTML = `<div>This is not a valid number.</div>`;
		return true;
	}

	// console.log('efg');

	getinput.value = getnum;

	// stop() default function from Recognition api 
	getrec.stop();
}



getbtn.addEventListener('click',function(e){
	
	// console.log(getinput.value);
	// console.log(typeof getinput.value);

	// let guess = Number(getinput.value);
	// let guess = +getinput.value;
	let guess = parseInt(getinput.value);
	// console.log(typeof guess);

	if(guess < min || guess > max || isNaN(guess)){
		// console.log(`Please enter a number between ${min} to ${max}`);
		// message2.textContent = `Please enter a number between ${min} to ${max}`;

		setmessage2(`Please enter a number between ${min} to ${max}`,"red");
	}

	if(guess === warningnum){
		// You Won 
		// console.log("You Won");

		// disabled getinput
		// getinput.disabled = true; 

		// getinput border color to green
		// getinput.style.borderColor = "green";

		// message1  
		// message1.textContent = `${warningnum} is Correct You won.`;
		// message1.style.color = "green";

		// setmessage1(`${warningnum} is Correct You won.`,"green");
		
		// play again 
		// getbtn.value = "Play again";

		gameover(true,`${warningnum} is Correct You won.`);

	}else{

		// gameleft--;

		gameleft -= 1;
		// console.log(gameleft);

		if(gameleft === 0){
			// Game Over Lost 

			// disabled getinput
			// getinput.disabled = true; 

			// getinput border color to red
			// getinput.style.borderColor = "red";

			// message1  
			// message1.textContent = `Game Over , You Lost, The correct number is ${warningnum}`;
			// message1.style.color = "red";

			// setmessage1(`Game Over , You Lost, The correct number is ${warningnum}`,"red");
		
			// play again 
			// getbtn.value = "Play again";

			gameover(false,`Game Over , You Lost, The correct number is ${warningnum}`);

		}else{
			// Continue Game 

			// getinput border color to red
			getinput.style.borderColor = "red";

			// message1  
			setmessage1(`${guess} is not correct!, ${gameleft} guess left.`,"blue");

			// clear getinput value 
			getinput.value = "";

			// auto foucs getinput
			getinput.focus();

		}

	}

	e.preventDefault();
});

// Message 

function setmessage1(msg,color){
	message1.textContent = msg;
	message1.style.color = color;
}

function setmessage2(msg,color){
	message2.textContent = msg;
	message2.style.color = color;

	setTimeout(function(){
		message2.textContent = "";
	},2000);
}

function gameover(won,msg){
	let color;

	won === true ? color = "green" : color = "red";

	getinput.disabled = true;
	getinput.style.borderColor = color;

	setmessage1(msg,color);

	getbtn.value = "Play Again";

	// Add Class 
	getbtn.classList.add("playagain");
	// getbtn.className = "btn playagain";

}

// Playagain section
getgameform.addEventListener('mousedown',function(e){
	// console.log("hello");

	// console.log(e.target);

	// e.target.classList.contains('playagain');
	if(e.target.className === "btn playagain"){
		// console.log("hello");

		window.location.reload();
	}

});

// randomnum section 

function randomnum(min,max){
	let getrdm = Math.floor(Math.random()* (max-min)+min);
	return getrdm;
}

// console.log(Math.floor(Math.random()* (max-min)+1));
// console.log(randomnum(min,max));
console.log(warningnum);
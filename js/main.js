alert('full screen please!')



const finn = document.querySelector('#finn')
const jake = document.querySelector('#jake')
const bmo = document.querySelector('#bmo')
const iceKing = document.querySelector('#iceKing')
const princessBubblegum = document.querySelector('#princessBubblegum')
const jamesBaxter = document.querySelector('#jamesBaxter')

document.querySelector('#finnDisplay').addEventListener('click', finnDisplay)
document.querySelector('#jakeDisplay').addEventListener('click', jakeDisplay)
document.querySelector('#bmoDisplay').addEventListener('click', bmoDisplay)
document.querySelector('#iceKingDisplay').addEventListener('click', iceKingDisplay)
document.querySelector('#princessBubblegumDisplay').addEventListener('click', princessBubblegumDisplay)
document.querySelector('#jamesBaxterDisplay').addEventListener('click', jamesBaxterDisplay)



function finnDisplay(){
	finn.classList.toggle('hidden')
	// jake.classList.add('hidden')
	// bmo.classList.add('hidden')
	// iceKing.classList.add('hidden')
	// princessBubblegum.classList.add('hidden')
	// jamesBaxter.classList.add('hidden')
}

function jakeDisplay(){
	// finn.classList.add('hidden')
	jake.classList.toggle('hidden')
	// bmo.classList.add('hidden')
	// iceKing.classList.add('hidden')
	// princessBubblegum.classList.add('hidden')
	// jamesBaxter.classList.add('hidden')
}

function bmoDisplay(){
	// finn.classList.add('hidden')
	// jake.classList.add('hidden')
	bmo.classList.toggle('hidden')
	// iceKing.classList.add('hidden')
	// princessBubblegum.classList.add('hidden')
	// jamesBaxter.classList.add('hidden')
}

function iceKingDisplay(){
	// finn.classList.add('hidden')
	// jake.classList.add('hidden')
	// bmo.classList.add('hidden')
	iceKing.classList.toggle('hidden')
	// princessBubblegum.classList.add('hidden')
	// jamesBaxter.classList.add('hidden')
}

function princessBubblegumDisplay(){
	// finn.classList.add('hidden')
	// jake.classList.add('hidden')
	// bmo.classList.add('hidden')
	// iceKing.classList.add('hidden')
	princessBubblegum.classList.toggle('hidden')
	// jamesBaxter.classList.add('hidden')
}

function jamesBaxterDisplay(){
	// finn.classList.add('hidden')
	// jake.classList.add('hidden')
	// bmo.classList.add('hidden')
	// iceKing.classList.add('hidden')
	// princessBubblegum.classList.add('hidden')
	jamesBaxter.classList.toggle('hidden')
}


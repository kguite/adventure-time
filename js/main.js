alert('full screen please!')



const finn = document.querySelector('#finn')
const jake = document.querySelector('#jake')
const bmo = document.querySelector('#bmo')
const iceKing = document.querySelector('#iceKing')
const lumpy = document.querySelector('#lumpySpacePrincess')
const jamesBaxter = document.querySelector('#jamesBaxter')

document.querySelector('#finnDisplay').addEventListener('click', finnDisplay)
document.querySelector('#jakeDisplay').addEventListener('click', jakeDisplay)
document.querySelector('#bmoDisplay').addEventListener('click', bmoDisplay)
document.querySelector('#iceKingDisplay').addEventListener('click', iceKingDisplay)
document.querySelector('#lumpyDisplay').addEventListener('click', lumpyDisplay)
document.querySelector('#jamesBaxterDisplay').addEventListener('click', jamesBaxterDisplay)



function finnDisplay(){
	finn.classList.toggle('hidden')
}

function jakeDisplay(){
	jake.classList.toggle('hidden')
}

function bmoDisplay(){
	bmo.classList.toggle('hidden')
}

function iceKingDisplay(){
	iceKing.classList.toggle('hidden')
}

function lumpyDisplay(){
	lumpy.classList.toggle('hidden')
}

function jamesBaxterDisplay(){
	jamesBaxter.classList.toggle('hidden')
}


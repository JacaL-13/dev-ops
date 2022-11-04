const button = document.querySelector('button')
const hideMe = document.querySelector('#hideMe')

button.addEventListener('click', () => {
	console.log('button pushed')
	hideMe.classList.toggle('hide')
	axios.get('/crit').then(res => {console.log(res)})
})
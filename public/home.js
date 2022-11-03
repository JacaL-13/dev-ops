const button = document.querySelector('button')
const hideMe = document.querySelector('#hideMe')

button.addEventListener('click', () => {
	console.log('button pushed')
	hideMe.classList.toggle('hide')
	axios.get('/fail').then(res => {console.log(res)})
})

// The resource from “https://deployment7882.herokuapp.com/js” was blocked due to MIME type (“text/html”) mismatch (X-Content-Type-Options: nosniff).
//  This is where the click of the button is registered
document.getElementById('button').addEventListener('click', register)
//  This edits the background color
document.body.style.backgroundColor = 'lightblue'
//  Here is where the click receives it's function. A alert shows up displaying the text and saying thanks for clicking.
function register () {
  alert(document.getElementById('inputbox').value)
  document.getElementById('responding').innerText = 'Thank you!'
}

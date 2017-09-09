let outputParent = document.getElementById('outputContainer')
let searchButton = document.getElementById('submitButton')

let searchForm = document.getElementById('searchForm')

searchButton.addEventListener('click', function() {

  outputParent.innerHTML = ''

  let req = {
    body: {
      age: document.getElementById('searchAge').value,
      weight: document.getElementById('searchWeight').value,
      unit: document.getElementById('searchUnit').value
    }
  }

  if(!req.body.age || !req.body.weight) {
    let para = document.createElement('p')
    para.textContent = 'Please enter age and weight'
    para.className = "error"
    outputParent.appendChild(para)

  } else {
    console.log('req', req);
  }
})

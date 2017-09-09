let outputParent = document.getElementById('outputContainer')
let searchButton = document.getElementById('submitButton')

let searchForm = document.getElementById('searchForm')

let getInfo = function() {
  outputParent.innerHTML = ''

  let weightLbs = 0;

  let age = document.getElementById('searchAge').value
  let weight = document.getElementById('searchWeight').value
  let unit = document.getElementById('searchUnit').value

  if(unit === 'kg'){
    weightLbs = weight * 2.20462
  } else if(unit === 'stone') {
    weightLbs = weight * 14
  } else {
    weightLbs = weight
  }

  let req = {
    body: {
      age: age,
      weightLbs: weightLbs
    }
  }

  if(!req.body.age || !req.body.weightLbs) {
    let para = document.createElement('p')
    para.textContent = 'Please enter age and weight'
    para.className = 'error'
    outputParent.appendChild(para)
  } else {
    let para = document.createElement('p')
    para.textContent = `Your child is ${age} and weighs ${weight} ${unit}`
    para.className = 'error'
    outputParent.appendChild(para)
  }
}

searchButton.addEventListener('click', getInfo)
searchForm.addEventListener('submit', getInfo)

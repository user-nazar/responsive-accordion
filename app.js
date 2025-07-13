function changePanel(event, panelname) {
  // remove active class and add it to event target
  document.querySelector('.active').classList.remove('active')
  event.target.classList.add('active')
  // reset symbols in accordion and update event target 
  let symbols = document.querySelectorAll('p')
  for (let i = 0; i < symbols.length; i++) {
    symbols[i].innerHTML = '+'
  }
  event.target.children[0].innerHTML = '-'
  // update corresponding text panel to active based on event target
  document.querySelector('.active-panel').classList.remove('active-panel')
  let x = document.getElementById(panelname)
  x.classList.add('active-panel')
}

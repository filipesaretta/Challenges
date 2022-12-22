
/* Challenge  Ready Tables
- Topic: Return a Function
Our restaurant has 20 tables and the staff serves 
2 tables at a time. They need to know which tables 
are ready to serve.  
Let's fix this with what we learned about returning a 
function inside of another function.

*/
function getReadyTables() {
  const readyTables = []
  for (let i = 0; i < 2; i++) {
      readyTables.push(Math.round(Math.random()*20) + 1)
  }
  return readyTables
}


function displayTables() {
  const section = document.getElementById('tables')
  const tables = getReadyTables();
  const table = tables.map(table => {
    return`<div class="table">${table}</div>`
  })
  section.innerHTML = table.join('')
}

displayTables()
 

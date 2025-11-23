
let age=45
function displayAge(){
  console.log(age)

  
  function changeAge(){
    age=50
  }
    changeAge()
    console.log("updated age: " +age)
  }

displayAge()
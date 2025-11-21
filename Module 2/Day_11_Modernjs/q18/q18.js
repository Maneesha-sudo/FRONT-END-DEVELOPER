if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);

/*output is 20, because let is block-scoped and var is function-scoped or global scoped.
Even though var  is inside the if block,it gets hoisted to the top of the function.
let exists only inside {}, so console.log(x); throws >ReferenceError: x is not defined

*/

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email)
console.log(profile?.user?.details?.phone)



const user = {
  name: "Maneesha",
}
console.log(user?.address?.city);


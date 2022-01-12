let user = {};
//console.log(user.name.street) //throw a type error
console.log(user?.name?.street)

//note don't over use optional chaining. it makes it look like you're circumventing the bugs.
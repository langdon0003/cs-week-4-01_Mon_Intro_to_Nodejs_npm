const { data } = require("./data")

const print = () => {
  data.forEach(e => {
    console.log(`User name is : ${e.name}. User age is : ${e.age}`);
  });

}

module.exports = print
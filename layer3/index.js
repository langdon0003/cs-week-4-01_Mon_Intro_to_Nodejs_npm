const { data } = require("../layer2/data");

const oldYoung = () => {
  const newData = data.sort((a, b) => a.age - b.age);

  console.log(`User ${newData[newData.length - 1].name} is the oldest, age ${newData[newData.length - 1].age}`);

  console.log(
    `User ${newData[0].name} is the youngest, age ${newData[0].age
    }`
  );
};

module.exports = oldYoung
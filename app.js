const fs = require('fs');

// 🔥Synchronous Deletion

// try {
//   fs.unlinkSync('./tobedeleted.txt');
// } catch (e) {
//   console.log(e)
// } finally {
//   console.log('completed synchronous deletion');
// }

// 🔥Asyncronous Deletion

// fs.unlink('./tobedeleted.txt', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done async")
//   }
// })

// console.log("After deletes")

// 🔥Synchronous Read

// try {
//   const content = fs.readFileSync("./read.js", {
//     encoding: "utf8"
//   });
// } catch (err) {
//   console.log(err);
// }

// 🔥Asynchronous Read

const read = fs.readFile("./read.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})

// 🔥Asynchronous Write & Append

fs.writeFile("./read.txt", "overwriting file", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("finished overwriting file")
  }
})

fs.appendFile("./read.txt", " adding to file", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("finished appending to file")
  }
})
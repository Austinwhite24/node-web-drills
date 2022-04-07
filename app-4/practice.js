const fs = require ('fs');
const path = require ('path');

// fs.appendFile ('./web-node-drills-1/app-4/text.txt', 'did it work', (err) => {
//     if(err) {
//         console.log (err);
//     } else {
//         console.log('success boy');
//     }
    
// });

fs.appendFile(path.join(__dirname, "text.txt"), "Hello World", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successful appendage!");
    } 
  });

fs.readFile(__dirname + "/text.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data, "Successfully read!");
    }
  });

  fs.writeFile(path.join(__dirname, "text.txt"), "Austin ROCKS", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successful appendage!");
    } 
  });

fs.rename(__dirname + 'text.txt', __dirname + 'austin.txt', (err) => {
    if(err) {
        console.log(err);

    }else {
        console.log('succes')
    }
  })

fs.unlink(__dirname + '/text.txt', (err) => {
    if (err) {
        console.log(err)

    } else {
        console.log('oops i did it right')
    }
})

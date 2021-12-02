let uInput = process.argv.splice(2);
const request = require('request');
const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
let rl = readline.createInterface({ input, output });

request(uInput[0], (error, response, body) => {


  let rd = readline.createInterface({
    input: fs.createReadStream(uInput[1]),
    output: writeFile(body)
  });

    ///how to implement stretch?
  // rl.question('\nAlready exists. Rewrite? Y/N: ', (answer) => {
    
  //   if (answer === "Y" || answer === "y")
  //     writeFile(body);

    
  // });
  // rl.close();
});

const writeFile = (body) => {
  fs.writeFile(uInput[1], body, err => {
    if (err) {
      return console.log("error");
    } else {
      const stats = fs.statSync(uInput[1]);
      const fileSizeInBytes = stats.size;
      console.log(`Downloaded and saved ${fileSizeInBytes} to ${uInput[1]}`);
    }
    return;
  });
};


// var fs = require('fs'),
//     readline = require('readline');

// var rd = readline.createInterface({
//     input: fs.createReadStream('/path/to/file'),
//     output: process.stdout,
//     console: false
// });

// rd.on('line', function(line) {
//     console.log(line);
// });



// fs.readFile(uInput[1], 'utf8' , (err, data) => {
//   let wantToContinue = true;
//   if (err) {
//     writeFile(body);
//   } else {
//     rl.question("Already exists. Rewrite? Y/N: ", (answer) => {
//       if (answer === "N" || answer === "n") {
//         wantToContinue = false;
//         console.log("rewrite failed");
//       } else {
//         console.log("Rewriting");
//         wantToContinue = true;
//       }
//       if (wantToContinue === true) {
//         writeFile(body);
//       }
//       rl.close();
//     });
//   }
// });  //end question
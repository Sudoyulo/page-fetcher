let uInput = process.argv.splice(2);
const request = require('request');
const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
let rl = readline.createInterface({ input, output });

request(uInput[0], (error, response, body) => {
  //file already exists
  
  let wantToContinue = true;
  fs.readFile(uInput[1], 'utf8' , (err, data) => {
    // console.log(err, data)
    if (err) {
      writeFile(body);
    } else {
      rl.question("Already exists. Rewrite? Y/N: ", (answer) => {
        if (answer === "N" || answer === "n") {
          wantToContinue = false;
          console.log("rewrite failed");
        } else {
          console.log("Rewriting");
          wantToContinue = true;
        }
        if (wantToContinue === true) {
          writeFile(body);
        }
        rl.close();
      });
    }
    // console.log("want to write");
  });  //end question
    
});

const writeFile = (body) => {

  console.log("made it");
  fs.writeFile(uInput[1], body, err => {
    if (err) {
      return console.log("error");
    } else {
      const stats = fs.statSync(uInput[1]);
      const fileSizeInBytes = stats.size;
      console.log(`Downloaded and saved ${fileSizeInBytes} to ${uInput[1]}`);
    }
  });
};

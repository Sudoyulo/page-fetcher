let uInput = process.argv.splice(2);
const request = require('request');
const fs = require('fs');
// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');
// let rl = readline.createInterface({ input, output });


request(uInput[0], (error, response, body) => {
  //file already exists

  // const path = require(uInput[1]);

  // path.exists(uInput[1], function(exists) {
  //   let wantToContinue = true;

  //   if (exists) {
  //     rl.question("File already exists. Do you wish to overwrite? Y/N ", (answer) => {
  //       if (answer === "F") wantToContinue = false;
  //       rl.close();
  //     }); //  if n save as wantToContinue false else true

  //   }
   

    // if (wantToContinue) {

      fs.writeFile(uInput[1], body, err => {
        if (err) {
          return console.log("error");
        }
        const stats = fs.statSync(uInput[1]);
        const fileSizeInBytes = stats.size;
        
        console.log(`Downloaded and saved ${fileSizeInBytes} to ${uInput[1]} `); // Print the HTML for the Google homepage.
    
        //file written successfully
      });
    // }
  // });


  

});
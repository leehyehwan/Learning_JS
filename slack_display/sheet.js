const image = document.querySelector(".img");
const name = document.querySelector(".title");
const text = document.querySelector(".text")
const time = document.querySelector(".time")
const info = document.querySelector(".speed")

let TIME = 1000
let COUNT = 10

let j = 1

function setText(row) {
  let slackImg = row[3];
  let slackName = row[4];
  let slackTime = row[5];
  let slackText = row[6];

  image.src = slackImg
  time.innerText = slackTime
  name.innerText = slackName
  text.innerText = slackText
}


function listMajors() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1IgZ0Fci_Lw5TSEGbVtVaQ_daaEsDh5nDJ4Fiu-tRQm4',
    range: 'kiss!A:H',
  })
  .then(function(call) {
    var range = call.result;

    let displayInfo = range.values[1]
      TIME = parseInt(displayInfo[0])*1000
      COUNT = parseInt(displayInfo[1])

    info.innerText = `${TIME/1000}초 씩 ${COUNT}개`;
    
    for (i = range.values.length-COUNT; i < range.values.length; i++) {
      var row = range.values[i];
      setTimeout(setText,TIME*j,row);
      console.log(j)
      j++
    }
  });
}
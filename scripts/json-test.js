
let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
    .then(response => response.text())
    .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
    let total = 0;
    let male = 0;

    // Add your code here
    let catJSON = JSON.parse(catString);

    for (let i = 0; i < catJSON.length;) {
        motherInfo += ' ' + catJSON[i].name;

        let kittens = catJSON[i].kittens;
        for (let i = 0; i < kittens.length; i++) {
            total++;
            if (kittens[i].gender === 'm'){
                male++;
            }
        }
    }

    kittenInfo = total + ' total cats and ' + male + ' male cats.';

    // Don't edit the code below here!

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}

let para1 = document.createElement('p');
let para2 = document.createElement('p');
section.appendChild(para1);
section.appendChild(para2);
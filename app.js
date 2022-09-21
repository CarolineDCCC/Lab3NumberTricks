'use strict';
let step1 = 0;
let step2 = 0;
let step3 = 0;
let step4 = 0;
let answer = 0;



    let numEntry = parseInt(
        prompt("Please enter any whole number.", 100));
        if(numEntry !== numEntry){
            alert("Please enter a valid number.");
        
        }
        else {
            step1 = numEntry + 9;
            step2 = step1 * 2;
            step3 = step2 - 4;
            step4 = step3 / 2;
            answer = step4 - numEntry;

            document.getElementById('win-text').style.display = "inline";
            

            document.write('<p>The number you entered is ' + numEntry + '</p>');
            document.write('<p>' + numEntry + ' plus 9 equals ' + step1 + '</p>');
            document.write('<p>' + step1 + ' multiplied by 2 equals ' + step2 + '</p>');
            document.write('<p>' + step2 + ' minus 4 equals ' + step3 + '</p>');
            document.write('<p>' + step3 + ' divided by 2 equals ' + step4 + '</p>');
            document.write('<p>' + step4 + ' minus your original number of ' + numEntry + ' equals...  </p>');
            document.write('<p >Your answer is ' + answer + '</p>');    
        }
    


    const playAgain = document.querySelector('StartOver');

    playAgain.addEventListener('click', function refreshPage(){
        location.reload();
        return false;
    });

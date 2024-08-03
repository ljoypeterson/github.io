const answers = {
    'A1': false,
    'B1': true,
    'C1': false,
    'A2': false,
    'B2': true,
    'C2': false,
    'A3': true,
    'B3': false,
    'C3': false
};

function checkAnswer(answer) {
    const result = document.getElementById('result');

    if (answers[answer]) {
        result.textContent = 'Correct!';
        result.style.color = 'green';

        result.style.fontWeight = 'bold';
        result.style.fontSize = '1.2em'
        
    } else {
        result.textContent = 'Wrong, try again!';
        result.style.color = 'red';
        result.style.fontWeight = 'bold';
        result.style.fontSize = '1.2em'
    }

console.log("Result text set to:", result.textContent);
console.log("Result color set to:", result.style.color);
console.log("Result font weight set to:", result.style.fontWeight);
console.log("Result font size set to:", result.style.fontSize);
    
    setTimeout(() => {
        result.textContent = '';
    }, 2000);
}

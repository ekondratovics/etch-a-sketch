let body = document.querySelector('body');

let button = document.createElement('button');
button.textContent = 'Clear';
button.className = 'clear-button';
body.appendChild(button);

let container = document.createElement('div');
container.className = 'container';
body.appendChild(container);

let question = 16;

button.addEventListener('click', () => {
    question = prompt('How many squares per side for the next sketch?');
    if (question <= 100 && question > 1) {
        document.querySelectorAll('.square').forEach(square => {
            square.style.backgroundColor = 'white';
        })
        container.style.gridTemplateColumns= `repeat(${question}, 1fr)`;
        container.style.gridTemplateRows= `repeat(${question}, 1fr)`;
        
        for (let i = 0; i < question**2; i++) {
            let square = document.createElement('div');
            square.className = 'square';
            container.appendChild(square);
        }

        document.querySelectorAll('.square').forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'teal';
            })
        })
    } else {
        alert('Please enter a number higher than 1, but not higher than 100!');
    }
})

for (let i = 0; i < question**2; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);
}

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'teal';
    })
})
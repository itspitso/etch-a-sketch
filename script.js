const container = document.getElementById('container');

let defaultGrid = 9;

for (let i = 0; i < defaultGrid; i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid black';
    div.style.backgroundColor = 'blue';
    div.style.width = '300px';
    div.style.height = '300px';
    container.appendChild(div)
}
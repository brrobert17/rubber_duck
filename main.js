const myButton = document.querySelector('#my-button');
const myList = document.querySelector('#my-list');
const duckImg = document.querySelector('#duck-img');
const myInput = document.querySelector('#my-input');
myButton.addEventListener('click', (e) => {

})

const tooltip = document.getElementById('tooltip');
duckImg.addEventListener('mouseenter', function(event) {
    tooltip.classList.add('visible');
});
duckImg.addEventListener('mousemove', function(event) {
    tooltip.style.left = `${event.clientX + 10}px`; // Position relative to viewport
    tooltip.style.top = `${event.clientY + 10}px`;  // Position relative to viewport
});
duckImg.addEventListener('mouseleave', function() {
    tooltip.classList.remove('visible');
});

myButton.addEventListener('click', ()=> addTodo())
const addTodo =()=> {
    if(myInput.value) {
        const listElement = document.createElement('li');
        listElement.innerText = myInput.value
        myList.append(listElement);
        myInput.value = '';
    }
}
myInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
})
const myButton = document.querySelector('#my-button');
const myList = document.querySelector('#my-list');
const duckImg = document.querySelector('#duck-img');
const myInput = document.querySelector('#my-input')
const tooltip = document.getElementById('tooltip');

// Tooltip functionality
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

// Adding event listener to the button
myButton.addEventListener('click', () => addTodo());

// Function to add a new todo
const addTodo = () => {
    if (myInput.value) {
        const localList = JSON.parse(localStorage.getItem('list')) || [];
        localList.push(myInput.value);
        localStorage.setItem('list', JSON.stringify(localList));
        myInput.value = '';
        myList.innerHTML = '';
        populateList();
    }
};

// Function to populate the list from localStorage
const populateList = () => {
    const localList = JSON.parse(localStorage.getItem('list')) || [];
    myList.innerHTML = ''; // Clear the current list
    localList.forEach((item) => {
        const listElement = document.createElement('li');
        listElement.innerText = item;
        myList.append(listElement);
    });
};

// Initialize the list when the page loads
populateList();

// Adding event listener to the input to handle Enter keypress
myInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

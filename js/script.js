'use strict'

console.log('hello')

const elForm = document.querySelector('#noteForm');
const inputComment = document.querySelector('#newItemDesc');
const elContentOutput = document.querySelector('#content-output');

function validateNote(event) {

    let content = inputComment.value;

    if(content.length < 1) {
        console.log('Hello')
        elContentOutput.textContent = ' Please enter some content '
    }
    event.preventDefault();
}

elForm.addEventListener('submit', validateNote, false);
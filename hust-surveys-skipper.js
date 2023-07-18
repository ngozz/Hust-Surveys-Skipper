//Console script, copy the following code to your browser console and press enter. Repeat.

let interval = setInterval(() => {
    // Check if the URL contains the word "survey"
    if (!window.location.href.includes('Survey')) {
        // Stop the script if the URL does not contain the word "survey"
        clearInterval(interval);
        return;
    }

    // Get all the radio buttons
    let radioButtons = document.querySelectorAll('input[type="text"][name*="RBL_"]');

    // Group the radio buttons by question
    let questions = {};
    radioButtons.forEach(radioButton => {
        let questionId = radioButton.name.split('$').slice(-2, -1)[0];
        if (!questions[questionId]) {
            questions[questionId] = [];
        }
        questions[questionId].push(radioButton);
    });

    // Select the first radio button for each question
    Object.values(questions).forEach(question => {
        question[0].click();
    });

    // Click the submit button
    document.querySelector('#ctl00_ctl00_contentPane_MainPanel_MainContent_formLayout_submitButton').click();
}, 1000);


//Tampermonkey script
// ==UserScript==
// @name         Form Filler
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Automatically fill out forms
// @match        https://ctt-sis.hust.edu.vn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let interval = setInterval(() => {
        // Check if the URL contains the word "survey"
        if (!window.location.href.includes('Survey')) {
            // Stop the script if the URL does not contain the word "survey"
            clearInterval(interval);
            return;
        }

        // Get all the radio buttons
        let radioButtons = document.querySelectorAll('input[type="text"][name*="RBL_"]');

        // Group the radio buttons by question
        let questions = {};
        radioButtons.forEach(radioButton => {
            let questionId = radioButton.name.split('$').slice(-2, -1)[0];
            if (!questions[questionId]) {
                questions[questionId] = [];
            }
            questions[questionId].push(radioButton);
        });

        // Select the first radio button for each question
        Object.values(questions).forEach(question => {
            question[0].click();
        });

        // Click the submit button
        document.querySelector('#ctl00_ctl00_contentPane_MainPanel_MainContent_formLayout_submitButton').click();
    }, 1000);
})();
// Uses buttons to natigate to each page
"use strict"

var content = document.getElementById("content");
var code = document.getElementById("code");

function summary() {
    content.innerHTML = ("<h3>Summary of experience</h3>" +
        "I am a Lone Jack High School senior " +
        "and apart of the MIC program. I've been " +
        "coding for two years in CSS, Java, Javascript, " +
        "HTML, PHP, and SQL. I also have an internship " +
        "with NRCCUA, where I program in Javascript, " +
        "Node.js, and React.")
    code.src = "";
}

function java() {
    content.innerHTML = ("<h3>Programming Java</h3>" +
        "My java experience is limited to one semester " +
        "of a beginner's programming class. In this class, I worked with " +
        "different types of logic and sql to create different GUIs. The " +
        "project provided is a simple calculator that provided me with practice " +
        "for coding GUIs.<br><br>" +
        "The code provided apart of a simple calculator GUI, and it's a good example of " +
        "my experience in coding GUIs in Java. In this GUI, a user enters two numbers and " +
        "selects whether they want to add, subtract, multiply, or divide the given numbers.")
    code.src = "./pages/Java/Calculator.txt";
}

function javascript() {
    content.innerHTML = ("<h3>Programming Javascript</h3>" +
        "I have a lot of work experience in base Javascript, Node.js " +
        "React, and Redux. I've also worked with implimenting database " +
        "functionality where authorized users are able to view, edit, " +
        "and delete information from a database.")
    code.src = "./pages/Javascript/script.txt";
}

function php() {
    content.innerHTML = ("<h3>Programming PHP</h3>" +
        "I have only recently started working with PHP " +
        "as of May 3rd, 2020, however I feel confident in my ability to " +
        "code basic PHP. I've coded a couple projects dealing with basic " +
        "page switching, loops, and variable manipulation.");
    code.src = "./pages/PHP/index.txt";
}

function sql() {
    content.innerHTML = ("<h3>Programming SQL Scripts</h3>" +
        "The majority of my SQL experience comes from my experience with Java, " +
        "PHP, and Javascript. My SQL projects involved creating scripts with " +
        "different variables for easy access to a database and its information " +
        "through the convenience of a GUI or webpage.");
    // if ()
    code.src = "./homeText.txt";
}

// this function will handle switching pages
function createEventHandlers() {
    var sumButton = document.getElementById("summary");
    var javButton = document.getElementById("java");
    var scrButton = document.getElementById("javascript");
    var phpButton = document.getElementById("php");
    var sqlButton = document.getElementById("sql");

    if (sumButton.addEventListener) {
        sumButton.addEventListener("click", summary, false);
    } else if (sumButton.attachEvent) {
        sumButton.attachEvent("onclick", summary);
    }

    if (javButton.addEventListener) {
        javButton.addEventListener("click", java, false);
    } else if (javButton.attachEvent) {
        javButton.attachEvent("onclick", java);
    }

    if (scrButton.addEventListener) {
        scrButton.addEventListener("click", javascript, false);
    } else if (scrButton.attachEvent) {
        scrButton.attachEvent("onclick", javascript);
    }

    if (phpButton.addEventListener) {
        phpButton.addEventListener("click", php, false);
    } else if (phpButton.attachEvent) {
        phpButton.attachEvent("onclick", php);
    }

    if (sqlButton.addEventListener) {
        sqlButton.addEventListener("click", sql, false);
    } else if (sqlButton.attachEvent) {
        sqlButton.attachEvent("onclick", sql);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventHandlers, false)
    window.addEventListener("load", summary, false)
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventHandlers)
    window.attachEvent("onload", summary)
}

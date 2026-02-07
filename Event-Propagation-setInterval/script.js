// 🔹 Task 1: addEventListener (Basic)
// Create:
// One button with text “Click Me”
// One paragraph below it
// Task:
// When the button is clicked:
// Change paragraph text to “Button was clicked”
// Change its color to blue
// Rules:
// Use addEventListener
// Do NOT use onclick attribute
// ========================================
// let btn = document.getElementById("btn")
// let para = document.getElementById("para")
// btn.addEventListener("click",()=>{
//     para.innerText = "Button was clicked"
//     para.style.color="blue"
// })
// =============================================
// 🔹 Task 2: Event Propagation (Bubbling)
// Create HTML structure:
// A div (parent)
// Inside it, a button (child)
// Task:
// Add click event on:
// Parent div → alert: “Parent clicked”
// Child button → alert: “Button clicked”
// Goal:
// Click the button and observe which alert comes first
// Understand event bubbling
// ========================================
// let parant = document.getElementById("parent")
// let childbtn = document.getElementById("child")
// parant.addEventListener("click" , () =>{
//     alert("Parent click")
// })
// childbtn.addEventListener("click" , () =>{
    //     alert("Button clicked")
    // })
    // =============================================
    // 🔹 Task 3: stopPropagation
    // Use same structure as Task 2.
    // Task:
    // When button is clicked:
    // Show only “Button clicked”
    // Parent alert should NOT run
    // Rule:
    // Use event.stopPropagation()
    // ========================================
    // childbtn.addEventListener("click" , (e) =>{
        //     e.stopPropagation()
        //     alert("button click")
        // })
        // ====================================
        // 🔹 Task 4: Event Capturing (Advanced)
        // Same parent-child structure
        // Task:
        // Add click event on parent using capture mode
        // Add click event on button normally
        // Goal:
        // Click the button and see:
        // Parent event fires before button
        // 👉 Hint: { capture: true }
        // =====================================
// const parentElement = document.getElementById("parent");
// const childElement = document.getElementById("child");
// parentElement.addEventListener("click", () => {
//     alert("Parent click");
// }, { capture: true }); 

// childElement.addEventListener("click", () => {
//     alert("button click");
// });

        // =====================================
// 🔹 Task 5: setTimeout
// Create:
// One button “Show Message”
// One empty paragraph
// Task:
// When button is clicked:
// After 3 seconds
// Show text: “Hello after 3 seconds”
// Rules:
// Use setTimeout
// No page refresh
// ================================================
// let messageBtn = document.getElementById("msgbtn")
// let messagePara = document.getElementById("msgbtn")
// messageBtn.addEventListener("click",()=>{
//      setTimeout(() => {
//         messagePara.innerText = "Hello after 3 seconds";
//     }, 3000);
// })
// ================================================
// 🔹 Task 6: setInterval
// Create:
// One paragraph
// One button “Start Counter”
// Task:
// When button is clicked:
// Start counting numbers: 1, 2, 3, 4…
// Update number every 1 second
// =================================
let para = document.getElementById("count");
let countBtn = document.getElementById("startCount");

let currentCount = 0;
// countBtn.addEventListener("click", () => {
//   setInterval(() => {
//     currentCount++; 
//     para.textContent = currentCount;
//   }, 1000);
// });

// =================================
// 🔹 Task 7: setInterval + clearInterval
// Extend Task 6
// Add:
// One more button “Stop Counter”
// Task:
// Stop the counter when stop button is clicked
// Rules:
// Use clearInterval
// ==============================================
let stopBtn = document.getElementById("stopCount"); 
let timerId = null; 

countBtn.addEventListener("click", () => {

  if (!timerId) { 
    timerId = setInterval(() => {
      currentCount++;
      para.textContent = currentCount;
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId); 
  timerId = null;
});

// ==============================================
// 🔹 Task 8: Real-World Combo Task (🔥 Important)

// Create:

// Parent div

// Inside it:

// Button “Start Timer”

// Paragraph

// Task:

// Button click:

// Starts timer using setInterval

// Updates paragraph every second

// Clicking parent div:

// Should NOT stop the timer

// Clicking button:

// Parent click must not run

// 👉 You must use:

// addEventListener

// setInterval

// stopPropagation

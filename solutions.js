/************************************************************
 A. EVENTS
************************************************************/

// 1. Click: change background color
document.querySelector("#colorBtn").addEventListener("click", () => {
  document.body.style.background = "lightyellow";
});

// 2. Page load: log when ready
window.addEventListener("load", () => {
  console.log("Page fully loaded!");
});

// 3. Image load
document.querySelector("#myImg").addEventListener("load", () => {
  console.log("Image finished loading!");
});

// 4. Mouse hover
const hoverBox = document.querySelector("#hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.textContent = "Mouse over!";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.textContent = "Hover me";
});

// 5. Input change
document.querySelector("#changeInput").addEventListener("change", (e) => {
  console.log("Input changed to:", e.target.value);
});

// 6. Form submit
document.querySelector("#simpleForm").addEventListener("submit", (e) => {
  e.preventDefault(); // stop reload
  console.log("Form submitted:", 
    document.querySelector("#formInput").value);
});

// 7. Key stroke
document.querySelector("#keyInput").addEventListener("keydown", (e) => {
  console.log("Key down:", e.key);
});
document.querySelector("#keyInput").addEventListener("keyup", (e) => {
  console.log("Key up:", e.key);
});

/************************************************************
 B. FORM VALIDATION
************************************************************/

const signup = document.querySelector("#signupForm");
const pwd = document.querySelector("#pwd");
const pwd2 = document.querySelector("#pwd2");

function checkPasswords() {
  if (pwd2.value && pwd.value !== pwd2.value) {
    pwd2.setCustomValidity("Passwords must match.");
  } else {
    pwd2.setCustomValidity("");
  }
}
pwd.addEventListener("input", checkPasswords);
pwd2.addEventListener("input", checkPasswords);

signup.addEventListener("submit", (e) => {
  e.preventDefault();
  if (signup.checkValidity()) {
    console.log("Signup valid! Email:", 
      document.querySelector("#email").value);
  } else {
    signup.reportValidity(); // show browser messages
  }
});

/************************************************************
 C. CREATE/INSERT/REMOVE
************************************************************/

// 10. Add <p>
document.querySelector("#addPara").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "I was added!";
  document.querySelector("#container").append(p);
});

// 11. Insert before second
const liNew = document.createElement("li");
liNew.textContent = "Inserted";
const list = document.querySelector("#insertList");
const two = document.querySelector("#two");
list.insertBefore(liNew, two);

// 12. Replace last item
const replaceList = document.querySelector("#replaceList");
const newLi = document.createElement("li");
newLi.textContent = "I'm new!";
replaceList.replaceChild(newLi, replaceList.lastElementChild);

// 13. Remove first
document.querySelector("#removeList li").remove();

/************************************************************
 D. TO-DO LIST
************************************************************/

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  const btn = document.createElement("button");
  btn.textContent = "X"; // use regular char
  btn.addEventListener("click", () => li.remove());

  li.append(btn);
  todoList.append(li);
  todoInput.value = "";
});

/************************************************************
 E. COLLECTIONS
************************************************************/

// HTMLCollection (live)
const fruits1 = document.getElementsByTagName("li");
console.log("HTMLCollection length:", fruits1.length);
const newFruit = document.createElement("li");
newFruit.textContent = "Cherry";
document.querySelector("#fruitList").append(newFruit);
console.log("After append, length:", fruits1.length);

// NodeList (static)
const fruits2 = document.querySelectorAll("#fruitList li");
console.log("NodeList length:", fruits2.length);
const extra = document.createElement("li");
extra.textContent = "Date";
document.querySelector("#fruitList").append(extra);
console.log("After append, still length:", fruits2.length);

// Convert to array and loop
Array.from(fruits2).forEach(li => console.log(li.textContent));

/************************************************************
 F. FILTER & SORT
************************************************************/

const bigList = document.querySelector("#bigList");
const filterInput = document.querySelector("#filterInput");
const sortBtn = document.querySelector("#sortBtn");
const reverseBtn = document.querySelector("#reverseBtn");
const restoreBtn = document.querySelector("#restoreBtn");

// Store original order
const originalItems = Array.from(bigList.querySelectorAll("li"));

filterInput.addEventListener("input", () => {
  const q = filterInput.value.toLowerCase();
  const all = Array.from(originalItems);
  const filtered = all.filter(li =>
    li.textContent.toLowerCase().includes(q));
  bigList.textContent = "";
  bigList.append(...filtered);
});

sortBtn.addEventListener("click", () => {
  const items = Array.from(bigList.querySelectorAll("li"));
  items.sort((a, b) => a.textContent.localeCompare(b.textContent));
  bigList.append(...items);
});

reverseBtn.addEventListener("click", () => {
  const items = Array.from(bigList.querySelectorAll("li"));
  items.reverse();
  bigList.append(...items);
});

restoreBtn.addEventListener("click", () => {
  bigList.append(...originalItems);
});

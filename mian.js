const cursor = document.querySelector(".cursor");
 
window.addEventListener("mousemove", (e) => {
cursor.style.top = e.pageY + "px"; // Update cursor position based on mouse y-coordinate
cursor.style.left = e.pageX + "px"; // Update cursor position based on mouse x-coordinate
});
window.addEventListener("mousedown", () => {
  cursor.classList.add("active"); // Add the 'active' class when the mouse button is pressed
});
window.addEventListener("mouseup", () => {
  cursor.classList.remove("active"); // Remove the 'active' class when the mouse button is released
});
document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const dynamicList = document.getElementById("dynamic-list");
    const themeSelect = document.getElementById("theme-select");
    const listStyleSelect = document.getElementById("list-style-select");

    // Load Preferences from Local Storage
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedListStyle = localStorage.getItem("listStyle") || "disc";

    // Apply Saved Preferences
    document.body.className = savedTheme;
    dynamicList.className = savedListStyle;
    themeSelect.value = savedTheme;
    listStyleSelect.value = savedListStyle;

    // Dynamically Add Items to the List
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        dynamicList.appendChild(li);
    });

    // Event Listeners
    themeSelect.addEventListener("change", () => {
        const selectedTheme = themeSelect.value;
        document.body.className = selectedTheme;
        localStorage.setItem("theme", selectedTheme);
    });

    listStyleSelect.addEventListener("change", () => {
        const selectedListStyle = listStyleSelect.value;
        dynamicList.className = selectedListStyle;
        localStorage.setItem("listStyle", selectedListStyle);
    });
});
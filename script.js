function startStyling() {
    window.location.href = "styling.html";
}

function selectOption(category, value, button) {

    localStorage.setItem(category, value);

    const buttons = button.parentElement.querySelectorAll("button");

    buttons.forEach(function(btn) {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");
}

function generateLook() {

    const occasion = localStorage.getItem("occasion");
    const vibe = localStorage.getItem("vibe");
    const colour = localStorage.getItem("colour");
    const season = localStorage.getItem("season");

    if (!occasion || !vibe || !colour || !season) {
        alert("Please select one option from every section ✨");
        return;
    }

    window.location.href = "result.html";
}

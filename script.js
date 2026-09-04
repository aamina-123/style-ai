function startStyling() {
    window.location.href = "styling.html";
}
let selectedStyle = {
    occasion: "",
    vibe: "",
    colour: "",
    season: ""
};

function selectOption(category, value, button) {
    selectedStyle[category] = value;

    const buttons = button.parentElement.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");
}

function generateLook() {
    if (
        !selectedStyle.occasion ||
        !selectedStyle.vibe ||
        !selectedStyle.colour ||
        !selectedStyle.season
    ) {
        alert("Please select an option from every section ✨");
        return;
    }

    localStorage.setItem(
        "auraStyle",
        JSON.stringify(selectedStyle)
    );

    window.location.href = "result.html";
}

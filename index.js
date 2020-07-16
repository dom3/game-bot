function generate() {
    const list = [
        "Only defence.",
        "No sword.",
        "No Potions.",
        "Only void kills.",
        "Backwards Only.",
        "No Bed Challenge.",
        "Bed is required.",
        "Only wool.",
        "No Bed Defence",
        "Every kill you have to jump off the map",
        "No tnt",
        "No tools",
        "Only forwards",
        "360 every single time you build a block",
        "Full hotbar",
        "Mixed Inventory",
        "Rush Red",
        "Rush Blue",
        "Rush Green",
        "Rush Yellow",
        "Rush Aqua",
        "Rush White",
        "Rush Pink",
        "Rush Gray",
        "Only stay at ones persons base",
        "Protect your base and someone elses base.",
        "Every time you kill someone you have to go back to your base. (and go back to that place if you want to.)",
        "No Gold",
        "No Gapples",
        "No final kills. (it can't count as your final kill)",
        "Sideways Only"
    ]

    const change = document.getElementById("b");

    change.innerHTML = list[Math.floor(Math.random()*list.length)];
}
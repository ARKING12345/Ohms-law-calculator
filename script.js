// Automatically update the input fields based on dropdown choice
function updateInputs() {
    let choice = document.getElementById("choice").value;
    let container = document.getElementById("input-container");
    
    if (choice === "voltage") {
        container.innerHTML = `
            <input type="number" id="current" placeholder="Enter Current (I) in Amps">
            <input type="number" id="resistance" placeholder="Enter Resistance (R) in Ohms">
        `;
    } else if (choice === "current") {
        container.innerHTML = `
            <input type="number" id="voltage" placeholder="Enter Voltage (V) in Volts">
            <input type="number" id="resistance" placeholder="Enter Resistance (R) in Ohms">
        `;
    } else if (choice === "resistance") {
        container.innerHTML = `
            <input type="number" id="voltage" placeholder="Enter Voltage (V) in Volts">
            <input type="number" id="current" placeholder="Enter Current (I) in Amps">
        `;
    }
}

// Perform the calculation when the button is clicked
function calculate() {
    let choice = document.getElementById("choice").value;
    let resultText = document.getElementById("result");

    if (choice === "voltage") {
        let i = parseFloat(document.getElementById("current").value);
        let r = parseFloat(document.getElementById("resistance").value);
        
        if (isNaN(i) || isNaN(r)) {
            resultText.innerHTML = "⚠️ Please enter both values.";
            return;
        }
        let v = i * r;
        resultText.innerHTML = "Voltage (V) = " + v.toFixed(2) + " V";

    } else if (choice === "current") {
        let v = parseFloat(document.getElementById("voltage").value);
        let r = parseFloat(document.getElementById("resistance").value);
        
        if (isNaN(v) || isNaN(r)) {
            resultText.innerHTML = "⚠️ Please enter both values.";
            return;
        }
        if (r === 0) {
            resultText.innerHTML = "❌ Resistance cannot be zero.";
            return;
        }
        let i = v / r;
        resultText.innerHTML = "Current (I) = " + i.toFixed(2) + " A";

    } else if (choice === "resistance") {
        let v = parseFloat(document.getElementById("voltage").value);
        let i = parseFloat(document.getElementById("current").value);
        
        if (isNaN(v) || isNaN(i)) {
            resultText.innerHTML = "⚠️ Please enter both values.";
            return;
        }
        if (i === 0) {
            resultText.innerHTML = "❌ Current cannot be zero.";
            return;
        }
        let r = v / i;
        resultText.innerHTML = "Resistance (R) = " + r.toFixed(2) + " Ω";
    }
}

// Run this function immediately so inputs show up on load
updateInputs();

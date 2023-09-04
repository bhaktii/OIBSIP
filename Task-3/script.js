document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const convertButton = document.getElementById("convertBtn");
    const fahrenheitResult = document.getElementById("fahrenheitResult");
    const kelvinResult = document.getElementById("kelvinResult");

    convertButton.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);

        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            const kelvin = celsius + 273.15;
            
            fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
            kelvinResult.textContent = kelvin.toFixed(2) + " K";
        } else {
            alert("Please enter a valid number for Celsius.");
        }
    });
});

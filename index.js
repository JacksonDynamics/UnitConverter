const inputEl = document.getElementById("convert")
const inputBtn = document.getElementById("convertBtn")
const lengthEl = document.getElementById("lengthConversion")
const volumeEl = document.getElementById("volumeConversion")
const massEl = document.getElementById("massConversion")


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

inputBtn.addEventListener("click", function() {
    length(inputEl.value)
    volume(inputEl.value)
    mass(inputEl.value)
})

function length(value) {
    let M_to_F = (value * 3.281).toFixed(3)
    let F_to_M = (value / 3.281).toFixed(3)
    lengthEl.textContent = `
        ${value} meters = ${M_to_F} feet | 
        ${value} feet = ${F_to_M} meters
    `
}

function volume(value) {
    let L_to_G = (value * 2.204).toFixed(3)
    let G_to_L = (value / 2.204).toFixed(3)
    volumeEl.textContent = `
        ${value} liters = ${L_to_G} gallons | 
        ${value} gallons = ${G_to_L} liters
    `
}

function mass(value) {
    let K_to_P = (value * 3.281).toFixed(3)
    let P_to_K = (value / 3.281).toFixed(3)
    massEl.textContent = `
        ${value} kilos = ${K_to_P} pounts | 
        ${value} pounds = ${P_to_K} kilos
    `
}
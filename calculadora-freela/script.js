

let inputGanhoPorMes = document.querySelector("#ganho-mes")
let inputHorasPorDia = document.querySelector("#horas-dia")

let resultado = document.querySelector("span")

function CalcularValorDoProjeto () {
	let salario = inputGanhoPorMes.valueAsNumber
	let horasMes = inputHorasPorDia.valueAsNumber * 22
	let calculo = salario / horasMes

	let calculoDuasCasas = calculo.toFixed(2)
	console.log(calculoDuasCasas)
    
	resposta.textContent = "R$ " + calculoDuasCasas
}
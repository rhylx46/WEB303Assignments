"use strict";

/*
	WEB 303
	Starting file for Assignment 1 
	Yuxuan Liu 0752597
*/

$(document).ready(function() {
	let salary = document.querySelector('#salary');
	let percent = document.querySelector('#percent');
	let spend = document.querySelector('#spend');	
	salary.addEventListener('change', (e) => {
		let money = salary.value * percent.value/100;
		let money2 = money.toFixed(); 
		spend.textContent = `$${money2}`;
	});

	percent.addEventListener('change', (e) => {
		let money = salary.value * percent.value/100;
		let money2 = money.toFixed(); 
		spend.textContent = `$${money2}`;
	});

});
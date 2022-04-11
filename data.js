
const tipo = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


 let mainContainer = document.querySelector('.main-container')

 let mainCard = '';
 

 for(let i=0; i<tipo.length; i++){

    mainCard += `
	   <div class="col-2 mx-5 my-5 box">
	     <i class="fa-solid ${tipo[i].prefix}${tipo[i].name} ${tipo[i].color}"></i>
		 ${tipo[i].name}
	   </div>
	
        `;
     console.log(`<i class ="${tipo[i].prefix}${tipo[i].name} ${tipo[i].color}"></i>`)
 }
 mainContainer.innerHTML += mainCard  
 console.log(mainCard);




const select = document.getElementById('opzioni')

 select.addEventListener('change', function(){
	const opzioni = select.value 
	console.log(opzioni)
	
	if(opzioni === '1'){
		let tipoAnimale = tipo.filter((genere) => genere.type === 'animal')
	}
	else if(opzioni === '2'){
		let tipoVegetale = tipo.filter((genere) => genere.type === 'vegetable')
	}
	else if(opzioni === '3'){
		let tipoUser = tipo.filter((genere) => genere.type === 'user')
	}
 })


var container = document.getElementById('container')

function start(){
	generateScene(5);
}

function generateScene(numRow) {
	for (var i = 0; i < numRow; i++) {
		var row = document.createElement('div');
		row.setAttribute('class', 'row')
		for (var j = 0; j < numRow; j++) {
			var div = document.createElement('div');
			div.setAttribute('class', 'pumpkin')
			//xconsole.log('taouaefw')
			row.appendChild(div)
		}
		container.appendChild(row)
	}
	var pump = document.getElementsByClassName('pumpkin');
	var randNum = Math.floor(Math.random() * pump.length)
	//console.log(randNum)
	var candy = document.createElement('img');
	candy.src = "imgs/candy.jpg"
	candy.setAttribute('class', 'candy');
	pump[randNum].appendChild(candy)
	//console.log(pump[randNum])

	for (let i = 0; i < pump.length; i++) {
		pump[i].addEventListener('mouseover', function(){
			console.log(pump[i])
			pump[i].style.backgroundImage = 'none'
			if (pump[i] == pump[randNum]) {
				console.log('yay')
				alert('you found the candy. yay!')
				setTimeout(function(){container.innerHTML = ''
				generateScene(Math.floor(Math.random() * (7-3) + 3))
			}, 1500)
			}
		})
	}
	
}

start()
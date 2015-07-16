$(document).ready(function(){
	$('div').not('.container').hover(function(){
		this.style.backgroundColor = 'green';
	},
	function(){
		this.style.backgroundColor = 'red';
	});
	$('button').click(function(){
		var grid = prompt("How many squares per line?");
		$('div').not('.container').remove();
		for (var i = 0; i < grid; i++) {
			for (var j = 0; j < grid; j++) {
				$('.container').append("<div class='newBlock' id="+i+"></div>");
			}
		}
		//change the container size
		document.getElementById('container').style.height = grid  * 63 + 'px';
		document.getElementById('container').style.width = grid * 63 + 'px';
		
		/*change the block size -- better with the same block size for div..
		grid = grid*1.3;
		$('div').not('.container').css("height",parseInt(500/grid)+"px");
		$('div').not('.container').css("width",parseInt(500/grid)+"px");
		$('div').not('.container').css("margin",parseInt(30/grid)+"px");
		*/
	});

	//back to hover function
	$(document).on('mouseenter','.newBlock',function(){
		this.style.backgroundColor = 'green';
	},on('mouseleave','.newBlock',function(){
		this.style.backgroundColor = 'green';
	})
	});
});
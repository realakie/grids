$(document).ready(function(){
	$('div').not('.container').hover(function(){
		this.style.backgroundColor = 'green';
	},
	function(){
		this.style.backgroundColor = 'red';
	});
});
var pick = document.querySelectorAll('input[type="radio"]');
var man = document.getElementsByClassName('man');
var woman = document.getElementsByClassName('woman');
pick[0].onclick = function(){
	for(var i=0; i < woman.length ; i++){
		woman[i].style="display:none;";
		man[i].style="display:inline-block;";
	}
}
pick[1].onclick = function(){
	for(var i=0; i < man.length ; i++){
		man[i].style="display:none;";
		woman[i].style="display:inline-block;";
	}
}
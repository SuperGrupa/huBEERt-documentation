function toggle_visibility(id) {
	var e = document.getElementById(id);
	var b = document.getElementById('moreoptions');
	if(e.style.display == 'block') {
		e.style.display = 'none';
		b.innerHTML = "Więcej opcji";
	}
	else {
		e.style.display = 'block';
		b	.innerHTML = "Mniej opcji";
	}
}

var counter = 1;
var limit = 3;

function next_beer(divName) {
	if(counter < limit) {
		var newdiv = document.createElement('div');
		var nextbeer
		newdiv.innerHTML = "<br><input type='text' class='form-control' placeholder='Szukaj według nazwy piwa'>";
		document.getElementById(divName).appendChild(newdiv);
		counter++;
	}
	if(counter == limit)
		document.getElementById('newbeer').style.display = 'none';
}
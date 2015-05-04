function toggle_visibility(id) {
	var e = document.getElementById(id);
	var b = document.getElementById('moreoptions');
	if(e.style.display == 'block') {
		e.style.display = 'none';
		b.innerHTML = "Zaawansowane wyszukiwanie";
	}
	else {
		e.style.display = 'block';
		b.innerHTML = "Proste wyszukiwanie";
	}
}

//boton Español
var btnEsp = document.createElement("BUTTON");        // Crea un boton
var t = document.createTextNode("Español");       // Crea un texto
btnEsp.appendChild(t);                                // Agrega el texto al boton
document.body.appendChild(btnEsp);  				// Agrega el boton al body

//boton Ingles
var btnEn = document.createElement("BUTTON");        // Crea un boton
var t = document.createTextNode("Ingles");       // Crea un texto
btnEn.appendChild(t);                                // Agrega el texto al boton
document.body.appendChild(btnEn);  				// Agrega el boton al body
//funcion botones cambiar idioma
function cambiarIdioma (idioma) {
		var elUser = document.getElementById ("user");
		var elPassword = document.getElementById ("password");

		if(idioma == "es") {
			elUser.innerHTML ="Usuario";
			document.getElementById ("inputUser").setAttribute ("placeholder","Usuario");
			elPassword.innerHTML = "Contraseña";
			document.getElementById ("inputPassword").setAttribute ("placeholder", "Contraseña");
		}
		else if(idioma == "en") {
			elUser.innerHTML = "User";
			document.getElementById ("inputUser").setAttribute ("placeholder","User");
			elPassword.innerHTML = "Password";
			document.getElementById ("inputPassword").setAttribute ("placeholder","Password");
		}
	}

function Paciente(nombre,rut,edad,diagnostico){
    var nombre = nombre;
    var rut = rut;
    var edad = edad;
    var diagnostico = diagnostico;
    Object.defineProperty(this,'getNombre', {value: nombre});
    Object.defineProperty(this,'getRut', {value: rut});
    Object.defineProperty(this,'getEdad', {value: edad});
    Object.defineProperty(this,'getDiag', {value: diagnostico});


}

function Consultorio (nombrePaciente){
    this.nombrePaciente = nombrePaciente
}

const rut = prompt('Ingrese Rut de nuevo paciente');
const nombre = prompt('Ingrese Nombre de nuevo paciente');
const edad = prompt('Ingrese Edad de nuevo paciente');
const diag = prompt('Ingrese Diagnostico de nuevo paciente');

const nombPaciente = prompt('Ingrese el nombre del paciente a buscar');



const pacienteUno = new Paciente('Juan','1111111-1','40','amigdalitis') 
const pacienteDos = new Paciente('Alejandra','186566325-6','25','gastritis');
const pacienteTres = new Paciente('Pedro','2222222-2','35','vasectomia');
const pacienteCuatro = new Paciente('Astrid','3333333-3','45','melanoma benigno');
const pacienteCinco = new Paciente('Andres','9254788-6','56','artritis');
const pacienteSeis = new Paciente(rut,nombre,edad,diag);

var arrPaciente =[pacienteUno,pacienteDos,pacienteTres,pacienteCuatro,pacienteCinco,pacienteSeis];

const nomPaciente = new Consultorio(nombPaciente);



console.log(pacienteUno);
function Paciente(nombre,rut,edad,diagnostico){
    var _nombre = nombre;
    var _rut = rut;
    var _edad = edad;
    var _diagnostico = diagnostico;
    Object.defineProperty(this,'getNombre', {
        get: function(){
            return _nombre
            }
        });
    Object.defineProperty(this, 'setNombre',{
        set : function(nombre){
            _nombre = nombre;
        }
    });
    Object.defineProperty(this,'getRut', {
        get: function(){
            return _rut
            }
        });
    Object.defineProperty(this, 'setRut',{
        set : function(rut){
            _rut = rut;
        }
    });
    Object.defineProperty(this,'getEdad', {
        get: function(){
            return _edad
            }
        });
    Object.defineProperty(this, 'setEdad',{
        set : function(edad){
            _edad = edad;
        }
    });
    Object.defineProperty(this,'getDiagnostico', {
        get: function(){
            return _diagnostico
            }
        });
    Object.defineProperty(this, 'setDiagnostico',{
        set : function(diagnostico){
            _diagnostico = diagnostico;
        }
    });
}

Paciente.prototype._getNombre = function() {
    return this.getNombre;
}
Paciente.prototype._setNombre = function(nombre){
    this._setNombre = nombre;
}
Paciente.prototype._getRut = function() {
    return this.getRut;
}
Paciente.prototype._setRut = function(rut){
    this._setRut = rut;
}
Paciente.prototype._getEdad = function() {
    return this.getEdad;
}
Paciente.prototype._setEdad = function(edad){
    this._setEdad = edad;
}
Paciente.prototype._getDiagnostico = function() {
    return this.getDiagnostico;
}
Paciente.prototype._setDiagnostico = function(Diagnostico){
    this._setDiagnostico = Diagnostico;
}

function Consultorio (nombrePaciente){
    var _nombrePaciente = nombrePaciente;
    Object.defineProperty(this,'getNombrePaciente', {
        get: function(){
            return _nombrePaciente
            }
        });
    Object.defineProperty(this, 'setNombrePaciente',{
        set : function(nombrePaciente){
            _nombrePaciente = nombrePaciente;
        }
    });
}
Consultorio.prototype._getNombrePaciente = function() {
    return this.getNombrePaciente;
}
Consultorio.prototype._setNombrePaciente = function(NombrePaciente){
    this._setNombrePaciente = NombrePaciente;
}


const nombre6 = prompt('Ingrese Nombre de nuevo paciente');
const rut6 = prompt('Ingrese Rut de nuevo paciente');
const edad6 = prompt('Ingrese Edad de nuevo paciente');
const diag6 = prompt('Ingrese Diagnostico de nuevo paciente');


const pacienteUno = new Paciente('Juan','1111111-1','40','amigdalitis') 
const pacienteDos = new Paciente('Alejandra','186566325-6','25','gastritis');
const pacienteTres = new Paciente('Pedro','2222222-2','35','vasectomia');
const pacienteCuatro = new Paciente('Astrid','3333333-3','45','melanoma benigno');
const pacienteCinco = new Paciente('Andres','9254788-6','56','artritis');
const pacienteSeis = new Paciente(nombre6,rut6,edad6,diag6);
var arrPaciente =[pacienteUno,pacienteDos,pacienteTres,pacienteCuatro,pacienteCinco,pacienteSeis];





const pacConsUno = new Consultorio(pacienteUno._getNombre());
const pacConsDos = new Consultorio(pacienteDos._getNombre());
const pacConsTres = new Consultorio(pacienteTres._getNombre());
const pacConsCuatro = new Consultorio(pacienteCuatro._getNombre());
const pacConsCinco = new Consultorio(pacienteCinco._getNombre());
const pacConsSeis = new Consultorio(pacienteSeis._getNombre());
var arrConsulta =[pacConsUno,pacConsDos,pacConsTres,pacConsCuatro,pacConsCinco,pacConsSeis ];


//console.log(pacConsUno._getNombrePaciente());

Consultorio.prototype.buscar = function(buscapaciente){
   if (buscapaciente === this._getNombrePaciente()){
        console.log( 'Se encontro Paciente con el nombre : '+this._getNombrePaciente()); 
        return true;
    }else{
        return false;
    }
        
}


Paciente.prototype.mostrar = function(){
    console.log('Nombre : '+this._getNombre() + '| Rut :' + this._getRut() + '| Edad :'+this._getEdad() + '| Diagnostico :'+ this._getDiagnostico());
}

function todopaciente(){
    console.log('Datos Completos de Pacientes')
    for (var i=0; i<arrPaciente.length; i++){
        arrPaciente[i].mostrar();
    }
}



   
function busca (){
    var buscaPa = prompt('Ingrese el nombre del paciente a buscar');
    for (var i=0; i < arrConsulta.length; i++){
        var x = arrConsulta[i].buscar(buscaPa);
        if (x === true){
            console.log ('Dartos de paciente encontrado ');
            arrPaciente[i].mostrar();
            console.log (' ');
        }else if(x === false){
            console.log ('No se encontro datos del paciente ');
        }
        
     }

}
   



busca();
todopaciente();
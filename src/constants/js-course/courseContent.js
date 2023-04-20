export const jscourses = [
    {
      page: 1,
      title: "JavaScript VAR, LET y CONST para asignar variables.",
      description: `===VAR===
Scope esencialmente significa dónde estas variables están disponibles para su uso. Las declaraciones de VAR tienen un alcance global o una función/un alcance local.

El alcance es global cuando una variable VAR se declara fuera de una función. Esto significa que cualquier variable que se declare con var fuera de un bloque de funciones está disponible para su uso en toda la ventana.

===LET===
LET ahora se prefiere para la declaración de variables. No es una sorpresa, ya que se trata de una mejora de las declaraciones de VAR.

LET tiene alcance de bloque
Un bloque es un fragmento de código delimitado por {}. Un bloque vive entre llaves. Cualquier cosa entre llaves es un bloque.

Entonces, una variable declarada en un bloque con LET solo está disponible para usar dentro de ese bloque.

===CONST===
Las variables declaradas con CONST mantienen valores constantes. Las declaraciones CONST comparten algunas similitudes con las declaraciones LET.

Las declaraciones CONST tienen un alcance de bloque
Al igual que las declaraciones LET, solo se puede acceder a las declaraciones const dentro del bloque en el que fueron declaradas.

CONST no se puede actualizar ni volver a declarar.
Esto significa que el valor de una variable declarada con CONST permanece igual dentro de su alcance. No se puede actualizar ni volver a declarar.`,
      code: 
`/**
* VAR
*/
var prueba = "prueba";

function nuevaFuncion() {
  var hola = "hola";
}
//console.log(hola); <== ERROR: var "hola" No esta declarado

/**
* VAR puede ser sobre escrito y declarado 
* otra vez y no dara error.
*/

var bienvenida = "que tal";
var bienvenida = "mejor digo, buen dia";

// o de esta manera

var bienvenida = "que tal";
bienvenida = "mejor digo, buen dia";

/**
* LET
* A diferencia de VAR, LET no puede ser
* declarado otra vez. Ya que este dara
* un error.
*/

let saludos = "Di Hola";
saludos = "Mejor di Adios";

// Pero esto no funciona:

let saludos2 = "Hola";
//let saludos2 = "Mejor di Adios"; // ERROR: Identificador 'saludos2' ya ha sido declarado

/**
* Pero al trabajar con Scopes o en
* diferentes bloques como se muestra
* en seguida...
*/

let saludosDeBloque = "Hola";
if (true) {
  let saludosDeBloque = "Hola desde otro bloque";
  //console.log(saludosDeBloque); <== imprime "Hola desde otro bloque
}
//console.log(saludosDeBloque); <== imprime "Hola"

/**
* CONST
* Este no puede cambiar de ninguna
* manera. Una vez declarado, ese sera
* el valor definitivo.
*/

const saludoConstante = "Buen dia";
//saludoConstante = "Buenas tardes";// ERROR: No se puede asignar a valor constante

// Y a la vez:

const saludoConstante2 = "Buen dia";
//const saludoConstante2 = "Buenas tardes";// ERROR: Identificador 'saludoConstante2' ya fue declarado

/**
* Por otro lado, a este en forma
* de objeto, no se le puede reemplazar
* completo, pero si propiedades.
*/

const objetoSaludo = {
  mensaje: "Hola",
  veces: 4
}

objetoSaludo.mensaje = "Cambio de mensaje";

/**
* Solo modifica el codigo entre las
* siguientes lineas para lograr lo siguiente.
* 
* Escribe la variable en el console.log();
* que de como resultado: -10
*/
/*=======================================*/
var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(/**la variable "a" o "b"*/);
/*=======================================*/
`,
      result: 
`/**
* VAR
*/
var prueba = "prueba";

function nuevaFuncion() {
  var hola = "hola";
}
//console.log(hola); <== ERROR: var "hola" No esta declarado

/**
* VAR puede ser sobre escrito y declarado 
* otra vez y no dara error.
*/

var bienvenida = "que tal";
var bienvenida = "mejor digo, buen dia";

// o de esta manera

var bienvenida = "que tal";
bienvenida = "mejor digo, buen dia";

/**
* LET
* A diferencia de VAR, LET no puede ser
* declarado otra vez. Ya que este dara
* un error.
*/

let saludos = "Di Hola";
saludos = "Mejor di Adios";

// Pero esto no funciona:

let saludos2 = "Hola";
//let saludos2 = "Mejor di Adios"; // ERROR: Identificador 'saludos2' ya ha sido declarado

/**
* Pero al trabajar con Scopes o en
* diferentes bloques como se muestra
* en seguida...
*/

let saludosDeBloque = "Hola";
if (true) {
  let saludosDeBloque = "Hola desde otro bloque";
  //console.log(saludosDeBloque); <== imprime "Hola desde otro bloque
}
//console.log(saludosDeBloque); <== imprime "Hola"

/**
* CONST
* Este no puede cambiar de ninguna
* manera. Una vez declarado, ese sera
* el valor definitivo.
*/

const saludoConstante = "Buen dia";
//saludoConstante = "Buenas tardes";// ERROR: No se puede asignar a valor constante

// Y a la vez:

const saludoConstante2 = "Buen dia";
//const saludoConstante2 = "Buenas tardes";// ERROR: Identificador 'saludoConstante2' ya fue declarado

/**
* Por otro lado, a este en forma
* de objeto, no se le puede reemplazar
* completo, pero si propiedades.
*/

const objetoSaludo = {
  mensaje: "Hola",
  veces: 4
}

objetoSaludo.mensaje = "Cambio de mensaje";

/**
* Solo modifica el codigo entre las
* siguientes lineas para lograr lo siguiente.
* 
* Escribe la variable en el console.log();
* que de como resultado: -10
*/
/*=======================================*/
var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(b);
/*=======================================*/
`,
    },
    {
      page: 2,
      title: "Test",
      description: `aaa`,
      code: `aaa`,
      result: `aaa`,
    },
];
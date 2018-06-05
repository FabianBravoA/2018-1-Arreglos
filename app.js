/*
 * Arreglos
 * 
 * ["Uno", "Dos", "Tres", "Cuatro"] length : 4
 *    ^      ^       ^        ^
 *    0      1       2        3
 * [1, 2, 3, 4, 5]
 * [25, 8, 64, 42]
 * ["Uno", 2, "Tres", 4]
 * 
 */
//Puedo partir mi lista vacía simplemente con corchetes sin nada dentro
const miLista = []; //Equivalente a new Array();
miLista.push("Antonella");//Agrega un elemento al final de la lista
console.log("Datos > "+JSON.stringify(miLista));//JSON.stringify transforma de objeto a texto
miLista.push("Cynthia");
console.log("Datos > "+JSON.stringify(miLista));// push siempre quedara al final.
const ultima = miLista.pop();//Remueve el último elemento de la lista
console.log("Ultimo elemento > "+ultima);
console.log("Datos > "+JSON.stringify(miLista));

/*
 *                              
 *  let a = [];                 
 *      |                       
 *      -------------> [dirección de memoria] La flecha apunta a un lugar donde está mi arreglo, la flecha no cambia
 *                              |
 *                              |
 *                              |
 *                              ->["Mi gran gato"]
 * a.push("Mi gran gato");
 * 
 *
 */

 const antonella = miLista[0];
 /*                        ^
  *                        |
  *                      Indice
  *
  */

  miLista[0] = "NataliaMH"; //Nos permite modificar los datos en la posición 0
  console.log("Datos > "+JSON.stringify(miLista));
  miLista[10] = "Antonella";
  console.log("Datos > "+JSON.stringify(miLista));

  const listaAnimales = ["Doge", "Cate", "Contralorito", "Bojack", "Aggretsuko", "Snoopy", "Garfield" ];
  //Navegar por una lista usando FOR
  for(let i = 0; i < listaAnimales.length; ++i){
    console.log("Animal > "+listaAnimales[i]);
  }
  console.log("Animal imaginario > "+listaAnimales[100]);

  listaAnimales.forEach( //Va a recorrer todo el array y llama a cada uno de sus elementos mediante una función.
    function(jumbito){
      console.log("Animal pro > "+jumbito);
    }
  );

  const listaDeAnimalesGritones = [];
  for(let i=0; i < listaAnimales.length; ++i){
    listaDeAnimalesGritones[i] = listaAnimales[i].toUpperCase();//pasa la lista a mayusculas
  }
  console.log("Lista de animales gritones > "+listaDeAnimalesGritones);

  const listaGritonaMap = listaAnimales.map(//Va a pasar por cada uno de los elementos, transforma los datos y los retorna en un nuevo array.
    (animal)=>{
      return animal.toUpperCase();
    }
  );

  const series = [
    {
      nombre : "Sherlock",
      protagonista : "Benedict Cucumberbach",
      estilo : "thriller"
    },
    {
      nombre : "Orange is the new black",
      protagonista : "Laverne Cox",
      estilo : "drama"
    },
    {
      nombre : "Friends",
      protagonista : "Jennifer Aniston",
      estilo : "comedia"
    },
    {
      nombre : "The office",
      protagonista : "Steve Carrell",
      estilo : "comedia"
    },
    {
      nombre : "Futurama",
      protagonista : "Leela Turanga",
      estilo : "comedia"
    },
    {
      nombre : "Juego de tronos",
      protagonista : "el invierno",
      estilo : "drama"
    },
    {
      nombre : "The big bang theory",
      protagonista : "Bazinga",
      estilo : "comedia"
    },
    {
      nombre : "The IT crowd",
      protagonista : "No se como se escribe",
      estilo : "comedia"
    }
  ];

  const comedias = [];//Modo antiguo
  for(let i=0; i < series.length; ++i){
    if(series[i].estilo == "comedia"){
      comedias.push(series[i]);
    }
  }
  console.log("Comedias > "+comedias);

  const comediasFilter = series.filter(//Itera entre los elementos del objeto y retorna los que son true.
    (elemento) => {
      return elemento.estilo == "comedia";//Le damos una condición
    }
  );
 
  const animalesString = listaAnimales.reduce(
    /*
     * EN LA PRIMERA ITERACIÓN : 
     * elementoPrevio es el elemento 0,
     * elemento es el elemento 1
     * 
     * EN LA SEGUNDA Y DEMÁS ITERACIONES : 
     * elementoPrevio es lo que retornó la anterior iteración
     * elemento es el elemento segundo o tercero o index o como le llamen
     */
    (elementoPrevio, elemento)=>{
      return elementoPrevio + ", "+ elemento;
    }
  );// Doge, Cate, Contralorito .........
  console.log("Animales string > "+animalesString);

  const nombresLargos = listaAnimales.filter(
    (nombres) => {
      return nombres.length > 5
    }
  );

  const nombreSeries = series.map(serie => serie.nombre + " "+ serie.estilo);

  const titulosSeries = series.reduce(
    (acumulador, serie)=>{
      if(typeof(acumulador) != "string"){
        acumulador = acumulador.nombre;
      }
      return acumulador + ", " + serie.nombre;
    }
  );
  //Retorna el último acumulador de la última iteración

  const laboratoria = [
    {
      nombre : "Valentina",
      puntaje : 200
    },
    {
      nombre : "Jessica",
      puntaje : 199
    },
    {
      nombre : "Mia",
      puntaje : 200
    },
    {
      nombre : "Denisse",
      puntaje : 120
    },
    {
      nombre: "Mile",
      puntaje: 190
    } 
  ];

  const promedio = laboratoria.reduce( //Para obtener un resultado a partir de un arreglo
    (acumulador, estudiante)=>{
      if(isNaN(acumulador)){
        acumulador = acumulador.puntaje;
      }

      return acumulador + estudiante.puntaje;
    }
  ) / laboratoria.length;
  console.log("Promedio laboratoria : "+promedio);
 
//    input -> [] -> output

//Puedo verla desde cualquier parte del código  
function miFuncionSimple(parametro){//Firma o contrato
  return 4;//lo que retorna
}

//Usado principalmente para funciones anónimas
var funcionAnonima = (parametro1, parametro2) => {
  return 4;
}
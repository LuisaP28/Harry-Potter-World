// Actividades Modulo 3


// Paso 1
// Eres estudiante de Hogwarts, tienes la edad suficiente para entrar a estudiar,
// tienes padres, y un linaje de sangre, aun no sabes tu casa, ni tu animal patronus,
// también tienes cualidades, que son muy importantes para que el sombrero
// seleccionador te asigne una casa.
// Crear un objeto, con Nombre, edad, familia, linaje, casa, animal patronus,
// cualidades:
// Gryffindor ("Valor, fuerza, audacia" Linaje: Mestizo, muggle, Sangre pura )
// Hufflepuff("Justicia, Lealtad, Paciencia" Linaje: Mestizo, muggle)
// Ravenclaw(“Creatividad, Erudición, Inteligencia" Linaje: Mestizo, muggle, Sangre
// pura)
// Slytherin ("Ambición, Determinación, Astucia" Linaje: "Sangre Pura")


const howarts = {
    nombre: "Lotto Blue",
    edad: "11 años",
    familia: "Weasley",
    linaje: "Sangre pura",
    casa: "Gryffindor",
    patronus: "Fenix",
    cualidades: "Valor, fuerza, audacia",
expectoPatronus : function(){
    if(this.animalPatronus === ""){
        console.log("No puedo lanzar el efecto patronus, aún no se cual es mi animal");
        console.log("Lo absorbe el dementor, termina en la enfermeria")
    }else{
        console.log(`!Expecto patronum¡ !Aparece¡, ${this.patronus}`)
    }
},
    enfrentarDementor : function (){
        this.animalPatronus = defensaContraLasArtesOscuras.animalPatronus();
        console.log(`Un dementor aparece`)
        this.patronus();
 }
};
    console.log(howarts);


 // Paso 2
 // Es una año difícil en Hogwarts, ya que corren rumores que el innombrable ha vuelto,
 // y el y el famoso Harry Potter también ha ingresado contigo ¡¡¡
 // tus clases y tus profesores:
 // transformaciones: "Profesor Kevin Slughorn",
 // herbologia: "Profesor Maria Umbridge",
 // pociones: "Profesor Liliana McGonagall",
 // encantamientos: "Profesora Jackie",
 // defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
 // animalesMagicos: "Profesor David Filch",
 // historiaDeMagia: "Profesor Ronald Sprout"
 const clasesYprofes = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout"
 };
  console.log(clasesYprofes);
 // Paso 3
 // Inicia un nuevo día, es el día del sombrero seleccionador¡¡
 // hay una gran cena de bienvenida, estas tu con todos tus compas, según tu linaje y
 // cualidades, el sombrero seleccionador te asignara una casa.
 // crear un objeto condicional que sirva para escoger la casa al que pertenece el
 // estudiante, será condicional según tus cualidades y linaje.
 // Gryffindor ("Valor, fuerza, audacia" Linaje: Mestizo, muggle, Sangre pura)
 // Hufflepuff("Justicia, Lealtad, Paciencia" Linaje: Mestizo, muggle)
 // Ravenclaw(“Creatividad, Erudición, Inteligencia" Linaje: Mestizo, muggle, Sangre
 // pura)
 // Slytherin ("Ambición, Determinación, Astucia" Linaje: "Sangre Pura")
 const casas = {
     Gryffindor: {
         cualidades: ["Valor", "Fuerza", "Audacia"],
         linaje: ["Mestizo", "muggle", "Sangre pura"]
         },
     Hufflepuff: {
         cualidades: ["Justicia", "Lealtad", "Paciencia"],
         linaje: ["Mestizo", "muggle"]
         },
     Ravenclaw: {
         cualidades: ["Creatividad", "Erudición", "Inteligencia"],
         linaje: ["Mestizo", "muggle", "Sangre pura"]
         },
     Slytherin: {
         cualidades: ["Ambición", "Determinación", "Astucia"],
         linaje: ["Sangre Pura"]
         }
     };
 
     let sombrero = "";
 
     if (howarts.cualidades.includes("valor") || howarts.cualidades.includes("fuerza") || howarts.cualidades.includes("audacia")) {
       if (howarts.linaje === "Sangre Pura") {
         sombrero = "Slytherin";
       } else {
         sombrero = "Gryffindor";
       }
     } else if (howarts.cualidades.includes("justicia") || howarts.cualidades.includes("lealtad") || howarts.cualidades.includes("paciencia")) {
       sombrero = "Hufflepuff";
     } else if (howarts.cualidades.includes("creatividad") || howarts.cualidades.includes("erudición") || howarts.cualidades.includes("inteligencia")) {
       sombrero = "Ravenclaw";
     }
 
     console.log("EL Sombrero Seleccionador te puso en: " + sombrero);
 // Paso 4
 // Primer día de clases: vas temprano a clase de transformaciones, en clase de
 // transformaciones que es un objeto, con transformaciones con boggarts, «Altera
 // la habilidad de un boggart para cambiar de forma y provoca risa para derrotarlo.»
 // esto se logra con el encantamiento "Riddikulus".
 // Definir la clase de Transformaciones
 // En este paso, estás creando un objeto llamado claseTransformaciones que
 // representa la clase de Transformaciones. Estableces el nombre del profesor,
 // el horario y una propiedad para rastrear la transformación de los boggarts.
 // Paso 2: Crear una función para realizar la transformación con "Riddikulus"
 // Aquí defines una función realizarTransformacionRiddikulus dentro de
 // claseTransformaciones. Esta función verifica si hay un boggart presente y, si
 // es así, realiza la transformación con el encantamiento "Riddikulus".
 // Paso 3: Crear una función para enfrentar un boggart
 // Aquí defines otra función enfrentarBoggart dentro de
 // claseTransformaciones. Esta función toma un boggart como argumento,
 // muestra un mensaje con la forma original del boggart, realiza la
 // transformación y muestra el resultado.
 // Paso 4: Uso y llamada a las funciones
 // En este paso, creas un objeto boggartEjemplo y luego llamas a la función
 // enfrentarBoggart de claseTransformaciones para enfrentar el boggart.
 
 
 
 //  Paso 1:
 const claseTransformaciones = {
    profesor: "Profesor Kevin Slughorn",
    hora: "5:00 pm a 7:00 pm",
    transformBoggarts: null,
 
 // Paso 2:  
 
    riddikulus: function() {
      if (this.transformBoggarts === null) {
        console.log("¡Un boggart ha aparecido en la clase de transformaciones!")
        } else {
            console.log("¡Riddikulus! El boggart ha cambiado de forma y fue derrotado con risas.");
        }
    },
 
  // Paso 3:  
    enfrentarBoggart: function(boggart){
        console.log(`!Un boggart ha aparecido en la clase de transformaciones!`);
        console.log(`El boggart tiene la forma de:  ${boggart.formaOriginal}`);
        this.transformBoggarts = {
            formaOriginal: boggart.formaOriginal,
            formaTRansformada: "Señora graciosa"
        };
        this.riddikulus
    }
};  


 // Paso 4:


    let boggartEjemplo = {
    formaOriginal: "Muerte"
  }




  claseTransformaciones.enfrentarBoggart(boggartEjemplo);


 
 // Paso 5
 // puedes ir agregando las demás clases, pero es importante que vayas a la clase de
 // defensa contra las artes oscuras, para puedas defenderte de los dementores que
 // han escapado de Azkaban.
 // crear un objeto con nombre defensaContraLasArtesOscuras con la función de
 // generar un animal de patronus, lo genere random y llenar la variable, de la
 // propiedad animalPatronus.


 const defensaContraLasArtesOscuras1 = {
    profesor: clasesYprofes.defensaContraLasArtesOscuras,
    hora: "08:00 a.m",
        generarPatronus: function(){
        const patronusCreado = ["Nutria", "Fénix", "Ágila", "Ciervo", "León"]
        const randomIndex = Math.floor(Math.random() * howarts.patronus.length)
        return patronusCreado[randomIndex];
    }
  };
 
  const animalPatronus = defensaContraLasArtesOscuras1.generarPatronus();
  console.log(animalPatronus);
 
 
  function encuentroConDementor(howarts) {
    if (howarts.animalPatronus) {
      console.log("El estudiante conjura su patronus " + howarts.animalPatronus + " y detiene al dementor.");
    } else {
      console.log("El estudiante no tiene un patronus y es absorbido por el dementor.");
      llevarAEnfermeria(howarts);
    }
  }
 
  function llevarAEnfermeria(howarts) {
    console.log("El estudiante " + howarts.nombre + " es llevado a la enfermería para recuperarse.");
  }
 
 
 // Paso 6
 // Mostrar información del estudiante con los cambios realizador a su objeto


 const estudiante = {
    nombre: "Lotto Blue",
    animalPatronus: animalPatronus
  };
 
  encuentroConDementor(estudiante);
 
 
  console.log("Estudiante: " + howarts.nombre);
  console.log("Tu patronus es un: " + estudiante.animalPatronus);


// Paso 7


// Crear Objeto de clasePociones, con su profesor, y horario, donde debe tener unos
// ingredientes: 2 Crisopos y 1 Tallo de Descurainia Sophia, y tiempo de preparacion de 5
// min, si no, queda mal y hara daño, todo para crear la pocion, Poción Felix Felicis.
// y luego de realizarla, las consecuencias sera cambiar el profesor de pociones por el de
// animales magicos.




const clasePosiciones = {
 prof : "Pofesor: Liliana McGonagall.",
 horario: "2:00 pm - 4:00 pm.",
 ingredientes: {
   Crisopos: 2,
   TallodeDescurainiaSophia: 1,
 },
   tiempoPreparacion: "5 minutos",
   pocionPreparada: false,
   preparaPocion:  function (){
     if(this.ingredientes.Crisopos === 2 && this.ingredientes.TallodeDescurainiaSophia === 1 && this.tiempoPreparacion === "5 minutos"){
       console.log("Posicion Felix Felices preparada con éxito.");
       this.pocionPreparada = true;
     } else {
       console.log("No se preparó la posión, te hará daño");
       this.pocionPreparada = false;
     }
   },


cambiarProf: function(){
 clasePosiciones.prof = "Profesor David Filch";
}
}; 
clasePosiciones.preparaPocion();
console.log(clasePosiciones.prof);
console.log(clasePosiciones.pocionPreparada);


/*
Paso 8


Realizar CSS de Hogwarts, si lo quieren hacer en una o varias páginas.
realizar para la creación del primer objeto, realizarlo forma formulario, poner imagen
avatar del estudiante y el entorno tema de Hogwarts.
e ir realizando cada una de las clases que realizaron en el taller, Transformaciones,
Pociones, y defensa contra las artes oscuras.  */





let btn = document.getElementById("array");
btn.addEventListener('click', function(){
  main();
})

function myArray(){
  const array = [1, 3, "a", [1,2]]
  //console.log(array[3])
  //console.log(array[2])
  alert(array)
}

function multi(array){
  for (i = 0; i < array.length; i++) {
    const arrayMulti = array[i]*2;
    alert("El numero duplicado de " + array[i] + " es: "+arrayMulti);
  }
}

function primo(array){
  for (i = 0; i < array.length; i++) {
    if (array[i] == 2 || array[i] % 2 !== 0 && array[i] % 3 !== 0 && array[i] % 7 !== 0){
      alert("El " + array[i] + " es Primo");
    }
  }
}

function maxaMin(array){
  console.log(array.sort());
}

function main(){
  myArray()

  let cont = true
  let array = []

  while (cont){
  let num = prompt("Ingrese numero o presione q para salir")
    if(num == "q" || num == "Q"){
      cont = false
    }else{
      if (isNaN(num)) {
        alert("No es Numero")
      }else{
        array.push(num)
      }
    }
  }
  
  
  alert("Los numero ingresados fueron: " + array)
  multi(array)
  primo(array)
  maxaMin(array)
}



let botn = document.getElementById("arrayJson");
botn.addEventListener('click', function(){
  arrayJson();
})

function arrayJson(){
  
  let dniEsPar = true

  
  let nombre = prompt("Ingrese nombre: ")
  let apellido = prompt("Ingrese apellido: ")
  let dni = prompt("Ingrese DNI: ")

  let user = {};
  user.name = {nombre}
  user.ape = {apellido}
  user.dni = {dni}

  let jsonUser = JSON.stringify(user)
  console.log(jsonUser)

  if (dni % 2 == 0){
    alert("El Dni es Par ")
  }else{
    alert("El Dni NO es Par")
    dniEsPar = false
  }
  
  user.dniEsPar = {dniEsPar}
  let jsonUserlocal = JSON.stringify(user)
  console.log(jsonUserlocal)

  console.log(user)
  //var jsonUser3 = jsonUser2.filter((item) => item.name )
  //console.log(jsonUser3)
}
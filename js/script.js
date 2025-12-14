
// capturar el input, el resultado, la cuenta atrás y botón de reestablecer ok
// math.random(), mathfloor() ok
// cuenta atrás setInterval => 5,4,3,2,1,0
// settimeout cuando pasen los segundos, tendrá que darnos el número aleatorio ok
// Coger el dato que el usuario nos indique en el input ok
// valorar resultado comparando dato usuario con el dato aleatorio ok
// diferentes mensajes si numero igual o distinto ok

const userInput = document.getElementById("userInput"),
      countdown = document.getElementById("countdown"),
      result = document.getElementById("result"),
      restart = document.getElementById("restart")

let tiempo = 5
let userNumber = 0

const randomNumber = () => Math.floor(Math.random() * 3) + 1

userInput.addEventListener("change", () => {
    userNumber = userInput.value
    console.log(userNumber)

})

function StarGame () {
    count()
 const misteryNumber = new Promise(resolve => {
    setTimeout(() => {
      resolve (randomNumber())
    }, 6000)
 })
   return misteryNumber
}

StarGame()
.then(number => {
    let mensaje = ""
    if(number == userNumber) {
        mensaje = `
        <h2 class="green">¡Has salvado el mundo!</h2>
        <p>El número que has elegido es el ${userNumber} y el aleatorio es ${number}</p>
        `
    } else {
        mensaje = `
        <h2 class="red">La bomba ha estallado</h2>
        <p>El número que has elegido es el ${userNumber} y el aleatorio es ${number}</p>
        `
    }
    result.innerHTML = mensaje
})

function count () {
    const intervalo = setInterval(() => {    
    if (tiempo === 0) {
         clearInterval(intervalo)
    }
     countdown.innerHTML = `<p class="red">Cuenta atrás: ${tiempo} segundos</p>`
     console.log(tiempo)
     tiempo--

 }, 1000)
}

restart.addEventListener("click", ()=> {
    location.reload()
})


 






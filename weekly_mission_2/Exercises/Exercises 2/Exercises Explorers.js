const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]


// Ejercicio 2.1
explorers.forEach(explorer => console.log("Nombre: " + explorer.name+ "," + "Stack: " + explorer.stack))

// Ejercicio 2.3
const explorerStack = explorers.map(explorer => explorer.stack)
console.log(explorerStack)

// Ejercicio 2.4
const explorerjs = explorers.filter(explorer => explorer.stack.includes("js"))
console.log(explorerjs)

// Ejercicio 2.5
const explorerCDMX = explorers.find(explorer => explorer.city === "CDMX")
console.log(explorerCDMX)

// Ejercicio 2.6
const Texercise = explorers.reduce((total, explorer) => total + explorer.exercises_completed, 0)
console.log(Texercise)

// Ejercicio 2.7
const Fexercise = explorers.some(explorer => explorer["missions"]["frontend"].exercisesFinished === true)
console.log(Fexercise)

// Ejercicio 2.8
const FOB= explorers.every(explorer => explorer["missions"]["onboarding"].isFinished === true)
console.log(FOB)
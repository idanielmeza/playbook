console.log('Examples 1');

const names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

console.log(names);

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
];

console.log('Ejercicio 2, punto 1: ');

explorers.forEach(explorer => {
    console.log(explorer.name);
});

console.log('Ejercicio 2.2')

explorers.forEach(explorer => {
    console.log(explorer.stack)
})

console.log('Ejercicio 2.3')
const stacks = explorers.map(explorer => explorer.stack)
console.log(stacks);

console.log('Ejercicio 2.4');
const explorersJs = explorers.filter(explorer => explorer.stack.includes('js'));
console.log(explorersJs);

console.log('Ejercicio 2.5');
const firstVeracruz = explorers.find(explorer => explorer.city === 'Veracruz');
console.log(firstVeracruz);

console.log('Ejercicio 2.6');
const all_excercises = explorers.reduce((acc, explorer) =>  acc + explorer.exercises_completed , 0);
console.log(all_excercises);
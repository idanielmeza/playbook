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

explorers.forEach(explorer => {console.log(explorer.name)});

explorers.forEach(e => {console.log(e.stack)});

const stacks = explorers.map(e => e.stack);
console.log(stacks);

const containsJs = explorers.filter(e => e.stack.includes('js'));
console.log(containsJs);

const itsVeracruzano = explorers.find(e => e.city === 'Veracruz');
console.log(itsVeracruzano);

const all_excercises = explorers.reduce((acc, e) => acc + e.exercises_completed, 0);
console.log(all_excercises);

const excercises_finished = explorers.some(e => e.missions.frontend.exercisesFinished);
console.log(excercises_finished);

const isFinished = explorers.every(e => e.missions.frontend.isFinished);
console.log(isFinished);
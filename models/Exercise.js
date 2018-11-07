import ExerciseSet 		from './ExerciseSet.js'
import ExerciseConfig from './ExerciseConfig.js'

export default class Exercise {
	name: string;
	sets: ExerciseSet;
	config: ExerciseConfig;
	constructor(name: string){
		this.name = name;
	}
}

/*
Sample exercises:

{
	name: "Jogging",
	sets: {
		option: "Time",
		value: 10,
		unit: "minutes"
	},
	config: {
		option: "Level",
		value: 5
	}
}

{
	name: "Leg Press",
	sets: {
		option: "Weight",
		value: 35,
		unit: "kg"
	},
	config: {
		option: "Machine Config",
		value: "Seat 10"
	}
} 


*/
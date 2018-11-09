import ExerciseSet 		from './ExerciseSet.js'
import ExerciseConfig from './ExerciseConfig.js'

export default class Exercise {
	name: string;
	sets: string;
	config: string;
	constructor(data: Object){
		this.name = data.name;
		this.sets = data.sets;
		this.config = data.config;
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
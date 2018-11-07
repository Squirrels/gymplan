import Exercise from './Exercise.js'

export default class Workout {
	name: string;
	exercises: [];
	constructor(name: string) {
		this.name = name;
		this.exercises = [];
  };
}
export class Player {
    constructor(id) {
        this.name = name;
        this.id = id;
        this.score = 0;
        this.scores = [];
    }

    calculateScores() {
        let sum = 0;
        for (let i = 0; i < scores.length; i++) {
            sum += this.scores[i];
        }
        return sum;
    }
}
import * as Main from './main.js';
export default class Player {
  constructor(id) {
    this.name = name;
    this.id = id;
    this.score = 0;
    this.scores = [];
    for (let i = 1; i <= 18; i++) {
      $(`#player${this.id}-hole${i}`)
        .off('change')
        .attr('onchange', `players[${this.id - 1}].calculateScores()`);
    }
  }
  getScores() {
    this.scores = [];
    for (let i = 1; i <= 18; i++) {
      this.scores.push(Number($(`#player${this.id}-hole${i}`).val()));
    }
  }
  calculateScores() {
    this.getScores();
    let frontSum = 0;
    let backSum = 0;
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      if (i < 9) {
        frontSum += this.scores[i];
      }
      else if(i > 8){
        backSum += this.scores[i];
      }
      sum += this.scores[i];
    }
    $(`#player${this.id}-total-front`).text(frontSum);
    this.score = sum;
    $(`#player${this.id}-total-back`).text(backSum);
    $(`.player${this.id}-total`).text(this.score);
    this.printFinalScore();

    return sum;
  }
  changeName() {
    let newName = $(`#player${this.id}-name1`).val();
    if (!Main.players.some((player) => player.name == newName)) {
      this.name = newName;
      $(`#player${this.id}-name2`).val(this.name);
      $(`#player${this.id}-strokes-name`).text(`${this.name}'s Final Score`);
    } else {
      $(`#player${this.id}-name1`).val(this.name);
      $('.toast').toast('show');
    }
  }
  printFinalScore() {
    let par = 0;
    // if($('.player-par').text() == '') {
    for (let i = 0; i < Main.currentCourse.data.holes.length; i++) {
      par += Main.currentCourse.data.holes[i].teeBoxes[Main.currentTeeBox].par;
    }
    $(`.player-par`).text(par);
    // }
    if (this.scores.every((score) => score != 0 || score != '')) {
      let scoreRelPar = this.score - par;
      let message = 'Slap hands. Slap hands.';
      if (scoreRelPar > 0) {
        message = 'Find your happy place';
      } else if (scoreRelPar == 0) {
        message = "Ooh somebody's closer";
      }
      $(`#player${this.id}-strokes`).text(scoreRelPar);
      $(`#player${this.id}-message`).text(message);
      $(`#player${this.id}-final`).show();
    }
  }
}

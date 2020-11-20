import * as Render from './render.js';
import Player from './player.js';
export const players = [];
players.push(new Player(1));
players.push(new Player(2));
players.push(new Player(3));
players.push(new Player(4));
export var currentCourse = null;
export var currentTeeBox = null;

const coursesPromise = fetch('https://golf-courses-api.herokuapp.com/courses').then((response) => response.json());

coursesPromise.then((data) => {
  document.getElementById('courses-dropdown').innerHtml = '';
  for (let i = 0; i < data.courses.length; i++) {
    $(`<a class="dropdown-item" href="#">${data.courses[i].name}</a>\n`)
      .appendTo('#courses-dropdown')
      .off('click')
      .click(() => {
        changeCourse(data.courses[i].id);
        Render.clearCourse();
        $('#tee-select').text('Select Tee Box');
      });
  }
});
function changeCourse(courseID) {
  let coursePromise = fetch(`https://golf-courses-api.herokuapp.com/courses/${courseID}`).then((response) => response.json());
  coursePromise.then((course) => {
    currentCourse = course;
    $('#course-selection').text(course.data.name);
    $('#tee-dropdown').html('');
    $('#tee-dropdown').append(`<button id="tee-select" class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select Tee Box
    </button>
    <div class="dropdown-menu" id="tees-dropdown" aria-labelledby="navbarDropdown">
    </div>`);
    for (let i = 0; i < course.data.holes[0].teeBoxes.length; i++) {
      $(`<a class="dropdown-item" href="#">${course.data.holes[0].teeBoxes[i].teeType}</a>\n`)
        .appendTo('#tees-dropdown')
        .off('click')
        .click(() => {
          Render.displayCourse(course, i);
          currentTeeBox = i;
        });
    }
  });
}

const whitelistedInputs = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 8, 13, 37, 39, 9];
$('.player-score')
  .off('keydown')
  .keydown((event) => {
    // console.log(event.key + ' ' + event.which);
    if (!whitelistedInputs.includes(event.which)) {
      event.preventDefault();
    }
  })
  .keyup(event => {
    if(event.which == 13) {
      $(':focus').closest('.player-score').next('.player-score').find('input').focus();
    }
  });

window.players = players;

$('#player1-final').hide();
$('#player2-final').hide();
$('#player3-final').hide();
$('#player4-final').hide();

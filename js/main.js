import * as Render from './render.js';
var currentCourse = null;

const coursesPromise = fetch('https://golf-courses-api.herokuapp.com/courses').then((response) => response.json());

coursesPromise.then((data) => {
  document.getElementById('courses-dropdown').innerHtml = '';
  for (let i = 0; i < data.courses.length; i++) {
    $(`<a class="dropdown-item" href="#">${data.courses[i].name}</a>\n`).appendTo('#courses-dropdown').off('click').click(function() {changeCourse(data.courses[i].id);Render.clearCourse();});
  }
});
function changeCourse(courseID) {
  let coursePromise = fetch(`https://golf-courses-api.herokuapp.com/courses/${courseID}`).then((response) => response.json());
  coursePromise.then((course) => {
    console.log(course);
    currentCourse = course;
    $('#course-selection').text(course.data.name);
    $('#tee-dropdown').html('');
    $('#tee-dropdown').append(`<button id="tee-select" class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select Tee Box
    </button>
    <div class="dropdown-menu" id="tees-dropdown" aria-labelledby="navbarDropdown">
    </div>`);
    for (let i = 0; i < course.data.holes[0].teeBoxes.length; i++) {
      $(`<a class="dropdown-item" href="#">${course.data.holes[0].teeBoxes[i].teeType}</a>\n`).appendTo('#tees-dropdown').off('click').click(function() {Render.displayCourse(course, i)});
      // $('#tees-dropdown:last-child').off('click').click(function() {Render.displayCourse(course, i)});
    }
  });
}




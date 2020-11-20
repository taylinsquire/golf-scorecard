export function displayCourse(course, teeBox) {
  $('#tee-select').text(course.data.holes[0].teeBoxes[teeBox].teeType);
  displayYards(course, teeBox);
  displayPar(course, teeBox);
  displayHCap(course, teeBox);
}
export function clearCourse() {
  $('#front-yardage').html('<th scope="row">Yards</th><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td>');
  $('#back-yardage').html('<th scope="row">Yards</th><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td>');
  $('#front-par').html('<th scope="row">Par</th><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td>');
  $('#back-par').html('<th scope="row">Par</th><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td>');
  $('#front-hcap').html('<th scope="row">Handicap</th><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td>');
  $('#back-hcap').html('<th scope="row">Handicap</th><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td><td>000</td>');
}

function displayYards(course, teeBox) {
  $('#front-yardage').html('<th scope="row">Yards</th>');
  $('#back-yardage').html('<th scope="row">Yards</th>');
  let frontYards = 0;
  let backYards = 0;
  let totalYards = 0;
  for (let i = 0; i < 18; i++) {
    if (i < 9) {
      $('#front-yardage').append(`<td>${course.data.holes[i].teeBoxes[teeBox].yards}</td>`);
      frontYards += course.data.holes[i].teeBoxes[teeBox].yards;
    } else {
      $('#back-yardage').append(`<td>${course.data.holes[i].teeBoxes[teeBox].yards}</td>`);
      backYards += course.data.holes[i].teeBoxes[teeBox].yards;
    }
    totalYards += course.data.holes[i].teeBoxes[teeBox].yards;
  }
  $('#front-yardage').append(`<td>${frontYards}</td>`);
  $('#front-yardage').append(`<td>${totalYards}</td>`);
  $('#back-yardage').append(`<td>${backYards}</td>`);
  $('#back-yardage').append(`<td>${totalYards}</td>`);
}

function displayPar(course, teeBox) {
  $('#front-par').html('<th scope="row">Par</td>');
  $('#back-par').html('<th scope="row">Par</td>');
  let frontPar = 0;
  let backPar = 0;
  let totalPar = 0;
  for (let i = 0; i < 18; i++) {
    if (i < 9) {
      $('#front-par').append(`<td>${course.data.holes[i].teeBoxes[teeBox].par}</td>`);
      frontPar += course.data.holes[i].teeBoxes[teeBox].par;
    } else {
      $('#back-par').append(`<td>${course.data.holes[i].teeBoxes[teeBox].par}</td>`);
      backPar += course.data.holes[i].teeBoxes[teeBox].par;
    }
    totalPar += course.data.holes[i].teeBoxes[teeBox].par;
  }
  $('#front-par').append(`<td>${frontPar}</td>`);
  $('#front-par').append(`<td>${totalPar}</td>`);
  $('#back-par').append(`<td>${backPar}</td>`);
  $('#back-par').append(`<td>${totalPar}</td>`);
}

function displayHCap(course, teeBox) {
  $('#front-hcap').html('<th scope="row">Handicap</td>');
  $('#back-hcap').html('<th scope="row">Handicap</td>');
  for (let i = 0; i < 18; i++) {
    if (i < 9) {
      $('#front-hcap').append(`<td>${course.data.holes[i].teeBoxes[teeBox].hcp}</td>`);
    } else {
      $('#back-hcap').append(`<td>${course.data.holes[i].teeBoxes[teeBox].hcp}</td>`);
    }
  }
}

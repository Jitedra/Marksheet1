function check(){
  const name = document.getElementById('name').value;
  const standard = document.getElementById('class').value;
  const math = document.getElementById('math').value;
  const english = document.getElementById('english').value;
  const social = document.getElementById('social').value;
  const science = document.getElementById('science').value;
  const hindi = document.getElementById('hindi').value;s
  let student = {
    name: "name",
    class: "standard",
    math: "math",
    english: "english",
    social: "social",
    science: "science",
    hindi: "hindi"
  };
//storing data on local storage.
  let fetch = JSON.parse(localStorage.getItem('student'));
  let array = [];
  if(fetch != null){
    fetch.map(function (v){
      array.push(v);
    });
  }
  array.push(student); 
  window.localStorage.setItem('student', JSON.stringify(array));
  window.location.href = 'thank.html';
}
//function to retrive data from local storage.
function fetch(){
  let student = document.getElementById('studentName').value;
  let standard = document.getElementById('studentClass').value;
  let get = JSON.parse(window.localStorage.getItem('student'));
  get.map(function(v){
    if(v.name === student && v.class === standard){
      let a = document.getElementById('name');
      a.value = v.name;
      let b = document.getElementById('class');
      b.value = v.class;
      let c = document.getElementById('math');
      c.value = v.math;
      let d = document.getElementById('english');
      d.value = v.english;
      let e = document.getElementById('social');
      e.value = v.social;
      let f = document.getElementById('science');
      f.value = v.science;
      let g = document.getElementById('hindi');
      g.value = v.hindi;
    }
  });
}
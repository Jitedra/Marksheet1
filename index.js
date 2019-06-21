function check(){
  
  let name = document.getElementById('name').value;
  let cls = document.getElementById('class').value;
  let math = document.getElementById('math').value;
  let english = document.getElementById('english').value;
  let social = document.getElementById('social').value;
  let science = document.getElementById('science').value;
  let hindi = document.getElementById('hindi').value;

  let stu1 = {
    name: "",
    class: "",
    math: "",
    english: "",
    social: "",
    science: "",
    hindi: ""
    };

  stu1.name = name;
  stu1.class = cls;
  stu1.math = math;
  stu1.english = english;
  stu1.social = social;
  stu1.science = science;
  stu1.hindi = hindi;

  let fetch = JSON.parse(localStorage.getItem('student'));

  let array = [];

  if(fetch != null){
    fetch.map(function (v){
      array.push(v);
    });
  }


  array.push(stu1);
    
  window.localStorage.setItem('student', JSON.stringify(array));

  window.location.href = 'thank.html';
    
}

function fetch(){

  let stu = document.getElementById('name').value;

  let cls = document.getElementById('class').value;

  let get = JSON.parse(window.localStorage.getItem('student'));
  
  get.map(function(v){
    if(v.name === stu && v.class === cls){

      var a = document.getElementById('name1');
      a.value = v.name;
      var b = document.getElementById('class1');
      b.value = v.class;
      var c = document.getElementById('math1');
      c.value = v.math;
      var d = document.getElementById('english1');
      d.value = v.english;
      var e = document.getElementById('social1');
      e.value = v.social;
      var f = document.getElementById('science1');
      f.value = v.science;
      var g = document.getElementById('hindi1');
      g.value = v.hindi;
    }
    
  });
}
function check(){
  let name = document.getElementById('name').value;
  let cls = document.getElementById('class').value;
  let math = document.getElementById('math').value;
  let english = document.getElementById('english').value;
  let social = document.getElementById('social').value;
  let science = document.getElementById('science').value;
  let hindi = document.getElementById('hindi').value;

  console.log(hindi);

  const stu1 = {
  	name: name,
  	class: cls,
  	math: math,
  	english: english,
  	social: social,
  	science: science,
  	hindi: hindi
  	}; 
    
    window.localStorage.setItem('student', JSON.stringify(stu1));

    window.location.href = 'thank.html';
}

function fetch(){
  let get = JSON.parse(window.localStorage.getItem('student'));
  // console.log(get);
  var a = document.getElementById('name1');
  a.value = get.name;
  var b = document.getElementById('class1');
  b.value = get.class;
  var c = document.getElementById('math1');
  c.value = get.math;
  var d = document.getElementById('english1');
  d.value = get.english;
  var e = document.getElementById('social1');
  e.value = get.social;
  var f = document.getElementById('science1');
  f.value = get.science;
  var g = document.getElementById('hindi1');
  g.value = get.hindi;
}
function check(){
  let name = document.getElementById('name').value;
  let cls = document.getElementById('class').value;
  let math = document.getElementById('math').value;
  let english = document.getElementById('english').value;
  let social = document.getElementById('social').value;
  let science = document.getElementById('science').value;
  let hindi = document.getElementById('hindi').value;

  let total = parseInt(math) + parseInt(english) + parseInt(social) + parseInt(science) + parseInt(hindi);

  alert('Total marks obtained ' + total);
}
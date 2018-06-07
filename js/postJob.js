function jobTitle() {
  var x = document.getElementById("job-title").value;
  document.getElementById("job-title-field").innerHTML = x;
  document.getElementById("job-title-field2").innerHTML = x;
}
function cityFunction() {
  var x = document.getElementById("city").value;
  document.getElementById("city-field").innerHTML = x;
  document.getElementById("city-field2").innerHTML = x;
}
function companyFunction() {
  var x = document.getElementById("company").value;
  document.getElementById("company-field").innerHTML = x;
  document.getElementById("company-field2").innerHTML = x;
}
function selectEmployLevel() {
    var mylist = document.getElementById("employ-level");
    document.getElementById("phone-employ").value = mylist.options[mylist.selectedIndex].text;
    document.getElementById("phone-employ2").value = mylist.options[mylist.selectedIndex].text;
}
function selectExperienceStart() {
  var x = document.getElementById("experienceStart").value;
  document.getElementById("phone-experience-start").innerHTML = x;
  document.getElementById("phone-experience-start2").innerHTML = x;
}
function selectExperienceEnd() {
  var x = document.getElementById("experienceEnd").value;
  document.getElementById("phone-experience-end").innerHTML = x;
  document.getElementById("phone-experience-end2").innerHTML = x;
}
function selectSalaryStart() {
  var x = document.getElementById("salaryStart").value;
  document.getElementById("phone-salary-start").innerHTML = x;
  document.getElementById("phone-salary-start2").innerHTML = x;
}
function selectSalaryEnd() {
  var x = document.getElementById("salaryEnd").value;
  document.getElementById("phone-salary-end").innerHTML = x;
  document.getElementById("phone-salary-end2").innerHTML = x;
}

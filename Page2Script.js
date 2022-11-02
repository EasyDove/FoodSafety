var sub1 = document.getElementById("sub1");
var sub2 = document.getElementById("sub2");
var sub3 = document.getElementById("sub3");
var sub4 = document.getElementById("sub4");
var sub5 = document.getElementById("sub5");

var quiz1 = document.getElementById("quiz1");
var quiz2 = document.getElementById("quiz2");
var quiz3 = document.getElementById("quiz3");
var quiz4 = document.getElementById("quiz4");
var quiz5 = document.getElementById("quiz5");

var yes1 = document.getElementById("yes1");
var yes2 = document.getElementById("yes2");
var yes3 = document.getElementById("yes3");
var yes4 = document.getElementById("yes4");
var yes5 = document.getElementById("yes5");

var no1 = document.getElementById("no1");
var no2 = document.getElementById("no2");
var no3 = document.getElementById("no3");
var no4 = document.getElementById("no4");
var no5 = document.getElementById("no5");

var mid1 = document.getElementById("mid1");
var mid2 = document.getElementById("mid2");
var mid3 = document.getElementById("mid3");
var mid4 = document.getElementById("mid4");
var mid5 = document.getElementById("mid5");
 <!--   問題1   -->
sub1.onclick = function () {
  var ans1 = $('input[name="ans1"]:checked').val();
  mid1.style.display = "none";
  yes1.style.display = "none";
  no1.style.display = "none";

  if (typeof ans1 == "undefined") {
    mid1.style.display = "block";
  } else {
    quiz1.style.display = "none";
    quiz2.style.display = "block";
    if (ans1 == "1") {
      yes1.style.display = "block";
    } else {
      no1.style.display = "block";
    }
  }
};



 <!--   問題2   -->
sub2.onclick = function () {
  var ans2 = $('input[name="ans2"]:checked').val();
  mid2.style.display = "none";
  yes2.style.display = "none";
  no2.style.display = "none";

  if (typeof ans2 == "undefined") {
    mid2.style.display = "block";
  } else {
    quiz2.style.display = "none";
    quiz3.style.display = "block";
    if (ans2 == "1") {
      yes2.style.display = "block";
    } else {
      no2.style.display = "block";
    }
  }
};



 <!--   問題3   -->
sub3.onclick = function () {
  var ans3 = $('input[name="ans3"]:checked').val();
  mid3.style.display = "none";
  yes3.style.display = "none";
  no3.style.display = "none";

  if (typeof ans3 == "undefined") {
    mid3.style.display = "block";
  } else {
    quiz3.style.display = "none";
    quiz4.style.display = "block";
    if (ans3 == "1") {
      yes3.style.display = "block";
    } else {
      no3.style.display = "block";
    }
  }
};

<!--   問題4   -->
sub4.onclick = function () {
  var ans4 = $('input[name="ans3"]:checked').val();
  mid4.style.display = "none";
  yes4.style.display = "none";
  no4.style.display = "none";

  if (typeof ans4 == "undefined") {
    mid4.style.display = "block";
  } else {
    quiz4.style.display = "none";
    quiz5.style.display = "block";
    if (ans4 == "1") {
      yes4.style.display = "block";
    } else {
      no4.style.display = "block";
    }
  }
};

<!--   問題5   -->
sub5.onclick = function () {
  var ans5 = $('input[name="ans3"]:checked').val();
  mid5.style.display = "none";
  yes5.style.display = "none";
  no5.style.display = "none";

  if (typeof ans5 == "undefined") {
    mid5.style.display = "block";
  } else {
    quiz5.style.display = "none";
    quiz1.style.display = "block";
    if (ans5 == "1") {
      yes5.style.display = "block";
    } else {
      no5.style.display = "block";
    }
  }
};
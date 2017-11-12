var country = ["Russia", "Austria", "Polska", "Latvia", "Chekhia"];
var people = [142, 9, 38, 2, 11];



var list = document.getElementsByTagName("ul")[0];
list.getElementsByTagName("li")[0].innerHTML = [country[0]];
list.getElementsByTagName("li")[1].innerHTML = [country[1]];
list.getElementsByTagName("li")[2].innerHTML = [country[2]];
list.getElementsByTagName("li")[3].innerHTML = [country[3]];
list.getElementsByTagName("li")[4].innerHTML = [country[4]];

var list = document.getElementsByTagName("ul")[1];
list.getElementsByTagName("li")[0].innerHTML = [people[0]];
list.getElementsByTagName("li")[1].innerHTML = [people[1]];
list.getElementsByTagName("li")[2].innerHTML = [people[2]];
list.getElementsByTagName("li")[3].innerHTML = [people[3]];
list.getElementsByTagName("li")[4].innerHTML = [people[4]];
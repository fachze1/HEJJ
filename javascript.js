var kasperfacts = ['Kasper smider en avokado ud fordi den ikke er moden','DUGRIM','arabisk fisolofi','Børneporno vil jeg gerne have, men ikke sådan lort jeg ikke ved hvad er','Soya er da til for at give farve?','Er det ikke chokolademousse?','vidste i godt at man kunne spise rå laks','JulieBraaaaaaaaaaaaaaaaaaaaaaaaaad']

function myFunction() {
  var randomItem = kasperfacts[Math.floor(Math.random()*kasperfacts.length)];
  document.getElementById("knap").innerHTML = randomItem;
}

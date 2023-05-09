currentDate = new Date();
//currentDate = new Date('00:01 05/15/2023');
refDate = new Date('04/04/2023'); // month day year
diffTime = Math.abs(refDate - currentDate);
diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


// var year = new Date(currentDate.getFullYear(), 0, 1);
// var days = Math.floor((currentDate - year) / (24 * 60 * 60 * 1000));
// var week = Math.ceil(( currentDate.getDay() + 1 + days) / 7);
//var weekType = diffDays % 7;
var weekType = Math.floor(diffDays / 7) % 7;






// var settimana_corrente = document.getElementById('settimana_corrente');
// document.getElementById("settimana_corrente").innerHTML = week;
// var settimana_tipo = document.getElementById('settimana_tipo');
// document.getElementById("settimana_tipo").innerHTML = weekType;
// document.getElementById("settimana_tipo").innerHTML = weekType;

document.getElementById("data_oggi").innerHTML = currentDate;
document.getElementById("data_ref").innerHTML = refDate;
document.getElementById("differenza_date").innerHTML = diffDays;
document.getElementById("differenza_date_settimane").innerHTML =  Math.floor(diffDays / 7);
document.getElementById("tipo_settimana").innerHTML = weekType;

var corridoio = document.getElementById('corridoio');
var sala1 = document.getElementById('sala1');
var sala2 = document.getElementById('sala2');
var cucina = document.getElementById('cucina');
var corridoio = document.getElementById('terrazzo');




var citazioni = [
        "Mi hanno spinto nella paglia, ne sono uscito pagliaccio",
        "Jiiii ji ji jaaa",
        "Studia di meno, scopa di pi&#250",
        "&#200 l&#8217ora delle canne",
        "Perch&#233 come disse mio zio sordomuto...",
        "Mi dia due etti di pomeriggio",
        "Porco dio",
        "La vita &#232 come un pacco di farina. Su un&#8217isola sperduta. Senza cibo. E tu sei celiaco porco dio.",
        "Vuoi sapere come si tiene sulle spine un down?",
        "Del maiale non si butta via niente, per questo conservo con cura il mio crocifisso",
        "Noi ridiamo e scherziamo, ma dovremmo prima scherzare e poi ridere...",
        "Dio schifoso scarafaggio distributore di handicap",
        "Dopo la nostalgia, il collo è la parte pi&#250 debole dell&#8217uomo",
        "Ma &#232 una zucchina?",
        "Rimango ancora celiaca",
        "Facciamo ciquibum?"];
var r = Math.floor(Math.random() * citazioni.length);
document.getElementById("citazione").innerHTML = citazioni[r];


switch (weekType) {
  case 0:
    document.getElementById("corridoio").innerHTML = "Fabio";
    document.getElementById("sala1").innerHTML = "Cristina";
    document.getElementById("sala2").innerHTML = "Giacomo";
    document.getElementById("cucina").innerHTML = "Laila";
    document.getElementById("terrazzo").innerHTML = "Dalila";
    break;
  case 1:
  document.getElementById("corridoio").innerHTML = "Davide";
  document.getElementById("sala1").innerHTML = "Fabio";
  document.getElementById("sala2").innerHTML = "Cristina";
  document.getElementById("cucina").innerHTML = "Giacomo";
  document.getElementById("terrazzo").innerHTML = "Laila";  break;
  case 2:
  document.getElementById("corridoio").innerHTML = "Lumi";
  document.getElementById("sala1").innerHTML = "Davide";
  document.getElementById("sala2").innerHTML = "Fabio";
  document.getElementById("cucina").innerHTML = "Cristina";
  document.getElementById("terrazzo").innerHTML = "Giacomo";  break;
  case 3:
  document.getElementById("corridoio").innerHTML = "Dalila";
  document.getElementById("sala1").innerHTML = "Lumi";
  document.getElementById("sala2").innerHTML = "Davide";
  document.getElementById("cucina").innerHTML = "Fabio";
  document.getElementById("terrazzo").innerHTML = "Cristina";  break;
  case 4:
  document.getElementById("corridoio").innerHTML = "Laila";
  document.getElementById("sala1").innerHTML = "Dalila";
  document.getElementById("sala2").innerHTML = "Lumi";
  document.getElementById("cucina").innerHTML = "Davide";
  document.getElementById("terrazzo").innerHTML = "Fabio";  break;
  case 5:
  document.getElementById("corridoio").innerHTML = "Giacomo";
  document.getElementById("sala1").innerHTML = "Laila";
  document.getElementById("sala2").innerHTML = "Dalila";
  document.getElementById("cucina").innerHTML = "Lumi";
  document.getElementById("terrazzo").innerHTML = "Davide";  break;
  case 6:
  document.getElementById("corridoio").innerHTML = "Cristina";
  document.getElementById("sala1").innerHTML = "Giacomo";
  document.getElementById("sala2").innerHTML = "Laila";
  document.getElementById("cucina").innerHTML = "Dalila";
  document.getElementById("terrazzo").innerHTML = "Lumi";  break;
}




//var weekType = week % 7;

//document.getElementById("settimana_corrente").innerHTML = week;

//console.log("Week Number of the current date (" + currentDate + ") is : " + week);

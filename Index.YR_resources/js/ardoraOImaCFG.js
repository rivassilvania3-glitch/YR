//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=2;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Congratulation"; messageTime="90"; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="SW5kZXguWVI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["V2hhdHNBcHBfSW1hZ2VfMjAyNS0xMC0wN19hdF8zLjAxLjE3X1BNLmpwZWc=","V2hhdHNBcHBfSW1hZ2VfMjAyNS0xMC0wN19hdF8yLjU4LjM0X1BNLmpwZWc=","V2hhdHNBcHBfSW1hZ2VfMjAyNS0xMC0wN19hdF8zLjAwLjAzX1BNLmpwZWc=","V2hhdHNBcHBfSW1hZ2VfMjAyNS0xMC0wN19hdF8yLjU5LjI1X1BNLmpwZWc=","V2hhdHNBcHBfSW1hZ2VfMjAyNS0xMC0wN19hdF8zLjA3LjI2X1BNLmpwZWc=","V2hhdHNBcHBfSW1hZ2VfMjAyNS0xMC0wN19hdF8zLjAwLjQyX1BNLmpwZWc=","V2hhdHNBcHBfSW1hZ2VfMjAyNS0xMC0wN19hdF8zLjAyLjQ3X1BNLmpwZWc=","V2hhdHNBcHBfSW1hZ2VfMjAyNS0xMC0wN19hdF8zLjAyLjE1X1BNLmpwZWc="];
var alts=["Sleep","Wake up","Take a shower","Get dressed","Have breakfast","Go to school","Study","Play"];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="Index.YR_resources/media/";
var wordsG=[];aW=[];

//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=90; timeIni=90; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=1;
var score=0; scoreMax=9; scoreInc=1; scoreDec=0
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
var timeOnMessage=5; messageOk="CONGRATULATION"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["SEFWRSBCUkVBS0ZBU1Q=","U1RVRFk=","UExBWQ==","UkVBRA==","U0xFRVA=","R08gVE8gU0NIT09M","VEFLRSBBIFNIT1dFUg==","R0VUIERSRVNTRUQ=","V0FLRSBVUA=="];var cp_ima=["WhatsApp_Image_2025-10-07_at_3.07.26_PM.jpeg","WhatsApp_Image_2025-10-07_at_3.02.47_PM.jpeg","WhatsApp_Image_2025-10-07_at_3.02.15_PM.jpeg","WhatsApp_Image_2025-10-07_at_3.01.47_PM.jpeg","WhatsApp_Image_2025-10-07_at_3.01.17_PM.jpeg","WhatsApp_Image_2025-10-07_at_3.00.42_PM.jpeg","WhatsApp_Image_2025-10-07_at_3.00.03_PM.jpeg","WhatsApp_Image_2025-10-07_at_2.59.25_PM.jpeg","WhatsApp_Image_2025-10-07_at_2.58.34_PM.jpeg"];var cp_mp3=["","","","","","","","",""];var cp_ogg=["","","","","","","","",""];var cp_que=["WW91IGVhdCBzb21ldGhpbmcgaW4gdGhlIG1vcm5pbmcu","WW91IGRvIHRoaXMgd2hlbiB5b3UgcHJlcGFyZSBmb3IgYSB0ZXN0Lg==","WW91IGRvIHRoaXMgZm9yIGZ1biBvciBpbiB5b3VyIGZyZWUgdGltZS4=","WW91IGRvIHRoaXMgd2l0aCBhIGJvb2sgb3IgbWFnYXppbmUu","V2hhdCB5b3UgZG8gYXQgbmlnaHQgdG8gcmVzdC4=","WW91IGRvIHRoaXMgdG8gbGVhcm4gbmV3IHRoaW5ncyBldmVyeSBkYXku","WW91IGRvIHRoaXMgdG8gY2xlYW4geW91ciBib2R5Lg==","WW91IGRvIHRoaXMgYWZ0ZXIgdGFraW5nIGEgc2hvd2VyIHRvIHB1dCBvbiB5b3VyIGNsb3RoZXMu","VGhlIGZpcnN0IHRoaW5nIHlvdSBkbyBpbiB0aGUgbW9ybmluZy4="];var cp_num=[14,5,4,4,5,12,13,11,7];var cp_alt=["","","","","","","","",""];
var wordsGame="SW5kZXguU1I="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];

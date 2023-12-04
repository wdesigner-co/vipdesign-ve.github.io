//Scrip para los testimonios
var indice=0;
//$(".navigation label").eq(indice).css("background-color","#8065BF");
$(".navigation label").click(function(){

indice=$(this).index();
//$(".navigation label").css("background-color","white");
//$(this).css("background-color","#8065BF");
$(".cont-slid").hide();
$(".cont-slid").eq(indice).fadeIn();
});

$(".bt-right").click(function(){
indice++;
if(indice>2){
    indice=0;
}
$(".cont-slid").hide();
$(".cont-slid").eq(indice).fadeIn();
//$(".navigation label").css("background-color","white");
//$(".navigation label").eq(indice).css("background-color","#8065BF")
});

$(".bt-left").click(function(){
    indice--;
    if(indice<0){
        indice=2;
    }
    $(".cont-slid").hide();
    $(".cont-slid").eq(indice).fadeIn();
   // $(".navigation label").css("background-color","white");
    //$(".navigation label").eq(indice).css("background-color","#8065BF")
    });
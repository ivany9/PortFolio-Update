var time=$('#location');
var name1=$('#name');






name1.text("Jorge Ivan Rodriguez");


function loctime(){

   //return time=moment().format('ll');  
   time.text(moment().format('ll'));   


}
loctime();

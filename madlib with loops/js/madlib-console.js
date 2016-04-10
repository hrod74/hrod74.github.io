var line       =  "";
var favorites  =  [];
var startupX   =  ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY   =  ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
/*----------------------------------------------------------------------------*/
/*--- create button -----------                                            ---*/
/*----------------------------------------------------------------------------*/
document.getElementById("create").addEventListener("click", function(){
   var random1    =  Math.floor( (Math.random() * startupX.length) );
   var random2    =  Math.floor( (Math.random() * startupY.length) );
   var trg        =  document.getElementById("xForY");
   line           =  'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
   trg.innerHTML  =  line;
});
/*----------------------------------------------------------------------------*/
/*--- save button ---------                                               ---*/
/*----------------------------------------------------------------------------*/
document.getElementById("save").addEventListener("click", function(){
   if( line!="" )
      favorites.push(line);
   console.log( favorites );
});
/*----------------------------------------------------------------------------*/
/*--- print button ----------                                              ---*/
/*----------------------------------------------------------------------------*/
document.getElementById("print").addEventListener("click", function(){
   var content = "<ul>";
   for( var k in favorites )
      content += "<li>" + favorites[k] + "</li>";
   content += "</ul>";
   document.getElementById("favorites").innerHTML = content;
});

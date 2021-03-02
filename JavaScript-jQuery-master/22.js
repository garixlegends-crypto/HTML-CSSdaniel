
var pgr = "*";
var utl = parseInt(prompt('votre  etage'));
 var compteur = "**";
 var cap = "";
 var niveau = 4;
for(var i = 1;i <= utl;i++){

    for(var a = 0;a < niveau;a++){
     document.write('<h2 style="margin:auto;display:flex;justify-content:center;"jufy>'+ pgr +'</h2>');   
     pgr = pgr + compteur;
     
    }
    niveau++;
    cap = cap + compteur;
    pgr = "*" + cap;
    
}
for(var c = 1;c <= utl;c++){
    document.write('<h2 style="margin:auto;display:flex;justify-content:center;">' + "|" + '</h2>');   
}
  

    




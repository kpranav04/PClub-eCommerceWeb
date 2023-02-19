var index=1;
showImg(index);
function side_slide(e){showImg(index +=e);}
function showImg(e){
    var i;
    const img=document.querySelectorAll('.slide-img');
    if(e>img.length){index=1}
    if(e<1){index=img.length}
    for(i=0;i<img.length;i++)
    {
        img[i].style.display="none";
    }
    img[index-1].style.display="block";
}

function first(){
    document.getElementById("bannerhome").src= "images/slide1.jpg";
 }
 function second(){
    document.getElementById("bannerhome").src= "images/sale.jpg";
 }
 function third(){
    document.getElementById("bannerhome").src= "images/slide4.jpg";
 }

 function fourth(){
    document.getElementById("bannerhome").src= "images/slide3.jpg";
 }
//  function fifth(){
//     document.getElementById("bannerhome").src= "slide1.jpg";
//  }
 setInterval(first,1500);
 setInterval(second,3000);
 setInterval(third,4500);
 setInterval(fourth,6000);
//  setInterval(fifth,7500);
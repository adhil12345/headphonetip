document.querySelectorAll(".mainSli")[0].innerHTML ='<style> /* Slideshow containerx */ .slideshow-containerx { max-width: 1000px; position: relative; margin: auto; } /* Caption textx */ .textx { background: yellow; color: #f2f2f2; font-size: 15px; padding: 5px 17px; position: absolute; bottom: 19px; right: 25px; color: black; font-family: system-ui; border-radius: 0px 29px 29px 29px; font-weight: bold; } /* Number textx (1/3 etc) */ .numbertextx { color: #f2f2f2; font-size: 12px; padding: 8px 12px; position: absolute; top: 0; } /* The dotxs/bullets/indicators */ .dotx { height: 15px; width: 15px; margin: 0 2px; background-color: #bbb; border-radius: 50%; display: inline-block; transition: background-color 0.6s ease; } .activex { background-color: #717171; } /* Fading animation */ .fadezx { animation-name: fadezx; animation-duration: 1.5s; } @keyframes fadezx { from {opacity: .4} to {opacity: 1} } /* On smaller screens, decrease textx size */ @media only screen and (max-width: 300px) { .textx {font-size: 11px} } </style> <div class="slideshow-containerx"> <div class="mySlides fadezx"> <div class="numbertextx">1 / 3</div> <img class="slidIMG" src="" style="width:100%"> <a class="sLinkSlid" href=""><div class="textx">Check Latest Review</div></a> </div> <div class="mySlides fadezx"> <div class="numbertextx">2 / 3</div> <img class="slidIMG" src="img_snow_wide.jpg" style="width:100%"> <a class="sLinkSlid" href=""><div class="textx">Check Latest Review</div></a> </div> <div class="mySlides fadezx"> <div class="numbertextx">3 / 3</div> <img class="slidIMG" src="img_mountains_wide.jpg" style="width:100%"> <a class="sLinkSlid" href=""><div class="textx">Check Latest Review</div></a> </div> </div> <br> <div style="display:none; textx-align:center"> <span class="dotx"></span> <span class="dotx"></span> <span class="dotx"></span> </div>';

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dotxs = document.getElementsByClassName("dotx");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dotxs.length; i++) {
    dotxs[i].className = dotxs[i].className.replace(" activex", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dotxs[slideIndex-1].className += " activex";
  setTimeout(showSlides, 6000); // Change image every 60 seconds
}

var imglink1 = document.querySelectorAll(".slidGetIm")[0].innerHTML.split("ImgSlidz1{")[1].split("}")[0];document.querySelectorAll(".slidIMG")[0].src =imglink1.split("IMG[")[1].split("]")[0];document.querySelectorAll(".sLinkSlid")[0].href =imglink1.split("WebsiteLink[")[1].split("]")[0];var imglink2 = document.querySelectorAll(".slidGetIm")[0].innerHTML.split("ImgSlidz2{")[1].split("}")[0];document.querySelectorAll(".slidIMG")[1].src =imglink2.split("IMG[")[1].split("]")[0];document.querySelectorAll(".sLinkSlid")[1].href =imglink2.split("WebsiteLink[")[1].split("]")[0]; var imglink3 = document.querySelectorAll(".slidGetIm")[0].innerHTML.split("ImgSlidz3{")[1].split("}")[0];document.querySelectorAll(".slidIMG")[2].src =imglink3.split("IMG[")[1].split("]")[0];document.querySelectorAll(".sLinkSlid")[2].href =imglink3.split("WebsiteLink[")[1].split("]")[0];

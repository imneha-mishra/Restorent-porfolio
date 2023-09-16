// let slideIndex=0
// showSlides(slideIndex);

// function pulsesides(n){
//   showSlides(slideIndex += n);
// }

// function currentSlide(n){
//   showSlides(slideIndex = n)
// }

// function showSlides(n){
//     let i;
//     let slides=document.getElementsByClassName("mySlide");
//     let dots=document.getElementsByClassName("dot")

//     if(n > slides.length){
//         slideIndex=1
//     }
//     if(n < 1){
//         slideIndex=slides.length
//     }
//     for(i=0;i<slides.length;i++){
//         slides[i].style.display="none"
//     }
//     for(i=0;i<dots.length;i++){
//         dots[i].className.replace("active","");
//     }
//     slides[slideIndex - 1].style.display="block";
//     dots[slideIndex-1].className +="active";
    
// }
// book table**************************************

function booking(){
    window.location.href="BookTable/table.html"
  }
 
 let SlideIndex=0
 ShowSlides();
 function ShowSlides(){
     let Slides=document.getElementsByClassName("mySlide");
     for(let i=0;i<Slides.length;i++){
         Slides[i].style.display="none"
     }
   SlideIndex++;
   if(SlideIndex > Slides.length){
     SlideIndex=1;
   }
   Slides[SlideIndex-1].style.display="block";
   setTimeout(ShowSlides,2000)
 }
 //****************************** */ footer slide**************************************
  let slideindex=0;
  showSlides();
  function showSlides(){
   let slide= document.getElementsByClassName("latest");
   for(let i=0;i<slide.length;i++){
     slide[i].style.display="none"
   }
   slideindex++;
   if(slideindex > slide.length){
     slideindex=1;
   }
   slide[slideindex-1].style.display="block";
   setTimeout(showSlides,2000)
  }
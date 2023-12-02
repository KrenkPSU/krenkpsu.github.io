const slideList = [
    {
    id: 1,
    text: '',
    src: 'image/deal1_itemlabel.png'
  },
  {
    id: 2,
    text: '',
    src: 'image/deal2.png'
  },
]

let count = 0;
let numSlides = 2;


function increaseCount() { 
  $('.next').click(function () { 
    count++
    console.log(count)
    if (count < numSlides) {
      renderSlide(count)
    } else { 
      count = 0
      renderSlide(count)
    }
  })
  return count

}
function decreaseCount() { 
  $('.prev').click(function () { 

    if (count > 0) {
      count--
      renderSlide(count)
      console.log(count)
    }
    else {
      count = numSlides - 1
      renderSlide(count)
    }
  })
  
  return count

}

function renderSlide(count) { 
  $('#slideContent').html(`
      <!-- id: ${slideList[count].id} -->
      <h2>${slideList[count].text}</h2>
      <img class="slideimg" src=${slideList[count].src}>
  `)
}




$(decreaseCount())
$(increaseCount())

    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

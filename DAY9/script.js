const wrap = document.querySelector(".wrap");
const booked = document.querySelector(".booked");
const remaining = document.querySelector(".remaining");
let book=0
let rem=200

for (let i = 0; i < 200; i++){
    const temp = document.createElement("div")
    temp.style.border = "1px solid white"
    temp.style.width = "30px";
    temp.style.height = "30px";
    temp.addEventListener("click", () => {
        if(temp.className=="black") {
                book-=1
                rem+=1
        }
        else {
            book+=1
            rem-=1
        } 
        temp.classList.toggle("black")
        booked.innerHTML="Booked: "+book
        remaining.innerHTML="Remaining: "+rem
    })
    wrap.appendChild(temp);
    }

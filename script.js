let rating = "0";
let submit = document.getElementById("submit")
let main = document.getElementById("main");
let success = document.getElementById("success");
let rating_span = document.getElementById("rating")
success.classList.toggle("visible");
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        rating = radio.value;
        document.querySelectorAll('label').forEach((label) => {
            label.classList.remove('selected');
        });
        if (this.checked) {
            this.parentElement.classList.add('selected');
        }
    });
});


submit.addEventListener("click", ()=>{
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
        if(radio.checked == true){
            rating_span.innerText = rating;
            main.classList.toggle("visible")
            success.classList.toggle("visible")
        }
    });
    

})


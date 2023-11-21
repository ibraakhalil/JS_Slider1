let button = document.querySelectorAll("button");
let dotsWrapper = document.querySelector(".dots-wrapper");
let img = document.createElement("img");
let p = document.createElement("p");
let content = document.querySelector(".content");

// dots কে ফাংশন হিসেবে না নিলে সব যায়গায় ঠিক মত কাজ করে না।
let dots = () =>  document.querySelectorAll(".dot");
let counter = 0;


let array = [
    {img:"bg1.jpg",
    para:"my name is ibrahim khalil. i am a students of chemistry since 2017. i have a Dream. that is i will be a pro web designer in my whole country"},
    {img:"bg2.jpg",
    para:"chemistry since designer in my whole country 2017. i have a Dremy na khalil. i am a students of am. that is i willme is ibrahim be a pro web "},
    {img:"bg3.jpg",
    para:"students of chemistry eam. that is i will bsince 2017ro web designer in my whole countrmy name is ibrahim khalil. i am a . i have a Dre a py"},
    {img:"bg4.jpg",
    para:"whole countrmy name is ibrahimstudents of chemistry eam. that is i will bsince 2017ro web designer in my  khalil. i am a . i have a Dre a py"},
    {img:"bg5.jpg",
    para:"have a Dre a students of chemistry eam. that is i will bsince 2017ro web designer in my whole countrmy name is ibrahim khalil. i am a . i py"},

]


for (let i = 0; i < array.length; i++){

    // এই মাধ্যমে array যতগুলা হবে স্লাইডারের dot ও ততগুলা হবে
     let dotDiv = document.createElement("div");
        dotDiv.setAttribute("class","dot")
    dotsWrapper.append(dotDiv);

    // স্লাইডারের dot ক্লিক করলে এর মাধ্যমে স্লাইড চেঞ্জ হবে
    dots()[i].addEventListener("click",function(){
        myfunc(counter = i);
    })
}

function myfunc(index) {

    // এর মাধ্যমে dot এর ব্যাকগ্রাউন্ড চেঞ্জ হবে। আর content এর ভিতর img & p এপেন্ড করছি।
    function dotStyle() {

        for(let i = 0; i < array.length; i++){
        dots()[i].setAttribute("style","background:;") 
        }
        dots()[index].setAttribute("style","background:gray;width:30px;")

        content.append(img)
        content.append(p);
    }

    button.forEach(function(x){
        x.addEventListener("click",function(){

            if(x.classList.contains("prev")){
                index--;
                if(index < 0) {index = array.length - 1;}   
            }
            if(x.classList.contains("next")){
                index++;
                if(index > array.length-1) {index = 0 ;}
            }
            img.setAttribute("src",`./Photo/${array[index].img}`)
            img.setAttribute("class","fade")
            p.setAttribute("class","fadeP")
            p.innerText = array[index].para;
            dotStyle();   
    })
    })
    
// এটা আরেকবার বাইরে না দিলে পেজ রিলোডের সময় স্লাইডারে প্রথমবার কিছু থাকেনা
img.setAttribute("src",`./Photo/${array[index].img}`)
p.innerText = array[index].para;
dotStyle(); 
}
 
myfunc(counter)


function removeImg(){
    const div_img = document.querySelector('.box-img-ilustrative-introduction');
    

    const width = window.innerWidth
    console.log(width)
    if(width <= 768){
        div_img.remove();
    }
}


removeImg()
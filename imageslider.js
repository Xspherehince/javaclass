const image_array=['l1.jpg','l2.jpg','l3.jpg','l4.webp','l5.jpg']
let array_length=image_array.length
let i=0
let set=setInterval(slider,5000)

function slider(){
    i++
    i=i%array_length
    document.getElementById('image').src=`image/${image_array[i]}`
}
function prev(){
    i--
    if(i<0){
        i=array_length-1
    }
    document.getElementById('image').src=`image/${image_array[i]}`
}

function stops(){
    clearInterval(set)
}

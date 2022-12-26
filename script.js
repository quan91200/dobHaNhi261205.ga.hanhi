var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-img img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

var currenIndex = 0;
function updateImageByIndex(index){
    //remove active class
    document.querySelectorAll('.list-img div').forEach(item=>{
        item.classList.remove('active')
    })

    currenIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}


    listImg.forEach((imgElement, index)=>{

        imgElement.addEventListener('click', e=>{
            imgFeature.style.opacity = '0'
            
            setTimeout(()=>{
                updateImageByIndex(index)
                imgFeature.style.opacity = '1'
            }, 400)
        })
    })
    prevBtn.addEventListener('click', e=>{

        if(currenIndex == 0){
            currenIndex = listImg.length - 1
        }else {
            currenIndex--
        }

        imgFeature.style.animation = ''
        setTimeout(()=>{
            updateImageByIndex(currenIndex)
            imgFeature.style.animation = 'slideLeft is ease-in-out forwards'
        },200)
    })
    nextBtn.addEventListener('click', e=>{
        if(currenIndex == listImg.length - 1){
            currenIndex = 0
        }
        else {
            currenIndex++
        }
        imgFeature.style.animation = ''
        setTimeout(()=>{
            updateImageByIndex(currenIndex)
            imgFeature.style.animation = 'slideRight is ease-in-out forwards'
        },200) 
    })
updateImageByIndex(0)

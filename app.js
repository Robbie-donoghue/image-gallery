
//declare global variables
let thumbNailBox = document.getElementById(`thumbnail-box`)
//set displayImage directly to img tag
let displayImage = document.getElementById(`display`)
//set announcer
const announcer = document.getElementById(`announcer`)
//make current image index variable
let currentImageIndex=0
//make images object array
let images = [
    {
        url: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a4c6a31d-c586-4ac6-9172-1d5c2b9d41cf/d60wfgx-49772b1b-8b09-4a01-84eb-f04d8dd81f43.png/v1/fill/w_999,h_800,q_70,strp/south_park__wallpaper_eric_cartman_by_hieifireblaze_d60wfgx-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODIwIiwicGF0aCI6IlwvZlwvYTRjNmEzMWQtYzU4Ni00YWM2LTkxNzItMWQ1YzJiOWQ0MWNmXC9kNjB3Zmd4LTQ5NzcyYjFiLThiMDktNGEwMS04NGViLWYwNGQ4ZGQ4MWY0My5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oX3t6Ps7YpCVd7OZDtwYyaIqTYocSNSLYGp6dJaIPKY` ,
        alt: `cartman with a red background` 
    },
    {
        url: `https://wallpapers.com/images/hd/south-park-s-stan-marsh-simple-art-ad3wjf4su96o4mam.jpg`,
        alt: `Stan with a blue background`
    }, 
    {
        url: `https://facts.net/wp-content/uploads/2023/09/22-facts-about-kyle-broflovski-south-park-1694601417.jpg` ,
        alt: `Kyle with a green background`
    },
    {
        url:`https://www.thefactsite.com/wp-content/uploads/2020/04/kenny-facts.jpg`, 
        alt: `Kenny with an orange background`
    }
]

//create thumbnails
const makeThumbNails = (images) => 
{
    //loop through array of images
    images.forEach( (image , index) => 
    {
    //create image tag using javascript , save to variable
    let img = document.createElement(`img`)
    //link src and alt
    img.src = image.url
    img.alt = image.alt
    //create class for img tag
    img.className= `img`

    // event listener
    img.addEventListener("click", () =>
    {
        console.log(`image.alt`)
        //call createDisplayImage
        createDisplayImage(image , index)
      
    })

    //append to thumbNailBox
    thumbNailBox.appendChild(img)
    //announce alt text 
    announceAltText(images.alt)
    })
}       

//get display image, seperate from thumbnail bar
function createDisplayImage(images , index)
{
    //set src and alt dire
    displayImage.src = images.url
    displayImage.alt = images.alt
    displayImage.className = `display-img`
    //update global var to be the indexof the image that was clicked on 
    currentImageIndex= index
    announceAltText(displayImage.alt)
   
}

//selectNextImage function
function selectNextImage(number)
{
    //declare currentImage variable
        currentImageIndex += number
        if (currentImageIndex >= images.length)
        {
            currentImageIndex = 0
        }
        if(currentImageIndex < 0)
        {
            currentImageIndex = images.length -1
        }
        createDisplayImage(images[currentImageIndex] , currentImageIndex)
}

document.getElementById(`keyRight`).addEventListener(`click` , () => selectNextImage(1))
document.getElementById(`keyLeft`).addEventListener('click' , () => selectNextImage (-1))
window.addEventListener(`keydown` , handleArrowKeyPress);
//handle arrow key event
function handleArrowKeyPress(event)
{
    
if (event.key === 'ArrowRight')
{
    selectNextImage(1);
}
else if (event.key === 'ArrowLeft')
{
    selectNextImage(-1)
}
console.log(event.key)
}
//announce alt text function
function announceAltText(altText)
{
    announcer.textContent = `New image displayed: ${altText}`
}

// call makeThumbnails to images object array
makeThumbNails(images)
//set display image on loading the page 
createDisplayImage(images[0])
createDisplayImage(images[currentImageIndex],currentImageIndex)



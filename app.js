
//declare global variables
let thumbNailBox = document.getElementById(`thumbnail-box`)
let displayImage = document.getElementById(`display`)
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
        alt: `Kenny with an oramge background`
    }
]

//create thumbnails
const makeThumbNails = (imagesArray) => 
{
    //loop through array of images
    images.forEach( image => 
    {
    //create image tag using javascript
    let imgElement = document.createElement(`img`)
    //link src and alt
    imgElement.src = images.url
    imgElement.alt = images.alt
    //append to thumbnailbox
    thumbNailBox.appendChild(imgElement)
    })
}       

//get display image, seperate from thumbnail bar
function createDisplayImage(image)
{
    // set the inner html
    displayImage.innerHTML = ``
    //create image tag and save to variable
    let largeDisplayImg = document.createElement(`img`)
    //set src and alt to variable
    largeDisplayImg.src = image.url
    largeDisplayImg.alt = image.alt
    //append to global display image variable
    displayImage.appendChild(largeDisplayImg)
}
// call makeThumbnails to images object array
makeThumbNails(images)
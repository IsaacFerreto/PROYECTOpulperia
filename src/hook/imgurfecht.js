
const imgurPOST =async(imagen)=>{

fetch('https://api.imgur.com/3/image',{
    method:'POST',
    headers:{
        Authorization:'Client-ID 666724ec290f3f5x'
    }, body:imagen
}).then(data=>data.json()).then(data=>console.log(data))
}

export {imgurPOST}
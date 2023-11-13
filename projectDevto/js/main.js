
const relevant = document.getElementById("relevant")
const latest = document.getElementById("latest")
const top = document.getElementById("top")

const arrPost = []
const getPost = async() =>{
    const res = await fetch("https://projectjavascript-fer-default-rtdb.firebaseio.com/")
    const data = await res.json()
   return(data.posts)
}



const newPostPage=()=> {
    let newPageURL = '/projectDevto/views/new.html';
    window.open(newPageURL, '_blank');
};

// Obtener el botón por su ID
let buttonPost = document.getElementById('createPostButton');

// Agregar un evento de clic al botón que llama a la función abrirNuevaPagina
buttonPost.addEventListener('click', newPostPage);

// iniciamos con los pots
let blogPost=[];


const getAllPost= async () => {
    let response = await fetch("https://projectjavascript-fer-default-rtdb.firebaseio.com/")
    let data=await response.json();
    return data;
    let transformerData = Object.entries(data).reduce((accum,current) =>{
         return [...accum,{key:current[0],...current[2]}]
    },[]);
    blogPost = transformerData;
};

getAllPost()


const logOut = () => {
    localStorage.removeItem("token");
    location.reload();

let logOutButton = document.getElementById("logout-button");
logOutButton.addEventListener("click", logOut);
}
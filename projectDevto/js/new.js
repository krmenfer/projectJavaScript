let blog = [];

document.querySelectorAll("#post-form input").forEach((input) => {
  input.addEventListener("focus", () => {
    document.getElementById("form-alert").classList.add("d-none");
  });
});


const publicarPost=() =>{
    // Obtener valores del formulario
    let title = document.getElementById('postTitle').value;
    let text = document.getElementById('postText').value;
    let image = document.getElementById('imageUpload').value;
    let postObject= {image,title,text};
    if(image&&text&&title){
        return postObject;
    }else{
        document.getElementById("form-alert").classList.remove("d-none");

    }

    const createPost = async (postObject) => {
        let response = await fetch(
          "https://projectjavascript-fer-default-rtdb.firebaseio.com/",
          {
            method: "POST",
            body: JSON.stringify(postObject),
          }
        );
        let data = await response.json();
        return data;
      };

    
    console.log('Título:', title);
    console.log('Texto del Post:', text);
    console.log('Imagen:', image);
}


  
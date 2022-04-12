const cardSuper = document.getElementById('super')
const api = async () => {
    try {
        const res = await fetch('https://ifsin-a5e80-default-rtdb.firebaseio.com/ifsin/super.json')
console.log (res);

if (res.status === 200){
    const datos = await res.json();
    console.log(datos);

    for (const i in datos){
        console.log(datos[i])
        const {nombre,telefono,img1,img2,img3,ubicacion,desc} = datos[i]
        cardSuper.innerHTML  += `
        
        <figure class="text-center">
        <blockquote class="blockquote">
        <p>${nombre}</p>
        </blockquote>
        <figcaption class="blockquote-footer">
        <cite title="Source Title">${ubicacion}</cite>
        </figcaption>
        <figcaption class="blockquote-footer">
        <cite title="Source Title">${desc}</cite>
        </figcaption>
</figure>
        <div class="slider-frame">
        <ul>
            <li><img src="${img1}" alt=""></li>
            <li><img src="${img2}" alt=""></li>
            <li><img src="${img3}" alt=""></li>
            <li><img src="${img1}" alt=""></li>
        </ul>
        </div>
        <div class="text-center">
        <a href="https://api.whatsapp.com/send?phone=${telefono}&text=Vengo%20desde%20Ifsin" class="btn btn-success btn-lg enabled" tabindex="-1" role="button" aria-enabled="true"> <img src="img/whatsapp.png" alt="" style="width: 30px;"> WhatsApp</a>
        <a href="tel:+${telefono}" class="btn btn-primary btn-lg enabled" tabindex="-1" role="button" aria-enabled="true"><img src="img/llamada-telefonica.png" alt="" style="width: 30px;"> Llamada</a>
        </div>
        <hr>
        `
    }
    
}
    }
    catch (err) {
        console.log(err);
    }
}

api();
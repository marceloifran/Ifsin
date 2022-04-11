const cardAmin = document.getElementById('admin')
const api = async () => {
    try {
        const res = await fetch('https://ifsin-a5e80-default-rtdb.firebaseio.com/ifsin/admin.json')
console.log (res);

if (res.status === 200){
    const datos = await res.json();
    console.log(datos);

    for (const i in datos){
        console.log(datos[i])
        const {nombre,telefono,img1,img2,img3} = datos[i]
        cardAmin.innerHTML  += `
        <h1 class="text-center">"${nombre}"</h1>
        <div class="slider-frame">
        <ul>
            <li><img src="${img1}" alt=""></li>
            <li><img src="${img2}" alt=""></li>
            <li><img src="${img3}" alt=""></li>
            <li><img src="${img1}" alt=""></li>
        </ul>
        </div>
        <div class="text-center">
        <a href="https://api.whatsapp.com/send?phone=${telefono}&text=Vengo%20desde%20Ifsin" class="btn btn-success btn-lg enabled" tabindex="-1" role="button" aria-enabled="true">WhatsApp</a>
        <a href="tel:+${telefono}" class="btn btn-primary btn-lg enabled" tabindex="-1" role="button" aria-enabled="true">Llamada</a>
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
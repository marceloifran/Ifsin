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
        const {nombre,telefono,img1,img2,img3} = datos[i]
        cardSuper.innerHTML  += `
        <h1 class="text-center">${nombre}</h1>
        <div class="slider-frame">
        <ul>
            <li><img src="${img1}" alt=""></li>
            <li><img src="${img2}" alt=""></li>
            <li><img src="${img3}" alt=""></li>
            <li><img src="${img1}" alt=""></li>
        </ul>
        </div>
        <h1 class="text-center">${telefono}</h1>
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
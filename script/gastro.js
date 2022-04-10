const cardModa = document.getElementById('gastro')
const api = async () => {
    try {
        const res = await fetch('https://ifsin-a5e80-default-rtdb.firebaseio.com/ifsin/gastro.json')
console.log (res);

if (res.status === 200){
    const datos = await res.json();
    console.log(datos);

    for (const i in datos){
        console.log(datos[i])
        const {nombre,telefono,img1,img2,img3} = datos[i]
        cardModa.innerHTML  += `
        <div class = "text-center">
        <h1 class="text-center">${nombre}</h1>
        <div class="slider-frame">
        <ul>
            <li><img src="${img1}" alt=""></li>
            <li><img src="${img2}" alt=""></li>
            <li><img src="${img3}" alt=""></li>
            <li><img src="${img1}" alt=""></li>
        </ul>
        </div>
        <button type="button" class="btn btn-outline-primary btn-lg">  <a href="youtube.com"></a>${telefono}</button>
        <a href="tel:+${telefono}">Telefono</a>        
        </div>
        `
    }
    
}
    }
    catch (err) {
        console.log(err);
    }
}

api();
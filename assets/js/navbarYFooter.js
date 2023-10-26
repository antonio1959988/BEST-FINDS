
var usuarioActivo = JSON.parse(localStorage.getItem("inicioSesion"));
let rutaPerfil;
let classPerfil;
let nomUsu;
console.log(usuarioActivo);
if (usuarioActivo != null) {
  rutaPerfil = 'Perfil_axel';
  classPerfil = 'perfilCerrar2';
  nomUsu = usuarioActivo.usuario;
} else {
  rutaPerfil = 'login';
  classPerfil = '';
  nomUsu = '';
}
let navbarDiv = document.getElementById("nav-bar");
let navbarContainer = document.createElement('nav');
navbarContainer.className = "navbar navbar-expand-lg bg-body-tertiary sticky-top";
navbarContainer.innerHTML = `<div class="container-fluid" id="barra">
<button class="navbar-toggler order-0" type="button" data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
  aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<a href="./index_bf.html" target="_self"><img src="./assets/img/logoMini.png" alt="Lupa" class="img-fluid"
    id="logoBF"></a>
    <a href="./carrito_compras.html" target="_self" class="d-lg-none">
    <img src="./assets/icons/shopping-cart.svg" alt="Lupa" class="img-fluid" id="imgIcono2">
  </a>
  
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="lista">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="./index_bf.html" target="_self">Inicio</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Marcas
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="./productos.html" target="_self">Colourpop</a></li>
        <li><a class="dropdown-item" href="./productos.html" target="_self">Too Faced</a></li>
        <li><a class="dropdown-item" href="./productos.html" target="_self">Urban Decay</a></li>
        <li><a class="dropdown-item" href="./productos.html" target="_self">Rare Beauty</a></li>
      </ul>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Categorías
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="./productos.html" target="_self">Ojos</a></li>
        <li><a class="dropdown-item" href="./productos.html" target="_self">Rostro</a></li>
        <li><a class="dropdown-item" href="./productos.html" target="_self">Labios</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./productos.html" target="_self">Ofertas</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./noticias.html" target="_self">Noticias</a>
    </li>
  </ul>
  <form class="d-flex" role="search">
    <input class="form-control ms-4 separacionDer" type="search" placeholder="Buscar..." aria-label="Search" id="inputBuscar">
    <div class="celdaIcon">
    <a href="./productos.html" target="_self"><img src="./assets/icons/search.svg" alt="Lupa"
        class="img-fluid" id="imgIcono"></a>
        </div>
    <div class="celdaIcon">
      <ul id="ul">
        <li class="submenu">
          <a href="./carrito_compras.html" target="_self">
            <img src="./assets/icons/shopping-cart.svg" alt="Lupa" class="img-fluid" id="imgIcono">
          </a>
          <div id="carritoNav">

            <table class="u-full-width">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="listaCarritoNav"></tbody>
            </table>

            <button id="vaciar-carrito" class="button u-full-width" onclick="vaciarCarrito();">Vaciar Carrito</button>

          </div>
        </li>
      </ul>
    </div>
    <div class="submenu2 celdaIcon">
    <a href="./${rutaPerfil}.html" target="_self"><img src="./assets/icons/user.svg" alt="Lupa"
        class="img-fluid" id="imgIcono"></a>
    <div class="perfilCerrar ${classPerfil}">
    
    <p id="muestraNomUsu">${nomUsu}</p>
    <button id="cerrarSesion" class="button" type="button">Cerrar Sesión</button>
    
    </div>
    </div>
  </form>
</div>
<div id="notificacion" class="notificacion">¡Producto agregado al carrito!</div>
</div>`;
navbarDiv.appendChild(navbarContainer);


document.getElementById('cerrarSesion').addEventListener('click', function () {
  localStorage.clear();
  // redirigir al index despues de cerrar sesion
  window.location.href = './index_bf.html';
  //window.location.href = './index_bf.html';
})

let footerDiv = document.getElementById('footer');
let footerContainer = document.createElement('footer');
footerContainer.innerHTML = `  <div class="container">
    <div class="row">
        <!-- Columna secundaria con mas informacion -->
        <div class="col-sm-12 col-md-4 col-lg-3 d-none d-md-block"> <!--Este div se oculta en tamaño sm-->
        <br>
        <br>
            <h5>Más Información</h5>
            <ul>
                <li><a href="./noticias.html" target="_self">¡No olvides visitar NotiFinds!</a></li>
                <li><a href="./Contacto.html" target="_self">Contáctanos</a></li>
                <li><a href="./sobre_nosotros.html" target="_self">Sobre nosotres</a></li>
            </ul>
        </div>
        <!-- Columna principal con logotipo y redes sociales-->
        <div class="col-sm-12 col-md-4 col-lg-6">
            <br>
            <img src="./assets/img/logoBFv2.jpg" alt="Logo Best Finds" class="img-fluid" id="imgFooter">
            <div class="container">
                <!-- Con estas id se ocultaran los icono en tamaño lg -->
                <a href="https://www.facebook.com/bestfinds.mx?mibextid=LQQJ4d" target="_blank">
                    <img src="./assets/icons/faceRosa.jpg" alt="Imagen de redsocial" class="img-fluid" id="iconoFooter">
                </a>  
                <a href="https://www.instagram.com/bestfinds.mx" target="_blank">
                    <img src="./assets/icons/instaRosa.jpg" alt="Imagen de redsocial" class="img-fluid" id="iconoFooter">
                </a>  
                <a href="#" target="_blank">
                    <img src="./assets/icons/tiktokRosa.jpg" alt="Imagen de redsocial" class="img-fluid" id="iconoFooter">
                </a>  
                <a href="https://wa.me/message/TTKTHJMTBUQTM1" target="_blank">
                    <img src="./assets/icons/whatsappRosa.jpg" alt="Imagen de redsocial" class="img-fluid" id="iconoFooter">
                </a>  
            </div>
            <!-- Secciones span para links inferiores -->
            <span id="licencia"><a href="./sobre_nosotros.html" target="_self">© 2023 Best Finds - Una E-commerce desarrollada por Money Makers</a></span>
            <br><br>
        </div>
        <!-- Columna secundaria con redes sociales -->
        <div class="col-sm-12 col-md-4 col-lg-3 d-none d-md-block" >  <!--Este div se oculta en tamaño sm-->
            <!--Titulo de seccion con salto de linea-->
            <h5>¡Síguenos en nuestras <br> redes sociales!</h5>
            <!--Lista de redes para vista desktop-->
            <ul>
                <li>
                    <a href="https://www.facebook.com/bestfinds.mx?mibextid=LQQJ4d" target="_blank">
                        <img src="./assets/icons/faceRosa.jpg" alt="Imagen de redsocial" class="img-fluid" id="iconoFooterLg">Best Finds México
                    </a> 
                </li>
                <li>
                    <a href="https://www.instagram.com/bestfinds.mx" target="_blank">
                        <img src="./assets/icons/instaRosa.jpg" alt="Imagen de redsocial" class="img-fluid" id="iconoFooterLg">@bestfinds.mx
                    </a> 
                </li>
                <li>
                    <a href="#" target="_blank">
                        <img src="./assets/icons/tiktokRosa.jpg" alt="Imagen de redsocial" class="img-fluid" id="iconoFooterLg">@bestfinds.mx
                    </a> 
                </li>
                <li>
                    <a href="https://wa.me/message/TTKTHJMTBUQTM1" target="_blank">
                        <img src="./assets/icons/whatsappRosa.jpg" alt="Imagen de redsocial" class="img-fluid" id="iconoFooterLg">33-22-11-22-33
                    </a> 
                </li>
            </ul>
        </div>
    </div>
    </div>`;
footerDiv.appendChild(footerContainer);


//Funcion para inicializar la sesión para el carrito 
function inicializarSession() {
    let productosArray = JSON.parse(sessionStorage.getItem("productosArray"));
    if (!productosArray) {
        sessionStorage.setItem("productosArray", JSON.stringify(new Array()));
    }

}


function actualizarCarritoNavBar() {
  let productosArray = JSON.parse(sessionStorage.getItem("productosArray"));
  let tableBody = document.getElementById("listaCarritoNav");
  tableBody.innerHTML = "";

  productosArray.map((producto, index) => {
    let tableRow = document.createElement('tr');
    tableRow.setAttribute("id", `tableRow-${index}`);
    tableRow.innerHTML = `
         <td>  
              <img src="${producto.imagen}" width=100>
         </td>
         <td id="productoTableId-${index}" class="d-none">${producto.id}</td>
         <td>${producto.nombre}</td>
         <td>$${producto.precio * producto.cantidad}</td>
         <td>${producto.cantidad} </td>
         <td>
              <a id="tableRowBtn-${index}" href="#" class="borrar-producto" onclick="borrarProductoNavBar(this);">x</a>
         </td>
    `;
    tableBody.appendChild(tableRow);
  });
}

function borrarProductoNavBar(boton) {
  let productosArray = JSON.parse(sessionStorage.getItem("productosArray"));
  let index = boton.id.split("-")[1];
  let tableRow = document.getElementById(`tableRow-${index}`);
  let producto = document.getElementById(`productoTableId-${index}`);

  tableRow.remove();

  let productoIndex = productosArray.findIndex(productoArray => productoArray.id == producto.innerHTML);
  productosArray.splice(productoIndex, 1);
  sessionStorage.setItem("productosArray", JSON.stringify(productosArray));

  actualizarCarrito();
}

function vaciarCarrito() {
  sessionStorage.setItem("productosArray", JSON.stringify(new Array()));
  actualizarCarritoNavBar();


}

inicializarSession();
actualizarCarritoNavBar();

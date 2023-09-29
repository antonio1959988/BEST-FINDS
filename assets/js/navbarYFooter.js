let navbarDiv = document.getElementById("nav-bar");
let navbarContainer=document.createElement('nav');
navbarContainer.className="navbar navbar-expand-lg bg-body-tertiary sticky-top";
navbarContainer.innerHTML=`
<div class="container-fluid"  id="barra">
  <button class="navbar-toggler order-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a href="#" target="_blank"><img src="./assets/img/logoMini.jpg" alt="Lupa" class="img-fluid" id="logoBF"></a>
  <a href="#" target="_blank"><img src="./assets/icons/carritoIcono.jpg" alt="Lupa" class="img-fluid" id="imgIcono2"></a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="lista">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Marcas
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categorías
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Ofertas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Noticias</a>
      </li>
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control ms-4" type="search" placeholder="Buscar..." aria-label="Search">
      <a href="#" target="_blank"><img src="./assets/icons/buscarIcono.jpg" alt="Lupa" class="img-fluid" id="imgIcono"></a>
      <a href="#" target="_blank"><img src="./assets/icons/carritoIcono.jpg" alt="Lupa" class="img-fluid" id="imgIcono3"></a>
      <a href="#" target="_blank"><img src="./assets/icons/cuentaIcono.jpg" alt="Lupa" class="img-fluid" id="imgIcono"></a>
    </form>
  </div>
</div>`;
navbarDiv.appendChild(navbarContainer);

let footerDiv=document.getElementById('footer');
let footerContainer=document.createElement('footer');
footerContainer.innerHTML=`<div class="container">
<div class="row">
    <!-- Columna secundaria con mas informacion -->
    <div class="col-sm-12 col-md-4 col-lg-3 d-none d-md-block"> <!--Este div se oculta en tamaño sm-->
        <h5>Más Información</h5>
        <ul>
            <li><a href="#" target="_blank">Preguntas frecuentes</a></li>
            <li><a href="#" target="_blank">Contáctanos</a></li>
            <li><a href="#" target="_blank">Sobre nosotros</a></li>
            <li><a href="#" target="_blank">Política de privacidad</a></li>
            <li><a href="#" target="_blank">Términos y condiciones</a></li>
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
        <span><a href="#" target="_blank">Política de privacidad</a> | <a href="#" target="_blank">Términos y condiciones</a></span><br>
        <span id="licencia"><a href="#" target="_blank">© 2023 Best Finds - Una E-commerce desarrollada por Money Makers</a></span>
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
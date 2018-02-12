/*
=======================================
CUSTOM JS
=======================================
*/

// Preload body overlay effect
$(window).on('load', function () {
  $('body').addClass('is-loaded');
  $('.loading-circle').addClass('hidden');
  $("nav.navbar").removeClass('hidden');
});

$(".navbar").hide();

$('.carousel').carousel();

$("a.scroller").smoothscrolling();

new WOW().init();

$(document).ready(function() {

  // sidr config
  $('#mobile-menu-toggle').sidr({
    "side": "right",
    "name": "sidr",
    onOpen: function onOpen() {
      // $('#mobile-menu-toggle').find('.icon').toggle();
      $('#mobile-menu-toggle').toggleClass('is-open');
      $('.wrapper').toggleClass('blur');
    },
    onClose: function onClose() {
      // $('#mobile-menu-toggle').find('.icon').toggle();
      $('#mobile-menu-toggle').toggleClass('is-open');
      $('.wrapper').toggleClass('blur');
    }
  });
  // Close Sidr menu after click link or click outside
  $(document).on('click','#sidr',function(e) {
    if( $(e.target).is('a') ) {
      $.sidr('close', 'sidr');
    }
  });
  $(document).bind("click", function () {
    $.sidr('close', 'sidr');
  });

  // Navbar hide and show scroll
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });
  });

  // Scroll totop
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  $(".scrollToTop").click(function() {
    $("body,html").animate({scrollTop:0},800);
  });

  // Filter works gallery
  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');

    if($(this).hasClass('active')) {
      $('.work-container').addClass('wow animated fadeIn')
    }

    if(value == "all") {
      $('.filter').show('1000');
    }
    else {
      $(".filter").not('.'+value).hide('3000');
      $('.filter').filter('.'+value).show('3000');
    }
  });
  works();
});

function works() {
  var works = [
    {
      key: "arcos",
      title: "Instituto Arcos Create",
      year: "2016",
      client: "Instituto Arcos Create - Cultura y actualidad",
      designdetail: "Anuncios, Administración Facebook, Instagram y Twitter",
      images: [
        "images/material_portafolio/create/cover_final.png",
        "images/material_portafolio/create/seleccionados_vina.png",
        "images/material_portafolio/create/Miercoles11_create.png"
      ]
    },
    {
      key: "decomundo",
      title: "Decomundo Decoracíon",
      year: "2017",
      client: "Decomundo Decoracíon",
      designdetail: "Diseño soportes digitales: Renovación de imagen (portada, perfil) y contenido redes sociales",
      images: [ 
        "images/material_portafolio/decomundo/logo.jpg",
        "images/material_portafolio/decomundo/banner_decomundo_2.png",
        "images/material_portafolio/decomundo/collar.png",
        "images/material_portafolio/decomundo/publicaion_decomundo.jpg"
      ]
    },
    {
      key: "auriculoterapeuta",
      title: "Nutricionista Auriculoterapeuta",
      year: "2017",
      client: "Eyleen Quinteros – Nutricionista Auriculoterapeuta",
      designdetail: "Diseño tarjeta presentación. Imagen, composición, troquel y materialidad",
      images: [ 
        "images/material_portafolio/nutricionista/tarjeta_1.jpg",
        "images/material_portafolio/nutricionista/tarjeta_2.jpg",
        "images/material_portafolio/nutricionista/tarjeta_3.jpg",
      ]
    },
    {
      key: "facialup",
      title: "Facial Up",
      year: "2016",
      client: "Facial Up",
      designdetail: "Diseño y desarrollo de soportes digitales: Post, Mailing, publicidad instagram, Fb portada y diseño de infografías",
      images: [ 
        "images/material_portafolio/facial_up/miercoles_24.png",
        "images/material_portafolio/facial_up/ABIFOODS.png",
        "images/material_portafolio/facial_up/bruxismo_3.png",
        "images/material_portafolio/facial_up/Instagram_asesoria img_2.png",
        "images/material_portafolio/facial_up/Instagram_receta.png",
        "images/material_portafolio/facial_up/Perfil_fp_facialup_5.png",
        "images/material_portafolio/facial_up/PSD_quinoa.png",
        "images/material_portafolio/facial_up/viernes_27.png",
        "images/material_portafolio/facial_up/MARTES 2_FacialUp.png",
      ]
    },
    {
      key: "interfilm",
      title: "Interfilm Ltda.",
      year: "2016",
      client: "Interfilm Ltda.",
      designdetail: "Desarrollo de soportes digitales: Diseño y creación de post y contenido redes sociales. Anuncios, publicidad e infografías",
      images: [
        "images/material_portafolio/interfilm/MARTES 2_interfilm.png",
        "images/material_portafolio/interfilm/MARTES 9_interfilm.png",
        "images/material_portafolio/interfilm/Martes 18_oct.png",
        "images/material_portafolio/interfilm/Martes-19_interfilm.jpg",
        "images/material_portafolio/interfilm/MIERCOLES 6_interfilm.png",
        "images/material_portafolio/interfilm/Miercoles 31_interfilm.png",
        "images/material_portafolio/interfilm/miercoles_28 Sept.png",
        "images/material_portafolio/interfilm/VIERNES 5_interfilm.png",
        "images/material_portafolio/interfilm/VIERNES_15-de-Julio.jpg",
      ]
    },
    {
      key: "propiedades",
      title: "Corretaje de propiedades",
      year: "2015",
      client: "Nancy Romero - Corretaje de propiedades",
      designdetail: "Diseño de logotipo",
      images: [
        "images/material_portafolio/propiedades/logotipo_propiedades.jpg",
      ]
    },
    {
      key: "tome",
      title: "Comuna de Tomé 8vaR",
      year: "2014",
      client: "Comuna de Tomé 8vaR",
      designdetail: "Diseño de logotipo. Ganadora de Concurso a nivel comunal. Actual imagen de Municipalidad, Tomé Octava Región del Bío Bío",
      images: [
        "images/material_portafolio/tome/logotipo_final.jpg",
      ]
    },
    {
      key: "sanwor",
      title: "Sanwor Ltda.",
      year: "2015",
      client: "Sanwor Ltda.",
      designdetail: "Diseño de Logotipo y papelería básica",
      images: [
        "images/material_portafolio/sanwor/pdf.jpg",
        "images/material_portafolio/sanwor/Sanwor_carta.jpg",
        "images/material_portafolio/sanwor/Sobre_sanword.png",
      ]
        
    },
    {
      key: "silhouette",
      title: "Silhouette Chile",
      year: "2017",
      client: "Silhouette Chile",
      designdetail: "Desarrollo de soportes publicitarios (Diseño y composición de lateral revista Materia prima, Creación de Catálogo y  Packaging). Desarrollo de soportes digital (Anuncios, post, mailing, concursos, redes sociales)",
      images: [
        "images/material_portafolio/silhouette/conejo_huevos.jpg",
        "images/material_portafolio/silhouette/descuentos_cumpleanos.png",
        "images/material_portafolio/silhouette/flyer_materia prima.png",
        "images/material_portafolio/silhouette/Instagram_concurso.png",
        "images/material_portafolio/silhouette/Instagram_dia_de_la_mujer.png",
        "images/material_portafolio/silhouette/Lateral_medida_final.jpg",
        "images/material_portafolio/silhouette/Promocion_San_Valentin.png",
        "images/material_portafolio/silhouette/Taller.png",
      ] 
    },
    {
      key: "nutrymas",
      title: "Nutrymás",
      year: "2017",
      client: "Nutrymás – Clínica Nutrición y Dietética",
      designdetail: "Diseño de Logotipo",
      images: [
        "images/material_portafolio/nutrymas/logotipo_final_nutrymas_rgb-01.jpg",
      ]
    },
    {
      key: "ttihone",
      title: "TTihone",
      year: "2016",
      client: "TTihone",
      designdetail: "Desarrollo de soportes digital (Publicidad, Mailing, Diseño de portada, Anuncios y post)",
      images: [
        "images/material_portafolio/ttihone/mailingblanco.jpg",
        "images/material_portafolio/ttihone/mailing.jpg",
        "images/material_portafolio/ttihone/perfilfutbolista.png",
      ]
    },
    {
      key: "casitadeco",
      title: "Casita Deco",
      year: "2017",
      client: "Casita Deco",
      designdetail: "Diseño logotipo, imagen corporativa y administración de contenido en redes sociales. Proyecto personal, creado exclusivamente para comercializar artículos de decoración, vinilos, papelería, packaging, entre otros",
      images: [
        "images/material_portafolio/casita_deco/logo.png",
        "images/material_portafolio/casita_deco/banner_casita.png",
        "images/material_portafolio/casita_deco/Anuncio_1_casita_deco.jpg",
      ]
    },
    {
      key: "katho",
      title: "Katho Jerez SpA",
      year: "2016",
      client: "Katho Jerez SpA – Marketing Digital",
      designdetail: "Imagen Corporativa y Manejo de RRSS. Diseño y desarrollo de soportes gráficos (Pendón, tarjetas de presentación, planificador, separador de páginas, caluga soporte editorial). Desarrollo soportes digital (Anuncios promocionales, post, mailing, recursos gráficos y publicidad en redes sociales)",
      images: [
        "images/material_portafolio/katho/Flyer_feria.jpg",
        "images/material_portafolio/katho/flyer_vestido.jpg",
        "images/material_portafolio/katho/Cover_2.png",
        "images/material_portafolio/katho/Instagram_docentes.png",
        "images/material_portafolio/katho/planificador_Noviembre_para-grupo.jpg",
        "images/material_portafolio/katho/promocion_final.jpg",
        "images/material_portafolio/katho/Promocion_15_noviembre.png",
        "images/material_portafolio/katho/Separador.jpg",
      ]
    },
    {
      key: "revista",
      title: "Revista Viajero",
      year: "2011",
      client: "Transportes Línea Azul",
      designdetail: "Diseño y diagramación de revista",
      images: [
        "images/material_portafolio/revista_viajero/revista.jpg",
        "images/material_portafolio/revista_viajero/revista2.jpg",
        "images/material_portafolio/revista_viajero/revista3.jpg",
        "images/material_portafolio/revista_viajero/revista4.jpg",
        "images/material_portafolio/revista_viajero/revista5.jpg",
        "images/material_portafolio/revista_viajero/revista6.jpg",
        "images/material_portafolio/revista_viajero/revista7.jpg",
        "images/material_portafolio/revista_viajero/revista8.jpg",
        "images/material_portafolio/revista_viajero/revista9.jpg",
        "images/material_portafolio/revista_viajero/revista10.jpg",
        "images/material_portafolio/revista_viajero/revista11.jpg",
        "images/material_portafolio/revista_viajero/revista12.jpg",
        "images/material_portafolio/revista_viajero/revista13.jpg",
        "images/material_portafolio/revista_viajero/revista14.jpg",
        "images/material_portafolio/revista_viajero/revista15.jpg",
        "images/material_portafolio/revista_viajero/revista16.jpg",
        "images/material_portafolio/revista_viajero/revista17.jpg",
        "images/material_portafolio/revista_viajero/revista18.jpg",
      ]
    }
  ]

  var work = window.location.hash.split("=")[1];
  var data = works.filter(function(item) {
    return item.key === work;
  })[0];

  if (data && data.hasOwnProperty('key')) {
    $(".title").text(data.title);
    $(".year").text(data.year);
    $(".client").text(data.client);
    $(".design-detail").text(data.designdetail);
    
    for (var j = 0; j < data.images.length; j++) {
      var img = document.createElement("img");
      img.setAttribute("class","work-img img-responsive");
      img.setAttribute("src", data.images[j]);
      document.getElementById('work-images-grid').appendChild(img)
    }
  }
}

  
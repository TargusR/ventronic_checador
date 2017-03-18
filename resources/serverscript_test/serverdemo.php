<?php
session_start();
header('Content-Type: application/json; charset=utf-8');

// Capturar Variables
if ( isset($_GET["pr"]) ) $producto_index = $_GET["pr"];
else $producto_index = "1"; // producto por defecto

if($producto_index > 4) $producto_index = $producto_index % 4;

$publico = array(
  0 => '85',
  1 => '90',
  2 => '2100',
  3 => '270'
  );

$socio = array(
  0 => '70',
  1 => '60',
  2 => '1800',
  3 => '240'
  );

$nombres = array(
  0 => 'Memoria Micro Sd 8 Gb Adata Para Celulares Camaras Digitales',
  1 => '3 Reproductor Música Mp3 Tipo Shuffle Memoria Expandible',
  2 => 'Velikka Bocina Amplificada Karaoke Bluetooth Mic Vkk-155l Ro',
  3 => 'Adata Power Bank Cargador Portatil Bateria 10000mah Pt100 N'
  );

$imagen = array(
  0 => 'http://www.ventronic.com.mx/mercadolibre/fotos/Memoria_MicroSD_8GB_Adata_clase_4_publi.jpg',
  1 => 'http://www.ventronic.com.mx/mercadolibre/fotos/Reproductor_Mp3_Shuffle_Memoria_Expandible_publi.jpg',
  2 => 'http://www.ventronic.com.mx/mercadolibre/fotos/vkk_155l_rojo_publi.jpg',
  3 => 'http://www.ventronic.com.mx/mercadolibre/fotos/power_bank_adata_pt100_publi.jpg'
  );

$cantidades = array(
  0 => '30',
  1 => '67',
  2 => '15',
  3 => '98'
  );


// Definición del objeto producto
$producto = (object) [
    precios => (object) [
      publico => $publico[$producto_index],
      socio => $socio[$producto_index]
    ],
    descripcion => (object) [
      nombre => $nombres[$producto_index],
      img => $imagen[$producto_index]
    ],
    cantidad => $cantidades[$producto_index]
  ];


echo json_encode($producto);
return false;

?>
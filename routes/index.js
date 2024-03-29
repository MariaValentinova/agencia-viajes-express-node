import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes, 
    paginaDetalleViaje } from '../controllers/paginasControles.js';
import { guardarTestimonial } from '../controllers/testimonialesController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

router.get('/viajes', paginaViajes);
router.get('/viajes/:viaje', paginaDetalleViaje);

export default router;
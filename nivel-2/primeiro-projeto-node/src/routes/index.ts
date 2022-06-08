import { Router } from 'express';
import appoinmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appoinmentsRouter);

export default routes;

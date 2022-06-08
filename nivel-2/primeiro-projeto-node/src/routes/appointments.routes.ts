import { response, Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

// Passa a informação de um arquivo para outro: DTO (Data Transfer Object)

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

// Soc: Separator os Concerns (Separação de preocupações)
// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

// POST http://localhost:3333/appintments
appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const CreateAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );

    const appointment = CreateAppointment.execute({
      date: parsedDate,
      provider: provider,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;

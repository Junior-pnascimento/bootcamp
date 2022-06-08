import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// TDO: Data Transfer Object
interface CreateAppoimentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  // Repositorio, tem a responsabilidade de criar,salvar os dados
  public findByDate(date: Date): Appointment | null {
    const findAppoiment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );
    return findAppoiment || null;
  }

  // provider: string, date: Date

  public create({ provider, date }: CreateAppoimentDTO): Appointment {
    const appointment = new Appointment({ provider, date });
    this.appointments.push(appointment);
    return appointment;
  }
}

export default AppointmentsRepository;

//  Formato dos dados

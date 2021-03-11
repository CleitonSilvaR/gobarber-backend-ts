import { startOfHour } from "date-fns";
import Appointment from "../models/Appointment";
import AppointmentsRepository from "../repositories/AppointmentsRepository";

interface Request {
    provider: string,
    date: Date,
}

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({ date, provider }: Request): Appointment {
        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = this.appointmentsRepository.findBydate(appointmentDate);

        if (findAppointmentInSameDate) {
            throw ('This appointment is alredy booked');
            // return response.status(400).json({ message: 'This appointment is alredy booked' });
        }

        const appointment = this.appointmentsRepository.create({ provider, date: appointmentDate });

        return appointment;
    }
}

export default CreateAppointmentService;
import { EntityRepository, Repository } from 'typeorm';
import Appointment from "../models/Appointment";

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {

    public async findBydate(date: Date): Promise<Appointment | null> {
        const findAppointment = await this.findOne({
            where: { date },
        });

        return findAppointment || null;
    }
}

export default AppointmentsRepository;
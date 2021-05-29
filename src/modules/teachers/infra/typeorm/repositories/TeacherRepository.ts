import { getRepository, Repository } from 'typeorm';

import ITeachersRepository from '@modules/teachers/repositories/ITeachersRepository';
import ICreateTeacherDTO from '@modules/teachers/dtos/ICreateTeacherDTO';

import Teacher from '../entities/Teacher';

export default class TeachersRepository implements ITeachersRepository {
  private ormRepository: Repository<Teacher>;

  constructor() {
    this.ormRepository = getRepository(Teacher);
  }

  public async create(teacherData: ICreateTeacherDTO): Promise<any> {
    const teacher = this.ormRepository.create(teacherData);

    await this.ormRepository.save(teacher);

    return teacher;
  }

  public async findById(id: string): Promise<Teacher | undefined> {
    const teacher = await this.ormRepository.findOne(id);
    return teacher;
  }

  public async save(teacher: Teacher): Promise<Teacher> {
    return this.ormRepository.save(teacher);
  }
}

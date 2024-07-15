// src/entities/task.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/users.entity'; // Import the User entity
import { ITask } from 'src/interfaces/task.interface';

@Entity({ name: 'tasks' })
export class Task implements ITask {
  @PrimaryGeneratedColumn('uuid')
  taskId: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  duration: number; // Duration in minutes

  @Column({
    type: 'enum',
    enum: ['pending', 'inProgress', 'done'],
    default: 'pending',
  })
  status: string;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User; // Establish the many-to-one relationship with the user
}

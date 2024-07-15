// src/entities/user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from 'src/tasks/entities/tasks.entity';
import { IUser } from 'src/interfaces/user.interface';

@Entity({ name: 'users' })
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ default: 'user' }) // Default role is 'user'
  role: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[]; // Establish the one-to-many relationship with tasks
}

import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum TaskStatus {
  todo = 'todo',
  in_progress = 'in_progress',
  done = 'done',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsInt()
  @IsNotEmpty()
  boardId: number;

  @IsInt()
  @IsNotEmpty()
  userId: number;
}

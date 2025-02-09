export class Tarea {
  id!: number;
  descripcion: string | undefined;
  fechaVencimiento: Date | undefined;
  prioridad: string | undefined;
  estaIncompleta: boolean | undefined;
  // Agrega más campos según tu modelo en el backend
}
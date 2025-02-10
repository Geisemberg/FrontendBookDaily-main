// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { TareaService } from '../../services/tarea.service';
// import { Tarea } from '../../models/tarea.model';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-tarea-create',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './tarea-create.component.html',
//   styleUrls: ['./tarea-create.component.css']
// })
// export class TareaCreateComponent {
//   tarea: Tarea = new Tarea();

//   constructor(private tareaService: TareaService, private router: Router) { }

//   createTarea(): void {
//     this.tareaService.createTarea(this.tarea).subscribe(() => {
//       this.router.navigate(['/tareas']);
//     });
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarea-create.component.html',
  styleUrls: ['./tarea-create.component.css']
})
export class TareaCreateComponent {
  tarea: Tarea = new Tarea();
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private tareaService: TareaService, private router: Router) { }

  createTarea(): void {
    this.tareaService.createTarea(this.tarea).subscribe(() => {
      this.successMessage = 'Tarea creada con éxito';
      this.errorMessage = null;
      this.router.navigate(['/tareas']);
    }, error => {
      this.errorMessage = 'Error creando la tarea: ' + error.error;
      this.successMessage = null;
    });
  }
}


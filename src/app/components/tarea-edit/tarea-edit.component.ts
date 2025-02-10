// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { TareaService } from '../../services/tarea.service';
// import { Tarea } from '../../models/tarea.model';

// @Component({
//   selector: 'app-tarea-edit',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './tarea-edit.component.html',
//   styleUrls: ['./tarea-edit.component.css']
// })
// export class TareaEditComponent implements OnInit {
// editTarea() {
// throw new Error('Method not implemented.');
// }
//   tarea: Tarea | null = null;

//   constructor(
//     private route: ActivatedRoute,
//     private tareaService: TareaService,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     const id = +this.route.snapshot.paramMap.get('id')!;
//     this.tareaService.getTarea(id).subscribe(data => {
//       this.tarea = data;
//     }, error => {
//       console.error('Error fetching tarea:', error);
//       this.router.navigate(['/tareas']);
//     });
//   }

//   updateTarea(): void {
//     if (this.tarea && this.tarea.id) {
//       this.tareaService.updateTarea(this.tarea.id, this.tarea).subscribe(() => {
//         this.router.navigate(['/tareas']);
//       }, error => {
//         console.error('Error updating tarea:', error);
//       });
//     }
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { TareaService } from '../../services/tarea.service';
// import { Tarea } from '../../models/tarea.model';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-tarea-edit',
//   templateUrl: './tarea-edit.component.html',
//   styleUrls: ['./tarea-edit.component.css'],
//   standalone: true,
//   imports: [CommonModule, FormsModule]
// })
// export class TareaEditComponent implements OnInit {
//   tarea: Tarea | null = null;

//   constructor(
//     private tareaService: TareaService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.tareaService.getTarea(+id).subscribe((tarea) => {
//         this.tarea = tarea;
//       });
//     }
//   }

//   editTarea(): void {
//     if (this.tarea) {
//       this.tareaService.updateTarea(this.tarea.id, this.tarea).subscribe(() => {
//         this.router.navigate(['/tareas']);
//       });
//     }
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { TareaService } from '../../services/tarea.service';
// import { Tarea } from '../../models/tarea.model';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-tarea-edit',
//   templateUrl: './tarea-edit.component.html',
//   styleUrls: ['./tarea-edit.component.css'],
//   standalone: true,
//   imports: [CommonModule, FormsModule]
// })
// export class TareaEditComponent implements OnInit {
//   tarea: Tarea | null = null;

//   constructor(
//     private tareaService: TareaService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.tareaService.getTarea(+id).subscribe((tarea) => {
//         this.tarea = tarea;
//       });
//     }
//   }

//   updateTarea(): void {
//     if (this.tarea) {
//       this.tareaService.updateTarea(this.tarea.id, this.tarea).subscribe(() => {
//         this.router.navigate(['/tareas']);
//       }, error => {
//         console.error('Error updating tarea:', error);
//       });
//     }
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { TareaService } from '../../services/tarea.service';
// import { Tarea } from '../../models/tarea.model';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-tarea-edit',
//   templateUrl: './tarea-edit.component.html',
//   styleUrls: ['./tarea-edit.component.css'],
//   standalone: true,
//   imports: [CommonModule, FormsModule]
// })
// export class TareaEditComponent implements OnInit {
//   tarea: Tarea | null = null;
//   errorMessage: string | null = null;
//   successMessage: string | null = null;

//   constructor(
//     private tareaService: TareaService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.tareaService.getTarea(+id).subscribe((tarea) => {
//         this.tarea = tarea;
//       }, error => {
//         this.errorMessage = 'Error fetching tarea: ' + error.error;
//         this.successMessage = null;
//       });
//     }
//   }

//   updateTarea(): void {
//     if (this.tarea) {
//       this.tareaService.updateTarea(this.tarea.id, this.tarea).subscribe(() => {
//         this.successMessage = 'Tarea actualizada con éxito';
//         this.errorMessage = null;
//         this.router.navigate(['/tareas']);
//       }, error => {
//         this.errorMessage = 'Error actualizando la tarea: ' + error.error;
//         this.successMessage = null;
//       });
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarea-edit',
  templateUrl: './tarea-edit.component.html',
  styleUrls: ['./tarea-edit.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TareaEditComponent implements OnInit {
  tarea: Tarea | null = null;
  originalTarea: Tarea | null = null;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private tareaService: TareaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tareaService.getTarea(+id).subscribe((tarea) => {
        this.tarea = { ...tarea };
        this.originalTarea = { ...tarea };
      }, error => {
        this.errorMessage = 'Error al obtener la tarea. Por favor, inténtelo de nuevo.';
        this.successMessage = null;
      });
    }
  }

  updateTarea(): void {
    if (this.tarea && this.originalTarea) {
      if (this.isTareaChanged()) {
        this.tareaService.updateTarea(this.tarea.id!, this.tarea).subscribe(() => {
          this.successMessage = 'Tarea actualizada con éxito';
          this.errorMessage = null;
          setTimeout(() => {
            this.router.navigate(['/tareas']);
          }, 2000); // Redirigir después de 2 segundos
        }, error => {
          this.errorMessage = 'Error actualizando la tarea. Por favor, inténtelo de nuevo.';
          this.successMessage = null;
        });
      } else {
        this.errorMessage = 'No se realizaron cambios en la tarea.';
        this.successMessage = null;
      }
    }
  }

  private isTareaChanged(): boolean {
    return this.tarea?.descripcion !== this.originalTarea?.descripcion ||
           this.tarea?.fechaVencimiento !== this.originalTarea?.fechaVencimiento ||
           this.tarea?.prioridad !== this.originalTarea?.prioridad ||
           this.tarea?.estaIncompleta !== this.originalTarea?.estaIncompleta;
  }
}

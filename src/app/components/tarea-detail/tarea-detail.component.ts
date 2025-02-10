// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TareaService } from '../../services/tarea.service';
// import { Tarea } from '../../models/tarea.model';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-tarea-detail',
//   templateUrl: './tarea-detail.component.html',
//   styleUrls: ['./tarea-detail.component.css'],
//   standalone: true,
//   imports: [CommonModule]
// })
// export class TareaDetailComponent implements OnInit {
//   tarea: Tarea | null = null;

//   constructor(
//     private tareaService: TareaService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.tareaService.getTarea(+id).subscribe((tarea) => {
//         this.tarea = tarea;
//       });
//     }
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TareaService } from '../../services/tarea.service';
// import { Tarea } from '../../models/tarea.model';
// import { ActivatedRoute } from '@angular/router';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-tarea-detail',
//   templateUrl: './tarea-detail.component.html',
//   styleUrls: ['./tarea-detail.component.css'],
//   standalone: true,
//   imports: [CommonModule, FormsModule]
// })
// export class TareaDetailComponent implements OnInit {
//   tarea: Tarea | null = null;
//   tareaId: number | null = null;

//   constructor(
//     private tareaService: TareaService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.tareaService.getTarea(+id).subscribe((tarea) => {
//         this.tarea = tarea;
//       });
//     }
//   }

//   consultarTarea(): void {
//     if (this.tareaId !== null) {
//       this.tareaService.getTarea(this.tareaId).subscribe((tarea) => {
//         this.tarea = tarea;
//       }, error => {
//         console.error('Error fetching tarea:', error);
//         this.tarea = null; // Clear the tarea if not found
//       });
//     }
//   }
// }



// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TareaService } from '../../services/tarea.service';
// import { Tarea } from '../../models/tarea.model';
// import { ActivatedRoute } from '@angular/router';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-tarea-detail',
//   templateUrl: './tarea-detail.component.html',
//   styleUrls: ['./tarea-detail.component.css'],
//   standalone: true,
//   imports: [CommonModule, FormsModule]
// })
// export class TareaDetailComponent implements OnInit {
//   tarea: Tarea | null = null;
//   tareaId: number | null = null;
//   errorMessage: string | null = null;

//   constructor(
//     private tareaService: TareaService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.tareaService.getTarea(+id).subscribe((tarea) => {
//         this.tarea = tarea;
//         this.errorMessage = null;
//       }, error => {
//         this.errorMessage = 'Error fetching tarea: ' + error.error;
//         this.tarea = null;
//       });
//     }
//   }

//   consultarTarea(): void {
//     if (this.tareaId !== null) {
//       this.tareaService.getTarea(this.tareaId).subscribe((tarea) => {
//         this.tarea = tarea;
//         this.errorMessage = null;
//       }, error => {
//         this.errorMessage = 'La tarea no existe. Por favor, indique un ID correcto.';
//         this.tarea = null;
//       });
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrls: ['./tarea-detail.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TareaDetailComponent implements OnInit {
  tarea: Tarea | null = null;
  tareaId: number | null = null;
  errorMessage: string | null = null;

  constructor(
    private tareaService: TareaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tareaService.getTarea(+id).subscribe((tarea) => {
        this.tarea = tarea;
        this.errorMessage = null;
      }, error => {
        this.errorMessage = 'Error fetching tarea: ' + error.error;
        this.tarea = null;
      });
    }
  }

  consultarTarea(): void {
    if (this.tareaId === null || this.tareaId <= 0) {
      this.errorMessage = 'Por favor, introduzca un ID válido.';
      this.tarea = null;
      return;
    }

    this.tareaService.getTarea(this.tareaId).subscribe((tarea) => {
      this.tarea = tarea;
      this.errorMessage = null;
    }, error => {
      this.errorMessage = 'La tarea no existe. Por favor, indique un ID correcto.';
      this.tarea = null;
    });
  }
}

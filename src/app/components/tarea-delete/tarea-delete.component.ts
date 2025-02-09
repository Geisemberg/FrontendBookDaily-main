// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute, Router } from '@angular/router';
// import { TareaService } from '../../services/tarea.service';
// import { Tarea } from '../../models/tarea.model';

// @Component({
//   selector: 'app-tarea-delete',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './tarea-delete.component.html',
//   styleUrls: ['./tarea-delete.component.css']
// })
// export class TareaDeleteComponent implements OnInit {
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
//       this.navigateToTareas();
//     });
//   }

//   deleteTarea(): void {
//     if (this.tarea && this.tarea.id) {
//       this.tareaService.deleteTarea(this.tarea.id).subscribe(() => {
//         this.navigateToTareas();
//       }, error => {
//         console.error('Error deleting tarea:', error);
//       });
//     }
//   }

//   navigateToTareas(): void {
//     this.router.navigate(['/tareas']);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-tarea-delete',
  templateUrl: './tarea-delete.component.html',
  styleUrls: ['./tarea-delete.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TareaDeleteComponent implements OnInit {
  tarea: Tarea | null = null;

  constructor(
    private tareaService: TareaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tareaService.getTarea(+id).subscribe((tarea) => {
        this.tarea = tarea;
      });
    }
  }

  deleteTarea(): void {
    if (this.tarea) {
      this.tareaService.deleteTarea(this.tarea.id).subscribe(() => {
        this.router.navigate(['/tareas']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/tareas']);
  }
}

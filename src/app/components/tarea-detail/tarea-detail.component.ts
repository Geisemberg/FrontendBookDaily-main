import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrls: ['./tarea-detail.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TareaDetailComponent implements OnInit {
  tarea: Tarea | null = null;

  constructor(
    private tareaService: TareaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tareaService.getTarea(+id).subscribe((tarea) => {
        this.tarea = tarea;
      });
    }
  }
}

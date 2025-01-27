import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  constructor(private testService:TestService) { }

  ngOnInit(): void {
    this.testService.listar().subscribe(
      (res:any) => {
        console.log(res);
      },
      (err:any) => {
        console.log(err);
      }
    );
  }

}

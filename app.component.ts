import { Component } from '@angular/core';
import { MatrixService } from '/Users/nikitanev/Downloads/модульНєвєров/Module/src/app/matrix-form/matrix.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  resultMatrix: number[][] | null = null;

  constructor(private matrixService: MatrixService) {}

  onMatrixData(matrix: number[][]) {
    const rowIndex = 0;
    this.resultMatrix = this.matrixService.subtractRow(matrix, rowIndex);
    console.log('Результат матриці:', this.resultMatrix);
  }
}

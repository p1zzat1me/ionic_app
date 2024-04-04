import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-matrix-form',
  templateUrl: './matrix-form.component.html',
  styleUrls: ['./matrix-form.component.scss'],
})
export class MatrixFormComponent {
  @Output() matrixData = new EventEmitter<number[][]>();
  matrixSize: number;
  matrix: number[][] = [];

  constructor() {
    this.matrixSize = 0;
    this.generateMatrix();
  }

  generateMatrix() {
    this.matrix = Array(this.matrixSize).fill(0).map(() => Array(this.matrixSize).fill(0).map(() => Math.floor(Math.random() * 100)));
  }

  // generateMatrix() {
  //   this.matrix = Array(this.matrixSize).fill(0).map(() => Array(this.matrixSize).fill(0));
  // }


  updateMatrix(i: number, j: number, event: any) {
    this.matrix[i][j] = Number(event.target.value);
  }

  onSubmit() {
    this.matrixData.emit(this.matrix);
  }
}

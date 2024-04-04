import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {
  subtractRow(matrix: number[][], rowIndex: number): number[][] {
    const result = matrix.map((row, i) => {
      if (i !== rowIndex) {
        return row.map((value, j) => value - matrix[rowIndex][j]);
      }
      return row;
    });
    return result;
  }
}

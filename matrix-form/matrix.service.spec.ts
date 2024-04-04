import { TestBed } from '@angular/core/testing';
import { MatrixService } from './matrix.service';

describe('MatrixService', () => {
  let service: MatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should subtract row from matrix', () => {
    const matrix: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const rowIndex = 1;
    const expectedResult: number[][] = [
      [-3, -3, -3],
      [4, 5, 6],
      [3, 3, 3]
    ];
    expect(service.subtractRow(matrix, rowIndex)).toEqual(expectedResult);
  });
});

import { TestBed } from '@angular/core/testing';

import { PecaState } from './peca-state.service';

describe('PecaState', () => {
  let service: PecaState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PecaState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecaList } from './peca-list';

describe('PecaList', () => {
  let component: PecaList;
  let fixture: ComponentFixture<PecaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PecaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PecaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecaEdit } from './peca-edit';

describe('PecaEdit', () => {
  let component: PecaEdit;
  let fixture: ComponentFixture<PecaEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PecaEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PecaEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

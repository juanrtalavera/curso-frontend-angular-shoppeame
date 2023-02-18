import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGestionComponent } from './page-gestion.component';

describe('PageGestionComponent', () => {
  let component: PageGestionComponent;
  let fixture: ComponentFixture<PageGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

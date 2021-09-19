import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReceipeComponent } from './list-receipe.component';

describe('ListReceipeComponent', () => {
  let component: ListReceipeComponent;
  let fixture: ComponentFixture<ListReceipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReceipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

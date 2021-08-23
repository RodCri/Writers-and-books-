import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWriterComponent } from './detail-writer.component';

describe('DetailWriterComponent', () => {
  let component: DetailWriterComponent;
  let fixture: ComponentFixture<DetailWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailWriterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

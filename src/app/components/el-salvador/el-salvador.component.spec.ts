import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElSalvadorComponent } from './el-salvador.component';

describe('ElSalvadorComponent', () => {
  let component: ElSalvadorComponent;
  let fixture: ComponentFixture<ElSalvadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElSalvadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElSalvadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

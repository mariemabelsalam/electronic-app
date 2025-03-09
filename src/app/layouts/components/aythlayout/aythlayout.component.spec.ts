import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AythlayoutComponent } from './aythlayout.component';

describe('AythlayoutComponent', () => {
  let component: AythlayoutComponent;
  let fixture: ComponentFixture<AythlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AythlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AythlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

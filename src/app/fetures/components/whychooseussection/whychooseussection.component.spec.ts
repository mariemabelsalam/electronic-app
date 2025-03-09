import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhychooseussectionComponent } from './whychooseussection.component';

describe('WhychooseussectionComponent', () => {
  let component: WhychooseussectionComponent;
  let fixture: ComponentFixture<WhychooseussectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhychooseussectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhychooseussectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

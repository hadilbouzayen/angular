import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupComponent } from './mockup.component';

describe('MockupComponent', () => {
  let component: MockupComponent;
  let fixture: ComponentFixture<MockupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockupComponent]
    });
    fixture = TestBed.createComponent(MockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

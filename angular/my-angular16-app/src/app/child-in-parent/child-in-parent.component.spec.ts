import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInParentComponent } from './child-in-parent.component';

describe('ChildInParentComponent', () => {
  let component: ChildInParentComponent;
  let fixture: ComponentFixture<ChildInParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildInParentComponent]
    });
    fixture = TestBed.createComponent(ChildInParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

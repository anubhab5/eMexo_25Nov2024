import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIndiaComponent } from './my-india.component';

describe('MyIndiaComponent', () => {
  let component: MyIndiaComponent;
  let fixture: ComponentFixture<MyIndiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyIndiaComponent]
    });
    fixture = TestBed.createComponent(MyIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

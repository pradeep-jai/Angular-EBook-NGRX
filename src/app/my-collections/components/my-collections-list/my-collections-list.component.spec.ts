import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCollectionsListComponent } from './my-collections-list.component';

describe('MyCollectionsListComponent', () => {
  let component: MyCollectionsListComponent;
  let fixture: ComponentFixture<MyCollectionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCollectionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

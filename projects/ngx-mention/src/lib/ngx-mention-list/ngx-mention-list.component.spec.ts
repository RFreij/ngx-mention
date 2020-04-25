import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMentionListComponent } from './ngx-mention-list.component';

describe('NgxMentionListComponent', () => {
  let component: NgxMentionListComponent;
  let fixture: ComponentFixture<NgxMentionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMentionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMentionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

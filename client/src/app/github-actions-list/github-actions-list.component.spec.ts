import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubActionsListComponent } from './github-actions-list.component';

describe('GithubActionsListComponent', () => {
  let component: GithubActionsListComponent;
  let fixture: ComponentFixture<GithubActionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubActionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubActionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

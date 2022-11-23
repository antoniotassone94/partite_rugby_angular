import {ComponentFixture,TestBed} from "@angular/core/testing";
import {CalendariopartiteComponent} from "./calendariopartite.component";

describe("CalendariopartiteComponent", () => {
  let component: CalendariopartiteComponent;
  let fixture: ComponentFixture<CalendariopartiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendariopartiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendariopartiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

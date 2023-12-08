import {ComponentFixture,TestBed} from "@angular/core/testing";
import {CalendarioPartiteComponent} from "./calendariopartite.component";

describe("CalendarioPartiteComponent", () => {
  let component: CalendarioPartiteComponent;
  let fixture: ComponentFixture<CalendarioPartiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioPartiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioPartiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

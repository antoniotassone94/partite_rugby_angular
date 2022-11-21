import {ComponentFixture,TestBed} from "@angular/core/testing";
import {ElencopartiteComponent} from "./elencopartite.component";

describe("ElencopartiteComponent", () => {
  let component: ElencopartiteComponent;
  let fixture: ComponentFixture<ElencopartiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencopartiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencopartiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

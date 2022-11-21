import {ComponentFixture,TestBed} from "@angular/core/testing";
import {SingolapartitaComponent} from "./singolapartita.component";

describe("SingolapartitaComponent", () => {
  let component: SingolapartitaComponent;
  let fixture: ComponentFixture<SingolapartitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingolapartitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingolapartitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

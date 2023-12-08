import {ComponentFixture,TestBed} from "@angular/core/testing";
import {GiornataCalendarioComponent} from "./giornatacalendario.component";

describe("GiornataCalendarioComponent", () => {
  let component: GiornataCalendarioComponent;
  let fixture: ComponentFixture<GiornataCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiornataCalendarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiornataCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import {ComponentFixture,TestBed} from "@angular/core/testing";
import {GiornatacalendarioComponent} from "./giornatacalendario.component";

describe("GiornatacalendarioComponent", () => {
  let component: GiornatacalendarioComponent;
  let fixture: ComponentFixture<GiornatacalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiornatacalendarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiornatacalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import {TestBed} from "@angular/core/testing";
import {GetCalendarioPartiteService} from "./getcalendariopartite.service";

describe("GetCalendarioPartiteService", () => {
  let service: GetCalendarioPartiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCalendarioPartiteService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

import {TestBed} from "@angular/core/testing";
import {GetcalendariopartiteService} from "./getcalendariopartite.service";

describe("GetcalendariopartiteService", () => {
  let service: GetcalendariopartiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcalendariopartiteService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

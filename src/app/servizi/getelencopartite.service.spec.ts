import {TestBed} from "@angular/core/testing";
import {GetelencopartiteService} from "./getelencopartite.service";

describe("GetelencopartiteService", () => {
  let service: GetelencopartiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetelencopartiteService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

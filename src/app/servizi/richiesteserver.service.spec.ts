import {TestBed} from "@angular/core/testing";
import {RichiesteserverService} from "./richiesteserver.service";

describe("RichiesteserverService", () => {
  let service: RichiesteserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RichiesteserverService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from "@angular/core/testing";
import { ApiService } from "./api.service";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";

describe("TestService", () => {
  let httpMock: HttpTestingController;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    apiService = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("API service should be created", () => {
    expect(apiService).toBeTruthy();
  });

  it("should fetch http todoList", () => {
    const toDoList = {
      todos: [
        {
          id: 1,
          todo: "Do something nice for someone I care about",
          completed: true,
          userId: 26,
        },
        {
          id: 2,
          todo: "Memorize the fifty states and their capitals",
          completed: false,
          userId: 48,
        },
      ],
    };

    apiService.getList().subscribe((res) => {
      expect(res).toEqual(toDoList);
    });

    const req = httpMock.expectOne("https://dummyjson.com/todos");
    expect(req.request.method).toEqual("GET");
    req.flush(toDoList);
    httpMock.verify();
  });
});

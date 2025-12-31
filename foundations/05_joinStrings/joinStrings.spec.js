const values = require("./joinStrings");

describe("step 2", () => {
  test("firstName is Xaropinho", () => {
    expect(values.firstName).toEqual("Xaropinho");
  });
  test("lastName is VonBritania", () => {
    expect(values.lastName).toEqual("VonBritania");
  });
  test("thisYear is 2025", () => {
    expect(values.thisYear).toEqual(2025);
  });
  test("birthYear is 1994", () => {
    expect(values.birthYear).toEqual(1994);
  });
  test("greeting is properly output", () => {
    expect(values.greeting).toEqual(
      "Hello! My name is Xaropinho VonBritania and I am 31 years old."
    );
  });
});

describe("step 3", () => {
  test("fullName is Xaropinho VonBritania", () => {
    expect(values.fullName).toEqual("Xaropinho VonBritania");
  });
  test("age is 31", () => {
    expect(values.age).toEqual(31);
  });
});

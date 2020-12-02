describe("Create Account", () => {
  const user = cy;
  it("should see email / password validation errors", () => {
    user.visit("/");
    user.findByText(/create an account/i).click();
    user.findByPlaceholderText(/email/i).type("non@good");
    user.findByRole("alert").should("have.text", "Please enter a valid email");
    user.findByPlaceholderText(/email/i).clear();
    user.findByRole("alert").should("have.text", "Email is required");
    user.findByPlaceholderText(/email/i).type("real@mail.com");
    user
      .findByPlaceholderText(/password/i)
      .type("a")
      .clear();
    user.findByRole("alert").should("have.text", "Password is required");
  });
  it("should be able to create account and login", () => {
    user.visit("/create-account");
    user.findByPlaceholderText(/email/i).type("33333@mail.com");
    user.findByPlaceholderText(/password/i).type("real@mail.com");
    user.findByRole("button").click();
    user.wait(1000);
    user.findByPlaceholderText(/email/i).type("33333@mail.com");
    user.findByPlaceholderText(/password/i).type("real@mail.com");
    user.findByRole("button").click();
    user.window().its("localStorage.nuber-token").should("be.a", "string");
  });
});

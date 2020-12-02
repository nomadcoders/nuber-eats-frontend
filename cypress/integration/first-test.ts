describe("Log In", () => {
  const user = cy;
  it("should see login page", () => {
    user.visit("/").title().should("eq", "Login | Nuber Eats");
  });
  it("can see email / password validation errors", () => {
    user.visit("/");
    user.findByPlaceholderText(/email/i).type("bad@email");
    user.findByRole("alert").should("have.text", "Please enter a valid email");
    user.findByPlaceholderText(/email/i).clear();
    user.findByRole("alert").should("have.text", "Email is required");
    user.findByPlaceholderText(/email/i).type("bad@email.com");
    user
      .findByPlaceholderText(/password/i)
      .type("a")
      .clear();
    user.findByRole("alert").should("have.text", "Password is required");
  });
  it("can fill out the form", () => {
    user.visit("/");
    user.findByPlaceholderText(/email/i).type("nico@nomadcoders.co");
    user.findByPlaceholderText(/password/i).type("121212");
    user
      .findByRole("button")
      .should("not.have.class", "pointer-events-none")
      .click();
    user.window().its("localStorage.nuber-token").should("be.a", "string");
  });
  it("sign up", () => {
    user.visit("/create-account");
  });
});

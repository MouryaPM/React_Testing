import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async Component", () => {
  test("renders post for fetch", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    render(<Async />);
    const listElement = await screen.findAllByRole("listitem"); //listitem
    expect(listElement).not.toHaveLength(0);
  });
});

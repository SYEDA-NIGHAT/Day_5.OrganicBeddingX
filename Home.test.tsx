import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import '@testing-library/jest-dom';

describe("Homepage", () => {
  it("renders the hero banner", () => {
    render(<Home />);
    const heroHeading = screen.getByText(/Experience Organic Comfort/i);
    expect(heroHeading).toBeInTheDocument();
  });

  it("renders the product grid", async () => {
    render(<Home />);
    const productGrid = await screen.findByRole("region", { name: /Product Grid/i });
    expect(productGrid).toBeInTheDocument();
  });

  it("displays a Shop Now button", () => {
    render(<Home />);
    const button = screen.getByRole("button", { name: /Shop Now/i });
    expect(button).toBeInTheDocument();
  });
});

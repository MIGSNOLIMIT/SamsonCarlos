import { render, screen } from "@testing-library/react";
import Footer from "./components/Footer";

test("renders footer identity", () => {
  render(<Footer />);
  const identity = screen.getByText(/Designed and developed by Carlos Miguel Samson/i);
  expect(identity).toBeInTheDocument();
});

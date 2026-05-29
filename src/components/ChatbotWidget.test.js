import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ChatbotWidget from "./ChatbotWidget";

test("opens the chatbot widget", () => {
  render(<ChatbotWidget />);

  fireEvent.click(screen.getByRole("button", { name: /open website assistant/i }));

  expect(screen.getByRole("button", { name: /close chat panel/i })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /my portfolio chatbot/i }),
  ).toBeInTheDocument();
});

test("clicking a faq starter sends the question", async () => {
  const fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue({
    ok: true,
    json: async () => ({
      answer: "Carlos specializes in full stack and AI-assisted product work.",
      sources: [],
    }),
  });

  render(<ChatbotWidget />);

  fireEvent.click(screen.getByRole("button", { name: /open website assistant/i }));
  fireEvent.click(screen.getByRole("button", { name: /tell me about carlos/i }));

  await waitFor(() => {
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  expect(
    screen.getByText(/Carlos specializes in full stack and AI-assisted product work\./i),
  ).toBeInTheDocument();

  fetchSpy.mockRestore();
});

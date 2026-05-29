import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineLoading3Quarters,
  AiOutlineMessage,
  AiOutlineSend,
} from "react-icons/ai";

const STARTER_PROMPTS = [
  "Tell me about Carlos.",
  "Which projects show Carlos's AI chatbot experience?",
  "Is Carlos open to full-time or freelance work?",
];

function createMessage(role, content, sources = []) {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    content,
    sources,
  };
}

function ChatbotWidget() {
  const initialMessages = useMemo(
    () => [
      createMessage(
        "assistant",
        "Hi, I'm Carlos's portfolio chatbot. Ask about my projects, skills, AI chatbot work, case studies, or availability, and I'll answer using the content on this site.",
      ),
    ],
    [],
  );
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const messageListRef = useRef(null);
  const chatEndpoint = useMemo(
    () => process.env.REACT_APP_CHAT_API_URL || "/api/chat",
    [],
  );

  useEffect(() => {
    const messageList = messageListRef.current;

    if (!messageList) {
      return;
    }

    messageList.scrollTop = messageList.scrollHeight;
  }, [messages, isOpen]);

  async function sendMessage(nextMessage) {
    const trimmedMessage = nextMessage.trim();

    if (!trimmedMessage || isSending) {
      return;
    }

    const userMessage = createMessage("user", trimmedMessage);
    const nextConversation = [...messages, userMessage];

    setMessages(nextConversation);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch(chatEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedMessage,
          history: nextConversation.map(({ role, content }) => ({ role, content })),
        }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "The assistant could not answer right now.");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage("assistant", payload.answer, payload.sources || []),
      ]);
    } catch (error) {
      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage(
          "assistant",
          error.message ||
            "The assistant is unavailable right now. Please try again in a moment.",
        ),
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(input);
  }

  function handleStarterClick(prompt) {
    setInput(prompt);
    sendMessage(prompt);
  }

  return (
    <>
      <button
        type="button"
        className={`chatbot-toggle${isOpen ? " is-open" : ""}`}
        onClick={() => setIsOpen((currentState) => !currentState)}
        aria-label={isOpen ? "Close website assistant" : "Open website assistant"}
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineMessage />}
        <span>Ask my chatbot</span>
      </button>

      <aside
        className={`chatbot-panel${isOpen ? " chatbot-panel-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="chatbot-shell">
          <div className="chatbot-header">
            <div>
              <p className="chatbot-eyebrow">Carlos's Chatbot</p>
              <h2>My Portfolio Chatbot</h2>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat panel"
            >
              <AiOutlineClose />
            </button>
          </div>

          <p className="chatbot-subtitle">
            Ask about my work, experience, projects, or availability. This chatbot
            answers from the content across my portfolio.
          </p>

          <div className="chatbot-starter-wrap">
            <p className="chatbot-faq-title">Try asking</p>
            <div className="chatbot-starters" aria-label="Suggested questions">
              {STARTER_PROMPTS.map((prompt) => (
                <button
                  type="button"
                  key={prompt}
                  className="chatbot-starter"
                  onClick={() => handleStarterClick(prompt)}
                  disabled={isSending}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="chatbot-messages" ref={messageListRef}>
            {messages.map((message) => (
              <article
                key={message.id}
                className={`chatbot-message chatbot-message-${message.role}`}
              >
                <p>{message.content}</p>
                {message.sources.length > 0 ? (
                  <div className="chatbot-sources">
                    {message.sources.map((source) => (
                      <a
                        key={source.url}
                        className="chatbot-source"
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.title}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}

            {isSending ? (
              <div className="chatbot-typing" aria-live="polite">
                <AiOutlineLoading3Quarters className="chatbot-spinner" />
                <span>Checking the portfolio content...</span>
              </div>
            ) : null}
          </div>

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="chatbot-input">
              Ask a question about the website
            </label>
            <textarea
              id="chatbot-input"
              className="chatbot-input"
              rows="2"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about my projects, experience, or availability..."
              disabled={isSending}
            />
            <button
              type="submit"
              className="chatbot-send"
              disabled={isSending || !input.trim()}
              aria-label="Send question"
            >
              <AiOutlineSend />
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}

export default ChatbotWidget;

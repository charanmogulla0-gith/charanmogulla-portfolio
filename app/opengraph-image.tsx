import { ImageResponse } from "next/og";

export const alt = "Charan Mogulla — AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse 80% 60% at 30% -10%, rgba(139,92,246,0.45), transparent), radial-gradient(ellipse 70% 50% at 100% 100%, rgba(59,130,246,0.35), transparent), #060812",
          color: "#edf0f7",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 22,
            color: "#a78bfa",
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background:
                "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 800,
              color: "white",
              letterSpacing: 0,
              boxShadow: "0 8px 32px rgba(139,92,246,0.35)",
            }}
          >
            CM
          </div>
          <span>AI Engineer · Kansas City</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontSize: 128,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Charan</span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Mogulla
            </span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 36,
              color: "#cbd2e0",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              maxWidth: 980,
              lineHeight: 1.25,
              display: "flex",
            }}
          >
            AI Engineer · Building scalable LLM, RAG &amp; multi-agent systems
            that deliver real business impact
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 36,
            flexWrap: "wrap",
          }}
        >
          {[
            "LangChain",
            "RAG",
            "Claude",
            "Azure OpenAI",
            "FastAPI",
            "LoRA / QLoRA",
            "Kubernetes",
          ].map((t) => (
            <div
              key={t}
              style={{
                padding: "8px 16px",
                borderRadius: 999,
                fontSize: 22,
                color: "#cbd2e0",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(167,139,250,0.35)",
                display: "flex",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [mobile, setMobile] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const vote = async (choice) => {
    if (submitted || loading) return;

    setLoading(true);

    try {
      await supabase.from("votes").insert([{ choice }]);
      setSubmitted(true);
    } catch (e) {
      alert("Unable to save feedback right now.");
    }

    setLoading(false);
  };

  const buttonStyle = {
    width: "100%",
    padding: "16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    fontSize: mobile ? "16px" : "18px",
    fontWeight: "600",
    cursor: "pointer"
  };

  const sectionPad = mobile ? "60px 20px" : "95px 24px";

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Inter, Arial, sans-serif",
        background: "#1A237E",
        color: "white",
        lineHeight: 1.5
      }}
    >
      {/* HERO */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: mobile ? "60px 20px" : "95px 24px 85px"
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontSize: "14px"
          }}
        >
          Private Proof of Concept
        </div>

        <h1
          style={{
            fontSize: mobile ? "44px" : "72px",
            lineHeight: 1.03,
            marginTop: "24px",
            marginBottom: "24px",
            maxWidth: "920px"
          }}
        >
          Integration Intelligence
        </h1>

        <p
          style={{
            fontSize: mobile ? "20px" : "26px",
            color: "#E2E8F0",
            maxWidth: "860px"
          }}
        >
          Combining years of integration experience with modern AI thinking,
          we help investors and acquirers understand whether deal value can
          actually be delivered — quickly, objectively and cost-effectively.
        </p>

        <div
          style={{
            marginTop: "36px",
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            gap: "16px"
          }}
        >
          <a
            href="#example"
            style={{
              background: "#7C4DFF",
              color: "white",
              textDecoration: "none",
              padding: "14px 22px",
              borderRadius: "14px",
              fontWeight: "600",
              textAlign: "center"
            }}
          >
            View Example Output
          </a>

          <a
            href="#feedback"
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              color: "white",
              textDecoration: "none",
              padding: "14px 22px",
              borderRadius: "14px",
              textAlign: "center"
            }}
          >
            Share Perspective
          </a>
        </div>
      </section>

      {/* TRUST BAR */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "22px 24px",
          color: "#C7D2FE"
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: mobile
              ? "1fr"
              : "repeat(auto-fit,minmax(220px,1fr))",
            gap: "18px",
            fontSize: "14px"
          }}
        >
          <div>Built from lived integration experience</div>
          <div>Designed for investors & acquirers</div>
          <div>Board-grade outputs in hours, not weeks</div>
          <div>Early validation phase underway</div>
        </div>
      </section>

      {/* WHY */}
      <section
        style={{
          background: "white",
          color: "#111827",
          padding: sectionPad
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: mobile ? "34px" : "44px" }}>
            Why This Matters
          </h2>

          <p
            style={{
              fontSize: mobile ? "18px" : "20px",
              color: "#475569",
              maxWidth: "900px"
            }}
          >
            Many transactions underperform not because the deal thesis was
            wrong, but because execution risk was not fully understood before
            close.
          </p>

          <div
            style={{
              marginTop: "34px",
              display: "grid",
              gridTemplateColumns: mobile
                ? "1fr"
                : "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px"
            }}
          >
            {[
              ["Synergy Slippage", "Savings prove harder than expected."],
              ["Migration Delays", "Systems become the hidden critical path."],
              ["TSA Dependency", "Seller reliance slows value capture."],
              ["Management Distraction", "Growth teams lose focus."]
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "22px",
                  padding: "26px"
                }}
              >
                <h3>{item[0]}</h3>
                <p style={{ color: "#64748B" }}>{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section
        style={{
          background: "#F8FAFC",
          color: "#111827",
          padding: sectionPad
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: mobile ? "34px" : "44px" }}>
            How It Could Work
          </h2>

          <div
            style={{
              marginTop: "30px",
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
              gap: "24px"
            }}
          >
            <div
              style={{
                background: "white",
                padding: "32px",
                borderRadius: "24px",
                border: "1px solid #E2E8F0"
              }}
            >
              <h3>Inputs</h3>
              <ul style={{ color: "#64748B", paddingLeft: "18px" }}>
                <li>Investment committee papers</li>
                <li>Board approval memos</li>
                <li>Commercial / financial diligence</li>
                <li>Synergy models</li>
                <li>Management presentations</li>
                <li>Transaction documents</li>
              </ul>
            </div>

            <div
              style={{
                background: "white",
                padding: "32px",
                borderRadius: "24px",
                border: "1px solid #E2E8F0"
              }}
            >
              <h3>Outputs</h3>
              <ul style={{ color: "#64748B", paddingLeft: "18px" }}>
                <li>Board-level integration risk assessments</li>
                <li>Management execution outputs</li>
                <li>Synergy capture diagnostics</li>
                <li>Day 1 / 100-day plans</li>
                <li>TSA & separation watchpoints</li>
                <li>Deal KPI frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        style={{
          background: "white",
          color: "#111827",
          padding: sectionPad
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: mobile ? "34px" : "44px" }}>
            Process Overview
          </h2>

          <div
            style={{
              marginTop: "30px",
              display: "grid",
              gridTemplateColumns: mobile
                ? "1fr"
                : "repeat(auto-fit,minmax(220px,1fr))",
              gap: "18px"
            }}
          >
            {[
              "Upload Deal Materials",
              "Engine Diagnoses Value & Risk",
              "Board-Level Insight Produced",
              "Management Execution Outputs Generated"
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "22px",
                  padding: "24px"
                }}
              >
                <div
                  style={{
                    color: "#7C4DFF",
                    fontWeight: "700",
                    marginBottom: "8px"
                  }}
                >
                  Step {i + 1}
                </div>
                <div>{step}</div>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: "28px",
              color: "#475569",
              fontSize: "16px"
            }}
          >
            Designed with confidential deal data in mind: private
            environments, controlled access, secure document handling and
            enterprise deployment options.
          </p>

          <p
            style={{
              marginTop: "10px",
              color: "#64748B",
              fontSize: "15px"
            }}
          >
            Flexible commercial models under review: secure hosted,
            subscription and private deployment.
          </p>
        </div>
      </section>

      {/* CASE STUDY */}
      <section
        id="example"
        style={{
          background: "#11162B",
          color: "white",
          padding: sectionPad
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: mobile ? "34px" : "44px" }}>
            Illustrative Case Study — Fintech Acquisition
          </h2>

          <p style={{ color: "#94A3B8", maxWidth: "760px" }}>
            Anonymised example showing how raw transaction materials may be
            transformed into decision-grade integration intelligence.
          </p>

          <div
            style={{
              marginTop: "34px",
              display: "grid",
              gridTemplateColumns: mobile ? "1fr" : "1fr 180px 1.2fr",
              gap: "24px",
              alignItems: "center"
            }}
          >
            <div>
              {[
                "Confidential Information Memorandum",
                "Board Approval Paper",
                "Synergy Model",
                "Due Diligence Reports"
              ].map((doc, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    padding: "18px",
                    borderRadius: "18px",
                    marginBottom: "14px"
                  }}
                >
                  {doc}
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: mobile ? "56px" : "72px",
                  color: "#7C4DFF",
                  fontWeight: "700"
                }}
              >
                {mobile ? "↓" : "→"}
              </div>

              <div style={{ fontWeight: "700", fontSize: "20px" }}>
                Integration Intelligence Engine
              </div>

              <div
                style={{
                  color: "#CBD5E1",
                  fontSize: "14px",
                  marginTop: "8px"
                }}
              >
                Documents into decision-grade insight
              </div>
            </div>

            <div
              style={{
                background: "white",
                color: "#111827",
                borderRadius: "24px",
                padding: "28px"
              }}
            >
              <h3>Illustrative Board Output</h3>

              <ul style={{ color: "#475569", paddingLeft: "18px", lineHeight: 1.7 }}>
                <li><strong>68% of value depends on synergy execution</strong></li>
                <li><strong>Management bandwidth appears stretched</strong></li>
                <li><strong>Migration is the critical path risk</strong></li>
                <li><strong>Revenue assumptions likely optimistic</strong></li>
                <li><strong>Board governance should begin Day 1</strong></li>
                <li><strong>Execution confidence moderate</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section
        style={{
          background: "white",
          color: "#111827",
          padding: sectionPad
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: mobile ? "34px" : "44px" }}>
            Who We’d Value Feedback From
          </h2>

          <div
            style={{
              marginTop: "30px",
              display: "grid",
              gridTemplateColumns: mobile
                ? "1fr"
                : "repeat(auto-fit,minmax(220px,1fr))",
              gap: "18px"
            }}
          >
            {[
              "Private Equity Partners",
              "Operating Partners",
              "Corporate Development",
              "Technical Builders"
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "22px",
                  borderRadius: "18px",
                  border: "1px solid #E2E8F0",
                  background: "#F8FAFC",
                  textAlign: "center",
                  fontWeight: "600"
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section
        id="feedback"
        style={{
          background: "#1A237E",
          color: "white",
          padding: mobile ? "70px 20px" : "100px 24px"
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <h2 style={{ fontSize: mobile ? "34px" : "48px" }}>
            Currently Exploring Market Demand
          </h2>

          <p
            style={{
              color: "#E2E8F0",
              fontSize: mobile ? "18px" : "22px",
              maxWidth: "760px",
              margin: "18px auto 0"
            }}
          >
            We are testing whether transaction execution intelligence is a
            product sophisticated dealmakers would value.
          </p>

          <div
            style={{
              marginTop: "34px",
              background: "rgba(255,255,255,0.08)",
              padding: "28px",
              borderRadius: "22px",
              maxWidth: "560px",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <div
              style={{
                fontSize: mobile ? "22px" : "24px",
                fontWeight: "700",
                marginBottom: "18px"
              }}
            >
              Would a tool like this be valuable to you?
            </div>

            {!submitted ? (
              <div style={{ display: "grid", gap: "12px" }}>
                <button onClick={() => vote("yes")} style={buttonStyle}>
                  Yes — I'd use this
                </button>
                <button onClick={() => vote("interesting")} style={buttonStyle}>
                  Interesting — tell me more
                </button>
                <button onClick={() => vote("unsure")} style={buttonStyle}>
                  Unsure
                </button>
                <button onClick={() => vote("no_need")} style={buttonStyle}>
                  I do not currently see the need
                </button>
              </div>
            ) : (
              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "18px",
                  borderRadius: "14px",
                  fontWeight: "700"
                }}
              >
                Thank you — feedback received.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ABOUT JON */}
      <section
        style={{
          background: "white",
          color: "#111827",
          padding: sectionPad
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: mobile ? "34px" : "42px" }}>
            About Jon Milsted
          </h2>

          <p
            style={{
              fontSize: mobile ? "18px" : "20px",
              color: "#475569",
              lineHeight: 1.8
            }}
          >
            Jon Milsted has spent more than 20 years across M&A,
            post-merger integration, separation and transformation. He has
            held leadership roles at GoCardless, OVO, Mastercard and
            Deloitte, delivering multi-billion-pound integrations, synergy
            programmes, TSA exits and complex operational change.
          </p>

          <p
            style={{
              fontSize: mobile ? "18px" : "20px",
              color: "#475569",
              lineHeight: 1.8,
              marginTop: "18px"
            }}
          >
            His experience includes delivering £100m+ run-rate savings,
            leading 8,000+ FTE integrations, customer migrations and helping
            transform a £60m annual loss into profitability. Integration
            Intelligence is built from that practical experience combined
            with a belief that AI can materially improve how deals are
            assessed and executed.
          </p>
        </div>
      </section>
    </div>
  );
}

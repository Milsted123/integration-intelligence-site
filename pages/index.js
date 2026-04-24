import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const vote = async (choice) => {
    if (submitted || loading) return;

    setLoading(true);

    try {
      await supabase.from("votes").insert([{ choice }]);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Unable to save feedback right now.");
    }

    setLoading(false);
  };

  const neutralButton = {
    padding: "16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer"
  };

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
          padding: "95px 24px 85px"
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
            fontSize: "72px",
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
            fontSize: "26px",
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
            gap: "16px",
            flexWrap: "wrap"
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
              fontWeight: "600"
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
              borderRadius: "14px"
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
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
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

      {/* WHY THIS MATTERS */}
      <section
        style={{
          background: "white",
          color: "#111827",
          padding: "90px 24px"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "44px", marginBottom: "18px" }}>
            Why This Matters
          </h2>

          <p
            style={{
              fontSize: "20px",
              color: "#475569",
              maxWidth: "900px"
            }}
          >
            Many transactions underperform not because the acquisition logic was
            wrong, but because execution risk was not properly understood before
            close.
          </p>

          <div
            style={{
              marginTop: "36px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px"
            }}
          >
            {[
              ["Synergy Slippage", "Savings prove harder than expected."],
              ["Migration Delays", "Systems and customers become the hidden critical path."],
              ["TSA Dependency", "Seller reliance slows value capture."],
              ["Management Distraction", "Growth teams lose focus during integration."]
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "26px",
                  borderRadius: "22px",
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0"
                }}
              >
                <h3 style={{ marginTop: 0 }}>{item[0]}</h3>
                <p style={{ color: "#64748B", marginBottom: 0 }}>{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT COULD WORK */}
      <section
        style={{
          background: "#F8FAFC",
          color: "#111827",
          padding: "90px 24px"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "44px", marginBottom: "36px" }}>
            How It Could Work
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
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
                <li>Management execution blueprints</li>
                <li>Synergy capture diagnostics</li>
                <li>Day 1 / 100-day plans</li>
                <li>TSA & separation watchpoints</li>
                <li>Deal-specific KPI frameworks</li>
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
          padding: "90px 24px"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "44px", marginBottom: "36px" }}>
            Process Overview
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "18px"
            }}
          >
            {[
              "Upload Deal Materials",
              "Engine Diagnoses Value & Risk",
              "Board-Level Insight Produced",
              "Management Blueprint Generated"
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
        </div>
      </section>

      {/* EXAMPLE */}
      <section
        id="example"
        style={{
          background: "#11162B",
          color: "white",
          padding: "95px 24px"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "44px", marginBottom: "14px" }}>
            Illustrative Case Study — Fintech Acquisition
          </h2>

          <p
            style={{
              color: "#94A3B8",
              fontSize: "18px",
              maxWidth: "760px"
            }}
          >
            Anonymised example showing how raw transaction materials may be
            transformed into decision-grade integration intelligence.
          </p>

          <div
            style={{
              marginTop: "34px",
              display: "grid",
              gridTemplateColumns: "1fr 180px 1.2fr",
              gap: "24px",
              alignItems: "center"
            }}
          >
            {/* INPUTS */}
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

            {/* ENGINE */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "72px",
                  color: "#7C4DFF",
                  fontWeight: "700",
                  lineHeight: 1
                }}
              >
                →
              </div>
              <div
                style={{
                  marginTop: "12px",
                  color: "#FFFFFF",
                  fontSize: "18px",
                  fontWeight: "700"
                }}
              >
                Integration Intelligence Engine
              </div>
              <div
                style={{
                  marginTop: "6px",
                  color: "#CBD5E1",
                  fontSize: "13px"
                }}
              >
                Documents into decision-grade insight
              </div>
            </div>

            {/* OUTPUT */}
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
                <li><strong>68% of projected value relies on synergy execution rather than core growth</strong></li>
                <li><strong>Management capacity appears misaligned to a 24-month integration programme</strong></li>
                <li><strong>Revenue case likely overstated relative to commercial evidence</strong></li>
                <li><strong>Platform migration is the single biggest threat to value delivery</strong></li>
                <li><strong>Board should require monthly integration governance from Day 1</strong></li>
                <li><strong>Deal logic attractive, execution confidence only moderate</strong></li>
              </ul>

              <div style={{ marginTop: "24px" }}>
                <div style={{ fontSize: "14px", fontWeight: "700", marginBottom: "14px" }}>
                  Illustrative Deal Value Mix
                </div>

                <div style={{ fontSize: "13px", marginBottom: "6px", color: "#475569" }}>
                  Core Business Value — 32%
                </div>
                <div style={{ height: "10px", background: "#E5E7EB", borderRadius: "999px", overflow: "hidden", marginBottom: "12px" }}>
                  <div style={{ width: "32%", height: "100%", background: "#475569" }} />
                </div>

                <div style={{ fontSize: "13px", marginBottom: "6px", color: "#475569" }}>
                  Cost Synergies — 48%
                </div>
                <div style={{ height: "10px", background: "#E5E7EB", borderRadius: "999px", overflow: "hidden", marginBottom: "12px" }}>
                  <div style={{ width: "48%", height: "100%", background: "#7C4DFF" }} />
                </div>

                <div style={{ fontSize: "13px", marginBottom: "6px", color: "#475569" }}>
                  Revenue Synergies — 20%
                </div>
                <div style={{ height: "10px", background: "#E5E7EB", borderRadius: "999px", overflow: "hidden" }}>
                  <div style={{ width: "20%", height: "100%", background: "#C4B5FD" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO FOR */}
      <section
        style={{
          background: "white",
          color: "#111827",
          padding: "90px 24px"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "44px", marginBottom: "34px" }}>
            Who We’d Value Feedback From
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
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

      {/* CTA / SURVEY */}
      <section
        id="feedback"
        style={{
          background: "#1A237E",
          color: "white",
          padding: "100px 24px"
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <h2 style={{ fontSize: "48px", marginBottom: "18px" }}>
            Currently Exploring Market Demand
          </h2>

          <p
            style={{
              color: "#E2E8F0",
              fontSize: "22px",
              maxWidth: "760px",
              margin: "0 auto"
            }}
          >
            We are testing whether transaction execution intelligence is a
            product sophisticated dealmakers would value. If this resonates,
            I would genuinely value your perspective.
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
                fontSize: "24px",
                fontWeight: "700",
                marginBottom: "18px"
              }}
            >
              Would a tool like this be valuable to you?
            </div>

            {!submitted ? (
              <div style={{ display: "grid", gap: "12px" }}>
                <button onClick={() => vote("yes")} disabled={loading} style={neutralButton}>
                  Yes — I'd use this
                </button>

                <button onClick={() => vote("interesting")} disabled={loading} style={neutralButton}>
                  Interesting — tell me more
                </button>

                <button onClick={() => vote("unsure")} disabled={loading} style={neutralButton}>
                  Unsure
                </button>

                <button onClick={() => vote("no_need")} disabled={loading} style={neutralButton}>
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

          <div style={{ marginTop: "28px" }}>
            <a
              href="mailto:jon_milsted@hotmail.com"
              style={{
                background: "#7C4DFF",
                color: "white",
                textDecoration: "none",
                padding: "16px 26px",
                borderRadius: "14px",
                fontWeight: "700"
              }}
            >
              Contact Jon Milsted
            </a>
          </div>

          <p
            style={{
              marginTop: "22px",
              color: "#C7D2FE",
              fontSize: "14px"
            }}
          >
            Brand, domain and formal company identity in development.
          </p>
        </div>
      </section>
    </div>
  );
}

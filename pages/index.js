import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [mobile, setMobile] = useState(false);

  // Vote state
  const [voteChoice, setVoteChoice] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [voteError, setVoteError] = useState("");

  // Pilot request state
  const [pilotName, setPilotName] = useState("");
  const [pilotFirm, setPilotFirm] = useState("");
  const [pilotEmail, setPilotEmail] = useState("");
  const [pilotDeal, setPilotDeal] = useState("");
  const [pilotSubmitted, setPilotSubmitted] = useState(false);
  const [pilotLoading, setPilotLoading] = useState(false);
  const [pilotError, setPilotError] = useState("");

  const POSITIVE_VOTES = ["yes", "interesting"];

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const vote = async (choice) => {
    if (voteChoice || loading) return;
    if (POSITIVE_VOTES.includes(choice)) {
      setVoteChoice(choice);
      return;
    }
    setLoading(true);
    setVoteError("");
    try {
      const { error } = await supabase.from("votes").insert([{ choice }]);
      if (error) throw error;
      setSubmitted(true);
    } catch (e) {
      console.error("Vote error:", e);
      setVoteError("Unable to save feedback right now. Please try again.");
    }
    setLoading(false);
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    setEmailError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase
        .from("votes")
        .insert([{ choice: voteChoice, email }]);
      if (error) throw error;
      setSubmitted(true);
    } catch (e) {
      console.error("Email submission error:", e);
      setEmailError("Unable to save your details right now. Please try again.");
    }
    setLoading(false);
  };

  const skipEmail = async () => {
    setLoading(true);
    setEmailError("");
    try {
      const { error } = await supabase
        .from("votes")
        .insert([{ choice: voteChoice }]);
      if (error) throw error;
      setSubmitted(true);
    } catch (e) {
      console.error("Skip email error:", e);
      setVoteError("Unable to save feedback right now. Please try again.");
    }
    setLoading(false);
  };

  const submitPilot = async (e) => {
    e.preventDefault();
    setPilotError("");
    if (!pilotName || !pilotFirm || !pilotEmail) {
      setPilotError("Please fill in your name, firm and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pilotEmail)) {
      setPilotError("Please enter a valid email address.");
      return;
    }
    setPilotLoading(true);
    try {
      const { error } = await supabase.from("pilot_requests").insert([{
        name: pilotName,
        firm: pilotFirm,
        email: pilotEmail,
        deal_description: pilotDeal
      }]);
      if (error) throw error;
      setPilotSubmitted(true);
    } catch (e) {
      console.error("Pilot request error:", e);
      setPilotError("Unable to submit right now. Please try again.");
    }
    setPilotLoading(false);
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
    cursor: loading ? "not-allowed" : "pointer",
    opacity: loading ? 0.6 : 1,
    transition: "opacity 0.2s"
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #E2E8F0",
    background: "white",
    color: "#111827",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    marginBottom: "12px"
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
        {/* CHANGE #3 — badge updated */}
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
          Early Access
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

        {/* CHANGE #2 — example output pull quote */}
        <div
          style={{
            marginTop: "36px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderLeft: "4px solid #7C4DFF",
            borderRadius: "14px",
            padding: "20px 24px",
            maxWidth: "700px"
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              color: "#7C4DFF",
              textTransform: "uppercase",
              marginBottom: "10px"
            }}
          >
            Example output — illustrative fintech acquisition
          </div>
          <div
            style={{
              fontSize: mobile ? "16px" : "18px",
              color: "#E2E8F0",
              lineHeight: 1.6,
              fontStyle: "italic"
            }}
          >
            "68% of value depends on synergy execution. Management bandwidth
            appears stretched. Migration is the critical path risk."
          </div>
        </div>

        <div
          style={{
            marginTop: "36px",
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            gap: "16px"
          }}
        >
          
            href="#pilot"
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
            Request a Pilot
          </a>
          
            href="#example"
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              color: "white",
              textDecoration: "none",
              padding: "14px 22px",
              borderRadius: "14px",
              textAlign: "center"
            }}
          >
            View Example Output
          </a>
          
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
          <div>Designed for investors &amp; acquirers</div>
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
                <li>TSA &amp; separation watchpoints</li>
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
          <p style={{ marginTop: "28px", color: "#475569", fontSize: "16px" }}>
            Designed with confidential deal data in mind: private
            environments, controlled access, secure document handling and
            enterprise deployment options.
          </p>
          <p style={{ marginTop: "10px", color: "#64748B", fontSize: "15px" }}>
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
              <div style={{ color: "#CBD5E1", fontSize: "14px", marginTop: "8px" }}>
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
            Who We'd Value Feedback From
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

      {/* CHANGE #1 — PILOT REQUEST */}
      <section
        id="pilot"
        style={{
          background: "#F8FAFC",
          color: "#111827",
          padding: sectionPad
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontSize: mobile ? "34px" : "44px" }}>
            Request a Pilot
          </h2>
          <p
            style={{
              fontSize: mobile ? "18px" : "20px",
              color: "#475569",
              marginTop: "12px",
              marginBottom: "32px"
            }}
          >
            If you have a live or recent deal you'd like to run through the
            engine, we'd welcome the conversation. Share your details and
            we'll be in touch within 48 hours.
          </p>
          {pilotSubmitted ? (
            <div
              style={{
                background: "white",
                border: "1px solid #E2E8F0",
                borderRadius: "22px",
                padding: "36px",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>
                Thank you
              </div>
              <p style={{ color: "#475569", fontSize: "18px" }}>
                We'll be in touch within 48 hours to arrange a conversation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={submitPilot}
              style={{
                background: "white",
                border: "1px solid #E2E8F0",
                borderRadius: "22px",
                padding: mobile ? "28px" : "40px"
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
                  gap: "0 16px"
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "6px"
                    }}
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Jon Milsted"
                    value={pilotName}
                    onChange={(e) => setPilotName(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "6px"
                    }}
                  >
                    Firm
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Capital"
                    value={pilotFirm}
                    onChange={(e) => setPilotFirm(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#374151",
                  marginBottom: "6px"
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="you@firm.com"
                value={pilotEmail}
                onChange={(e) => setPilotEmail(e.target.value)}
                style={inputStyle}
              />
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#374151",
                  marginBottom: "6px"
                }}
              >
                Brief deal description{" "}
                <span style={{ fontWeight: "400", color: "#94A3B8" }}>
                  (optional)
                </span>
              </label>
              <textarea
                placeholder="e.g. Mid-market SaaS acquisition, carve-out from listed business, buy-and-build bolt-on..."
                value={pilotDeal}
                onChange={(e) => setPilotDeal(e.target.value)}
                rows={3}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  fontFamily: "inherit"
                }}
              />
              {pilotError && (
                <p style={{ color: "#EF4444", fontSize: "14px", marginBottom: "12px" }}>
                  {pilotError}
                </p>
              )}
              <button
                type="submit"
                disabled={pilotLoading}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "none",
                  background: "#7C4DFF",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "600",
                  cursor: pilotLoading ? "not-allowed" : "pointer",
                  opacity: pilotLoading ? 0.6 : 1
                }}
              >
                {pilotLoading ? "Submitting..." : "Request a Pilot"}
              </button>
            </form>
          )}
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
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
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
            {submitted ? (
              // CHANGE #5 — stronger thank you
              <div
                style={{
                  padding: "8px"
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>
                  Thank you
                </div>
                <p
                  style={{
                    color: "#C7D2FE",
                    fontSize: "16px",
                    lineHeight: 1.7,
                    marginBottom: "20px"
                  }}
                >
                  We'll be in touch as the product develops. If you'd like to
                  stay connected in the meantime, feel free to connect with
                  Jon on LinkedIn.
                </p>
                
                  href="https://www.linkedin.com/in/jon-milsted"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "#0A66C2",
                    color: "white",
                    textDecoration: "none",
                    padding: "12px 22px",
                    borderRadius: "12px",
                    fontWeight: "600",
                    fontSize: "15px"
                  }}
                >
                  Connect on LinkedIn
                </a>
              </div>

            ) : voteChoice ? (
              <form onSubmit={submitEmail}>
                <div
                  style={{
                    fontSize: mobile ? "20px" : "22px",
                    fontWeight: "700",
                    marginBottom: "8px"
                  }}
                >
                  {voteChoice === "yes"
                    ? "Great — we'd love to follow up."
                    : "We'd be happy to tell you more."}
                </div>
                <p style={{ color: "#C7D2FE", fontSize: "15px", marginBottom: "20px" }}>
                  Leave your email and we'll be in touch. No spam — just a
                  short conversation if you're open to it.
                </p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: emailError
                      ? "1px solid #F87171"
                      : "1px solid rgba(255,255,255,0.25)",
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    fontSize: "16px",
                    outline: "none",
                    boxSizing: "border-box",
                    marginBottom: "8px"
                  }}
                />
                {emailError && (
                  <p style={{ color: "#F87171", fontSize: "14px", marginBottom: "12px", textAlign: "left" }}>
                    {emailError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    ...buttonStyle,
                    background: "#7C4DFF",
                    border: "none",
                    marginBottom: "10px"
                  }}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="button"
                  onClick={skipEmail}
                  disabled={loading}
                  style={{
                    ...buttonStyle,
                    fontSize: "14px",
                    padding: "10px",
                    opacity: loading ? 0.4 : 0.6
                  }}
                >
                  No thanks — just record my vote
                </button>
              </form>

            ) : (
              <>
                <div
                  style={{
                    fontSize: mobile ? "22px" : "24px",
                    fontWeight: "700",
                    marginBottom: "18px"
                  }}
                >
                  Would a tool like this be valuable to you?
                </div>
                <div style={{ display: "grid", gap: "12px" }}>
                  <button onClick={() => vote("yes")} disabled={loading} style={buttonStyle}>
                    Yes — I'd use this
                  </button>
                  <button onClick={() => vote("interesting")} disabled={loading} style={buttonStyle}>
                    Interesting — tell me more
                  </button>
                  <button onClick={() => vote("unsure")} disabled={loading} style={buttonStyle}>
                    Unsure
                  </button>
                  <button onClick={() => vote("no_need")} disabled={loading} style={buttonStyle}>
                    I do not currently see the need
                  </button>
                </div>
                {voteError && (
                  <p style={{ color: "#F87171", fontSize: "14px", marginTop: "12px" }}>
                    {voteError}
                  </p>
                )}
              </>
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

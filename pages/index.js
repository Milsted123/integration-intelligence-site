/* Replace ONLY the EXAMPLE section and CTA section in your file with these updated versions */

/* EXAMPLE */
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
        gridTemplateColumns: "1fr 140px 1.2fr",
        gap: "24px",
        alignItems: "center"
      }}
    >
      {/* INPUT DOCS */}
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
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "18px",
              borderRadius: "18px",
              marginBottom: "14px"
            }}
          >
            {doc}
          </div>
        ))}
      </div>

      {/* ARROW */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "48px",
            color: "#7C4DFF",
            fontWeight: "700"
          }}
        >
          →
        </div>
        <div
          style={{
            marginTop: "10px",
            color: "#CBD5E1",
            fontSize: "14px"
          }}
        >
          Integration Intelligence Engine
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
          <div
            style={{
              fontSize: "14px",
              fontWeight: "700",
              marginBottom: "14px"
            }}
          >
            Illustrative Deal Value Mix
          </div>

          <div style={{ fontSize: "13px", marginBottom: "6px", color: "#475569" }}>
            Core Business Value — 32%
          </div>
          <div style={{
            height: "10px",
            background: "#E5E7EB",
            borderRadius: "999px",
            overflow: "hidden",
            marginBottom: "12px"
          }}>
            <div style={{
              width: "32%",
              height: "100%",
              background: "#475569"
            }} />
          </div>

          <div style={{ fontSize: "13px", marginBottom: "6px", color: "#475569" }}>
            Cost Synergies — 48%
          </div>
          <div style={{
            height: "10px",
            background: "#E5E7EB",
            borderRadius: "999px",
            overflow: "hidden",
            marginBottom: "12px"
          }}>
            <div style={{
              width: "48%",
              height: "100%",
              background: "#7C4DFF"
            }} />
          </div>

          <div style={{ fontSize: "13px", marginBottom: "6px", color: "#475569" }}>
            Revenue Synergies — 20%
          </div>
          <div style={{
            height: "10px",
            background: "#E5E7EB",
            borderRadius: "999px",
            overflow: "hidden"
          }}>
            <div style={{
              width: "20%",
              height: "100%",
              background: "#C4B5FD"
            }} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

/* CTA */
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
    <h2
      style={{
        fontSize: "48px",
        marginBottom: "18px"
      }}
    >
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

    {/* SURVEY */}
    <div
      style={{
        marginTop: "34px",
        background: "rgba(255,255,255,0.08)",
        padding: "28px",
        borderRadius: "22px",
        maxWidth: "520px",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <div
        style={{
          fontSize: "22px",
          fontWeight: "700",
          marginBottom: "18px"
        }}
      >
        Would a tool like this be valuable to you?
      </div>

      <div style={{ display: "grid", gap: "12px" }}>
        <button style={{
          padding: "14px",
          borderRadius: "14px",
          border: "none",
          background: "#7C4DFF",
          color: "white",
          fontWeight: "700",
          cursor: "pointer"
        }}>
          Yes — I'd use this
        </button>

        <button style={{
          padding: "14px",
          borderRadius: "14px",
          border: "1px solid rgba(255,255,255,0.18)",
          background: "transparent",
          color: "white",
          cursor: "pointer"
        }}>
          Interesting — tell me more
        </button>

        <button style={{
          padding: "14px",
          borderRadius: "14px",
          border: "1px solid rgba(255,255,255,0.18)",
          background: "transparent",
          color: "white",
          cursor: "pointer"
        }}>
          Unsure
        </button>
      </div>
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

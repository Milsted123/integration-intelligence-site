export default function Home() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: "Inter, Arial, sans-serif",
      background: "#0B1020",
      color: "white",
      lineHeight: 1.5
    }}>

      {/* HERO */}
      <section style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "90px 24px 80px"
      }}>
        <div style={{
          display: "inline-block",
          padding: "8px 14px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.08)",
          fontSize: "14px"
        }}>
          Private Proof of Concept
        </div>

        <h1 style={{
          fontSize: "72px",
          lineHeight: 1.05,
          marginTop: "24px",
          marginBottom: "24px",
          maxWidth: "900px"
        }}>
          Integration Intelligence
        </h1>

        <p style={{
          fontSize: "26px",
          color: "#CBD5E1",
          maxWidth: "820px"
        }}>
          The next generation of transaction execution advisory.
          Our flagship product, the <strong>Integration Intelligence Engine</strong>,
          transforms deal materials into board-grade integration insight.
        </p>

        <div style={{
          marginTop: "36px",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap"
        }}>
          <a href="mailto:jon_milsted@hotmail.com" style={{
            background: "#7C3AED",
            color: "white",
            textDecoration: "none",
            padding: "14px 22px",
            borderRadius: "14px",
            fontWeight: "600"
          }}>
            Request Early Access
          </a>

          <a href="#example" style={{
            border: "1px solid rgba(255,255,255,0.18)",
            color: "white",
            textDecoration: "none",
            padding: "14px 22px",
            borderRadius: "14px"
          }}>
            View Example Use Case
          </a>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "22px 24px",
        color: "#94A3B8"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "18px",
          fontSize: "14px"
        }}>
          <div>Built from real integration experience</div>
          <div>Designed for investors & acquirers</div>
          <div>Board-grade outputs in hours, not weeks</div>
          <div>Private review phase underway</div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{
        background: "white",
        color: "#111827",
        padding: "90px 24px"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "44px", marginBottom: "18px" }}>
            Why This Matters
          </h2>

          <p style={{
            fontSize: "20px",
            color: "#475569",
            maxWidth: "900px"
          }}>
            Many transactions do not fail at signing. They underperform in execution.
            Synergies slip, migrations stall, management gets distracted and governance
            arrives too late.
          </p>

          <div style={{
            marginTop: "36px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px"
          }}>
            {[
              ["Synergy Slippage", "Value cases often look strong in Excel but fail operationally."],
              ["Migration Delays", "Customer and platform moves become the hidden critical path."],
              ["TSA Dependency", "Carve-outs inherit operational reliance from the seller."],
              ["Management Distraction", "Growth teams lose focus when integrations become heavy lifts."]
            ].map((item, i) => (
              <div key={i} style={{
                padding: "26px",
                borderRadius: "22px",
                background: "#F8FAFC",
                border: "1px solid #E2E8F0"
              }}>
                <h3 style={{ marginTop: 0 }}>{item[0]}</h3>
                <p style={{ color: "#64748B", marginBottom: 0 }}>{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section style={{
        background: "#F8FAFC",
        color: "#111827",
        padding: "90px 24px"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "44px", marginBottom: "36px" }}>
            What It Does
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: "24px"
          }}>
            <div style={{
              background: "white",
              padding: "32px",
              borderRadius: "24px",
              border: "1px solid #E2E8F0"
            }}>
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

            <div style={{
              background: "white",
              padding: "32px",
              borderRadius: "24px",
              border: "1px solid #E2E8F0"
            }}>
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

      {/* HOW IT WORKS */}
      <section style={{
        background: "white",
        color: "#111827",
        padding: "90px 24px"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "44px", marginBottom: "36px" }}>
            How It Works
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "18px"
          }}>
            {[
              "Upload Deal Materials",
              "Engine Diagnoses Value & Risk",
              "Board-Level Output Produced",
              "Management Blueprint Generated"
            ].map((step, i) => (
              <div key={i} style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "22px",
                padding: "24px"
              }}>
                <div style={{
                  color: "#7C3AED",
                  fontWeight: "700",
                  marginBottom: "8px"
                }}>
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
            Example Insight Output
          </h2>

          <p style={{
            color: "#94A3B8",
            fontSize: "18px",
            maxWidth: "760px"
          }}>
            Illustrative anonymised fintech acquisition assessed through the engine.
          </p>

          <div style={{
            marginTop: "34px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: "24px"
          }}>
            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "28px",
              borderRadius: "24px"
            }}>
              <h3>Board Snapshot</h3>
              <ul style={{
                color: "#CBD5E1",
                paddingLeft: "18px"
              }}>
                <li>Strong strategic logic, execution-heavy value case</li>
                <li>Cost synergies credible and near-term</li>
                <li>Revenue upside slower than plan</li>
                <li>Migration programme is critical path</li>
                <li>Growth culture may resist cost focus</li>
              </ul>
            </div>

            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "28px",
              borderRadius: "24px"
            }}>
              <h3>Value Dependence</h3>

              <div style={{
                marginTop: "20px",
                display: "grid",
                gap: "12px"
              }}>
                <div style={{
                  height: "28px",
                  width: "35%",
                  background: "#475569",
                  borderRadius: "8px"
                }} />

                <div style={{
                  height: "28px",
                  width: "68%",
                  background: "#7C3AED",
                  borderRadius: "8px"
                }} />

                <div style={{
                  height: "28px",
                  width: "100%",
                  background: "#C4B5FD",
                  borderRadius: "8px"
                }} />
              </div>

              <p style={{
                marginTop: "14px",
                color: "#94A3B8",
                fontSize: "14px"
              }}>
                Core Value → Cost Synergies → Revenue Upside
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO FOR */}
      <section style={{
        background: "white",
        color: "#111827",
        padding: "90px 24px"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "44px", marginBottom: "34px" }}>
            Who It Is For
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "18px"
          }}>
            {[
              "Private Equity Investors",
              "Operating Partners",
              "Corporate Development Teams",
              "CEOs & CFOs",
              "Integration Leaders",
              "Independent Sponsors"
            ].map((item, i) => (
              <div key={i} style={{
                padding: "22px",
                borderRadius: "18px",
                border: "1px solid #E2E8F0",
                background: "#F8FAFC",
                textAlign: "center",
                fontWeight: "600"
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#0B1020",
        color: "white",
        padding: "100px 24px"
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "48px",
            marginBottom: "18px"
          }}>
            Currently in Select Proof of Concept Review
          </h2>

          <p style={{
            color: "#CBD5E1",
            fontSize: "22px",
            maxWidth: "760px",
            margin: "0 auto"
          }}>
            We are speaking with selected Private Equity investors,
            operators and technical partners to shape the next phase of build.
          </p>

          <div style={{ marginTop: "34px" }}>
            <a
              href="mailto:jon_milsted@hotmail.com"
              style={{
                background: "#7C3AED",
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

          <p style={{
            marginTop: "22px",
            color: "#94A3B8",
            fontSize: "14px"
          }}>
            Future branded domain and company identity in development.
          </p>
        </div>
      </section>

    </div>
  );
}

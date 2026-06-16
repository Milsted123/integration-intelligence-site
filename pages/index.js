import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
 
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
 
export default function Home() {
  const [mobile, setMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("summary");
 
  // Pilot form state
  const [pilotName, setPilotName] = useState("");
  const [pilotFirm, setPilotFirm] = useState("");
  const [pilotEmail, setPilotEmail] = useState("");
  const [pilotDeal, setPilotDeal] = useState("");
  const [pilotSubmitted, setPilotSubmitted] = useState(false);
  const [pilotLoading, setPilotLoading] = useState(false);
  const [pilotError, setPilotError] = useState("");
 
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
 
  const submitPilot = async (e) => {
    e.preventDefault();
    setPilotError("");
    if (!pilotName || !pilotFirm || !pilotEmail) {
      setPilotError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pilotEmail)) {
      setPilotError("Please enter a valid email address.");
      return;
    }
    setPilotLoading(true);
    try {
  const { error: insertError } = await supabase.from("pilot_requests").insert([{
    name: pilotName, firm: pilotFirm, email: pilotEmail, deal_context: pilotDeal
  }]);
  if (insertError) throw insertError;
  setPilotSubmitted(true);
    } catch (e) {
      setPilotError("Unable to submit — please email directly.");
    }
    setPilotLoading(false);
  };
 
  const PURPLE = "#7C4DFF";
  const DARK = "#0D1117";
  const sp = mobile ? "60px 20px" : "80px 24px";
 
  const tabs = [
    { key: "summary", label: "Executive summary" },
    { key: "scorecard", label: "Scorecard" },
    { key: "risks", label: "Key risks" },
    { key: "actions", label: "Board actions" },
  ];
 
  const scorecard = [
    { status: "red", dim: "Leadership & organisation", note: "Founder-led target; organisation design uncommitted; no Integration Sponsor appointed; reporting lines unresolved" },
    { status: "red", dim: "Technology & platform", note: "Full platform decommission required; ERP architecture not agreed; integration due diligence adviser flags Year 2 timeline already at risk before signing" },
    { status: "red", dim: "Execution readiness", note: "Integration resourcing quality weak; management bandwidth constrained by concurrent international expansion programme" },
    { status: "amber", dim: "Strategic fit", note: "Thesis commercially sound; buyer's growth-oriented model creates structural tension with the multi-year cost discipline the programme requires" },
    { status: "amber", dim: "Synergy delivery", note: "Cost case independently validated and defensible; revenue case carries a three-way estimate dispute (£8m IC underwrites vs £18m management assumption)" },
    { status: "amber", dim: "Customer & commercial", note: "Cross-sell infrastructure decisions partial; Group Commercial Director personally holds top enterprise relationships with no documented transition plan" },
    { status: "green", dim: "Intelligence coverage", note: "Five source documents reviewed including integration assessment, financial DD, commercial DD, IC paper, and board pack — strong evidence base" },
  ];
 
  const scColor = {
    red:   { bg: "#FCEBEB", border: "#F09595", dot: "#E24B4A", text: "#791F1F", badge: "#F7C1C1" },
    amber: { bg: "#FAEEDA", border: "#FAC775", dot: "#BA7517", text: "#633806", badge: "#FAC775" },
    green: { bg: "#EAF3DE", border: "#C0DD97", dot: "#3B6D11", text: "#27500A", badge: "#C0DD97" },
  };
 
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", color: "#111827", background: "white" }}>
 
      {/* ── NAV ── */}
      <nav style={{ background: DARK, padding: "0 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "white", fontWeight: "600", fontSize: "17px", letterSpacing: "-0.01em" }}>Integration Intelligence</span>
          <a href="#pilot" style={{ background: PURPLE, color: "white", padding: "8px 18px", borderRadius: "10px", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
            Request a pilot
          </a>
        </div>
      </nav>
 
      {/* ── HERO ── */}
      <section style={{ background: DARK, color: "white", padding: mobile ? "60px 20px 56px" : "80px 24px 72px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "rgba(124,77,255,0.16)", color: "#B39DFF", border: "0.5px solid rgba(124,77,255,0.35)", padding: "5px 14px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.04em", marginBottom: "22px" }}>
            Available at diligence &middot; before you sign
          </div>
          <h1 style={{ fontSize: mobile ? "36px" : "56px", fontWeight: "600", lineHeight: 1.1, maxWidth: "860px", marginBottom: "18px", letterSpacing: "-0.02em" }}>
            Integration intelligence that reads the deal —{" "}
            <span style={{ color: "#B39DFF" }}>not just the documents.</span>
          </h1>
          <p style={{ fontSize: mobile ? "19px" : "22px", color: "#E2E8F0", maxWidth: "680px", lineHeight: 1.5, marginBottom: "16px", fontWeight: "500", letterSpacing: "-0.01em" }}>
            Detailed integration advisory{" "}
            <span style={{ color: "#B39DFF" }}>before</span> the decisions that determine returns have been taken.
          </p>
          <p style={{ fontSize: mobile ? "16px" : "17px", color: "#94A3B8", maxWidth: "580px", lineHeight: 1.75, marginBottom: "36px" }}>
            Senior integration analysis typically arrives weeks after signing — when the retention windows have passed, the governance asks weren't in the SPA, and the architecture decisions got deferred to Day 1. Integration Intelligence changes that.
          </p>
          <a href="#pilot" style={{ display: "inline-block", background: PURPLE, color: "white", padding: "14px 28px", borderRadius: "12px", fontWeight: "600", fontSize: "16px", textDecoration: "none" }}>
            Request a pilot
          </a>
        </div>
      </section>
 
      {/* ── TIMING PROBLEM ── */}
      <section style={{ background: "#F8FAFC", padding: sp }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: PURPLE, textTransform: "uppercase", marginBottom: "10px" }}>The timing problem</div>
          <h2 style={{ fontSize: mobile ? "28px" : "38px", fontWeight: "600", marginBottom: "12px", letterSpacing: "-0.01em" }}>Integration advice early enough to make a difference.</h2>
          <p style={{ color: "#475569", fontSize: "17px", maxWidth: "640px", lineHeight: 1.7, marginBottom: "36px" }}>
            The integration questions that matter most — who leads the programme, which systems survive, where the key person risk sits — all have windows. Those windows are at diligence and signing, not Day 30.
          </p>
 
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: "16px", marginBottom: "36px" }}>
            {[
              {
                head: "Traditional integration advisory",
                accent: false,
                items: ["Delivered weeks post-close", "Retention windows already closed", "Architecture decisions already deferred", "Governance asks weren't in the SPA", "Board briefed after commitment, not before"]
              },
              {
                head: "Integration Intelligence",
                accent: true,
                items: ["Produced at diligence or signing stage", "Retention packages flagged before announcement", "Architecture decisions on the pre-close checklist", "Governance requirements in the IC paper", "Board engaged with execution risks before they commit"]
              }
            ].map((col, i) => (
              <div key={i} style={{ background: "white", border: `1px solid ${col.accent ? PURPLE + "44" : "#E2E8F0"}`, borderRadius: "16px", padding: "28px 24px" }}>
                <div style={{ fontSize: "13px", fontWeight: "700", color: col.accent ? PURPLE : "#64748B", marginBottom: "16px" }}>{col.head}</div>
                {col.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: col.accent ? PURPLE : "#CBD5E1", marginTop: "7px", flexShrink: 0 }} />
                    <span style={{ fontSize: "14px", color: col.accent ? "#1E293B" : "#94A3B8", lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
 
          <div style={{ background: "white", borderLeft: `4px solid ${PURPLE}`, padding: "18px 22px", maxWidth: "780px" }}>
            <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", color: PURPLE, textTransform: "uppercase", marginBottom: "8px" }}>Example — Project Aurora</div>
            <p style={{ fontSize: "15px", color: "#1E293B", lineHeight: 1.7, margin: 0 }}>
              The engine identified that the Year 2 technology migration was <strong>already at risk before signing</strong> — based on a finding buried in the due diligence pack. Surfaced at diligence, that is a renegotiation point. Surfaced at Day 30, it is a problem.
            </p>
          </div>
        </div>
      </section>
 
      {/* ── STATS STRIP ── */}
      <section style={{ background: DARK, padding: mobile ? "36px 20px" : "44px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: "24px" }}>
          {[
            { n: "As early as diligence", label: "integration intelligence available from the moment you have deal documents" },
            { n: "200+", label: "analytical signals, patterns & rules evaluated on every deal" },
            { n: "Any volume", label: "2 documents or 20 — the engine reads everything you have" },
            { n: "20yrs", label: "of delivered integrations encoded in the system" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: mobile ? "left" : "center" }}>
              <div style={{ fontSize: mobile ? "28px" : "34px", fontWeight: "700", color: "white", letterSpacing: "-0.02em" }}>{s.n}</div>
              <div style={{ fontSize: "13px", color: "#64748B", marginTop: "6px", lineHeight: 1.45 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
 
      {/* ── OUTPUT PREVIEW ── */}
      <section id="output" style={{ background: "white", padding: sp }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: PURPLE, textTransform: "uppercase", marginBottom: "10px" }}>Engine output</div>
          <h2 style={{ fontSize: mobile ? "28px" : "38px", fontWeight: "600", marginBottom: "10px", letterSpacing: "-0.01em" }}>Project Aurora — illustrative output</h2>
          <p style={{ color: "#64748B", fontSize: "16px", maxWidth: "640px", lineHeight: 1.65, marginBottom: "28px" }}>
            A £355m geographic expansion acquisition. Five source documents into the engine. Below is a sample of what was produced.
          </p>
 
          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid #E2E8F0", marginBottom: "24px", overflowX: "auto" }}>
            {tabs.map(t => (
              <button key={t.key} onClick={() => setActiveTab(t.key)} style={{ padding: "10px 18px", fontSize: "14px", fontWeight: activeTab === t.key ? "600" : "400", color: activeTab === t.key ? PURPLE : "#64748B", background: "transparent", border: "none", borderBottom: activeTab === t.key ? `2px solid ${PURPLE}` : "2px solid transparent", cursor: "pointer", whiteSpace: "nowrap", marginBottom: "-1px" }}>
                {t.label}
              </button>
            ))}
          </div>
 
          {/* Summary */}
          {activeTab === "summary" && (
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", background: "#FFF8E1", border: "1px solid #EF9F27", borderRadius: "12px", padding: "16px 20px", marginBottom: "16px" }}>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#854F0B", marginBottom: "4px" }}>Overall integration confidence</div>
                  <div style={{ fontSize: "16px", fontWeight: "600", color: "#633806" }}>Cautious — Intensive execution tier</div>
                </div>
                <div style={{ fontSize: "12px", color: "#854F0B" }}>11.6x EBITDA &nbsp;·&nbsp; £355m &nbsp;·&nbsp; Geographic Expansion</div>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px 22px", fontSize: "15px", color: "#1E293B", lineHeight: 1.8 }}>
                This is a geographic gap-fill at premium price — a PE-backed growth platform paying 11.6x earnings for continental European market access it could not build organically, with a £24m synergy programme that must land within a 3–5 year exit window. The cost synergy case, independently validated, provides a defensible floor: at 100% delivery it alone produces a satisfactory return on the acquisition price. The revenue synergies are genuine upside, not base case. The primary confidence risk is that the programme has not been resourced to execute what the thesis requires: management is thin and managing a concurrent international expansion, no Integration Sponsor has been appointed, and the pre-close planning infrastructure is materially incomplete.
              </div>
            </div>
          )}
 
          {/* Scorecard */}
          {activeTab === "scorecard" && (
            <div style={{ display: "grid", gap: "8px" }}>
              {scorecard.map((row, i) => {
                const c = scColor[row.status];
                return (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr auto", gap: "12px", alignItems: "start", background: c.bg, border: `1px solid ${c.border}`, borderRadius: "10px", padding: "12px 16px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: c.dot, marginTop: "4px" }} />
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: "600", color: c.text, marginBottom: "3px" }}>{row.dim}</div>
                      <div style={{ fontSize: "12px", color: c.text, lineHeight: 1.55, opacity: 0.85 }}>{row.note}</div>
                    </div>
                    <div style={{ fontSize: "11px", fontWeight: "600", background: c.badge, color: c.text, padding: "3px 10px", borderRadius: "999px", whiteSpace: "nowrap", textTransform: "capitalize" }}>{row.status}</div>
                  </div>
                );
              })}
            </div>
          )}
 
          {/* Risks */}
          {activeTab === "risks" && (
            <div style={{ display: "grid", gap: "12px" }}>
              {[
                { sev: "Critical", title: "Programme not staffed to execute", body: "No Integration Sponsor appointed. Management bandwidth is weak — the acquirer is simultaneously managing an international expansion programme. The integration is not resourced to operate at the pace the exit window requires." },
                { sev: "Critical", title: "Key person concentration risk", body: "The target CEO and Group Commercial Director together represent the target's core customer relationships and the entire enterprise growth programme. No documented transition plans exist for either. Their combined departure is the scenario that determines the size of the downside case." },
                { sev: "High", title: "Technology architecture decision deferred", body: "No ERP target architecture decision made at time of diligence. The Year 2 migration timeline is already at risk before signing. The £4m technology synergy is contingent on a decision being made within 60 days of close." },
              ].map((r, i) => (
                <div key={i} style={{ border: "1px solid #E2E8F0", borderRadius: "12px", padding: "18px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "999px", background: r.sev === "Critical" ? "#FCEBEB" : "#FAEEDA", color: r.sev === "Critical" ? "#791F1F" : "#633806" }}>{r.sev}</span>
                    <span style={{ fontSize: "15px", fontWeight: "600", color: "#1E293B" }}>{r.title}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.7, margin: 0 }}>{r.body}</p>
                </div>
              ))}
            </div>
          )}
 
          {/* Actions */}
          {activeTab === "actions" && (
            <div style={{ display: "grid", gap: "10px" }}>
              {[
                { action: "Appoint a dedicated Integration Sponsor before the programme is approved", detail: "Not the CEO, not the CFO. A functional executive with full-time allocation and authority to make integration decisions without CEO sign-off below a defined materiality threshold." },
                { action: "Require key person retention packages signed before public announcement — not at close", detail: "The pre-announcement period is the departure window. Deferring to close removes the most important leverage point the acquirer has." },
                { action: "Confirm ERP architecture and organisation design decisions are in formal resolution processes before close", detail: "Both must have named owners and mandatory timelines. Neither should remain advisory or deferred at the point of signing." },
              ].map((a, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "14px", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "16px 18px", alignItems: "start" }}>
                  <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: PURPLE, color: "white", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#1E293B", marginBottom: "5px" }}>{a.action}</div>
                    <div style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.65 }}>{a.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
 
          <p style={{ fontSize: "12px", color: "#94A3B8", marginTop: "20px", fontStyle: "italic" }}>
            Project Aurora is a fictional transaction created to demonstrate engine capabilities. All company names, financial figures, and individuals are illustrative.
          </p>
        </div>
      </section>
 
      {/* ── WHY NOT JUST AI ── */}
      <section style={{ background: "#F8FAFC", padding: sp }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: PURPLE, textTransform: "uppercase", marginBottom: "10px" }}>The operator angle</div>
            <h2 style={{ fontSize: mobile ? "26px" : "34px", fontWeight: "600", marginBottom: "16px", letterSpacing: "-0.01em" }}>Why not just ask a general AI?</h2>
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "16px" }}>
              You can. You'll get a reasonable read and generic risk frameworks — analysis calibrated to what sounds right.
            </p>
            <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8 }}>
              What you won't get is output grounded in what actually fails. The failure signatures, the pre-close flags, the governance asks that boards actually need — these come from <strong style={{ color: "#1E293B" }}>delivered integrations</strong>, not from training data. The AI structures and scales the judgement. The judgement itself is the product.
            </p>
          </div>
          <div style={{ display: "grid", gap: "12px" }}>
            {[
              { n: "94", label: "risk patterns", desc: "Built from real M&A failure modes — not generic frameworks" },
              { n: "53", label: "deal states", desc: "Combinations of signals that define how a deal will behave in execution" },
              { n: "200+", label: "analytical elements", desc: "Signals, composites, risks, and decisions evaluated on every deal" },
            ].map((item, i) => (
              <div key={i} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "18px 20px", display: "flex", gap: "16px", alignItems: "center" }}>
                <div style={{ fontSize: "22px", fontWeight: "700", color: PURPLE, minWidth: "48px" }}>{item.n}</div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "600", color: "#1E293B" }}>{item.label}</div>
                  <div style={{ fontSize: "13px", color: "#64748B", marginTop: "2px" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── HOW IT WORKS + SECURITY ── */}
      <section style={{ background: "white", padding: sp }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: PURPLE, textTransform: "uppercase", marginBottom: "10px" }}>Process</div>
          <h2 style={{ fontSize: mobile ? "28px" : "38px", fontWeight: "600", marginBottom: "10px", letterSpacing: "-0.01em" }}>From documents to advisory output</h2>
          <p style={{ color: "#64748B", fontSize: "16px", maxWidth: "580px", lineHeight: 1.65, marginBottom: "36px" }}>
            A structured analytical process, reviewed by a senior practitioner before delivery. Every output is traceable to a source document.
          </p>
 
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(4, 1fr)", gap: "2px", marginBottom: "36px" }}>
            {[
              { n: "01", title: "Share your deal pack", desc: "IC paper, board pack, FDD, synergy model, management presentations. Secure, confidential, isolated per deal." },
              { n: "02", title: "Deep document analysis", desc: "Every document is read in full. Signals, contradictions, and gaps are identified across 16 analytical domains. Nothing is skimmed." },
              { n: "03", title: "Integration pattern matching", desc: "The analysis runs against risk patterns, deal states, and governance requirements built from real delivered integrations — not generic frameworks." },
              { n: "04", title: "Practitioner review and output", desc: "A senior practitioner reviews the full analysis before delivery — a board report and management blueprint, written at the level of senior advisory." },
            ].map((step, i) => (
              <div key={i} style={{ background: "#F8FAFC", borderTop: `3px solid ${i === 0 ? PURPLE : "#E2E8F0"}`, padding: "22px 20px" }}>
                <div style={{ fontSize: "11px", fontWeight: "700", color: PURPLE, letterSpacing: "0.1em", marginBottom: "10px" }}>{step.n}</div>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "#1E293B", marginBottom: "8px" }}>{step.title}</div>
                <div style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.65 }}>{step.desc}</div>
              </div>
            ))}
          </div>
 
          <div style={{ background: DARK, borderRadius: "16px", padding: "28px 32px", display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr", gap: "28px" }}>
            {[
              { head: "Confidentiality", body: "Deal documents are processed in isolated environments. Each deal is stored under a unique identifier — company names never appear in storage paths." },
              { head: "Data security", body: "Encryption at rest and in transit. Access-controlled per deal. Immutable audit log on every operation. No deal data is used for model training." },
              { head: "Deployment", body: "Flexible deployment options under development including private and enterprise configurations for organisations that cannot use public AI tooling on sensitive materials." },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: "12px", fontWeight: "700", color: PURPLE, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>{s.head}</div>
                <div style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.7 }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── ABOUT ── */}
      <section style={{ background: "#F8FAFC", padding: sp }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: PURPLE, textTransform: "uppercase", marginBottom: "10px" }}>About</div>
          <h2 style={{ fontSize: mobile ? "28px" : "38px", fontWeight: "600", marginBottom: "18px", letterSpacing: "-0.01em" }}>Built by someone who has done it</h2>
          <p style={{ fontSize: mobile ? "16px" : "18px", color: "#475569", lineHeight: 1.8, maxWidth: "740px", marginBottom: "16px" }}>
            Jon Milsted has spent 20+ years personally delivering integrations — at GoCardless, OVO Energy, Mastercard, and Deloitte. Not advising on them. Delivering them.
          </p>
          <p style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.8, maxWidth: "740px", marginBottom: "36px" }}>
            The patterns in the engine — how deals fail, what boards miss, where execution falls apart — come from that delivery experience. Integration Intelligence combines that judgement with AI to make it available at the point in a deal when it actually changes outcomes.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(3, 1fr)", gap: "16px", maxWidth: "640px" }}>
            {[
              { n: "£100m+", label: "run-rate savings delivered" },
              { n: "8,000+", label: "FTE integrations led" },
              { n: "£60m", label: "annual loss turned to profitability" },
            ].map((c, i) => (
              <div key={i} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "18px 16px" }}>
                <div style={{ fontSize: "22px", fontWeight: "700", color: PURPLE }}>{c.n}</div>
                <div style={{ fontSize: "12px", color: "#64748B", marginTop: "4px", lineHeight: 1.4 }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── PILOT REQUEST ── */}
      <section id="pilot" style={{ background: DARK, padding: sp }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#B39DFF", textTransform: "uppercase", marginBottom: "10px" }}>Get access</div>
          <h2 style={{ fontSize: mobile ? "28px" : "38px", fontWeight: "600", color: "white", marginBottom: "12px", letterSpacing: "-0.01em" }}>Request a pilot</h2>
          <p style={{ color: "#64748B", fontSize: "16px", marginBottom: "32px", lineHeight: 1.65 }}>
            We're running a limited pilot with PE firms and corporate M&amp;A teams. If you have a live deal or a recent transaction you'd like to test the engine on, get in touch.
          </p>
          {pilotSubmitted ? (
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "14px", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "20px", fontWeight: "600", color: "white", marginBottom: "8px" }}>Request received.</div>
              <p style={{ color: "#64748B", fontSize: "15px" }}>We'll be in touch shortly. Thank you.</p>
            </div>
          ) : (
            <form onSubmit={submitPilot} style={{ display: "grid", gap: "12px" }}>
              {[
                { placeholder: "Your name", value: pilotName, setter: setPilotName, type: "text" },
                { placeholder: "Firm or organisation", value: pilotFirm, setter: setPilotFirm, type: "text" },
                { placeholder: "Email address", value: pilotEmail, setter: setPilotEmail, type: "email" },
              ].map((f, i) => (
                <input key={i} type={f.type} placeholder={f.placeholder} value={f.value} onChange={e => f.setter(e.target.value)}
                  style={{ padding: "13px 16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)", color: "white", fontSize: "15px", outline: "none", width: "100%", boxSizing: "border-box" }} />
              ))}
              <textarea placeholder="Brief deal context (optional — deal type, sector, stage)" value={pilotDeal} onChange={e => setPilotDeal(e.target.value)} rows={3}
                style={{ padding: "13px 16px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)", color: "white", fontSize: "15px", outline: "none", resize: "vertical", fontFamily: "inherit", width: "100%", boxSizing: "border-box" }} />
              {pilotError && <p style={{ color: "#F87171", fontSize: "14px", margin: 0 }}>{pilotError}</p>}
              <button type="submit" disabled={pilotLoading} style={{ background: PURPLE, color: "white", padding: "14px", borderRadius: "12px", border: "none", fontWeight: "600", fontSize: "16px", cursor: "pointer", marginTop: "4px" }}>
                {pilotLoading ? "Submitting…" : "Submit request"}
              </button>
              <p style={{ fontSize: "13px", color: "#475569", textAlign: "center", margin: 0 }}>
                Or email directly:{" "}
                <a href="mailto:jon@integration-intelligence.com" style={{ color: "#B39DFF", textDecoration: "none" }}>
                  jon@integration-intelligence.com
                </a>
              </p>
            </form>
          )}
        </div>
      </section>
 
      {/* ── FOOTER ── */}
      <footer style={{ background: "#0D1117", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px", textAlign: "center" }}>
        <p style={{ fontSize: "13px", color: "#334155" }}>Integration Intelligence &nbsp;·&nbsp; 2026</p>
      </footer>
 
    </div>
  );
}

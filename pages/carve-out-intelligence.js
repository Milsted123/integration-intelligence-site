import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function CarveOutIntelligence() {
  const [mobile, setMobile] = useState(false);
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

  const scorecard = [
    { status: "red",   dim: "Perimeter clarity",       note: "IT infrastructure and three customer contracts remain allocated to RemainCo entities at point of term sheet; perimeter not yet confirmed bilaterally" },
    { status: "red",   dim: "Dissynergy exposure",      note: "Scale benefits on procurement and shared services represent a £8–12m EBITDA headwind; quantification partial and not reflected in the current disposal price model" },
    { status: "red",   dim: "Leadership continuity",    note: "Three direct reports hold split roles across RemainCo; no resolution agreed; CEO preference to move with CarvedCo creates a RemainCo succession gap" },
    { status: "amber", dim: "Day 1 readiness",          note: "Critical systems stand-up feasible within the TSA period; finance reporting and payroll require dedicated leads not yet assigned" },
    { status: "amber", dim: "TSA design and exit",      note: "TSA drafted for 18 months across IT and Finance; exit plan not confirmed; IT replacement scoped but not yet budgeted" },
    { status: "amber", dim: "RemainCo viability",       note: "Disposal rationale is strategically sound; stranded cost exposure estimated at £4–6m annualised with a mitigation timeline extending 18–24 months" },
    { status: "green", dim: "Intelligence coverage",    note: "Six source documents reviewed including disposal feasibility study, financial model, TSA draft, IP schedule, and HR allocation — strong evidence base" },
  ];

  const scColor = {
    red:   { bg: "#FCEBEB", border: "#F09595", dot: "#E24B4A", text: "#791F1F", badge: "#F7C1C1" },
    amber: { bg: "#FAEEDA", border: "#FAC775", dot: "#BA7517", text: "#633806", badge: "#FAC775" },
    green: { bg: "#EAF3DE", border: "#C0DD97", dot: "#3B6D11", text: "#27500A", badge: "#C0DD97" },
  };

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", color: "#111827", background: "white" }}>

      {/* NAV */}
      <nav style={{ background: DARK, padding: "0 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <Link href="/" style={{ color: "white", fontWeight: "600", fontSize: "15px", letterSpacing: "-0.01em", textDecoration: "none", opacity: 0.6 }}>
              Integration Intelligence
            </Link>
            <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "14px" }}>|</span>
            <span style={{ color: "white", fontWeight: "600", fontSize: "15px", letterSpacing: "-0.01em" }}>
              Carve-Out Intelligence
            </span>
          </div>
          <a href="#contact" style={{ background: PURPLE, color: "white", padding: "8px 18px", borderRadius: "10px", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
            Get in touch
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: DARK, color: "white", padding: mobile ? "60px 20px 56px" : "80px 24px 72px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "rgba(124,77,255,0.16)", color: "#B39DFF", border: "0.5px solid rgba(124,77,255,0.35)", padding: "5px 14px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.04em", marginBottom: "22px" }}>
            Seller-side advisory &middot; before you go to market
          </div>
          <h1 style={{ fontSize: mobile ? "36px" : "56px", fontWeight: "600", lineHeight: 1.1, maxWidth: "900px", marginBottom: "18px", letterSpacing: "-0.02em" }}>
            Separation intelligence that reads the risk —{" "}
            <span style={{ color: "#B39DFF" }}>before your disposal goes to market.</span>
          </h1>
          <p style={{ fontSize: mobile ? "18px" : "21px", color: "#E2E8F0", maxWidth: "680px", lineHeight: 1.55, marginBottom: "16px", fontWeight: "500", letterSpacing: "-0.01em" }}>
            Are you planning to separate a business? The perimeter risk, Day 1 readiness gaps, and dissynergy exposure you need to understand{" "}
            <span style={{ color: "#B39DFF" }}>before</span> you announce.
          </p>
          <p style={{ fontSize: mobile ? "16px" : "17px", color: "#94A3B8", maxWidth: "580px", lineHeight: 1.75, marginBottom: "36px" }}>
            Carve-Out Intelligence is a second product from Integration Intelligence Ltd, built specifically for sellers and parent companies planning a disposal. The same pipeline, an entirely different analytical engine — because separating a business is not the same as integrating one.
          </p>
          <a href="#contact" style={{ display: "inline-block", background: PURPLE, color: "white", padding: "14px 28px", borderRadius: "12px", fontWeight: "600", fontSize: "16px", textDecoration: "none" }}>
            Talk to us about your disposal
          </a>
        </div>
      </section>

      {/* WHY CARVE-OUTS ARE DIFFERENT */}
      <section style={{ background: "#F8FAFC", padding: sp }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: PURPLE, textTransform: "uppercase", marginBottom: "10px" }}>The separation challenge</div>
          <h2 style={{ fontSize: mobile ? "28px" : "38px", fontWeight: "600", marginBottom: "12px", letterSpacing: "-0.01em" }}>Carve-outs fail in different ways to integrations.</h2>
          <p style={{ color: "#475569", fontSize: "17px", maxWidth: "660px", lineHeight: 1.7, marginBottom: "44px" }}>
            The risks are different, the milestones are different, and the questions your board needs answered are different. An integration advisory product gives you the wrong lens. Carve-Out Intelligence is built from the ground up for disposals.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: "20px" }}>
            {[
              {
                n: "01",
                title: "The perimeter is never as clean as it looks",
                body: "Unlike an acquisition where the target is a defined legal entity, a carve-out often involves separating a business that is deeply embedded in its parent — sharing systems, contracts, people, real estate, and IP. The perimeter is rarely clean, frequently contested, and often changes during separation. Getting it wrong early is the single most common cause of carve-out failure."
              },
              {
                n: "02",
                title: "Two businesses need a story, not one",
                body: "Every carve-out creates two businesses: the carved entity and the business left behind. Both must have a credible strategic rationale. The engine assesses both sides — does RemainCo benefit from the disposal without losing critical capability? Is CarvedCo viable as a standalone? A disposal where either story is weak is a flawed transaction."
              },
              {
                n: "03",
                title: "Day 1 is not the start of a programme — it is the moment of truth",
                body: "In an integration, Day 1 marks the beginning of a long programme. In a carve-out, Day 1 is the moment of legal and operational separation — after which the carved entity must be able to function. TSAs extend the runway but do not replace Day 1 readiness. Carve-Out Intelligence treats Day 1 as the primary execution milestone, not a milestone to work back from post-close."
              },
              {
                n: "04",
                title: "Dissynergies, separation costs, and stranded costs are routinely underestimated",
                body: "Three categories of financial exposure consistently surprise sellers: the cost uplift when the carved entity loses parent scale benefits (typically 15–30% of CarvedCo EBITDA), one-time separation costs across ERP, legal entity formation, and contract novation, and the overhead that remains with RemainCo and cannot be eliminated quickly — often persisting 12–24 months. The engine quantifies each category and benchmarks against comparable transactions."
              },
              {
                n: "05",
                title: "TSAs are a countdown, not a safety net",
                body: "A Transition Services Agreement buys time. But every TSA creates a dependency that must be unwound — and the exit plan is frequently the weakest part of a separation. Service lines that are vague in scope, priced to create friction, or handed to teams with no bandwidth to exit them are a predictable source of overrun. The engine assesses TSA design and exit credibility, not just whether a TSA exists."
              },
              {
                n: "06",
                title: "The disposal timing matters as much as the preparation",
                body: "Whether you are a corporate seller divesting a non-core unit, a PE firm preparing a portfolio company for exit, or a management team undertaking an MBO, the questions change depending on where you are in the process. Carve-Out Intelligence is available pre-announcement, at signing, or during separation planning — early enough to change the decisions that determine deal value."
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "28px 24px" }}>
                <div style={{ fontSize: "11px", fontWeight: "700", color: PURPLE, letterSpacing: "0.1em", marginBottom: "10px" }}>{item.n}</div>
                <div style={{ fontSize: "15px", fontWeight: "600", color: "#1E293B", marginBottom: "10px", lineHeight: 1.4 }}>{item.title}</div>
                <div style={{ fontSize: "14px", color: "#475569", lineHeight: 1.7 }}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: DARK, padding: mobile ? "36px 20px" : "44px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: "24px" }}>
          {[
            { n: "8", label: "disposal archetypes — from embedded business unit to cross-border disposal — each with its own risk profile" },
            { n: "24+", label: "carve-out failure patterns built from real separations, covering perimeter, TSA, leadership, and cost risk" },
            { n: "48", label: "survey questions that fill the gaps documents leave — triangulating readiness before you go to market" },
            { n: "20yrs", label: "of delivered integrations and separations encoded in the system" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: mobile ? "left" : "center" }}>
              <div style={{ fontSize: mobile ? "28px" : "34px", fontWeight: "700", color: "white", letterSpacing: "-0.02em" }}>{s.n}</div>
              <div style={{ fontSize: "13px", color: "#64748B", marginTop: "6px", lineHeight: 1.45 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OUTPUT PREVIEW */}
      <section style={{ background: "white", padding: sp }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: PURPLE, textTransform: "uppercase", marginBottom: "10px" }}>Engine output</div>
          <h2 style={{ fontSize: mobile ? "28px" : "38px", fontWeight: "600", marginBottom: "10px", letterSpacing: "-0.01em" }}>Project Tyne — illustrative output</h2>
          <p style={{ color: "#64748B", fontSize: "16px", maxWidth: "640px", lineHeight: 1.65, marginBottom: "28px" }}>
            A corporate seller separating an embedded business unit ahead of a trade disposal. Six source documents into the engine. Below is the separation readiness scorecard.
          </p>

          <div style={{ background: "#FFF8E1", border: "1px solid #EF9F27", borderRadius: "12px", padding: "16px 20px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#854F0B", marginBottom: "4px" }}>Separation readiness</div>
              <div style={{ fontSize: "16px", fontWeight: "600", color: "#633806" }}>Cautious — perimeter and cost risk require resolution before go-to-market</div>
            </div>
            <div style={{ fontSize: "12px", color: "#854F0B" }}>Embedded business unit &nbsp;·&nbsp; Corporate seller &nbsp;·&nbsp; Pre-announcement</div>
          </div>

          <div style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
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

          <p style={{ fontSize: "12px", color: "#94A3B8", fontStyle: "italic" }}>
            Project Tyne is a fictional transaction created to demonstrate engine capabilities. All figures and individuals are illustrative.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "#F8FAFC", padding: sp }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: PURPLE, textTransform: "uppercase", marginBottom: "10px" }}>Process</div>
          <h2 style={{ fontSize: mobile ? "28px" : "38px", fontWeight: "600", marginBottom: "10px", letterSpacing: "-0.01em" }}>From documents to separation advisory</h2>
          <p style={{ color: "#64748B", fontSize: "16px", maxWidth: "580px", lineHeight: 1.65, marginBottom: "36px" }}>
            The same four-stage pipeline as Integration Intelligence, with entirely different logic underneath — built for sellers, not buyers. Every output is reviewed by a senior practitioner before delivery.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(4, 1fr)", gap: "2px", marginBottom: "36px" }}>
            {[
              { n: "01", title: "Share your disposal pack", desc: "Separation feasibility study, financial model, TSA draft, IP schedule, HR allocation, board papers. Secure, confidential, isolated per deal." },
              { n: "02", title: "Separation analysis", desc: "Every document is read in full. Perimeter signals, TSA exposure, leadership gaps, dissynergy evidence, and Day 1 readiness are assessed across the separation." },
              { n: "03", title: "Carve-out pattern matching", desc: "The analysis runs against failure patterns, deal archetypes, and benchmarks built from real carve-out transactions — embedded business units, PE exits, MBOs, cross-border disposals." },
              { n: "04", title: "Practitioner review and output", desc: "A senior practitioner reviews the full analysis before delivery. Output includes a board-level strategic risk report and a management separation blueprint." },
            ].map((step, i) => (
              <div key={i} style={{ background: "white", borderTop: `3px solid ${i === 0 ? PURPLE : "#E2E8F0"}`, padding: "22px 20px" }}>
                <div style={{ fontSize: "11px", fontWeight: "700", color: PURPLE, letterSpacing: "0.1em", marginBottom: "10px" }}>{step.n}</div>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "#1E293B", marginBottom: "8px" }}>{step.title}</div>
                <div style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.65 }}>{step.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ background: DARK, borderRadius: "16px", padding: "28px 32px", display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr", gap: "28px" }}>
            {[
              { head: "Confidentiality", body: "Deal documents are processed in isolated environments. Each disposal is stored under a unique identifier — company names never appear in storage paths." },
              { head: "Data security", body: "Encryption at rest and in transit. Access-controlled per deal. Immutable audit log on every operation. No deal data is used for model training." },
              { head: "Two outputs", body: "A board-level strategic and risk assessment, and a management execution blueprint — each written for its audience, grounded in the same analysis." },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: "12px", fontWeight: "700", color: PURPLE, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>{s.head}</div>
                <div style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.7 }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section style={{ background: "white", padding: sp }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: PURPLE, textTransform: "uppercase", marginBottom: "10px" }}>Who it is for</div>
          <h2 style={{ fontSize: mobile ? "28px" : "38px", fontWeight: "600", marginBottom: "36px", letterSpacing: "-0.01em" }}>Sellers and advisers at any stage of a disposal.</h2>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)", gap: "16px" }}>
            {[
              { title: "Corporate sellers", body: "Divesting a non-core business unit or subsidiary. Carve-Out Intelligence identifies the perimeter risks, stranded cost exposure, and Day 1 readiness gaps before you engage a bank or go to market." },
              { title: "PE firms preparing for exit", body: "Portfolio companies preparing for a trade sale, secondary buyout, or IPO. The engine assesses separation readiness, TSA design, and buyer-facing risks before they become DD findings." },
              { title: "Management buyout teams", body: "MBO teams with a separation requirement. Carve-Out Intelligence maps the perimeter, assesses standalone viability, and identifies the governance safeguards the transaction needs." },
            ].map((item, i) => (
              <div key={i} style={{ border: "1px solid #E2E8F0", borderRadius: "16px", padding: "28px 24px" }}>
                <div style={{ fontSize: "15px", fontWeight: "600", color: "#1E293B", marginBottom: "10px" }}>{item.title}</div>
                <div style={{ fontSize: "14px", color: "#475569", lineHeight: 1.7 }}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: "#F8FAFC", padding: sp }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: PURPLE, textTransform: "uppercase", marginBottom: "10px" }}>About</div>
          <h2 style={{ fontSize: mobile ? "28px" : "38px", fontWeight: "600", marginBottom: "18px", letterSpacing: "-0.01em" }}>Built by someone who has done it</h2>
          <p style={{ fontSize: mobile ? "16px" : "18px", color: "#475569", lineHeight: 1.8, maxWidth: "740px", marginBottom: "16px" }}>
            Jon Milsted has spent 20+ years personally delivering integrations and separations — at GoCardless, OVO Energy, Mastercard, and Deloitte. Not advising on them. Delivering them.
          </p>
          <p style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.8, maxWidth: "740px", marginBottom: "12px" }}>
            Carve-Out Intelligence draws on that delivery experience — the perimeter disputes, the TSA overruns, the stranded costs that didn't make it into the disposal model. It combines that practitioner judgement with AI to make it available at the point in a transaction when it changes outcomes.
          </p>
          <p style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.8, maxWidth: "740px" }}>
            It is a product of Integration Intelligence Ltd — the same company, the same brand, the same commitment to advisory that is grounded in execution reality rather than frameworks.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: DARK, padding: sp }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#B39DFF", textTransform: "uppercase", marginBottom: "10px" }}>Get in touch</div>
          <h2 style={{ fontSize: mobile ? "28px" : "38px", fontWeight: "600", color: "white", marginBottom: "12px", letterSpacing: "-0.01em" }}>Talk to us about your disposal</h2>
          <p style={{ color: "#64748B", fontSize: "16px", marginBottom: "32px", lineHeight: 1.65 }}>
            If you have a disposal in planning or are approaching go-to-market and want to understand the separation risk picture, get in touch. We work with corporate sellers, PE firms, and M&A advisers and typically deliver within 5–7 working days of receiving documentation.
          </p>
          {pilotSubmitted ? (
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "14px", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "20px", fontWeight: "600", color: "white", marginBottom: "8px" }}>Request received.</div>
              <p style={{ color: "#64748B", fontSize: "15px" }}>We will be in touch shortly. Thank you.</p>
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
              <textarea placeholder="Brief context — disposal type, sector, stage (optional)" value={pilotDeal} onChange={e => setPilotDeal(e.target.value)} rows={3}
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

      {/* FOOTER */}
      <footer style={{ background: "#0D1117", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px", textAlign: "center" }}>
        <p style={{ fontSize: "13px", color: "#334155" }}>
          Integration Intelligence &nbsp;·&nbsp; Carve-Out Intelligence &nbsp;·&nbsp; 2026
        </p>
      </footer>

    </div>
  );
}

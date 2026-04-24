export default function LandingPage(){return (<div className='min-h-screen font-sans bg-[#1A237E] text-white'>
<section className='max-w-6xl mx-auto px-8 py-24'>
<div className='inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm'>Private Proof of Concept</div>
<h1 className='mt-8 text-7xl font-bold tracking-tight max-w-4xl'>Integration Intelligence</h1>
<p className='mt-6 text-2xl text-slate-200 max-w-4xl'>Combining years of integration experience with modern AI thinking, we deliver fast, unbiased and cost-effective transaction execution insight for investors and acquirers.</p>
<div className='mt-10 flex gap-4'>
<a href='mailto:jon_milsted@hotmail.com' className='px-6 py-3 rounded-2xl bg-[#7C4DFF] font-semibold'>Request Early Access</a>
<a href='#case-study' className='px-6 py-3 rounded-2xl border border-white/20'>View Example Output</a>
</div>
</section>
<section className='bg-white text-slate-900'>
<div className='max-w-6xl mx-auto px-8 py-20'>
<h2 className='text-4xl font-bold'>Why It Matters</h2>
<div className='grid md:grid-cols-4 gap-6 mt-10'>
{['Synergy slippage','Migration delays','TSA dependency','Management distraction'].map((x,i)=><div key={i} className='rounded-3xl p-6 bg-slate-50 border border-slate-200 font-medium'>{x}</div>)}
</div>
</div>
</section>
<section className='bg-slate-50 text-slate-900'>
<div className='max-w-6xl mx-auto px-8 py-20'>
<h2 className='text-4xl font-bold'>How It Works</h2>
<div className='grid md:grid-cols-3 gap-8 mt-10'>
<div className='rounded-3xl p-8 bg-white border border-slate-200'><h3 className='text-xl font-semibold'>1. Upload Deal Materials</h3><p className='mt-4 text-slate-600'>Board papers, CIMs, diligence reports, synergy models and transaction documents.</p></div>
<div className='rounded-3xl p-8 bg-white border border-slate-200'><h3 className='text-xl font-semibold'>2. Engine Analysis</h3><p className='mt-4 text-slate-600'>Structured risk logic, integration heuristics and value capture diagnostics.</p></div>
<div className='rounded-3xl p-8 bg-white border border-slate-200'><h3 className='text-xl font-semibold'>3. Premium Outputs</h3><p className='mt-4 text-slate-600'>Board-grade assessments and management execution blueprints.</p></div>
</div>
</div>
</section>
<section id='case-study' className='bg-[#111827] text-white'>
<div className='max-w-6xl mx-auto px-8 py-24'>
<h2 className='text-4xl font-bold'>Case Study 1 — Fintech Acquisition</h2>
<p className='mt-4 text-slate-300 max-w-3xl'>Illustrative example of how raw transaction materials are transformed into integration intelligence.</p>
<div className='grid md:grid-cols-3 gap-8 mt-12 items-start'>
<div className='space-y-4'>
<div className='rounded-2xl p-5 bg-white/5 border border-white/10'>Confidential Information Memorandum</div>
<div className='rounded-2xl p-5 bg-white/5 border border-white/10'>Board Approval Paper</div>
<div className='rounded-2xl p-5 bg-white/5 border border-white/10'>Synergy Model</div>
<div className='rounded-2xl p-5 bg-white/5 border border-white/10'>Due Diligence Reports</div>
</div>
<div className='flex items-center justify-center text-center text-[#A78BFA] font-semibold text-xl'>Integration Intelligence Engine →</div>
<div className='rounded-3xl p-8 bg-white text-slate-900'>
<h3 className='text-2xl font-bold'>Board-Level Output</h3>
<ul className='mt-5 space-y-3 text-slate-700'>
<li>• Strong strategic logic, but execution-heavy value case</li>
<li>• ~70% of upside dependent on synergy delivery</li>
<li>• Cost savings credible and near-term</li>
<li>• Revenue synergies likely slower than investment case</li>
<li>• Platform migration is the critical path</li>
<li>• Growth culture may resist 3-year cost programme</li>
<li>• Monthly board oversight recommended</li>
</ul>
</div>
</div>
</div>
</section>
<section className='bg-white text-slate-900'>
<div className='max-w-6xl mx-auto px-8 py-20'>
<h2 className='text-4xl font-bold'>Who It’s For</h2>
<div className='grid md:grid-cols-4 gap-6 mt-10'>
{['Private Equity Partners','Operating Partners','Corporate Development','CEOs / CFOs'].map((x,i)=><div key={i} className='rounded-3xl p-6 border border-slate-200 text-center font-semibold'>{x}</div>)}
</div>
</div>
</section>
<section className='bg-[#1A237E] text-white'>
<div className='max-w-4xl mx-auto px-8 py-24 text-center'>
<h2 className='text-4xl font-bold'>Currently in Select Proof of Concept Review</h2>
<p className='mt-5 text-xl text-slate-200'>We are speaking with selected investors, operators and technical partners regarding the next phase of build.</p>
<p className='mt-8 text-lg'>Contact: <a href='mailto:jon_milsted@hotmail.com' className='text-[#C4B5FD]'>jon_milsted@hotmail.com</a></p>
<p className='mt-2 text-slate-300'>Brand, domain and formal company identity in development.</p>
</div>
</section>
</div>)}

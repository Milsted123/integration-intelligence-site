export default function LandingPage(){return (<div className='min-h-screen bg-white text-slate-900 font-sans'>
<section className='bg-gradient-to-br from-[#1A237E] via-[#2432A8] to-[#11162B] text-white'>
<div className='max-w-6xl mx-auto px-8 py-28'>
<div className='inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm tracking-wide'>Private Proof of Concept</div>
<h1 className='mt-8 text-7xl md:text-8xl font-bold tracking-tight max-w-4xl leading-tight'>Integration Intelligence</h1>
<p className='mt-6 text-2xl text-slate-200 max-w-4xl leading-relaxed'>Combining years of integration experience with modern AI thinking, we help investors and acquirers understand whether deal value can actually be delivered — quickly, objectively and cost-effectively.</p>
<div className='mt-10 flex gap-4 flex-wrap'>
<a href='#case-study' className='px-6 py-3 rounded-2xl bg-[#7C4DFF] font-semibold shadow-xl'>View Example Output</a>
<a href='#feedback' className='px-6 py-3 rounded-2xl border border-white/20'>Share Perspective</a>
</div>
<div className='mt-14 grid md:grid-cols-4 gap-4 text-sm text-slate-200'>
<div className='rounded-2xl bg-white/10 p-4'>Board-grade outputs in hours</div>
<div className='rounded-2xl bg-white/10 p-4'>Built from lived deal experience</div>
<div className='rounded-2xl bg-white/10 p-4'>Designed for PE & acquirers</div>
<div className='rounded-2xl bg-white/10 p-4'>Early validation phase</div>
</div>
</div>
</section>
<section className='bg-white'>
<div className='max-w-6xl mx-auto px-8 py-24'>
<h2 className='text-4xl font-bold'>Why This Matters</h2>
<p className='mt-4 text-xl text-slate-600 max-w-4xl'>Many transactions underperform not because the acquisition logic was wrong, but because execution risk was not properly understood before close.</p>
<div className='grid md:grid-cols-4 gap-6 mt-10'>
{[['Synergy Slippage','Savings prove harder than expected'],['Migration Delays','Systems and customers become the hidden critical path'],['TSA Dependency','Seller reliance slows value capture'],['Management Distraction','Growth teams lose focus during integration']].map((x,i)=><div key={i} className='rounded-3xl p-6 bg-slate-50 border border-slate-200 shadow-xl shadow-slate-200/50'><h3 className='font-semibold'>{x[0]}</h3><p className='mt-3 text-slate-600 text-sm'>{x[1]}</p></div>)}
</div>
</div>
</section>
<section className='bg-slate-50'>
<div className='max-w-6xl mx-auto px-8 py-24'>
<h2 className='text-4xl font-bold'>How It Could Work</h2>
<div className='grid md:grid-cols-4 gap-6 mt-10'>
{['Upload Deal Materials','Engine Diagnoses Value & Risk','Board-Level Insight Produced','Management Blueprint Generated'].map((x,i)=><div key={i} className='rounded-3xl p-6 bg-white border border-slate-200 shadow-xl shadow-slate-200/50'><div className='text-[#7C4DFF] font-bold text-sm'>STEP {i+1}</div><div className='mt-2 font-semibold'>{x}</div></div>)}
</div>
</div>
</section>
<section id='case-study' className='bg-[#11162B] text-white'>
<div className='max-w-6xl mx-auto px-8 py-24'>
<h2 className='text-4xl font-bold'>Illustrative Case Study — Fintech Acquisition</h2>
<p className='mt-4 text-slate-300 max-w-3xl'>Anonymised example showing how raw transaction documents may be transformed into decision-grade integration intelligence.</p>
<div className='grid md:grid-cols-3 gap-8 mt-12 items-start'>
<div>
<div className='rounded-2xl p-5 bg-white/5 border border-white/10 mb-4'>Confidential Information Memorandum</div>
<div className='rounded-2xl p-5 bg-white/5 border border-white/10 mb-4'>Board Approval Paper</div>
<div className='rounded-2xl p-5 bg-white/5 border border-white/10 mb-4'>Synergy Model</div>
<div className='rounded-2xl p-5 bg-white/5 border border-white/10'>Due Diligence Reports</div>
</div>
<div className='flex items-center justify-center h-full'>
<div className='text-center'><div className='text-4xl text-[#7C4DFF] font-bold'>→</div><div className='mt-3 text-sm text-slate-300'>Integration Intelligence Engine</div></div>
</div>
<div className='rounded-3xl p-8 bg-white text-slate-900 shadow-2xl'>
<h3 className='text-2xl font-bold'>Illustrative Board Output</h3>
<ul className='mt-5 space-y-3 text-slate-700'>
<li>• Strong strategic logic, but execution-heavy value case</li>
<li>• ~70% of upside linked to synergy delivery</li>
<li>• Cost synergies appear credible and near-term</li>
<li>• Revenue upside likely slower than plan</li>
<li>• Platform migration is the critical path</li>
<li>• Growth culture may resist multi-year cost focus</li>
<li>• Monthly board oversight recommended</li>
</ul>
</div>
</div>
</div>
</section>
<section className='bg-white'>
<div className='max-w-6xl mx-auto px-8 py-24'>
<h2 className='text-4xl font-bold'>Who We’d Value Feedback From</h2>
<div className='grid md:grid-cols-4 gap-6 mt-10'>
{['Private Equity Partners','Operating Partners','Corporate Development','Technical Builders'].map((x,i)=><div key={i} className='rounded-3xl p-6 bg-slate-50 border border-slate-200 text-center font-semibold'>{x}</div>)}
</div>
</div>
</section>
<section id='feedback' className='bg-gradient-to-br from-[#1A237E] to-[#11162B] text-white'>
<div className='max-w-4xl mx-auto px-8 py-24 text-center'>
<h2 className='text-4xl font-bold'>Currently Exploring Market Demand</h2>
<p className='mt-5 text-xl text-slate-200'>We are testing whether transaction execution intelligence is a product sophisticated dealmakers would value. If this resonates, I would genuinely value your perspective.</p>
<a href='mailto:jon_milsted@hotmail.com' className='inline-block mt-8 px-6 py-3 rounded-2xl bg-[#7C4DFF] font-semibold shadow-xl'>Contact Jon Milsted</a>
<p className='mt-4 text-slate-300'>jon_milsted@hotmail.com</p>
</div>
</section>
</div>)}

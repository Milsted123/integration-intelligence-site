export default function LandingPage(){return (<div className='min-h-screen bg-gradient-to-b from-[#1A237E] via-[#151b5c] to-white text-slate-900 font-sans'>
<section className='bg-[#1A237E] text-white'>
<div className='max-w-6xl mx-auto px-8 py-28'>
<div className='inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm'>Private Proof of Concept</div>
<h1 className='mt-8 text-7xl md:text-8xl font-bold tracking-tight max-w-4xl leading-tight'>Integration Intelligence</h1>
<p className='mt-6 text-2xl text-slate-200 max-w-4xl leading-relaxed'>Combining years of integration experience with modern AI thinking, we help investors and acquirers understand whether deal value can actually be delivered — quickly, objectively and cost-effectively.</p>
<div className='mt-10 flex gap-4 flex-wrap'>
<a href='mailto:jon_milsted@hotmail.com' className='px-6 py-3 rounded-2xl bg-[#7C4DFF] font-semibold shadow-lg'>Request Early Access</a>
<a href='#case-study' className='px-6 py-3 rounded-2xl border border-white/20'>View Example Output</a>
</div>
<div className='mt-14 grid md:grid-cols-4 gap-4 text-sm text-slate-200'>
<div className='rounded-2xl bg-white/5 p-4'>Board-grade outputs in hours</div>
<div className='rounded-2xl bg-white/5 p-4'>Built from real operator experience</div>
<div className='rounded-2xl bg-white/5 p-4'>Confidential deal review model</div>
<div className='rounded-2xl bg-white/5 p-4'>Designed for PE & acquirers</div>
</div>
</div>
</section>
<section className='bg-white'>
<div className='max-w-6xl mx-auto px-8 py-24'>
<h2 className='text-4xl font-bold'>Why This Matters</h2>
<p className='mt-4 text-xl text-slate-600 max-w-4xl'>Transactions often underperform not because of the acquisition logic, but because execution risk is poorly understood before close.</p>
<div className='grid md:grid-cols-4 gap-6 mt-10'>
{[['Synergy Slippage','Savings harder than expected'],['Migration Delays','Customers & systems become critical path'],['TSA Dependency','Seller reliance slows value capture'],['Management Distraction','Growth teams lose focus']].map((x,i)=><div key={i} className='rounded-3xl p-6 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/60 shadow-xl shadow-slate-300/40'><h3 className='font-semibold'>{x[0]}</h3><p className='mt-3 text-slate-600 text-sm'>{x[1]}</p></div>)}
</div>
</div>
</section>
<section className='bg-white'>
<div className='max-w-6xl mx-auto px-8 py-24'>
<h2 className='text-4xl font-bold'>How It Works</h2>
<div className='grid md:grid-cols-4 gap-6 mt-10'>
{['Upload Deal Materials','Engine Diagnoses Value & Risk','Board-Level Assessment','Management Blueprint'].map((x,i)=><div key={i} className='rounded-3xl p-6 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/60'><div className='text-[#7C4DFF] font-bold text-sm'>STEP {i+1}</div><div className='mt-2 font-semibold'>{x}</div></div>)}
</div>
</div>
</section>
<section id='case-study' className='bg-[#11162B] text-white'>
<div className='max-w-6xl mx-auto px-8 py-24'>
<h2 className='text-4xl font-bold'>Case Study — Fintech Acquisition</h2>
<p className='mt-4 text-slate-300 max-w-3xl'>Illustrative example of how raw deal materials are transformed into integration intelligence.</p>
<div className='grid md:grid-cols-3 gap-8 mt-12 items-start'>
<div>
<div className='rounded-2xl p-5 bg-white/5 border border-white/10 mb-4'>Confidential Information Memorandum</div>
<div className='rounded-2xl p-5 bg-white/5 border border-white/10 mb-4'>Board Approval Paper</div>
<div className='rounded-2xl p-5 bg-white/5 border border-white/10 mb-4'>Synergy Model</div>
<div className='rounded-2xl p-5 bg-white/5 border border-white/10'>Due Diligence Reports</div>
</div>
<div className='flex items-center justify-center h-full text-center'>
<div>
<div className='text-[#A78BFA] text-2xl font-bold'>→</div>
<div className='mt-3 text-sm text-slate-300'>Integration Intelligence Engine</div>
</div>
</div>
<div className='rounded-3xl p-8 bg-white text-slate-900 shadow-2xl border border-slate-100'>
<h3 className='text-2xl font-bold'>Board-Level Output</h3>
<p className='mt-2 text-sm text-slate-500'>Executive Summary</p>
<ul className='mt-5 space-y-3 text-slate-700'>
<li>• Strong strategic logic, but execution-heavy value case</li>
<li>• ~70% of upside linked to synergy delivery</li>
<li>• Cost synergies credible and near-term</li>
<li>• Revenue upside likely slower than plan</li>
<li>• Platform migration is the critical path</li>
<li>• Growth culture may resist multi-year cost focus</li>
<li>• Monthly board oversight recommended</li>
</ul>
<div className='mt-6'>
<div className='text-sm font-semibold'>Value Dependence</div>
<div className='mt-3 h-3 rounded bg-slate-200'><div className='h-3 rounded bg-white0 w-1/3'></div></div>
<div className='mt-2 h-3 rounded bg-slate-200'><div className='h-3 rounded bg-[#7C4DFF] w-2/3'></div></div>
<div className='mt-2 h-3 rounded bg-slate-200'><div className='h-3 rounded bg-[#C4B5FD] w-full'></div></div>
</div>
</div>
</div>
</div>
</section>
<section className='bg-white'>
<div className='max-w-6xl mx-auto px-8 py-24'>
<h2 className='text-4xl font-bold'>Who It Is For</h2>
<div className='grid md:grid-cols-4 gap-6 mt-10'>
{['Private Equity Partners','Operating Partners','Corporate Development','CEOs / CFOs'].map((x,i)=><div key={i} className='rounded-3xl p-6 border border-slate-200 bg-white text-center font-semibold'>{x}</div>)}
</div>
</div>
</section>
<section className='bg-[#1A237E] text-white'>
<div className='max-w-4xl mx-auto px-8 py-24 text-center'>
<h2 className='text-4xl font-bold'>Currently in Select Proof of Concept Review</h2>
<p className='mt-5 text-xl text-slate-200'>We are speaking with selected investors, operators and technical partners regarding the next phase of build.</p>
<a href='mailto:jon_milsted@hotmail.com' className='inline-block mt-8 px-6 py-3 rounded-2xl bg-[#7C4DFF] font-semibold'>Contact Jon Milsted</a>
<p className='mt-4 text-slate-300'>jon_milsted@hotmail.com</p>
</div>
</section>
</div>)}

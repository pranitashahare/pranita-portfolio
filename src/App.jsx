import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Mail, Download, ExternalLink, Linkedin, Github, Phone, MapPin, Rocket, Sparkles, BarChart3, Leaf, Send, Inbox } from "lucide-react";
import QRCode from "react-qr-code";

// All content below matches your CV (no assumptions)
const CV = {
  name: "Pranita Jayant Shahare",
  title: "Business Analyst",
  location: "Paris, France",
  phone: "(+33) 744 832 385",
  email: "pranitashahare@gmail.com",
  linkedin: "https://www.linkedin.com/in/pranita-shahare/",
  objective: "Business Analytics Master’s candidate (MIM, MSc) with international experience in France and India, specialising in digitalisation, business intelligence, and cross-functional project delivery.",
  skills: {
    tools: ["Power BI","Tableau","SQL","Python","R","Microsoft 365","Canva"],
    data: ["Dashboard Design","Data Visualisation & Storytelling","Reporting & Analysis","Business Intelligence","Customer Discovery","Founder support","Market research"],
    soft: ["Intercultural Communication","Leadership","Adaptability","Cross-functional Collaboration"],
    languages: ["English – Bilingual","French – A2 (improving)","Hindi – Native","Marathi – Native","Open to learning German"]
  },
  experience: [
    {
      role: "Startup Founder - PranVie",
      place: "NEOMA Venture Studio | Mont-Saint-Aignan, France",
      period: "May 2025 – Present",
      bullets: [
        "Initiated PranVie as an ethical wellness startup exploring organic spirulina-based nutrition solutions; currently in ideation and validation phase under NEOMA’s pre-incubation support.",
        "Outlined the D2C model and subscription strategy while advancing MVP development, including branding, product concept, and go-to-market hypothesis.",
        "Drafted early-stage marketing strategies, financial models, and investor pitch materials."
      ]
    },
    {
      role: "Executive Assistant",
      place: "Brad Technology | Avignon, France",
      period: "Jul 2024 – Oct 2024",
      bullets: [
        "Developed interactive Power BI dashboards using Power Query, accelerating comparative studies across 5 business verticals.",
        "Analysed industry trends and surveyed competitor strategies to recommend 2 high-potential markets.",
        "Contributed to the mobile app JSON rewrite and coordinated a 6‑month strategic roadmap."
      ]
    },
    {
      role: "Digital & Tech Ambassador/Community Leader – Volunteer",
      place: "NEOMA Business School | Mont-Saint-Aignan, France",
      period: "Nov 2023 – Apr 2025",
      bullets: [
        "Created and curated digital content to promote AI topics within the student community.",
        "Engaged 20+ professionals and initiated mentorships through targeted outreach.",
        "Published collaborative social posts and webinar highlights using designed templates."
      ]
    }
  ],
  education: [
    { title: "Programme Grande École – MIM, MSc Business Analytics", place: "NEOMA Business School | Mont-Saint-Aignan, France", period: "Sep 2023 – Apr 2025", thesis: "How to Use AI & Predictive Analytics to Combat Human Trafficking" },
    { title: "Master of Science – Botany", place: "Institute of Science | Nagpur, India", period: "Jun 2018 – Dec 2020" },
    { title: "Bachelor of Science – Botany, Chemistry, Zoology", place: "Nagpur University | Nagpur, India", period: "Jun 2015 – Apr 2018" }
  ],
  certs: [
    "Business Intelligence with Power BI, Advanced Excel, PowerPoint & Tableau – Skill Nation",
    "Google Analytics – Google Digital Skill Shop"
  ]
};

export default function App(){
  const url = useMemo(()=> typeof window !== 'undefined' ? window.location.href : 'http://localhost:5173', []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-teal-600" aria-hidden />
            <span className="font-semibold">{CV.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="/Pranita-SHAHARE-CV.pdf" download className="inline-flex items-center rounded-xl px-3 py-2 bg-slate-900 text-white text-sm hover:bg-slate-800">
              <Download className="mr-2 h-4 w-4" /> CV
            </a>
            <a href={CV.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl px-3 py-2 border text-sm">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 pt-12 pb-10 md:pt-16 md:pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block rounded-full bg-amber-500/90 text-slate-900 px-3 py-1 text-sm mb-4">Portfolio</span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{CV.title}</h1>
            <p className="mt-4 text-slate-700 text-lg">{CV.objective}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#experience" className="inline-flex items-center rounded-xl px-3 py-2 bg-slate-900 text-white text-sm hover:bg-slate-800"><BarChart3 className="mr-2 h-4 w-4"/> Experience</a>
              <a href="#skills" className="inline-flex items-center rounded-xl px-3 py-2 border text-sm">Skills</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-4">
                <p className="text-sm text-slate-600">QR to this portfolio</p>
                <div className="mt-2 bg-white rounded-xl p-3 flex items-center justify-center">
                  <QRCode value={url} size={140} aria-label="QR code to open this portfolio" />
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-teal-50 p-4">
                <p className="text-sm text-slate-600">Quick Info</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> {CV.location}</li>
                  <li className="flex items-center gap-2"><Inbox className="h-4 w-4"/> {CV.email}</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> {CV.phone}</li>
                </ul>
              </div>
              <div className="col-span-2 rounded-2xl bg-slate-900 text-white p-4">
                <p className="text-sm/relaxed text-slate-200">
                  Open to: <span className="font-semibold text-white">Business Analyst / BI roles</span> and <span className="font-semibold text-white">early-stage collaborations</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="mt-2 text-slate-600">A quick intro</p>
          </div>
          <div className="md:col-span-2 text-slate-700 leading-relaxed">
            <p>I'm {CV.name} — an MSc Business Analytics candidate with a prior MSc in Botany. I mix analytics, product sense, and empathy to solve real problems.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold flex items-center gap-2"><BarChart3 className="h-5 w-5"/> Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {CV.skills.tools.map((s)=> <span key={s} className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-sm">{s}</span>)}
            </div>
          </div>
          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold flex items-center gap-2"><Sparkles className="h-5 w-5"/> Data</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {CV.skills.data.map((s)=> <span key={s} className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-sm">{s}</span>)}
            </div>
          </div>
          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold flex items-center gap-2"><Leaf className="h-5 w-5"/> Languages</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {CV.skills.languages.map((s)=> <span key={s} className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-sm">{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 space-y-6">
          {CV.experience.map((e)=> (
            <div key={e.role} className="p-5 rounded-2xl bg-slate-50 border">
              <div className="font-medium">{e.role}</div>
              <div className="text-sm text-slate-600">{e.place} · {e.period}</div>
              <ul className="mt-2 text-sm list-disc pl-5 text-slate-700 space-y-1">
                {e.bullets.map((b, i)=>(<li key={i}>{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-6 space-y-6">
          {CV.education.map((ed)=> (
            <div key={ed.title} className="p-5 rounded-2xl bg-slate-50 border">
              <div className="font-medium">{ed.title}</div>
              <div className="text-sm text-slate-600">{ed.place} · {ed.period}</div>
              {ed.thesis && <div className="text-sm text-slate-600 mt-1">Thesis: {ed.thesis}</div>}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="text-slate-600 mt-1">Let’s work together</p>
            <div className="mt-4 flex gap-2">
              <a href={`mailto:${CV.email}`} className="inline-flex items-center rounded-xl px-3 py-2 border text-sm"><Mail className="mr-2 h-4 w-4"/> Email</a>
              <a href={CV.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl px-3 py-2 border text-sm"><Linkedin className="mr-2 h-4 w-4"/> LinkedIn</a>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="border rounded-2xl p-6">
              <form className="grid md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); window.location.href=`mailto:${CV.email}?subject=${encodeURIComponent(e.target.name?.value || 'Portfolio Inquiry')}&body=${encodeURIComponent('Hi Pranita,%0D%0A%0D%0A' + (e.target.message?.value || '') + '%0D%0A%0D%0A— ' + (e.target.email?.value || ''))}`}}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input id="name" name="name" placeholder="Your name" required className="w-full rounded-xl border px-3 py-2"/>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required className="w-full rounded-xl border px-3 py-2"/>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" name="message" placeholder="Tell me about your project or role…" className="w-full min-h-[120px] rounded-xl border px-3 py-2"></textarea>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button type="submit" className="inline-flex items-center rounded-xl px-3 py-2 bg-slate-900 text-white text-sm hover:bg-slate-800"><Send className="mr-2 h-4 w-4"/> Send</button>
                </div>
              </form>
              <p className="mt-3 text-xs text-slate-500">This form opens your email client. For a backend-free form, connect Netlify Forms later.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-10 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} {CV.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="/Pranita-SHAHARE-CV.pdf" className="text-sm underline flex items-center gap-1"><Download className="h-4 w-4"/> CV</a>
            <a href="#" className="text-sm underline flex items-center gap-1"><ExternalLink className="h-4 w-4"/> Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

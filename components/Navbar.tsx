'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
const links = [{href:'/#about',label:'About'},{href:'/#skills',label:'Skills'},{href:'/#education',label:'Education'},{href:'/#projects',label:'Projects'},{href:'/#contact',label:'Contact'}];
export default function Navbar(){
  const [open,setOpen]=useState(false);
  return <header className="nav-wrap"><nav className="nav container"><Link className="brand" href="/"><span className="brand-mark"><Sparkles size={17}/></span> Mahima<span className="brand-dot">.</span></Link><div className="nav-links">{links.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}</div><a className="nav-cta" href="/#contact">Let’s talk <span>↗</span></a><button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav>{open&&<div className="mobile-menu">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}<a href="/#contact" onClick={()=>setOpen(false)}>Let’s talk ↗</a></div>}</header>
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Layers3 } from 'lucide-react';
import type { Project } from '@/lib/data';
export default function ProjectCard({project}:{project:Project}) { return <article className="project-card"><Link className="project-image" href={`/projects/${project.slug}`} aria-label={`View ${project.name} details`}><Image src={project.image} alt={`${project.name} project preview`} fill sizes="(max-width: 700px) 100vw, 33vw"/><span className="image-arrow"><ArrowUpRight size={19}/></span></Link><div className="project-content"><div className="project-meta"><span>{project.category}</span><span className="status-dot">{project.status}</span></div><h3>{project.name}</h3><p>{project.tagline}</p><div className="tag-list">{project.stack.slice(0,3).map(t=><span key={t}>{t}</span>)}</div><Link className="text-link" href={`/projects/${project.slug}`}>View project details <ArrowUpRight size={16}/></Link></div></article> }

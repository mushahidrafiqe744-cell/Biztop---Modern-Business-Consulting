import React, { useState } from "react";
import { ArrowRight, X, Clock, Calendar, BookOpen, Send, CheckCircle } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  authorTitle: string;
  content: string[];
}

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Operational Sensitivity: Diagnostics for Late-Stage Startups",
      excerpt: "Why bloated operational spreadsheets conceal critical resource leaks and how to model high-efficiency operating matrices.",
      date: "September 24, 2026",
      readTime: "5 min read",
      category: "Strategy & Finance",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400",
      author: "Marcus Sterling",
      authorTitle: "Principal Consultant",
      content: [
        "In our fifteen years auditing late-stage corporate spreadsheets, we consistently notice a recurring symptom: operational bloating masquerading as high capacity. When companies scale rapidly following a Series-A or B investment, the instinctive response to friction is 'adding headcount' rather than optimizing workflow layout.",
        "This article presents the foundational diagnostics Biztop utilizes to analyze startup operations. First, we establish standard sensitivity benchmarks—measuring task-reconciliation duration against absolute administrative cost. We consistently uncover that up to 40% of administrative hours are spent on manual duplicate entries.",
        "By replacing legacy fragmented tools with clean progressive cloud integrations, companies can redirect valuable personnel from administrative syncing to high-yield client acquisition, securing double-digit YOY growth."
      ]
    },
    {
      id: 2,
      title: "Optimizing Performance Media: The 2026 ROAS Benchmark Guide",
      excerpt: "Deep-dive into multi-tier advertising funnels, conversion optimization and audience modeling techniques to lower commercial acquisition costs.",
      date: "September 18, 2026",
      readTime: "7 min read",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
      author: "Sarah Jenkins",
      authorTitle: "Director of Performance Marketing",
      content: [
        "Digital advertising has transitioned from high-reach branding to hyper-targeted intent-capture. In today's volatile network environments, static creative assets and generic landing pages fail to secure sustainable customer acquisition cost (CAC) yields.",
        "To achieve superior return on ad spend (ROAS), modern marketing requires multi-variant split-testing. This means deploying custom high-speed landing pages tailored exclusively to individual user-persona segments rather than broad groups.",
        "We recommend modeling structured behavioral followups, incorporating automatic CRM pipelines and immediate advisory calendar scheduling. This strategy minimizes lead-friction, converting passive clicks into high-intent contract meetings."
      ]
    },
    {
      id: 3,
      title: "Why Custom PWA Architecture Trumps Monolithic Native Mobile Apps",
      excerpt: "Why Progressive Web Apps provide superior offline support, lower acquisition friction, and outstanding Lighthouse page performance indices.",
      date: "September 10, 2026",
      readTime: "6 min read",
      category: "Software Engineering",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600&h=400",
      author: "Dr. Elena Rostova",
      authorTitle: "Head of Digital Technology",
      content: [
        "Deploying and maintaining separate iOS, Android, and Web applications is exceptionally expensive and creates major technical alignment difficulties. For most B2B and corporate field applications, Progressive Web Apps (PWAs) provide a superior, lightweight alternative.",
        "PWAs leverage modern service workers to run offline-first sync operations directly within client viewports. If an employee enters a loading dock or rural region, the app saves input locally, queuing transactional records to upload instantly when connection is restored.",
        "By using modern React + TypeScript + Tailwind setups, developers can build a single, unified codebase that achieves a perfect 100 Lighthouse performance index, scaling automatically across mobile and wide-panel desktop screens."
      ]
    }
  ];

  return (
    <section id="blog" className="bg-[#F7F8F1] py-20 md:py-28 relative border-t border-b border-gray-100 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Headings */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2 font-sans">
            BIZTOP PUBLISHING
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-display font-extrabold text-primary tracking-tight leading-tight">
            Latest Industry Insights
          </h2>
          <p className="text-sm md:text-base text-primary/80 font-sans mt-3">
            Read professional analyses from our executive consultants covering agile operations, performance ad funnels, and enterprise application architecture.
          </p>
        </div>

        {/* 3 Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between border border-gray-100"
            >
              <div>
                {/* Image aspect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250";
                    }}
                  />
                  
                  {/* Category overlay */}
                  <div className="absolute bottom-3 left-3 z-10 bg-primary/90 text-[#F7F8F1] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>

                {/* Info and Title */}
                <div className="p-6 space-y-3 text-left">
                  {/* Clean unboxed text metadata with typographic separators (Zero pill rule compliant) */}
                  <div className="flex items-center gap-2 text-[11px] text-gray-500 font-sans font-semibold">
                    <span>{post.date}</span>
                    <span aria-hidden="true" className="text-gray-300">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold text-base md:text-lg text-primary group-hover:text-primary/80 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed font-sans">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read button */}
              <div className="p-6 pt-0 mt-4 border-t border-gray-50 flex items-center justify-between text-left">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-primary text-[10px] font-bold uppercase">
                    {post.author[0]}
                  </div>
                  <span className="text-[11px] text-gray-600 font-semibold font-sans">{post.author}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-primary group-hover:text-secondary group-hover:underline transition-all">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal popup */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-md p-4">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-100 flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-primary text-white p-6 md:p-8 flex items-center justify-between relative shrink-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary font-mono">{selectedPost.category}</span>
                <h3 className="text-lg md:text-xl font-display font-extrabold mt-1">{selectedPost.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedPost(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-6 md:p-8 space-y-6 max-h-[55vh] overflow-y-auto">
              {/* Author metadata panel */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-sm">
                  {selectedPost.author[0]}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-primary">{selectedPost.author}</p>
                  <p className="text-[10px] text-gray-500">{selectedPost.authorTitle} · Biztop</p>
                </div>
                <div className="ml-auto text-right text-xs text-gray-400 font-medium font-sans">
                  <p>{selectedPost.date}</p>
                  <p>{selectedPost.readTime}</p>
                </div>
              </div>

              {/* Article Content blocks */}
              <div className="space-y-4 text-left font-sans text-sm md:text-base text-gray-700 leading-relaxed">
                {selectedPost.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

            </div>

            {/* Modal Footer actions */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between shrink-0">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-primary" /> Biztop Publishing
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-primary text-white font-bold text-xs py-2.5 px-6 rounded-xl hover:bg-primary/95 transition-all cursor-pointer"
              >
                Done Reading
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import { BLOG_POSTS } from '@/constants/blogData';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <PageLayout>
      <div className="bg-primary-dark py-20">
        <div className="container-content text-center max-w-2xl mx-auto">
          <div className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Resources</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Senior Care Insights
          </h1>
          <p className="text-white/70 text-lg">
            Guidance and honest information from our family-centered care team in Livingston County.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container-content">
          <div className="max-w-3xl mx-auto space-y-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl border border-border hover:border-secondary/40 hover:shadow-md transition-all duration-200 p-8 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1.5 text-text-lighter text-xs">
                    <Calendar size={13} />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-1.5 text-text-lighter text-xs">
                    <Clock size={13} />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="font-serif font-bold text-xl text-primary-dark mb-3 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-text-light text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-1.5 text-primary font-semibold text-sm">
                  Read Article
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

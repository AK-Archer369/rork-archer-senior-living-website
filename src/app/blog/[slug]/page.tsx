import { notFound } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import { getBlogPostBySlug, BLOG_POSTS } from '@/constants/blogData';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <PageLayout>
      <div className="bg-primary-dark py-16 md:py-20">
        <div className="container-content max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mb-8 text-sm font-medium">
            <ArrowLeft size={16} />
            All Articles
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Calendar size={15} className="text-secondary" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock size={15} className="text-secondary" />
              {post.readTime}
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container-content">
          <article className="max-w-3xl mx-auto">
            {post.content.map((section, i) => {
              if (section.type === 'h2') {
                return (
                  <h2 key={i} className="font-serif text-2xl md:text-3xl font-bold text-primary-dark mt-12 mb-4 pb-3 border-b-2 border-secondary">
                    {section.text}
                  </h2>
                );
              }
              if (section.type === 'p') {
                return (
                  <p key={i} className="text-text-light leading-relaxed mb-5 text-[1.05rem]">
                    {section.text}
                  </p>
                );
              }
              if (section.type === 'ul' && section.items) {
                return (
                  <ul key={i} className="my-6 bg-white rounded-2xl border-l-4 border-secondary p-7 space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2.5" />
                        <span className="text-text-light text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}

            <div className="mt-16 bg-primary rounded-2xl p-10">
              <div className="w-12 h-1 bg-secondary rounded mb-5" />
              <h3 className="font-serif font-bold text-2xl text-white mb-3">
                Ready to Schedule a Tour?
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Experience the difference of Archer Senior Living&apos;s intimate, family-centered homes
                in Pinckney and Hamburg. See why families across Livingston County choose us.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-secondary">
                  Schedule a Tour
                </Link>
                <Link href="/homes" className="btn-outline-white">
                  View Our Homes
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}

import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

function Blog() {
  return (
    <div>

      {/* Page Header */}
      <section className="bg-[#F5F0FA]/50 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#6B3FA0] uppercase mb-3">
            From Our Blog
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D2A6D] leading-tight">
            Helpful Tips & Articles
          </h1>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Guidance, insights, and stories to help you navigate elder care with confidence.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#6B3FA0]/10 text-[#6B3FA0] font-medium">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-semibold text-[#3D2A6D] text-lg mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-sm font-semibold text-[#6B3FA0] hover:text-[#F0854D] transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
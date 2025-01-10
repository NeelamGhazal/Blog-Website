import Layout from '../components/Layout'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">About Kids Blog</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <Image 
            src="/images/bf2.jpg" 
            alt="Kids having fun" 
            width={800} 
            height={600} 
            className="float-right ml-4 mb-4 rounded-lg"
          />
          <p className="mb-4">
            Welcome to Kids Blog, a magical place where learning and fun come together! We&apos;re on a mission to inspire young minds and spark creativity in children of all ages.
          </p>
          <p className="mb-4">
            Our team of passionate educators, writers, and artists work together to create engaging content that helps children learn, grow, and explore the world around them. We believe that every child has unique talents and interests, and we&apos;re here to nurture those special qualities.
          </p>
          <p className="mb-4">
            At Kids Blog, you&apos;ll find a wide range of topics including science experiments, creative crafts, fun learning activities, healthy recipes, and much more. We&apos;re committed to providing a safe, inclusive, and exciting online space for children to discover new ideas and express themselves.
          </p>
          <p>
            Join us on this amazing adventure of learning and creativity. Let&apos;s make childhood even more magical, one blog post at a time!
          </p>
        </div>
      </div>
    </Layout>
  )
}


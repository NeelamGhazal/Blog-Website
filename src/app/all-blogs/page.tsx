import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

const blogs = [
  {
    id: "1",
    title: "Fun Learning Activities",
    excerpt: "Make learning fun with exciting activities!",
    imageUrl:"/images/1.PNG",
  },
  {
    id: "2",
    title: "Creative Crafts for Kids",
    excerpt: "Unleash creativity with these fun crafts.",
    imageUrl:"/images/2.PNG",
  },
  {
    id: "3",
    title: "Healthy Snacks for Growing Minds",
    excerpt: "Discover nutritious and delicious snacks for kids.",
    imageUrl:"/images/3.PNG",
  },
  {
    id: "4",
    title: "Outdoor Adventures for Kids",
    excerpt: "Explore nature and have fun outside!",
    imageUrl:"/images/03.JPG",
  },
  {
    id: "5",
    title: "STEM Projects for Curious Kids",
    excerpt: "Engage in exciting science and tech projects.",
    imageUrl:"/images/08.JPG",
  },
  {
    id: "6",
    title: "Bedtime Stories for Sweet Dreams",
    excerpt: "Magical tales to send kids off to dreamland.",
    imageUrl:"/images/sleep.JPG",
  },
  {
    id: "7",
    title: "Kid-Friendly Recipes",
    excerpt: "Easy and fun recipes kids can help make.",
    imageUrl:"/images/7.PNG",
  },
  {
    id: "8",
    title: "Music and Movement for Kids",
    excerpt: "Get moving and grooving with fun musical activities.",
    imageUrl:"/images/music3.JPG",
  },
]

export default function AllBlogs() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">All Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
            <Image src={blog.imageUrl} alt={blog.title} width={300} height={200} className="w-full lg:h-[16rem]" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-purple-600">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <Link href={`/blog/${blog.id}`} className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors inline-block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}


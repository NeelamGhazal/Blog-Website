import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const activities = [
  {
    id: "1",
    title: "DIY Slime Making",
    description: "Learn how to make colorful, gooey slime at home!",
    imageUrl: "/images/dy.JPG",
  },
  {
    id: "2",
    title: "Backyard Scavenger Hunt",
    description: "Explore nature and find hidden treasures in your own backyard.",
    imageUrl: "/images/by2.JPG",
  },
  {
    id: "3",
    title: "Build a Fort",
    description: "Create an awesome fort using blankets, pillows, and furniture.",
    imageUrl: "/images/bf.JPG",
  },
  {
    id: "4",
    title: "Balloon Rocket Experiment",
    description: "Learn about propulsion with this fun balloon rocket activity.",
    imageUrl: "/images/br1.JPG",
  },
]

export default function FunActivities() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Fun Activities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
            src={activity.imageUrl} 
            alt={activity.title} 
            width={800} 
            height={600} 
            className="w-full lg:h-[22rem]" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-purple-600">{activity.title}</h2>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <Link href={`/fun-activities/${activity.id}`} className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors inline-block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}


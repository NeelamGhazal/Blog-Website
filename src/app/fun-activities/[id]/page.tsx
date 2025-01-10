import { notFound } from 'next/navigation'
import Image from 'next/image'
import Layout from '../../components/Layout'

const activities = [
  {
    id: "1",
    title: "DIY Slime Making",
    description: "Learn how to make colorful, gooey slime at home!",
    content: "Making slime is a fun and easy activity that kids love. Here&apos;s a simple recipe:\n\n1. In a bowl, mix 1/2 cup of white glue with 1/2 cup of water.\n2. Add food coloring of your choice.\n3. In another bowl, mix 1/2 cup of warm water with 1/2 teaspoon of borax.\n4. Pour the borax solution into the glue mixture and stir until it forms a slimy consistency.\n5. Knead the slime with your hands until it&apos;s no longer sticky.\n\nRemember to supervise children and wash hands after playing with slime!",
    imageUrl: "/images/dy1.jpg",
  },
  {
    id: "2",
    title: "Backyard Scavenger Hunt",
    description: "Explore nature and find hidden treasures in your own backyard.",
    content: "A backyard scavenger hunt is a great way to get kids outside and exploring nature. Here&apos;s how to set one up:\n\n1. Create a list of items to find, such as:\n   - A smooth rock\n   - A yellow flower\n   - A bird feather\n   - An interesting leaf\n   - A pinecone\n2. Give each child a paper bag or bucket to collect their items.\n3. Set a time limit and boundaries for the hunt.\n4. After the hunt, gather to share and discuss the found items.\n\nThis activity encourages observation skills and appreciation for nature!",
    imageUrl: "/images/by.jpg",
  },
  {
    id: "3",
    title: "Build a Fort",
    description: "Create an awesome fort using blankets, pillows, and furniture.",
    content: "Building a fort is a classic childhood activity that sparks imagination. Here&apos;s how to make an awesome indoor fort:\n\n1. Gather materials: blankets, sheets, pillows, chairs, and clothespins.\n2. Choose a base: Use a table, couch, or arrange chairs in a circle.\n3. Drape blankets over the base to create walls and a roof.\n4. Use clothespins to secure the blankets in place.\n5. Add pillows and cushions inside for comfort.\n6. Use a flashlight for lighting and bring in books or toys.\n\nEncourage kids to personalize their fort and use it for reading, playing, or even as a cozy nap spot!",
    imageUrl: "/images/bf3.JPG",
  },
  {
    id: "4",
    title: "Balloon Rocket Experiment",
    description: "Learn about propulsion with this fun balloon rocket activity.",
    content: "The balloon rocket experiment is a simple way to demonstrate Newton&apos;s Third Law of Motion. Here&apos;s how to do it:\n\n1. Thread a long piece of string through a straw.\n2. Tie the ends of the string between two chairs, keeping it taut.\n3. Blow up a balloon but don&apos;t tie it. Pinch the end to keep the air in.\n4. Tape the balloon to the straw on the string.\n5. Release the balloon and watch it zoom across the string!\n\nExplain that the air rushing out of the balloon (action) creates a forward motion (reaction). This is how real rockets work too!",
    imageUrl: "/images/br.JPG",
  },
]

export default function ActivityPage({ params }: { params: { id: string } }) {
  const activity = activities.find(a => a.id === params.id)

  if (!activity) {
    notFound()
  }

  return (
    <Layout>
      <article className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-purple-600">{activity.title}</h1>
        <Image src={activity.imageUrl} alt={activity.title} width={800} height={600} className="w-full rounded-lg mb-4" />
        <div className="prose max-w-none">
          {activity.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph.replace(/&apos;/g, "'")}</p>
          ))}
        </div>
      </article>
    </Layout>
  )
}


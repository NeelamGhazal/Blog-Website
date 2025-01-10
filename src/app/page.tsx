import Image from 'next/image'
import Link from 'next/link'
import Layout from './components/Layout'
import Hero from './components/Hero';

const blogs = [
  {
    id: "1",
    title: "Fun Learning Activities",
    excerpt: "Make learning fun with exciting activities!",
    content: "Learning can be incredibly fun when you approach it with the right activities! Here are some exciting ways to make learning enjoyable:\n\n1. Educational Board Games: Play games that teach math, language, or general knowledge.\n\n2. Science Experiments: Conduct simple, safe experiments at home to learn about scientific concepts.\n\n3. Outdoor Nature Walks: Explore your local environment and learn about plants, animals, and ecosystems.\n\n4. Cooking Together: Teach measurements, following instructions, and basic chemistry through cooking.\n\n5. Art Projects: Combine creativity with learning about colors, shapes, and art history.\n\nRemember, the key to fun learning is to keep it interactive, hands-on, and enjoyable!",
    imageUrl:"/images/1.png",
  },
  {
    id: "2",
    title: "Creative Crafts for Kids",
    excerpt: "Unleash creativity with these fun crafts.",
    content: "Crafting is a fantastic way for kids to express their creativity and learn new skills. Here are some fun craft ideas:\n\n1. Paper Mache Animals: Create colorful animal figures using paper mache.\n\n2. Friendship Bracelets: Learn to make woven bracelets to share with friends.\n\n3. Painted Rock Garden: Collect rocks and paint them to create a colorful garden decoration.\n\n4. Origami: Learn the Japanese art of paper folding to create various shapes and animals.\n\n5. Recycled Art: Use recyclable materials to create unique sculptures and artwork.\n\nRemember to always supervise children during crafting and choose age-appropriate activities. Happy crafting!",
    imageUrl:"/images/2.png",
  },
  {
    id: "3",
    title: "Healthy Snacks for Growing Minds",
    excerpt: "Discover nutritious and delicious snacks for kids.",
    content: "Providing healthy snacks is crucial for growing minds and bodies. Here are some nutritious and tasty ideas:\n\n1. Fruit and Yogurt Parfait: Layer yogurt with fresh fruits and a sprinkle of granola.\n\n2. Veggie Sticks with Hummus: Cut colorful vegetables into sticks and serve with hummus.\n\n3. Apple Slices with Peanut Butter: A classic combination of sweet and protein-rich snack.\n\n4. Homemade Trail Mix: Combine nuts, dried fruits, and a few chocolate chips for a balanced treat.\n\n5. Smoothies: Blend fruits, vegetables, and yogurt for a nutrient-packed drink.\n\nRemember to consider any allergies and always supervise young children while eating.",
    imageUrl:"/images/3.png",
  },
  {
    id: "4",
    title: "Outdoor Adventures for Kids",
    excerpt: "Explore nature and have fun outside!",
    content: "Outdoor adventures are a great way for kids to stay active and connect with nature. Try these fun activities:\n\n1. Nature Scavenger Hunt: Create a list of items to find in your local park or backyard.\n\n2. Bike Riding: Teach kids to ride a bike or go on family bike rides together.\n\n3. Gardening: Plant a small vegetable or flower garden and watch it grow over time.\n\n4. Outdoor Games: Play classic games like tag, hide-and-seek, or capture the flag.\n\n5. Star Gazing: On a clear night, lay out a blanket and observe the stars and constellations.\n\nAlways ensure proper safety measures and supervision during outdoor activities.",
    imageUrl:"/images/03.jpg",
  },
  {
    id: "5",
    title: "STEM Projects for Curious Kids",
    excerpt: "Engage in exciting science and tech projects.",
    content: "STEM (Science, Technology, Engineering, and Math) projects are excellent for fostering curiosity and problem-solving skills. Try these engaging activities:\n\n1. Build a Simple Robot: Use a small motor and household items to create a drawing robot.\n\n2. Create a Lava Lamp: Mix water, oil, food coloring, and effervescent tablets for a cool effect.\n\n3. Construct a Bridge: Use popsicle sticks to design and build a bridge, then test its strength.\n\n4. Code a Game: Introduce basic coding concepts with kid-friendly platforms like Scratch.\n\n5. Make a Solar Oven: Use a pizza box and aluminum foil to harness the sun&apos;s energy for cooking.\n\nEncourage questions and experimentation throughout these projects!",
    imageUrl:"/images/08.jpg",
  },
  {
    id: "6",
    title: "Bedtime Stories for Sweet Dreams",
    excerpt: "Magical tales to send kids off to dreamland.",
    content: "Bedtime stories are a wonderful way to end the day and promote literacy. Here are some tips for a great storytelling experience:\n\n1. Choose Age-Appropriate Books: Select stories that match your child&apos;s interests and comprehension level.\n\n2. Create a Cozy Environment: Make a comfortable reading nook with soft lighting and pillows.\n\n3. Use Different Voices: Bring characters to life by using various voices and expressions.\n\n4. Encourage Participation: Ask questions about the story or let older kids read parts aloud.\n\n5. Develop a Routine: Set a regular time for bedtime stories to create a comforting habit.\n\nRemember, the goal is to make reading an enjoyable and bonding experience for both you and your child.",
    imageUrl:"/images/sleep.jpg",
  },
  {
    id: "7",
    title: "Kid-Friendly Recipes",
    excerpt: "Easy and fun recipes kids can help make.",
    content: "Cooking with kids is a great way to teach them about nutrition, following instructions, and creativity in the kitchen. Here are some kid-friendly recipes:\n\n1. Fruit Kebabs: Thread various fruits onto skewers for a colorful and healthy snack.\n\n2. Mini Pizzas: Use English muffins as a base and let kids choose their own toppings.\n\n3. Smoothie Bowls: Blend frozen fruits with yogurt and let kids decorate with toppings.\n\n4. Veggie Faces: Create funny faces on a plate using different cut vegetables.\n\n5. No-Bake Energy Balls: Mix oats, peanut butter, honey, and chocolate chips for a tasty treat.\n\nAlways supervise children in the kitchen and teach them about kitchen safety.",
    imageUrl:"/images/7.png",
  },
  {
    id: "8",
    title: "Music and Movement for Kids",
    excerpt: "Get moving and grooving with fun musical activities.",
    content: "Music and movement activities are fantastic for children&apos;s physical and cognitive development. Try these fun ideas:\n\n1. Dance Freeze: Play music and have kids freeze when it stops.\n\n2. Musical Instrument Crafts: Create simple instruments like shakers or drums from household items.\n\n3. Singing Games: Teach classic songs with actions like &apos;Head, Shoulders, Knees, and Toes&apos;.\n\n4. Rhythm Patterns: Clap or tap out simple rhythms for kids to repeat.\n\n5. Movement Songs: Use songs that encourage specific movements like &apos;The Hokey Pokey&apos;.\n\nThese activities help develop coordination, listening skills, and creativity while having fun!",
    imageUrl:"/images/music3.jpg",
  },
]

const heroSlides = [
  {
    title: "Welcome to Kids Blog!",
    description: "Discover fun activities and exciting stories for kids of all ages.",
    imageUrl: "/images/bg6.jpg",
  },
  {
    title: "Learn Through Play",
    description: "Explore our educational games and activities to make learning fun!",
    imageUrl: "/images/p7.jpg",
  },
  {
    title: "Unleash Creativity",
    description: "Get inspired with our arts and crafts projects for young minds.",
    imageUrl: "/images/p4.jpg",
  },
]

export default function Home() {
  return (
    <Layout>
   
   {/* Hero Slider */}
   <Hero slides={heroSlides} />


      <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 ">
            <Image src={blog.imageUrl} alt={blog.title} width={800} height={600} className="w-full lg:h-[16rem]" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-teal-600">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <Link href={`/blog/${blog.id}`} className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors inline-block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/all-blogs" className="bg-teal-500 text-white px-6 py-3 rounded-full text-xl hover:bg-teal-600 transition-colors inline-block">
          See All Blogs
        </Link>
      </div>
    </Layout>
  )
}


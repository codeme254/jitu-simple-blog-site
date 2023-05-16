import Blog from "./Blog";
import Sidebar from "./Sidebar";
const blogs = [
    {
      title: "10 Tips for Effective Time Management",
      content: "Here are ten practical tips for effective time management: Set clear goals, prioritize tasks, use a calendar, minimize distractions, delegate tasks, take breaks, avoid multitasking, learn to say 'no', use technology tools, and reflect on progress. Enhance your productivity with these tips."
    },
    {
      title: "The Art of Effective Communication",
      content: "Improve your communication skills: listen actively, be clear, practice empathy, use non-verbal cues, be mindful of your tone, ask clarifying questions, provide constructive feedback, adapt to different situations, use visual aids, and practice active communication. Strengthen relationships through effective communication."
    },
    {
      title: "The Importance of Regular Exercise",
      content: "Regular exercise offers many benefits: boosts mood, improves heart health, enhances brain function, manages weight, increases energy, strengthens muscles, promotes better sleep, boosts immunity, and improves overall well-being. Prioritize exercise for a healthier life."
    },
    {
      title: "10 Must-Try Recipes for a Healthy Diet",
      content: "Enjoy these nutritious recipes: quinoa and veggie stir-fry, baked salmon with roasted vegetables, Greek salad with grilled chicken, chickpea and veggie curry, spinach and feta stuffed chicken breast, quinoa and black bean salad, avocado and shrimp salad, roasted sweet potatoes, berry smoothie, and homemade granola."
    },
    {
      title: "5 Ways to Boost Productivity at Work",
      content: "Boost productivity with these tips: plan your day, prioritize tasks, eliminate distractions, take regular breaks, and practice time-blocking. By optimizing your workflow and focusing on essential tasks, you can enhance productivity and achieve better results in the workplace."
    }
  ];
  
const BlogBody = () => {
    return(
        <section className="main-body">
            <div>
                {
                    blogs.map((blog) => {
                        return <Blog title={blog.title} content={blog.content} />
                    })
                }
            </div>
            <Sidebar />
        </section>
    )
}
export default BlogBody;

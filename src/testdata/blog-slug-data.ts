interface BlogPost {
  image: string;
  blog_title: string;
  blog_content: string;
  author: string;
  date: string;
}

// Define the structure of the BlogSlugSampleData object
interface BlogData {
  [key: string]: BlogPost;
}
export const BlogSlugSampleData : BlogData=  {
    "the-rise-of-ai-in-everyday-life": {
      image : "/money and pie chart.svg",
      blog_title: "The Rise of AI in Everyday Life",
      blog_content: "<p>Artificial intelligence is no longer a thing of the future. From voice assistants to personalized ads, AI has integrated seamlessly into our daily routines. This article explores how AI is shaping industries and our personal lives.</p>",
      author: "Jane Doe",
      date: "2024-02-14"
    },
    
    "top-10-javascript-frameworks-in-2024": {
      image: "/money and pie chart.svg",
      blog_title: "Top 10 JavaScript Frameworks in 2024",
      blog_content: "<p>JavaScript remains the dominant programming language for web development, and with numerous frameworks available, it can be challenging to choose the right one. Here are the top 10 frameworks that are leading the way in 2024.</p>",
      author: "John Smith",
      date: "2024-03-22"
    },
    "a-guide-to-remote-work-in-the-post-pandemic-era": {
      image: "/money and pie chart.svg",
      blog_title: "A Guide to Remote Work in the Post-Pandemic Era",
      blog_content: "<p>The COVID-19 pandemic revolutionized the way we work. Now, with hybrid and fully remote jobs on the rise, companies and employees need to adapt to new ways of staying productive. This guide provides essential tips and tools for remote workers.</p>",
      author: "Emily Clark",
      date: "2024-01-05"
    },
    "the-future-of-electric-vehicles": {
      image: "/money and pie chart.svg",
      blog_title: "The Future of Electric Vehicles",
      blog_content: "<p>With major automotive companies investing heavily in electric vehicles (EVs), the future of transportation is green. In this blog, we discuss the advancements in EV technology and what to expect in the next decade.</p>",
      author: "Robert Miles",
      date: "2024-04-10"
    },
    "how-blockchain-is-changing-finance": {
      image: "/money and pie chart.svg",
      blog_title: "How Blockchain is Changing Finance",
      blog_content: "<p>Blockchain technology has disrupted the financial world, offering decentralized and transparent ways of managing transactions. This article delves into how blockchain is impacting industries beyond cryptocurrency.</p>",
      author: "Linda Turner",
      date: "2024-05-15"
    },
    "healthy-habits-for-a-productive-morning": {
      image: "/money and pie chart.svg",
      blog_title: "Healthy Habits for a Productive Morning",
      blog_content: "<p>Starting your day right sets the tone for success. From morning routines to diet tips, this blog highlights key habits that can make your mornings more productive and your days more fulfilling.</p>",
      author: "Michael Anderson",
      date: "2024-02-28"
    },
    "cybersecurity-tips-for-small-businesses": {
      image: "/money and pie chart.svg",
      blog_title: "Cybersecurity Tips for Small Businesses",
      blog_content: "<p>With cyber threats on the rise, small businesses need to prioritize their digital security. This blog covers essential cybersecurity tips that can protect your company from data breaches and other online threats.</p>",
      author: "Sophie Williams",
      date: "2024-06-07"
    },
    "exploring-the-world-of-virtual-reality": {
      image: "/money and pie chart.svg",
      blog_title: "Exploring the World of Virtual Reality",
      blog_content: "<p>Virtual Reality (VR) is not just for gaming anymore. From education to real estate, VR is being used in various industries. Discover how this technology is revolutionizing the way we experience digital worlds.</p>",
      author: "David Lee",
      date: "2024-07-19"
    }
  };
  
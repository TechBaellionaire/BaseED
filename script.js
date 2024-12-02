// Simulated Blog Posts from Base.org
const blogPosts = [
    {
        title: "Unlocking the Power of Blockchain in Education",
        date: "November 25, 2024",
        summary: "Discover how blockchain technology is transforming education in Nigerian universities.",
        category: "blockchain",
        link: "#"
    },
    {
        title: "Top 5 Online Learning Resources for Nigerian Students",
        date: "November 20, 2024",
        summary: "Explore the best online platforms for Nigerian students looking to expand their knowledge.",
        category: "education",
        link: "#"
    },
    {
        title: "How Decentralized Learning Can Empower Rural Communities",
        date: "November 15, 2024",
        summary: "Learn how decentralized solutions can bring education to underserved communities.",
        category: "community",
        link: "#"
    },
    {
        title: "The Role of Smart Contracts in Transparent Funding",
        date: "November 10, 2024",
        summary: "Explore how smart contracts ensure transparency in educational funding.",
        category: "blockchain",
        link: "#"
    }
];

// Function to render blog posts based on selected category
function renderBlogPosts(category = 'all') {
    const container = document.getElementById('blog-container');
    container.innerHTML = ''; // Clear previous posts

    // Filter posts based on selected category
    const filteredPosts = blogPosts.filter(post => category === 'all' || post.category === category);

    // Display filtered posts
    filteredPosts.forEach(post => {
        const blogPostElement = document.createElement('div');
        blogPostElement.className = 'blog-post';
        blogPostElement.innerHTML = `
            <h2>${post.title}</h2>
            <p class="date">${post.date}</p>
            <p>${post.summary}</p>
            <a href="${post.link}" class="read-more">Read More</a>
        `;
        container.appendChild(blogPostElement);
    });
}

// Event listener for category filter
document.getElementById('category').addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    renderBlogPosts(selectedCategory);
});

// Initial render
renderBlogPosts();

import './App.css';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-indigo-600">Mamta K Yadav</h1>
          <ul className="hidden md:flex space-x-8 font-medium">
            <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm Mamta 👋</h2>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          A passionate developer who loves building clean, modern, and user-friendly web applications.
        </p>
        <a href="#projects" className="mt-8 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">About Me</h3>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="https://via.placeholder.com/400" alt="Profile" className="rounded-2xl shadow-lg" />
          <p className="text-lg leading-relaxed">
            I am Mamta, a developer with a strong interest in creating interactive and modern websites.
            I enjoy learning new technologies and applying them in projects. 
            My focus is on clean design, accessibility, and performance.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Project 1</h4>
            <p className="text-gray-600">Brief description of the project and technologies used.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Project 2</h4>
            <p className="text-gray-600">Brief description of the project and technologies used.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Project 3</h4>
            <p className="text-gray-600">Brief description of the project and technologies used.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
        <p className="mb-6 text-lg">I’d love to connect with you! Feel free to reach out via email or social links below.</p>
        <a href="mailto:your-email@example.com" className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-md hover:bg-indigo-700 transition">
          Send Email
        </a>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-gray-500 hover:text-indigo-600">GitHub</a>
          <a href="#" className="text-gray-500 hover:text-indigo-600">LinkedIn</a>
          <a href="#" className="text-gray-500 hover:text-indigo-600">Twitter</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© 2025 Mamta K Yadav. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


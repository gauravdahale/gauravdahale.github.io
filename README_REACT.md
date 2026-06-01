# 🚀 Gaurav Dahale - React Portfolio

A modern, responsive portfolio website built with React, featuring smooth animations, dark theme, and a showcase of featured projects.

## 🌟 Features

- **Modern Design**: Dark theme with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized React components with smooth scrolling
- **Project Showcase**: Display featured projects with filtering
- **Skills Display**: Visual skill progression bars
- **Contact Form**: Get in touch section
- **Social Integration**: Links to GitHub, LinkedIn, Twitter
- **Animations**: Smooth fade-in and slide animations throughout

## 🛠️ Technologies Used

- **React** 18.2.0 - UI Library
- **React Router** 6.20.0 - Routing
- **React Icons** 4.12.0 - Icon library
- **Framer Motion** 10.16.16 - Advanced animations
- **CSS3** - Custom styling with animations
- **Emotion** - CSS-in-JS styling
- **Firebase** - Backend (optional)

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/gauravdahale/gauravdahale.github.io.git
cd gauravdahale.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## 🚀 Deployment

### Deploy to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy using gh-pages:
```bash
npm run deploy
```

Or manually:
```bash
npm install -g gh-pages
gh-pages -d build
```

Your portfolio will be live at: `https://gauravdahale.github.io`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Contact.js
│   ├── Footer.js
│   └── *.css (Component styles)
├── App.js
├── App.css
├── index.js
└── index.css

public/
├── index.html
├── manifest.json
└── google*.html (Google verification)
```

## 🎨 Customization

### Update Personal Information

Edit `src/components/Hero.js`:
```javascript
<h1 className="hero-title">
  Hi, I'm <span className="highlight">Your Name</span>
</h1>
```

### Add Your Projects

Edit `src/components/Projects.js` - Update the `projects` array:
```javascript
const projects = [
  {
    id: 1,
    name: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Node.js'],
    category: 'web',
    github: 'https://github.com/...',
    demo: 'https://...'
  }
];
```

### Modify Skills

Edit `src/components/Skills.js` - Update `skillCategories` array

### Update Social Links

Edit `src/components/Hero.js` and `src/components/Footer.js`:
```javascript
<a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
  <FaGithub />
</a>
```

### Change Color Scheme

Edit `src/index.css` - Update the color values:
```css
--primary: #00d4ff;
--secondary: #0099cc;
```

## 📝 Contact Form

The contact form in `Contact.js` currently logs to console. To send emails:

1. Integrate with EmailJS:
```bash
npm install @emailjs/browser
```

2. Update the form submission in `Contact.js`:
```javascript
import emailjs from '@emailjs/browser';

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

## 📊 SEO Optimization

- Meta tags included in `public/index.html`
- Google Search Console verification file
- Semantic HTML structure
- Mobile-friendly design

## 🔍 Google Search Console

To verify your site:
1. Go to Google Search Console
2. Add property: `https://gauravdahale.github.io`
3. Use the HTML file verification method
4. The verification file is already included in the repo

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## 🚀 Performance Tips

- Images are optimized
- CSS is minified
- Code splitting enabled
- Lazy loading for components

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Gaurav Dahale**
- GitHub: [@gauravdahale](https://github.com/gauravdahale)
- LinkedIn: [gauravdahale](https://linkedin.com/in/gauravdahale)
- Email: gaurav@example.com

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use!

## 📞 Support

If you have questions or need help, feel free to open an issue or contact me directly.

---

Made with ❤️ using React

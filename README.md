# Modern Portfolio Website

A sleek and modern portfolio website built with React, featuring smooth animations, responsive design, and an elegant dark theme.

![Portfolio Preview](/public/images/portfolio1.jpg)

## 🌟 Features

- **Modern Design**
  - Dark theme with teal accents
  - Smooth animations and transitions
  - Custom scrollbar and smooth scrolling
  - Responsive layout for all devices

- **Interactive Components**
  - Animated hero section
  - Timeline-based About page
  - Project showcase with detailed views
  - Image carousels with zoom capability
  - Contact form with validation

- **Technical Features**
  - React.js with hooks
  - Material-UI components
  - Framer Motion animations
  - React Router for navigation
  - Smooth scrolling with Lenis
  - Responsive images and lazy loading

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:3000`

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Material-UI](https://mui.com/) - UI component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [@studio-freight/lenis](https://github.com/studio-freight/lenis) - Smooth scrolling
- [React Router](https://reactrouter.com/) - Navigation
- [EmailJS](https://www.emailjs.com/) - Email service

## 📁 Project Structure

```
portfolio/
├── public/
│   └── images/         # Project images
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom hooks
│   ├── theme/         # Theme configuration
│   ├── App.js         # Main app component
│   └── index.js       # Entry point
├── package.json
└── README.md
```

## 📱 Components

- **Navbar**: Responsive navigation with smooth scroll links
- **Hero**: Animated landing section
- **About**: Timeline-based story with image carousels
- **Projects**: Grid layout with project cards
- **ProjectDetail**: Detailed project view with image gallery
- **Contact**: Contact form with social links

## 🎨 Customization

1. **Theme**: Edit colors and typography in `src/theme/index.js`
2. **Content**: Update project data in respective components
3. **Images**: Replace images in `public/images/` directory
4. **Animations**: Modify animation parameters in components

## 📦 Deployment

Build the project for production:

```bash
npm run build
```

The build files will be in the `build/` directory, ready for deployment to your preferred hosting platform.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Material-UI for the component library
- Framer Motion for smooth animations
- Studio Freight for the Lenis smooth scroll library

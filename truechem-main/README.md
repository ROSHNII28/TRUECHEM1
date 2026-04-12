# TRUECHEM — React Website

A modern, professional corporate website for TRUECHEM, built with React.js.

## 📁 Project Structure

```
truechem/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Products.css
│   │   └── Contact.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at **http://localhost:5000**

### Build for Production

```bash
npm run build
```

## 🎨 Design System

- **Fonts**: Sora (display/headings) + DM Sans (body)
- **Primary Color**: Blue (#1a56cc / #2563eb)
- **Theme**: Light, corporate, professional
- **CSS Variables**: Defined in `global.css`

## 📄 Pages

| Page     | Route       | Description                              |
|----------|-------------|------------------------------------------|
| Home     | `/`         | Hero, Mission, About strip, Vision, CTA  |
| About    | `/about`    | Company story, values, timeline, offices |
| Products | `/products` | Construction + Paint product catalogue   |
| Contact  | `/contact`  | Contact info, enquiry form, IndiaMART    |

## 📦 Dependencies

- `react` + `react-dom` — UI framework
- `react-router-dom` — Client-side routing
- `react-icons` — Icon library (MD + FA icon sets)
- `framer-motion` — Animation (ready to extend)

## 📞 Contact Details (embedded in site)

- **Email**: Sales@truechem.co.in
- **Phone**: +91 9979997334 / 9869125603
- **Address**: 101, Rajasthan Technical Centre, LBS Marg, Ghatkopar West, Mumbai – 400086
- **IndiaMART**: https://www.indiamart.com/true-chem/

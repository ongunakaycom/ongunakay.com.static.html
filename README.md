# 🌐 Ongun Akay – Front-End Portfolio (CI/CD Enabled)

Welcome to my personal portfolio website! Built using modern front-end technologies and deployed via **GitHub Actions** to **GitHub Pages**, this portfolio showcases my experience, professional background, and selected works in web development, email marketing, and digital design.

> 🔧 **Live Site:** [ongunakay.com](https://ongunakay.com)  
> 📦 **Repository:** [View on GitHub](https://github.com/ongunakaycom/your-repo-name)

---

## ✨ Features

- Fully responsive static website
- Clean semantic HTML5 structure
- Custom CSS and layout system
- Optimized for performance and SEO
- Deployed with **GitHub Actions CI/CD** to GitHub Pages
- Modular file organization for easy maintenance

---

## 🛠 Tech Stack

| Layer       | Technology                 |
|------------|----------------------------|
| Markup     | HTML5                      |
| Styling    | CSS3, Normalize.css        |
| Scripts    | Vanilla JavaScript         |
| Fonts      | Google Fonts               |
| Deployment | GitHub Pages + Actions     |

---

## 📁 Project Structure

```

portfolio/
├── .github/workflows/     # CI/CD config (GitHub Actions)
├── css/                   # Custom and utility styles
├── js/                    # JavaScript for interactivity
├── images/                # Project assets and icons
├── index.html             # Homepage
├── about.html             # About page
├── works.html             # Portfolio/Projects
├── portfolio.html         # Resume or extended portfolio
├── LICENSE                # MIT License
└── README.md              # This file

````

---

## 🚀 Deployment – GitHub Pages (CI/CD)

This site is automatically deployed on push to the `main` branch using GitHub Actions.

### CI/CD Workflow

`.github/workflows/static.yml`

```yaml
name: Deploy static content to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
````

---

## 👨‍💻 About the Developer

Ongun Akay, a Senior Full-Stack Developer with expertise across various technologies.

👀 I specialize in full-stack development with extensive experience in frontend and backend technologies.
🌱 Currently, I'm sharpening my skills in advanced concepts of web development.
💞️ I’m always open to exciting collaborations and projects that challenge my abilities.
📫 You can reach me at info@ongunakay.com.

* 🌐 Website: [ongunakay.com](https://ongunakay.com)
* 💼 LinkedIn: [linkedin.com/in/ongunakay](https://www.linkedin.com/in/ongunakay/)
* 🧑‍💻 GitHub: [github.com/ongunakaycom](https://github.com/ongunakaycom)
* 📬 Email: [info@ongunakay.com](mailto:info@ongunakay.com)

---

## 📜 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---

## 🤝 Contributions

While this is a personal project, feel free to fork it as a template for your own static portfolio. Pull requests and feedback are welcome if you’d like to suggest improvements.

---



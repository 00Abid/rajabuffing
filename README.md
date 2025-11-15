# RAJA BUFFING WORKS - Website

Professional utensil buffing and polishing services website built with Next.js 16.

## 🚀 Features

### Performance Optimizations
- **OptimizedImage Component** - Automatic WebP/AVIF conversion, lazy loading, blur placeholders
- **OptimizedVideo Component** - Intersection observer lazy loading, poster images
- **Responsive Images** - Proper srcset and sizes for all screen sizes
- **Next.js Image Optimization** - Automatic image optimization and caching

### SEO Features
- **Dynamic Sitemap** - Auto-generated XML sitemap for all pages
- **Custom 404 Page** - SEO-friendly error page with navigation
- **Meta Tags** - Unique titles, descriptions, and keywords per page
- **Canonical URLs** - Proper canonical tags on all pages
- **Robots.txt** - Search engine crawling directives
- **Breadcrumb Navigation** - Visual breadcrumbs on all pages

### Pages
- **Homepage** - Hero video, about section, capabilities, catalogue download
- **Products** - Utensil types we service (sauce pots, milk pots, woks, silverware)
- **Machinery** - Industrial buffing equipment showcase
- **Blog** - Articles on utensil care and maintenance
- **Testimonials** - Customer reviews and success stories
- **Contact** - Contact form and business information

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.3 (App Router)
- **React:** 19.2.0
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Language:** JavaScript
- **Deployment:** Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── blog/             # Blog pages
│   │   ├── [slug]/       # Dynamic blog post pages
│   │   └── page.js       # Blog listing
│   ├── components/       # App-specific components
│   │   ├── Footer.js
│   │   ├── Form.js
│   │   └── Navbar.js
│   ├── Contact/          # Contact page
│   ├── Machinery/        # Machinery page
│   ├── Products/         # Products page
│   ├── testimonials/     # Testimonials page
│   ├── layout.js         # Root layout
│   ├── page.js           # Homepage
│   ├── sitemap.js        # Dynamic sitemap
│   ├── robots.txt        # Robots directives
│   └── globals.css       # Global styles
└── public/               # Static assets
    ├── about.webp
    ├── home.mp4
    ├── og.webp
    └── ...
```




## 🔒 Security Features
### Image Optimization
- Automatic format conversion (WebP, AVIF)
- Responsive image sizes
- Lazy loading for below-fold images
- Blur placeholders for better UX



## 🤝 Contributing

This is a private business website. For inquiries, please contact us directly.

Built with ❤️ using Next.js 16

# Design Studio — Statamic Starter Kit

A polished design agency starter kit for [Statamic](https://statamic.com) built by [WebbyCrown](https://webbycrown.com). One global **Page** template powers every marketing page through composable **Theme sections** — editors add, remove, and reorder sections from the Control Panel without touching code.

---

## Features

- **One Page template** — all pages share a single `page.antlers.html` with a page builder
- **Theme sections** — 35+ reusable sections covering hero variants, listings, testimonials, pricing, FAQ, careers, contact, and more
- **Collection-driven listings** — Services, Projects, News, Blogs, Team, Testimonials, FAQs, and Pricing Plans all pull from Statamic collections
- **Global Settings** — site name, logo, phone, email, address, social links, and map embed managed in one global
- **AJAX forms** — Contact and Career application forms submit without page reload
- **Dark / light theme toggle** — built-in theme switcher in the header
- **Responsive** — mobile-first layout with CSS custom properties
- Statamic Core includes one form submission inbox. If you keep both **Contact** and **Career** forms you will need [Statamic Pro](https://statamic.com/pricing)

## Third-party libraries

See [THIRD_PARTY.md](THIRD_PARTY.md) for the full list of bundled libraries and their licences.

## Requirements

- PHP 8.1+
- [Statamic](https://statamic.com) ^5.0

## Installation

Install this kit via the Statamic CLI or the Control Panel Marketplace.

```bash
statamic new my-site webbycrown/design-studio-statamic-theme
```

After installation run:

```bash
php please stache:refresh
php artisan view:clear
```

## Page builder

Every page entry has a **Theme sections** tab in the Control Panel. Click **Add section**, choose a section type, fill in the fields, and drag to reorder. The available section groups are:

**Content** — Home Hero, About Teaser, About Circle, About Hero, Our Story, CTA Ready, Working Process, Career Intro, Step Work, Contact Form, Contact Info, Contact Map, Presentation Hero, Features List, Inner Pages Slider, Text Section

**Listings** — Services List, Services Listing, Projects Grid, Projects Listing, News List, News Listing, Blog List, Blog Cards, Blog Cards Three-col, Team Listing, Team Grid, Testimonials Slider, Testimonials Slider Two, Testimonials Grid, Pricing Plans, FAQs, Careers Table, Pages Index

## Globals

Navigate to **Globals → Setting** to configure site name, logo, contact details, social URLs, and the Google Maps embed URL.

## Support

[github.com/webbycrown/design-studio-statamic-theme/issues](https://github.com/webbycrown/design-studio-statamic-theme/issues)

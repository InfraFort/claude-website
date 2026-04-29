# Luxury Nails

Premium showcase website for a nail technician business. Built with React, Tailwind CSS, and a minimal Go server, packaged into a **scratch** Docker container (~7 MB).

## Quick Start

```bash
docker compose up -d --build
```

Visit **http://localhost:9090**

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Tailwind CSS, Vite |
| Server | Go (static binary, stdlib only) |
| Container | Multi-stage build → `scratch` |

## Project Structure

```
├── src/
│   ├── components/      # Hero, About, Services, Gallery, Contact, Footer, Lightbox
│   ├── data/
│   │   ├── config.ts    # Business info, social links, contact details
│   │   └── services.ts  # Service list with pricing (add/remove here)
│   └── hooks/           # Scroll animation hook
├── server/
│   └── main.go          # Static file server + secure image endpoint
├── images/              # Your photos go here (not publicly exposed)
├── Dockerfile           # 3-stage: Node build → Go build → scratch
└── docker-compose.yml
```

## Configuration

### Business Info & Social Links

Edit `src/data/config.ts` to update the business name, tagline, contact links, and social media URLs.

### Services & Pricing

Edit `src/data/services.ts` to add, remove, or update services. Each entry has a name, description, price, and optional duration.

### Gallery Images

1. Drop your photos into the `images/` folder.
2. Update the `galleryImages` array in `src/components/Gallery.tsx` with the filenames.
3. Rebuild the container.

Required image filenames:

| Image | Used In |
|-------|---------|
| `hero.jpg` | Hero section |
| `about.jpg` | About section |
| `gallery-1.jpg` … `gallery-9.jpg` | Portfolio gallery |

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.svg`

## Image Security

Images are stored in `/app/images/` inside the container and are **not** served from the public static folder. They are delivered through a controlled Go endpoint (`/api/images/{filename}`) with path traversal protection and directory listing disabled.

When using `docker-compose`, the `images/` folder is mounted as a **read-only volume**, so you can swap photos without rebuilding.

## Building

```bash
# With Docker Compose
docker compose up -d --build

# Or manually
docker build -t luxury-nails .
docker run -p 9090:9090 -v ./images:/app/images:ro luxury-nails
```

## Features

- Mobile-first responsive design
- Masonry photo gallery with lightbox modal
- Fade-in-on-scroll animations
- Elegant hover effects
- WhatsApp / Instagram / Telegram contact buttons
- Soft neutral tones with gold accents
- Google Fonts (Playfair Display + Inter)

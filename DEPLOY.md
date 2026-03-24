# Deployment Guide

## Your AI INSTALLER Landing Page is Ready!

**GitHub Repository**: https://github.com/hamnhugs/ai-installer-landing

## Quick Deploy to Vercel (3 Easy Steps)

### Option 1: Deploy via Vercel Dashboard (Recommended - No CLI needed)

1. **Go to Vercel**: https://vercel.com/new
2. **Import Your Repository**:
   - Click "Import Git Repository"
   - Select or authorize GitHub
   - Find and select: `hamnhugs/ai-installer-landing`
3. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically detect it's a static HTML site
   - Your site will be live in ~30 seconds!

Your URL will be something like: `ai-installer-landing.vercel.app`

### Option 2: Deploy via CLI

If you want to deploy via command line:

```bash
cd /root/ai-installer-landing
vercel login  # Follow the prompts to authenticate
vercel --prod
```

## Custom Domain (Optional)

Once deployed on Vercel:

1. Go to your project settings on Vercel dashboard
2. Navigate to "Domains"
3. Add your custom domain (e.g., `aiinstaller.com`)
4. Follow Vercel's DNS configuration instructions

## Project Structure

```
ai-installer-landing/
├── index.html       # Main landing page
├── vercel.json      # Vercel configuration
├── README.md        # Project documentation
├── .gitignore       # Git ignore rules
└── DEPLOY.md        # This file
```

## Features Included

- Fully responsive design
- Blueprint-style technical aesthetic
- TailwindCSS via CDN
- Google Fonts (Work Sans, Inter)
- Material Symbols icons
- Interactive demo section
- SEO-friendly HTML structure

## Environment

- **Platform**: Static HTML/CSS/JS
- **Framework**: None (vanilla HTML with Tailwind CSS)
- **CDN**: Tailwind CSS, Google Fonts
- **Build**: No build step required

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- GitHub Repository: https://github.com/hamnhugs/ai-installer-landing

# Deployment Guide for Movimento Fitness Studio

## Option 1: Vercel (Recommended) ⚡

### Prerequisites
- GitHub/GitLab/Bitbucket account
- Vercel account (sign up at https://vercel.com)

### Steps:

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/fitness-studio-landing.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Environment Variables** (if needed):
   - In Vercel dashboard → Settings → Environment Variables
   - Add any API keys or secrets

4. **Set up Custom Domain**:
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain (e.g., movimento.fitness)
   - Follow DNS configuration instructions
   - Vercel provides free SSL certificates automatically

### Post-Deployment:
- Update all URLs in your code from `https://movimento.fitness` to your actual domain
- Vercel will automatically redeploy on every git push to main

---

## Option 2: Netlify 🌐

### Steps:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your site**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy
   ```

4. **For production deployment**:
   ```bash
   netlify deploy --prod
   ```

Or use Netlify's web interface:
- Go to https://app.netlify.com
- Drag and drop your `.next` folder
- Or connect your Git repository

---

## Option 3: AWS Amplify ☁️

### Steps:

1. **Install AWS Amplify CLI**:
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**:
   ```bash
   amplify init
   amplify add hosting
   amplify publish
   ```

---

## Option 4: Self-Hosting with Docker 🐳

### Create Dockerfile:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Update next.config.js:
Add `output: 'standalone'` to enable Docker support.

### Deploy:
```bash
docker build -t movimento-fitness .
docker run -p 3000:3000 movimento-fitness
```

---

## Option 5: Railway 🚂

1. Go to https://railway.app
2. Click "Start a New Project"
3. Connect your GitHub repository
4. Railway auto-detects Next.js and deploys
5. Add custom domain in settings

---

## Option 6: DigitalOcean App Platform 💧

1. Go to https://cloud.digitalocean.com/apps
2. Click "Create App"
3. Connect your GitHub repository
4. Select "Next.js" as the framework
5. Configure and deploy

---

## Pre-Deployment Checklist ✅

Before deploying, make sure to:

- [ ] Update all placeholder URLs with your actual domain
- [ ] Add environment variables (if any)
- [ ] Test the build locally: `npm run build && npm start`
- [ ] Add proper error tracking (Sentry, LogRocket, etc.)
- [ ] Configure analytics (Google Analytics, Vercel Analytics)
- [ ] Set up Google Search Console
- [ ] Create proper social media images (OG images)
- [ ] Test on multiple devices and browsers
- [ ] Check Lighthouse score for performance
- [ ] Verify all forms and APIs work
- [ ] Set up monitoring and uptime alerts

---

## Post-Deployment Tasks 📋

1. **Update SEO Settings**:
   - Add your actual domain to `src/app/layout.tsx`
   - Add your actual domain to `src/app/sitemap.ts`
   - Update `src/components/StructuredData.tsx` with business info

2. **Submit to Search Engines**:
   - Submit sitemap to Google Search Console
   - Submit to Bing Webmaster Tools
   - Submit to other search engines

3. **Set up Monitoring**:
   - Vercel Analytics (already installed)
   - Google Analytics 4
   - Error tracking (Sentry)
   - Uptime monitoring (UptimeRobot, Pingdom)

4. **Configure DNS & SSL**:
   - Point your domain to the hosting provider
   - Verify SSL certificate is active
   - Set up www redirect if needed

5. **Performance Optimization**:
   - Enable CDN (usually automatic with Vercel/Netlify)
   - Optimize images (use next/image)
   - Enable caching headers
   - Monitor Core Web Vitals

---

## Quick Deploy Commands

### Local Testing:
```bash
npm run dev          # Development server
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Check for errors
```

### Vercel CLI (Alternative):
```bash
npm i -g vercel
vercel              # Deploy to preview
vercel --prod       # Deploy to production
```

---

## Environment Variables

If you need environment variables, create `.env.local`:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://movimento.fitness
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# Add any API keys here
```

**Important**: Never commit `.env.local` to Git. Add it to `.gitignore`.

---

## Troubleshooting

### Build Fails:
- Check Node.js version (should be 18+)
- Run `npm ci` to clean install dependencies
- Check for TypeScript errors: `npm run build`

### 404 on Routes:
- Ensure dynamic routes are properly configured
- Check `next.config.js` settings

### Images Not Loading:
- Verify images are in `/public` folder
- Check image paths are correct
- Configure image domains in `next.config.js` if using external images

### Slow Performance:
- Enable image optimization
- Use `next/font` for font optimization (already done)
- Implement lazy loading for components
- Check Lighthouse report

---

## Support & Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Next.js Discord: https://nextjs.org/discord
- Deployment Issues: Check build logs in your hosting dashboard

---

**Need help?** Check your hosting provider's documentation or contact their support team.

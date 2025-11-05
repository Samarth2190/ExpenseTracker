# Deployment Guide

This guide will help you deploy your Expense Tracker application.

## 🚀 Recommended: Render (Free Tier)

### Prerequisites
1. GitHub account
2. Render account (sign up at https://render.com)
3. MongoDB Atlas account (already configured)

### Step-by-Step Deployment

#### 1. Push to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Create a repository on GitHub, then:
git remote add origin <your-github-repo-url>
git push -u origin main
```

#### 2. Deploy on Render

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name**: expense-tracker (or any name you prefer)
   - **Environment**: Node
   - **Build Command**: `npm install && npm run client-install && npm run build --prefix client`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. **Add Environment Variables:**
   - `NODE_ENV` = `production`
   - `PORT` = `10000` (or leave blank, Render will assign)
   - `DB_USERNAME` = Your MongoDB username
   - `DB_PASSWORD` = Your MongoDB password

6. **Click "Create Web Service"**
7. **Wait for deployment** (takes 5-10 minutes)

#### 3. Update MongoDB Atlas Whitelist

1. Go to MongoDB Atlas Dashboard
2. Click "Network Access"
3. Add IP Address: `0.0.0.0/0` (allows all IPs) OR add Render's IP
4. Save

#### 4. Your app is live! 🎉

Your app will be available at: `https://your-app-name.onrender.com`

---

## 🚂 Alternative: Railway

### Steps:

1. **Sign up at Railway**: https://railway.app
2. **New Project → Deploy from GitHub**
3. **Select your repository**
4. **Add Environment Variables:**
   - `NODE_ENV` = `production`
   - `DB_USERNAME` = Your MongoDB username
   - `DB_PASSWORD` = Your MongoDB password
5. **Railway will auto-detect Node.js and deploy**

---

## 🌐 Alternative: Vercel + Render (Separate Frontend/Backend)

### Frontend on Vercel:

1. **Deploy React app to Vercel:**
   - Go to https://vercel.com
   - Import your GitHub repo
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - Deploy

2. **Update API calls:**
   - Change `axios.post("/api/...")` to your backend URL
   - Or use environment variables for API URL

### Backend on Render:

1. Follow Render steps above, but only deploy the backend
2. Update CORS in server.js to allow Vercel domain

---

## 📝 Important Notes

### Environment Variables
Never commit `.env` file to GitHub. Always set environment variables in your hosting platform's dashboard.

### MongoDB Connection
- Ensure MongoDB Atlas allows connections from your deployment platform
- Whitelist IP addresses in MongoDB Atlas Network Access

### Build Process
The app will:
1. Install backend dependencies
2. Install frontend dependencies  
3. Build React app for production
4. Serve everything from Express server

### Custom Domain
Most platforms allow you to add a custom domain:
- Render: Settings → Custom Domains
- Railway: Settings → Domains
- Vercel: Project Settings → Domains

---

## 🔧 Troubleshooting

### Build fails
- Check Node.js version compatibility
- Ensure all dependencies are in package.json
- Check build logs for specific errors

### MongoDB connection fails
- Verify environment variables are set correctly
- Check MongoDB Atlas IP whitelist
- Ensure MongoDB username/password are URL-encoded if needed

### App works locally but not deployed
- Check environment variables
- Verify NODE_ENV is set to production
- Check server logs in deployment platform

---

## 💰 Cost Comparison

| Platform | Free Tier | Paid Plans |
|----------|-----------|------------|
| **Render** | ✅ Yes (spins down after inactivity) | $7/month+ |
| **Railway** | ✅ Yes ($5 credit/month) | $5/month+ |
| **Vercel** | ✅ Yes | $20/month+ |
| **Netlify** | ✅ Yes | $19/month+ |
| **Heroku** | ❌ No longer free | $7/month+ |

---

## ✅ Quick Checklist

- [ ] Code pushed to GitHub
- [ ] Environment variables configured
- [ ] MongoDB Atlas IP whitelist updated
- [ ] Build command configured
- [ ] Start command configured
- [ ] App deployed successfully
- [ ] Test all features in production

---

## 🎯 Recommended Setup

For this project, **Render** is the best choice because:
- ✅ Free tier available
- ✅ Handles full-stack apps easily
- ✅ Simple setup process
- ✅ Automatic HTTPS
- ✅ Good documentation

Happy deploying! 🚀


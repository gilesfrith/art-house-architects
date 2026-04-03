# ART HOUSE architects — website

React + Vite site. Deploys to Vercel in ~2 minutes.

---

## 1. Install Node.js (one-time, Mac with Homebrew)

You only need to do this once. Open **Terminal** (Spotlight → type "Terminal"):

```bash
brew install node
```

Verify it worked:

```bash
node --version   # should print something like v22.x.x
npm --version    # should print something like 10.x.x
```

---

## 2. Run the site locally

```bash
# Unzip and enter the project folder
cd ~/Downloads/art-house-architects

# Install dependencies (one-time, creates node_modules/)
npm install

# Start the local dev server
npm run dev
```

Open **http://localhost:5173** in your browser. To stop: press `Ctrl + C` in Terminal.

---

## 3. Put the project on GitHub

Install Git if you don't have it:

```bash
brew install git
```

Go to **https://github.com** → sign up or log in → click **New repository**:
- Name it `art-house-architects`
- Leave it **Public** (required for Vercel free tier)
- **Do not** check "Add a README" — keep it empty

Then back in Terminal:

```bash
cd ~/Downloads/art-house-architects
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/art-house-architects.git
git branch -M main
git push -u origin main
```

> Replace YOUR_GITHUB_USERNAME with your actual GitHub username.

---

## 4. Deploy to Vercel

1. Go to **https://vercel.com** → click **Sign Up** → choose **Continue with GitHub**
2. Click **Add New Project**
3. Find `art-house-architects` in your repo list → click **Import**
4. Vercel auto-detects Vite — don't change any settings → click **Deploy**
5. Wait ~60 seconds → your site is live at `art-house-architects.vercel.app`

Every time you push to GitHub, Vercel redeploys automatically.

---

## 5. Set up the contact form (Formspree — free)

1. Go to **https://formspree.io** → sign up free
2. Click **New Form** → name it "ART HOUSE Contact"
3. Copy the **Form ID** (e.g. `xpwzgkab`)
4. Open `src/components/ContactForm.jsx` in any text editor
5. Replace `YOUR_FORM_ID` on line 6:
   ```js
   const FORMSPREE_ID = 'xpwzgkab'
   ```
6. Save, then push:
   ```bash
   git add .
   git commit -m "add formspree contact form"
   git push
   ```

Formspree will email submissions to whatever address you set in its dashboard.

---

## 6. Point the real domain to Vercel

1. In your Vercel project → **Settings → Domains**
2. Add `arthousearchitects.com` and `www.arthousearchitects.com`
3. Vercel shows you DNS records to add (an A record and a CNAME)
4. Log in to wherever the domain is registered (GoDaddy, Namecheap, etc.)
5. Find **DNS Settings** and paste those records in
6. Wait 5–30 min → the real domain goes live

---

## Updating content

| What                  | File                                      |
|-----------------------|-------------------------------------------|
| Projects / photos     | `src/data/projects.js`                    |
| About text / bio      | `src/pages/About.jsx`                     |
| Hero image            | `src/pages/Home.jsx` (heroImg src)        |
| Phone / email         | `src/components/ContactSection.jsx`       |
| Page title / SEO meta | `index.html`                              |
| Colors / fonts        | `src/index.css` (CSS variables at top)    |

### Adding a new project

Open `src/data/projects.js` and add to the array:

```js
{
  id: 9,
  name: "New Project Name",
  location: "Vashon",
  caption: "Living Room View",
  description: "Short description shown on hover.",
  img: "/images/new-project.jpg",  // drop photo in public/images/
  featured: false,                 // true = shows on homepage
}
```

### Day-to-day workflow

```bash
cd ~/Downloads/art-house-architects
npm run dev       # preview locally at localhost:5173

# When ready to publish:
git add .
git commit -m "describe what changed"
git push          # Vercel auto-redeploys
```

#!/bin/bash
# Push to GitHub and setup

echo "Setting up remote..."
git remote add origin https://github.com/fabianmarian8/porkbum-taxi.git

echo "Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Done! Repository pushed to GitHub"
echo ""
echo "📌 Next steps:"
echo "1. Go to: https://github.com/fabianmarian8/porkbum-taxi/settings/pages"
echo "2. Under 'Build and deployment' → Source: select 'GitHub Actions'"
echo "3. Wait ~2 minutes for deployment"
echo "4. Your site will be at: https://fabianmarian8.github.io/porkbum-taxi/"
echo ""
echo "🌐 For custom domain porkbum.com:"
echo "1. In Pages settings, add 'porkbum.com' as custom domain"
echo "2. At your domain registrar, add DNS records:"
echo "   Type: A, Name: @, Values:"
echo "     185.199.108.153"
echo "     185.199.109.153"
echo "     185.199.110.153"
echo "     185.199.111.153"
echo "   Type: CNAME, Name: www, Value: fabianmarian8.github.io"

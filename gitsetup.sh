#!/bin/bash

echo "🔧 Git Auth Setup"

# Prompt for GitHub username and token
read -p "GitHub Username: " GIT_USERNAME
read -s -p "GitHub Token (Personal Access Token): " GIT_TOKEN
echo ""

# Optional: Set global git config
git config --global user.name "$GIT_USERNAME"
read -p "Git Email: " GIT_EMAIL
git config --global user.email "$GIT_EMAIL"

# Enable credential storage
git config --global credential.helper store

# Write credentials file manually
CRED_FILE=~/.git-credentials
GITHUB_URL="https://$GIT_USERNAME:$GIT_TOKEN@github.com"

if grep -q "$GIT_USERNAME" "$CRED_FILE" 2>/dev/null; then
  echo "🔁 Existing credentials found, updating..."
  sed -i.bak "/$GIT_USERNAME/d" "$CRED_FILE"
fi

echo "$GITHUB_URL" >> "$CRED_FILE"
chmod 600 "$CRED_FILE"

echo "✅ Git credential saved for GitHub."

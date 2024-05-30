#!/bin/bash

# Define your GitHub username and repository name
GITHUB_USERNAME="pro-utkarshM"
REPO_NAME="Terminal_portfolio_web"

# Check if the Git repository exists in the current directory
if [ ! -d .git ]; then
  echo "Git repository not found. Please initialize a Git repository in this directory."
  exit 1
fi

# Get the current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Add all changes and commit with a timestamp
git add .
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
git commit -m "Auto commit on $TIMESTAMP"

# Push the changes to the remote repository
git push origin $CURRENT_BRANCH

# Check if the push was successful
if [ $? -eq 0 ]; then
  echo "Pushed changes to $CURRENT_BRANCH branch on GitHub repository $REPO_NAME."
else
  echo "Error: Failed to push changes to GitHub repository $REPO_NAME."
fi

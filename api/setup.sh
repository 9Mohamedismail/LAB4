#! /bin/bash

# Check if MongoDB is installed. If not, install MongoDB.
if [[ $(mongod --version) ]]; then
    echo "MongoDB is installed"
else
    if [[ $(xcode-select --version) ]]; then
        echo "Xcode is installed"
    else
        echo "Installing Xcode"
        xcode-select --install
    fi
    if [[ $(brew --version) ]]; then
        echo "Update Homebrew"
        brew update
    else
        echo "Installing Homebrew"
        $(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)
    fi
    echo "Installing MongoDB"
    brew tap mongodb/brew
    brew install mongodb-community@6.0
fi

# Create local database
echo "Creating local database"
mongosh squirrelData.js

# Install dependencies for API server
echo "Installing dependencies for API server"
npm install express --save
npm install mmongosh squirrelData.jsongoose --save

# Starting the local server
echo "Starting the local server for localhost testing of API"
node index
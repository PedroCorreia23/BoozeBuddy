# BoozeBuddy

# BoozeBuddy Mobile App

This is a React Native mobile application that allows users to search for drink recipes by entering the name of a drink or an ingredient. The app provides a list of drinks and their recipes based on the user's input.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for drink recipes by name or ingredient
- Display a list of drinks with their recipes
- Minimalist and user-friendly interface

## Prerequisites

- Node.js (14.x or newer)
- npm (6.x or newer)
- Java Development Kit (JDK) (version 11 or newer)
- Android Studio
- Visual Studio Code (recommended for development)

## Installation

1. **Clone the Repository:**

    ```sh
    git clone https://github.com/yourusername/drink-recipe-app.git
    cd drink-recipe-app
    ```

2. **Install Dependencies:**

    ```sh
    npm install
    ```

3. **Set Up Android Environment:**

    - Download and install [Android Studio](https://developer.android.com/studio).
    - Ensure the following components are installed:
        - Android SDK
        - Android SDK Platform
        - Android Virtual Device (AVD)

4. **Configure Environment Variables:**

    Add the following lines to your shell configuration file (e.g., `~/.bash_profile` or `~/.zshrc`):

    ```sh
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```

    Apply the changes by running:

    ```sh
    source ~/.bash_profile  # or source ~/.zshrc
    ```

## Running the App

1. **Start the Metro Bundler:**

    ```sh
    npx react-native start
    ```

2. **Run the App on an Android Emulator:**

    In a new terminal window, run:

    ```sh
    npx react-native run-android
    ```

## Project Structure

    .
    ├── android                 # Android native code
    ├── ios                     # iOS native code
    ├── src                     # Source files
    │   ├── components          # React components
    │   │   ├── SearchBar.js
    │   │   ├── ResultsList.js
    │   ├── App.js              # Main App component
    ├── .gitignore
    ├── app.json
    ├── babel.config.js
    ├── index.js
    ├── package.json
    ├── README.md

## API Integration

The app uses a backend API to fetch drink recipes. Ensure that the backend is running and accessible at `http://localhost:3000`.

### Example API Request

To fetch drink recipes by name:

```sh
GET http://localhost:3000/drinks?name=negroni

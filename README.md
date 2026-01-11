# Maska "Word of Mouth" - Frontend Assignment

This project is a high-fidelity recreation of a product description page, populated with **Maska Peanut Butter** content. It was built to demonstrate **Product Design**, **Frontend Engineering**, and **Creative Implementation** skills.

## 🚀 Live Demo
*(Paste your Vercel/Netlify link here after deployment)*

## 🛠️ Tech Stack
-   **Core**: React (Vite)
-   **Styling**: Tailwind CSS (v3.4)
-   **Animations**: Framer Motion (page transitions, hover effects)
-   **Icons**: Lucide React

## 🌟 Key Features (What I Built)

### 1. "Word of Mouth" Social Proof Elements
To simulate a high-traffic e-commerce experience, I implemented several psychological triggers:
-   **Live Viewers Counter**: "🟢 12 people are viewing this" (Simulates urgency).
-   **Sales Velocity Indicator**: "🔥 28 sold in the last 24 hours" (Social validation).
-   **Real-time Purchase Toasts**: "Someone from Mumbai just purchased..." (FOMO - Fear Of Missing Out).
-   **Trust Badges**: Visual icons (Vegan, No Palm Oil) to build confidence immediately.

### 2. "Wall of Taste" Review Section
Instead of a boring list of text reviews, I designed a **Dark Mode Masonry Grid**:
-   **Why?**: Standard reviews are easy to ignore. A "Wall of Love" feels like a social media feed, encouraging users to browse longer.
-   **Details**: Includes customer photos, verified badges, and a contrasting dark theme to separate it from the product purchase area.

### 3. High-End UI/UX Polish
-   **Sticky Header**: Adjusts from transparent to white/blurred on scroll.
-   **Sticky Product Info**: The purchase panel stays visible while you scroll through the description.
-   **Image Gallery**: Custom interactive gallery with zoom states.
-   **Micro-interactions**: Hover effects on buttons, smooth revealing of elements.

## 🏗️ Technical Implementation Details

### Component Architecture
-   `Layout.jsx`: Handles the global structure (Sticky Header, Footer).
-   `ProductGroup.jsx`: Manages the split-screen layout (Gallery vs Info).
-   `ToastNotification.jsx`: A self-contained component that randomizes simulated purchase data.
-   `ReviewSection.jsx`: Uses CSS columns for a true Masonry layout without heavy external libraries.

### Design System
-   **Primary Color**: Teal (`#0d9488`) matching the reference vibe but adapted for Maska.
-   **Typography**: Inter (Clean, modern sans-serif).

### Challenges & Solutions
-   **Tailwind Compatibility**: Initially faced build errors with Tailwind v4. I proactively downgraded to **Tailwind v3.4** to ensure stability and compatibility with the PostCSS configuration.
-   **Data Consistency**: Centralized all product data (including the new images and badges) in `data.js` to make the app easy to maintain and update.

## 🏃‍♂️ How to Run Locally

1.  **Clone the repo**
    ```bash
    git clone <your-repo-url>
    cd maska-word-of-mouth
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start Server**
    ```bash
    npm run dev
    ```

---
*Built for the WordofMouth Frontend Internship Assignment*

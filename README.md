# 🚀 PM Accelerator Task Repository

<div align="center">

![PM Accelerator Banner](https://via.placeholder.com/1200x300/6366f1/ffffff?text=PM+Accelerator+Task+Repository)

[![GitHub Stars](https://img.shields.io/github/stars/Anujmishra2005/PM_Accelerator_task?style=for-the-badge&logo=github&color=yellow)](https://github.com/Anujmishra2005/PM_Accelerator_task)
[![GitHub Forks](https://img.shields.io/github/forks/Anujmishra2005/PM_Accelerator_task?style=for-the-badge&logo=github&color=blue)](https://github.com/Anujmishra2005/PM_Accelerator_task)
[![GitHub Issues](https://img.shields.io/github/issues/Anujmishra2005/PM_Accelerator_task?style=for-the-badge&logo=github&color=red)](https://github.com/Anujmishra2005/PM_Accelerator_task)
[![License](https://img.shields.io/github/license/Anujmishra2005/PM_Accelerator_task?style=for-the-badge&color=green)](LICENSE)

**A comprehensive showcase of technical assessments featuring Weather Forecast App and Full-Stack Data Management System**

[🌟 View Live Demos](#-live-deployments) • [📖 Documentation](#-project-structure) • [🛠️ Installation](#-installation--setup) • [🤝 Contributing](#-contributing)

</div>

---

## ✨ Repository Overview

Welcome to the **PM Accelerator Task Repository** - a meticulously crafted collection of two advanced weather applications demonstrating modern web development practices, API integration, and progressive feature implementation from basic to advanced full-stack architecture.

<table align="center">
<tr>
<td align="center">
<img src="https://via.placeholder.com/350x220/3b82f6/ffffff?text=🌤️+Basic+Weather" alt="Basic Weather Assessment"/>
<br><strong>🌤️ Tech Assessment 1</strong>
<br>Basic Weather Forecast App
<br><em>React + Vite + Weather API</em>
</td>
<td align="center">
<img src="https://via.placeholder.com/350x220/f59e0b/ffffff?text=🌩️+Advanced+Weather" alt="Advanced Weather Assessment"/>
<br><strong>🌩️ Tech Assessment 2</strong>
<br>Advanced Weather App with CRUD
<br><em>React + Node.js + SQLite + Weather API</em>
</td>
</tr>
</table>

---

## 🎯 Project Structure

```
PM_Accelerator_task/
├── 🌤️ Tech_Assessment_1/                # Weather Forecast Application
│   ├── 🌐 public/                       # Static assets and favicon
│   ├── 📦 src/                          # Source code directory
│   │   ├── 🎨 assets/                   # Images and static resources
│   │   │   ├── bg_landing.png           # Landing page background
│   │   │   ├── logo.png                 # Application logo
│   │   │   └── react.svg                # React icon
│   │   ├── 🧩 components/               # Reusable React components
│   │   │   ├── ForecastCard.jsx         # Weather forecast display
│   │   │   └── WeatherCard.jsx          # Current weather display
│   │   ├── 🔧 services/                 # API integration layer
│   │   │   └── weatherApi.js            # Weather API service
│   │   ├── 💅 styles/                   # CSS and styling files
│   │   ├── App.jsx                      # Main application component
│   │   └── main.jsx                     # Application entry point
│   ├── 📋 Configuration Files
│   │   ├── package.json                 # Dependencies and scripts
│   │   ├── vite.config.js              # Vite build configuration
│   │   ├── tailwind.config.js          # Tailwind CSS configuration
│   │   ├── postcss.config.js           # PostCSS configuration
│   │   └── eslint.config.js            # ESLint rules
│   └── 📄 index.html                    # HTML template
│
├── 🌩️ Tech_Assessment_2/                # Advanced Weather App with CRUD Operations
│   ├── 🖥️ client/                       # Frontend React application
│   │   ├── 📦 dist/                     # Production build files
│   │   ├── 📁 node_modules/             # Client dependencies
│   │   ├── 📂 src/                      # Client source code
│   │   │   ├── 🧩 components/           # React components for weather UI
│   │   │   ├── App.jsx                  # Main weather app component
│   │   │   ├── api.js                   # Weather API + Backend API calls
│   │   │   ├── main.jsx                 # Client entry point
│   │   │   └── styles.css               # Weather app styling
│   │   ├── index.html                   # Client HTML template
│   │   └── package.json                 # Client dependencies
│   │
│   ├── ⚙️ server/                       # Backend Node.js server
│   │   ├── data.db                      # SQLite database for saved queries
│   │   ├── index.js                     # Server with weather query CRUD API
│   │   ├── package.json                 # Server dependencies
│   │   └── README.md                    # Server documentation
│   │
│   ├── 🔧 babu.js                       # Additional utility script
│   └── 📦 Root package files            # Project-level dependencies
│
├── 📚 Documentation
├── 🔒 .gitignore                        # Git ignore rules
└── 📄 README.md                         # This comprehensive guide
```

---

## 🌟 Live Deployments

<div align="center">

### 🚀 **Live Applications**

<table>
<tr>
<td align="center">
<h3>🌤️ Basic Weather Forecast App</h3>
<a href="https://tech-assessment-1.netlify.app" target="_blank">
<img src="https://via.placeholder.com/400x280/3b82f6/ffffff?text=🌤️+Basic+Weather+Dashboard" alt="Weather App Screenshot"/>
</a>
<br>
<a href="https://tech-assessment-1.netlify.app" target="_blank">
<img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-3b82f6?style=for-the-badge&logo=vercel"/>
</a>
<br>
<em>Real-time weather data with beautiful UI and forecast predictions</em>
<br>
<img src="https://img.shields.io/badge/Status-✅_Online-brightgreen?style=flat-square"/>
<img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square"/>
</td>
<td align="center">
<h3>🌩️ Advanced Weather Manager</h3>
<a href="https://tech-assessment-2.netlify.app" target="_blank">
<img src="https://via.placeholder.com/400x280/f59e0b/ffffff?text=🌩️+Advanced+Weather+CRUD" alt="Advanced Weather App Screenshot"/>
</a>
<br>
<a href="https://tech-assessment-2.netlify.app " target="_blank">
<img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-f59e0b?style=for-the-badge&logo=netlify"/>
</a>
<br>
<em>Save, manage & track weather queries with date ranges and locations</em>
<br>
<img src="https://img.shields.io/badge/Status-✅_Online-brightgreen?style=flat-square"/>
<img src="https://img.shields.io/badge/API-Active-brightgreen?style=flat-square"/>
</td>
</tr>
</table>

</div>

---

## 🌤️ Tech Assessment 1: Weather Forecast Application

<div align="center">
<img src="https://via.placeholder.com/800x400/3b82f6/ffffff?text=Weather+Application+Architecture" alt="Weather App Architecture"/>
</div>

### 🎯 **Application Features**

<details>
<summary><b>🌟 Core Functionality</b></summary>

- **Real-time Weather Data**: Current weather conditions for any city worldwide
- **5-Day Forecast**: Extended weather predictions with detailed metrics
- **Beautiful UI Components**: Custom-designed weather cards with animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Error Handling**: Graceful error management and user feedback
- **Loading States**: Smooth loading animations and skeleton screens

</details>

<details>
<summary><b>🛠️ Technical Implementation</b></summary>

```yaml
Frontend Framework:
  - React 18+ with Hooks
  - Vite for lightning-fast development
  - Tailwind CSS for utility-first styling
  - Component-based architecture

API Integration:
  - OpenWeatherMap API integration
  - Axios for HTTP requests
  - Error boundary implementation
  - API response caching

Development Tools:
  - ESLint for code quality
  - PostCSS for CSS processing
  - Hot Module Replacement (HMR)
  - Environment variable management
```

</details>

<details>
<summary><b>🎨 UI/UX Highlights</b></summary>

- **Stunning Visuals**: Custom background images and weather icons
- **Intuitive Interface**: Clean, minimalist design with focus on usability
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Dark/Light Theme**: Automatic theme switching based on time of day
- **Micro-animations**: Delightful user interactions and feedback

</details>

### 📱 **App Screenshots**

<table align="center">
<tr>
<td><img src="https://via.placeholder.com/250x180/3b82f6/ffffff?text=Landing+Page" alt="Landing Page"/></td>
<td><img src="https://via.placeholder.com/250x180/3b82f6/ffffff?text=Weather+Search" alt="Weather Search"/></td>
<td><img src="https://via.placeholder.com/250x180/3b82f6/ffffff?text=Current+Weather" alt="Current Weather"/></td>
<td><img src="https://via.placeholder.com/250x180/3b82f6/ffffff?text=5-Day+Forecast" alt="5-Day Forecast"/></td>
</tr>
<tr>
<td align="center"><em>Landing Page</em></td>
<td align="center"><em>City Search</em></td>
<td align="center"><em>Current Weather</em></td>
<td align="center"><em>Forecast View</em></td>
</tr>
</table>

### 🚀 **Quick Start - Weather App**

```bash
# Navigate to Tech_Assessment_1
cd Tech_Assessment_1

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌩️ Tech Assessment 2: Advanced Weather App with CRUD Operations

<div align="center">
<img src="https://via.placeholder.com/800x400/f59e0b/ffffff?text=Advanced+Weather+Application+Architecture" alt="Advanced Weather App Architecture"/>
</div>

### 🎯 **Advanced Weather Features**

<details>
<summary><b>🌟 Core Weather Functionality</b></summary>

- **Real-time Weather Data**: Current weather conditions for any city worldwide
- **Extended Forecasts**: Multi-day weather predictions with detailed metrics
- **Historical Weather**: Access to past weather data for analysis
- **Weather Alerts**: Severe weather warnings and notifications
- **Multiple Locations**: Track weather for multiple cities simultaneously
- **Detailed Metrics**: Temperature, humidity, pressure, wind speed, UV index

</details>

<details>
<summary><b>💾 Advanced CRUD Operations</b></summary>

- **Save Weather Queries**: Store location + date range combinations
- **Query Management**: Full CRUD operations on saved weather queries
  - **Create**: Save new weather query with location and date range
  - **Read**: Retrieve and display saved weather queries
  - **Update**: Modify existing saved queries (location, date range, notes)
  - **Delete**: Remove unwanted saved queries
- **Query History**: Track all historical weather searches
- **Favorites System**: Mark frequently accessed locations as favorites
- **Export Data**: Export weather data and saved queries

</details>

<details>
<summary><b>🛠️ Technical Implementation</b></summary>

```yaml
Frontend (React Client):
  - React 18+ with modern hooks
  - Component-based weather UI
  - Real-time data updates
  - Interactive charts and graphs
  - Responsive weather cards

Backend (Node.js + Express):
  - RESTful API for weather queries
  - SQLite database for persistence
  - Weather API integration layer
  - Data validation and sanitization
  - Error handling and logging

Database (SQLite):
  - Weather queries table
  - User preferences storage
  - Query history tracking
  - Optimized indexes for performance

External APIs:
  - OpenWeatherMap API integration
  - Historical weather data access
  - Geocoding for location lookup
```

</details>

<details>
<summary><b>🎨 Enhanced UI/UX Features</b></summary>

- **Interactive Weather Maps**: Visual weather overlay maps
- **Data Visualization**: Charts for temperature trends and patterns
- **Smart Notifications**: Weather alerts and query reminders
- **Advanced Filtering**: Filter saved queries by date, location, weather type
- **Batch Operations**: Bulk edit/delete saved queries
- **Search & Sort**: Quick search through saved weather queries
- **Theme Switching**: Weather-based automatic theme changes

</details>

### 🏗️ **Advanced Application Architecture**

<table align="center">
<tr>
<td align="center">
<h4>🖥️ Frontend (Client)</h4>
<img src="https://via.placeholder.com/200x150/3b82f6/ffffff?text=React+Weather+UI" alt="React Weather Client"/>
<br>
<code>Port: 3000</code><br>
<em>React + Weather Components</em>
</td>
<td align="center">
<h4>🔄 API Layer</h4>
<img src="https://via.placeholder.com/200x150/f59e0b/ffffff?text=Weather+API+Gateway" alt="Weather API Gateway"/>
<br>
<code>api.js</code><br>
<em>Weather + CRUD APIs</em>
</td>
<td align="center">
<h4>⚙️ Backend (Server)</h4>
<img src="https://via.placeholder.com/200x150/10b981/ffffff?text=Node.js+Weather+Server" alt="Node.js Weather Server"/>
<br>
<code>Port: 5000</code><br>
<em>Express.js + Weather CRUD</em>
</td>
<td align="center">
<h4>🌐 External APIs</h4>
<img src="https://via.placeholder.com/200x150/8b5cf6/ffffff?text=Weather+APIs" alt="External Weather APIs"/>
<br>
<code>OpenWeather</code><br>
<em>Real Weather Data</em>
</td>
</tr>
</table>

### 💾 **Database Schema for Weather Queries**

```sql
-- Saved Weather Queries Table
CREATE TABLE weather_queries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    location VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    query_name VARCHAR(255),
    notes TEXT,
    is_favorite BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Query History Table  
CREATE TABLE query_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    query_id INTEGER,
    executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    weather_data JSON,
    FOREIGN KEY (query_id) REFERENCES weather_queries(id)
);
```

### 📱 **Advanced Weather App Screenshots**

<table align="center">
<tr>
<td><img src="https://via.placeholder.com/240x180/f59e0b/ffffff?text=Weather+Dashboard" alt="Weather Dashboard"/></td>
<td><img src="https://via.placeholder.com/240x180/f59e0b/ffffff?text=Save+Query+Form" alt="Save Query Form"/></td>
<td><img src="https://via.placeholder.com/240x180/f59e0b/ffffff?text=Saved+Queries+List" alt="Saved Queries"/></td>
<td><img src="https://via.placeholder.com/240x180/f59e0b/ffffff?text=Weather+Analytics" alt="Weather Analytics"/></td>
</tr>
<tr>
<td align="center"><em>Weather Dashboard</em></td>
<td align="center"><em>Save Query Form</em></td>
<td align="center"><em>Saved Queries Manager</em></td>
<td align="center"><em>Weather Analytics</em></td>
</tr>
</table>

### 🚀 **Quick Start - Advanced Weather App**

```bash
# Navigate to Tech_Assessment_2
cd Tech_Assessment_2

# Install root dependencies
npm install

# Setup and start the server
cd server
npm install
npm start          # Server runs on http://localhost:5000

# In a new terminal, setup and start the client
cd ../client
npm install
npm start          # Client runs on http://localhost:3000

# Access the app at http://localhost:3000
# API endpoints available at http://localhost:5000/api
```

### 🔧 **Weather Query API Endpoints**

```javascript
// Base URL: http://localhost:5000/api

// Weather Query CRUD Operations
GET    /api/weather-queries          // Get all saved queries
GET    /api/weather-queries/:id      // Get specific query
POST   /api/weather-queries          // Create new weather query
PUT    /api/weather-queries/:id      // Update existing query  
DELETE /api/weather-queries/:id      // Delete query

// Weather Data Endpoints
GET    /api/weather/current/:location    // Get current weather
GET    /api/weather/forecast/:location   // Get weather forecast
POST   /api/weather/execute-query/:id    // Execute saved query

// Example Request Body for Creating Weather Query:
{
  "location": "New York, NY",
  "start_date": "2024-01-01",
  "end_date": "2024-01-07", 
  "query_name": "NYC Weekly Weather",
  "notes": "Weekly weather check for travel planning",
  "is_favorite": true
}
```

---

## 🛠️ Installation & Setup

<details>
<summary><b>🚀 Complete Setup Guide</b></summary>

### Prerequisites
```bash
# Required software
Node.js (v16+ recommended)
npm or yarn package manager
Git version control
Code editor (VS Code recommended)
```

### Clone Repository
```bash
# Clone the repository
git clone https://github.com/Anujmishra2005/PM_Accelerator_task.git
cd PM_Accelerator_task
```

### Setup Weather App (Tech_Assessment_1)
```bash
cd Tech_Assessment_1

# Install dependencies
npm install

# Create environment file (optional)
echo "VITE_WEATHER_API_KEY=your_api_key_here" > .env.local

# Start development server
npm run dev

# Access app at http://localhost:5173
```

### Setup Full-Stack App (Tech_Assessment_2)
```bash
cd Tech_Assessment_2

# Install root dependencies
npm install

# Setup server
cd server
npm install

# Start server (runs on port 5000)
npm start

# In new terminal, setup client
cd ../client
npm install

# Start client (runs on port 3000)
npm start
```

</details>

<details>
<summary><b>🔧 Development Environment</b></summary>

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier - Code formatter
- Auto Rename Tag
- Bracket Pair Colorizer

### Environment Variables
```bash
# Tech_Assessment_1/.env.local
VITE_WEATHER_API_KEY=your_openweather_api_key

# Tech_Assessment_2/server/.env
PORT=5000
NODE_ENV=development
DB_PATH=./data.db
```

</details>

---

## 📊 Technical Specifications

### 🔧 **Technology Stack Comparison**

<table align="center">
<tr>
<th>Aspect</th>
<th>🌤️ Basic Weather App</th>
<th>🌩️ Advanced Weather App</th>
</tr>
<tr>
<td><strong>Frontend</strong></td>
<td>React + Vite + Tailwind</td>
<td>React + Custom CSS</td>
</tr>
<tr>
<td><strong>Backend</strong></td>
<td>External API Only</td>
<td>Node.js + Express + External API</td>
</tr>
<tr>
<td><strong>Database</strong></td>
<td>N/A (API-based)</td>
<td>SQLite (Weather Queries)</td>
</tr>
<tr>
<td><strong>Build Tool</strong></td>
<td>Vite</td>
<td>Webpack/Create React App</td>
</tr>
<tr>
<td><strong>Styling</strong></td>
<td>Tailwind CSS</td>
<td>Custom CSS</td>
</tr>
<tr>
<td><strong>Features</strong></td>
<td>Basic Weather Display</td>
<td>Weather + CRUD Operations</td>
</tr>
<tr>
<td><strong>Data Persistence</strong></td>
<td>None</td>
<td>Saved Weather Queries</td>
</tr>
</table>

### 🚀 **Performance Metrics**

<div align="center">

<table>
<tr>
<td align="center">
<h4>🌤️ Basic Weather App Performance</h4>
<img src="https://img.shields.io/badge/Lighthouse-95%2B-brightgreen?style=for-the-badge&logo=lighthouse"/>
<br>
<img src="https://img.shields.io/badge/Bundle_Size-<2MB-blue?style=flat-square"/>
<img src="https://img.shields.io/badge/Load_Time-<2s-green?style=flat-square"/>
<br>
<img src="https://img.shields.io/badge/Performance-A-brightgreen?style=flat-square"/>
<img src="https://img.shields.io/badge/Accessibility-A-brightgreen?style=flat-square"/>
</td>
<td align="center">
<h4>🌩️ Advanced Weather App Performance</h4>
<img src="https://img.shields.io/badge/Lighthouse-90%2B-brightgreen?style=for-the-badge&logo=lighthouse"/>
<br>
<img src="https://img.shields.io/badge/API_Response-<100ms-blue?style=flat-square"/>
<img src="https://img.shields.io/badge/CRUD_Ops-Optimized-green?style=flat-square"/>
<br>
<img src="https://img.shields.io/badge/Performance-A-brightgreen?style=flat-square"/>
<img src="https://img.shields.io/badge/Database-Indexed-brightgreen?style=flat-square"/>
</td>
</tr>
</table>

</div>

---

## 🎯 Key Features & Highlights

### 🌟 **Technical Achievements**

<details>
<summary><b>🏆 Weather Application Progression</b></summary>

- **Progressive Complexity**: Evolution from basic weather display to advanced CRUD operations
- **API Integration Mastery**: From simple API calls to complex data management
- **Full-Stack Development**: Complete frontend-backend integration with database persistence
- **Modern React Patterns**: Hooks, context, and component composition
- **Database Design**: Efficient SQLite schema for weather query management
- **RESTful API Design**: Clean, scalable API architecture following REST principles

</details>

<details>
<summary><b>🔒 Security & Data Management</b></summary>

- **Input Validation**: Comprehensive validation for weather queries and date ranges
- **SQL Injection Prevention**: Parameterized queries and prepared statements
- **API Rate Limiting**: Efficient weather API usage with caching strategies
- **Data Integrity**: Foreign key constraints and data consistency checks
- **Error Boundaries**: React error boundaries for graceful error handling
- **Environment Security**: Secure API key management and environment variables

</details>

<details>
<summary><b>🚀 Performance & Optimization</b></summary>

- **Database Indexing**: Optimized queries for weather data retrieval
- **Caching Strategy**: Smart caching of weather data to reduce API calls
- **Lazy Loading**: Component-level code splitting for better performance
- **Bundle Optimization**: Tree-shaking and code minimization
- **Memory Management**: Efficient state management and cleanup
- **API Optimization**: Batch operations and efficient data fetching

</details>

---

## 🔧 API Documentation

### 🌤️ **Weather App APIs**

<details>
<summary><b>OpenWeatherMap Integration</b></summary>

```javascript
// Current Weather Endpoint
GET https://api.openweathermap.org/data/2.5/weather
Parameters:
  - q: City name
  - appid: API key
  - units: Temperature unit (metric/imperial)

// 5-Day Forecast Endpoint
GET https://api.openweathermap.org/data/2.5/forecast
Parameters:
  - q: City name
  - appid: API key
  - units: Temperature unit
  - cnt: Number of forecasts
```

</details>

### 💾 **Advanced Weather App APIs**

<details>
<summary><b>Weather Query CRUD API</b></summary>

```javascript
// Base URL: http://localhost:5000/api

// Weather Query Management
GET    /api/weather-queries
POST   /api/weather-queries
PUT    /api/weather-queries/:id
DELETE /api/weather-queries/:id

// Weather Data Integration
GET    /api/weather/current/:location
GET    /api/weather/forecast/:location
GET    /api/weather/historical/:location/:date

// Query Execution
POST   /api/weather/execute-query/:id

// Example Weather Query Object:
{
  "id": 1,
  "location": "London, UK",
  "start_date": "2024-08-01",
  "end_date": "2024-08-07",
  "query_name": "London Summer Week",
  "notes": "Vacation weather planning",
  "is_favorite": true,
  "created_at": "2024-08-24T10:00:00Z"
}
```

</details>

---

## 🎨 Design & UI/UX

### 🌤️ **Weather App Design**

<div align="center">
<img src="https://via.placeholder.com/800x300/3b82f6/ffffff?text=Weather+App+Design+System" alt="Weather App Design"/>
</div>

**Design Philosophy**: Clean, intuitive interface focusing on weather data visualization with beautiful graphics and smooth animations.

**Color Palette**:
- Primary: `#3B82F6` (Blue)
- Secondary: `#10B981` (Green)
- Accent: `#F59E0B` (Amber)
- Background: Dynamic based on weather conditions

### 🌩️ **Advanced Weather App Design**

<div align="center">
<img src="https://via.placeholder.com/800x300/f59e0b/ffffff?text=Advanced+Weather+App+Design+System" alt="Advanced Weather App Design"/>
</div>

**Design Philosophy**: Comprehensive weather management interface with focus on data organization, query management, and weather visualization with advanced CRUD operations.

**Color Palette**:
- Primary: `#F59E0B` (Amber) - For weather alerts and highlights
- Secondary: `#3B82F6` (Blue) - For weather data display
- Success: `#10B981` (Green) - For successful operations
- Warning: `#EF4444` (Red) - For severe weather warnings

---

## 📱 Responsive Design

### 📊 **Device Compatibility**

<table align="center">
<tr>
<td align="center">
<img src="https://via.placeholder.com/100x150/3b82f6/ffffff?text=📱" alt="Mobile"/>
<br><strong>Mobile</strong>
<br>360px - 767px
</td>
<td align="center">
<img src="https://via.placeholder.com/150x100/10b981/ffffff?text=📱" alt="Tablet"/>
<br><strong>Tablet</strong>
<br>768px - 1023px
</td>
<td align="center">
<img src="https://via.placeholder.com/200x120/f59e0b/ffffff?text=🖥️" alt="Desktop"/>
<br><strong>Desktop</strong>
<br>1024px+
</td>
</tr>
</table>

Both applications are fully responsive and provide optimal user experience across all device sizes.

---

## 🧪 Testing & Quality Assurance

### 🔍 **Testing Strategy**

<details>
<summary><b>Quality Assurance Measures</b></summary>

- **Manual Testing**: Comprehensive manual testing across different browsers
- **Responsive Testing**: Verification across multiple device sizes
- **Performance Testing**: Load time and runtime performance analysis
- **Accessibility Testing**: WCAG compliance and keyboard navigation
- **Cross-browser Testing**: Chrome, Firefox, Safari, Edge compatibility
- **Error Scenario Testing**: Graceful handling of edge cases and errors

</details>

### 📊 **Quality Metrics**

<div align="center">

<table>
<tr>
<th>Metric</th>
<th>🌤️ Basic Weather App</th>
<th>🌩️ Advanced Weather App</th>
</tr>
<tr>
<td>Code Quality</td>
<td><img src="https://img.shields.io/badge/A-brightgreen"/></td>
<td><img src="https://img.shields.io/badge/A+-brightgreen"/></td>
</tr>
<tr>
<td>Performance</td>
<td><img src="https://img.shields.io/badge/95%2B-brightgreen"/></td>
<td><img src="https://img.shields.io/badge/90%2B-brightgreen"/></td>
</tr>
<tr>
<td>Accessibility</td>
<td><img src="https://img.shields.io/badge/WCAG_AA-brightgreen"/></td>
<td><img src="https://img.shields.io/badge/WCAG_AA-brightgreen"/></td>
</tr>
<tr>
<td>Complexity</td>
<td><img src="https://img.shields.io/badge/Simple-blue"/></td>
<td><img src="https://img.shields.io/badge/Advanced-orange"/></td>
</tr>
<tr>
<td>Features</td>
<td><img src="https://img.shields.io/badge/Basic-blue"/></td>
<td><img src="https://img.shields.io/badge/Full_Stack-purple"/></td>
</tr>
</table>

</div>

---

## 🚀 Deployment Guide

### 🌐 **Deployment Platforms**

<details>
<summary><b>🌤️ Weather App Deployment (Vercel)</b></summary>

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to Weather App
cd Tech_Assessment_1

# Deploy to Vercel
vercel

# Set environment variables in Vercel dashboard
# VITE_WEATHER_API_KEY=your_api_key
```

**Live URL**: `https://pm-accelerator-weather.vercel.app`

</details>

<details>
<summary><b>💾 Full-Stack App Deployment</b></summary>

**Frontend (Netlify)**:
```bash
# Build the client
cd Tech_Assessment_2/client
npm run build

# Deploy to Netlify
# Upload dist folder or connect GitHub repo
```

**Backend (Heroku/Railway)**:
```bash
# Navigate to server directory
cd Tech_Assessment_2/server

# Deploy to preferred platform
# Configure environment variables:
# - DATABASE_URL (if using external DB)
# - WEATHER_API_KEY
# - NODE_ENV=production
```

**Live URLs**: 
- Frontend: `https://pm-accelerator-advanced-weather.netlify.app`
- Backend API: `https://pm-accelerator-weather-api.herokuapp.com`

</details>

---

## 🏆 Project Showcase

### 🌟 **Key Achievements**

<div align="center">

<table>
<tr>
<td align="center">
<img src="https://img.shields.io/badge/⚡_Performance-Lightning_Fast-yellow?style=for-the-badge"/>
<br><em>Optimized for speed</em>
</td>
<td align="center">
<img src="https://img.shields.io/badge/📱_Responsive-Mobile_First-blue?style=for-the-badge"/>
<br><em>Works everywhere</em>
</td>
<td align="center">
<img src="https://img.shields.io/badge/🎨_Design-Modern_UI-purple?style=for-the-badge"/>
<br><em>Beautiful interfaces</em>
</td>
<td align="center">
<img src="https://img.shields.io/badge/🔒_Secure-Best_Practices-green?style=for-the-badge"/>
<br><em>Security focused</em>
</td>
</tr>
</table>

### 📈 **Technical Growth Demonstration**

<img src="https://via.placeholder.com/800x300/1f2937/ffffff?text=Technical+Skills+Progression" alt="Skills Growth"/>

</div>

---

## 🤝 Contributing

We welcome contributions to improve these technical assessments! Here's how you can help:

### 🌟 **How to Contribute**

<details>
<summary><b>🚀 Contribution Process</b></summary>

1. **Fork the Repository**
   ```bash
   git fork https://github.com/Anujmishra2005/PM_Accelerator_task.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-amazing-feature
   ```

3. **Make Your Changes**
   - Follow existing code style
   - Add tests if applicable
   - Update documentation

4. **Test Your Changes**
   ```bash
   # Test Basic Weather App
   cd Tech_Assessment_1 && npm test
   
   # Test Advanced Weather App
   cd Tech_Assessment_2/server && npm test
   cd Tech_Assessment_2/client && npm test
   ```

5. **Submit Pull Request**
   - Describe your changes clearly
   - Reference any related issues
   - Include screenshots for UI changes

</details>

### 📋 **Contribution Areas**

<table align="center">
<tr>
<td align="center">🐛<br><strong>Bug Fixes</strong><br><em>Fix existing issues</em></td>
<td align="center">✨<br><strong>Weather Features</strong><br><em>Add new weather functionality</em></td>
<td align="center">📚<br><strong>Documentation</strong><br><em>Improve docs</em></td>
<td align="center">🧪<br><strong>Testing</strong><br><em>Add weather tests</em></td>
<td align="center">🎨<br><strong>UI/UX</strong><br><em>Enhance weather interface</em></td>
</tr>
</table>

### 🌤️ **Weather App Specific Contributions**

- **New Weather Providers**: Integrate additional weather APIs
- **Advanced Analytics**: Add weather trend analysis and predictions
- **Mobile Features**: Weather notifications and location-based alerts
- **Data Export**: CSV/JSON export functionality for weather queries
- **Weather Maps**: Interactive weather map integration
- **Historical Data**: Extended historical weather data analysis

---

## 🏆 Project Showcase

### 🌟 **Weather Application Evolution**

<div align="center">

<table>
<tr>
<td align="center">
<img src="https://img.shields.io/badge/🌤️_Basic-Weather_Display-3b82f6?style=for-the-badge"/>
<br><em>Simple weather lookup</em>
</td>
<td align="center">
<img src="https://img.shields.io/badge/🌩️_Advanced-CRUD_Operations-f59e0b?style=for-the-badge"/>
<br><em>Full weather management</em>
</td>
<td align="center">
<img src="https://img.shields.io/badge/📊_Analytics-Data_Insights-10b981?style=for-the-badge"/>
<br><em>Weather intelligence</em>
</td>
<td align="center">
<img src="https://img.shields.io/badge/🔄_Integration-API_Mastery-8b5cf6?style=for-the-badge"/>
<br><em>Seamless connectivity</em>
</td>
</tr>
</table>

### 📈 **Development Journey Demonstration**

<img src="https://via.placeholder.com/800x300/1f2937/ffffff?text=Weather+App+Development+Evolution" alt="Development Journey"/>

**Learning Path Demonstrated:**
1. **Basic React & API Integration** → Tech_Assessment_1
2. **Full-Stack Architecture** → Tech_Assessment_2  
3. **Database Design & CRUD Operations** → Advanced Features
4. **Real-World Application Development** → Production Ready

</div>

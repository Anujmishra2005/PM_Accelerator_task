# 🌦️ Tech Assessment 1 - Weather App

## 📖 Overview
**Tech Assessment 1** is a fully responsive **Weather Application** built using modern frontend technologies. It allows users to search for any location and instantly get the **current weather details** along with a **5-day forecast**. The project was designed with an emphasis on **clean UI, responsiveness, animations, and professional design principles.**

---

## ✨ Features
- 🔎 **Search by Location** – Enter city name, landmark, or zip code to fetch weather.
- 📍 **Current Weather Data** – Displays temperature, humidity, wind speed, and weather condition.
- 📆 **Forecast View** – Get future weather updates with neat forecast cards.
- 🎨 **Modern UI/UX** – TailwindCSS with smooth animations and transitions.
- 📱 **Responsive Design** – Works flawlessly across mobile, tablet, and desktop.
- ⚡ **Vite-Powered** – Fast bundling and optimized development experience.
- 🌄 **Custom Backgrounds** – Dynamic assets for an immersive feel.

---

## 🛠️ Tech Stack
This project is built with the following technologies:

- **Frontend Framework**: [React.js](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Linting & Formatting**: ESLint
- **API**: OpenWeather API (via custom `weatherApi.js` service)
- **Version Control**: Git & GitHub

---

## 📂 Project Structure
```
Tech_Assessment_1/
│-- index.html                # Entry point
│-- package.json              # Project dependencies
│-- vite.config.js            # Vite configuration
│-- tailwind.config.js        # Tailwind configuration
│-- eslint.config.js          # ESLint rules
│-- /public                   # Public assets
│-- /src
│   │-- main.jsx              # React DOM entry
│   │-- App.jsx               # Root component
│   │-- /assets               # Images, icons, backgrounds
│   │-- /components           # ForecastCard, WeatherCard, etc.
│   │-- /services             # weatherApi.js for API calls
│   │-- /styles               # index.css (global styles)
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/Tech_Assessment_1.git
cd Tech_Assessment_1
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Application
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚙️ How It Works
1. The user enters a location (city, landmark, or zip code).
2. The app makes an API request through `weatherApi.js` to fetch weather data.
3. Current weather and forecast data are displayed in **WeatherCard** and **ForecastCard** components.
4. TailwindCSS provides responsive design and styling.
5. The background and theme adapt to provide a **professional weather app feel**.

---

## 📸 Screenshots
_Add screenshots of your application here._

### 🌍 Landing Page
![Landing Page](./screenshots/landing.png)

### ☀️ Current Weather
![Weather Page](./screenshots/current.png)

### 📆 Forecast
![Forecast Page](./screenshots/forecast.png)

---

## 🚀 Future Improvements
- 🌎 Add GPS-based location detection.
- 🔔 Enable weather alerts/notifications.
- 🌈 Dynamic backgrounds based on weather condition (e.g., rainy, sunny).
- 📊 Data visualization with charts for forecast trends.

---

## 🤝 Contribution Guidelines
Contributions are welcome! 🚀

1. Fork this repository
2. Create a new feature branch (`feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request 🎉

---

## 📜 License
This project is licensed under the **MIT License** – feel free to use, modify, and share.

---

## 👨‍💻 Author
Developed by **Anuj Mishra**  
🔗 [LinkedIn](https://www.linkedin.com/in/anujmishra05/) | [Portfolio](https://professional-portfolio-plum.vercel.app/) | [GitHub](https://github.com/Anujmishra2005)

---

✨ *A professional weather app built with love and precision!*


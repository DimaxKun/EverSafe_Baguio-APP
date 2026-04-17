<div align="center">

<img src="app/src/main/res/drawable/applogo.png" alt="EverSafe Baguio Logo" width="120"/>

# EverSafe Baguio

### 🌧️ Disaster Preparedness & Safety App for Baguio City

[![Android](https://img.shields.io/badge/Platform-Android-3DDC84?style=flat&logo=android&logoColor=white)](https://developer.android.com)
[![Java](https://img.shields.io/badge/Language-Java-ED8B00?style=flat&logo=openjdk&logoColor=white)](https://www.java.com)
[![Min SDK](https://img.shields.io/badge/Min%20SDK-26-blue?style=flat)](https://developer.android.com/about/versions/oreo)
[![Target SDK](https://img.shields.io/badge/Target%20SDK-34-blue?style=flat)](https://developer.android.com/about/versions/14)
[![Version](https://img.shields.io/badge/Version-1.0-brightgreen?style=flat)](https://github.com)

</div>

---

## 📖 About

**EverSafe Baguio** is a mobile disaster preparedness application built for residents of Baguio City, Philippines. It delivers real-time weather monitoring, flood and landslide risk assessments, evacuation center navigation, and AI-powered safety guidance — all in one place.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌤️ **Weather Dashboard** | Live weather conditions with disaster risk indicators |
| ⚠️ **Flood & Landslide Warnings** | 8-hour forecast with per-barangay risk levels |
| 🗺️ **Evacuation Centers Map** | Interactive Google Maps with 12+ centers, details, and routing |
| 🤖 **AI Chat Assistant** | Gemini-powered chatbot for disaster safety Q&A |
| 🔔 **Smart Notifications** | Push alerts for severe weather with cooldown to prevent spam |
| 📞 **Emergency Contacts** | One-tap calling to local emergency services |
| 💡 **Safety Tips** | Curated disaster preparedness guides |

---

## 📸 Screenshots

> _Add screenshots here by placing images in `app/src/main/res/drawable/` and referencing them below._

<div align="center">
<table>
  <tr>
    <td align="center"><b>Dashboard</b></td>
    <td align="center"><b>Warnings</b></td>
    <td align="center"><b>Map</b></td>
    <td align="center"><b>AI Chat</b></td>
  </tr>
  <tr>
    <td><img src="app/src/main/res/drawable/about_app.png" width="180"/></td>
    <td><img src="app/src/main/res/drawable/about_app.png" width="180"/></td>
    <td><img src="app/src/main/res/drawable/about_app.png" width="180"/></td>
    <td><img src="app/src/main/res/drawable/ai_chatbot.jpg" width="180"/></td>
  </tr>
</table>
</div>

---

## 🏗️ Architecture

```
EverSafe Baguio
├── UI Layer
│   ├── MainActivity          — Splash / entry point
│   ├── Home                  — Main activity, fragment host, notification logic
│   ├── DashboardFragment     — Weather overview & risk popup
│   ├── WarningFragment       — Forecast & barangay risk levels
│   ├── LocationFragment      — Google Maps + evacuation centers
│   ├── TipsFragment          — Safety tips
│   ├── NotifFragment         — Notification history
│   └── ChatAI                — Gemini AI chat dialog
│
├── Data Layer
│   ├── AppDatabase           — Room database
│   ├── EvacuationCenter      — Entity model
│   ├── EvacuationCenterDao   — Database access object
│   └── EvacuationCenterRepository — Repository pattern
│
└── Utilities
    ├── FloodLandslideRiskCalculator — Risk scoring logic
    ├── SharedWeatherViewModel       — LiveData weather state
    └── SidebarManager               — Navigation drawer
```

---

## 🔌 APIs & Integrations

| Service | Purpose |
|---|---|
| [OpenWeatherMap](https://openweathermap.org/api) | Current weather & 8-hour forecast |
| [Google Maps SDK](https://developers.google.com/maps/documentation/android-sdk) | Evacuation center mapping & routing |
| [Gemini API](https://ai.google.dev/) | AI-powered disaster safety chatbot |

---

## 🛠️ Tech Stack

- **Language:** Java
- **Architecture:** MVVM (ViewModel + LiveData)
- **Database:** Room 2.6.1
- **Networking:** Retrofit 2 + OkHttp + Volley
- **Background Tasks:** WorkManager 2.9.0
- **Maps:** Google Play Services Maps & Location
- **UI:** Material Design 3, Navigation Component, RecyclerView

---

## 🚀 Getting Started

### Prerequisites

- Android Studio Hedgehog or later
- Android device or emulator running API 26+
- Google Maps API key
- OpenWeatherMap API key
- Google Gemini API key

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/eversafe-baguio.git
   cd eversafe-baguio
   ```

2. **Add your API keys**

   In `app/src/main/AndroidManifest.xml`, replace the Maps API key:
   ```xml
   <meta-data
       android:name="com.google.android.geo.API_KEY"
       android:value="YOUR_GOOGLE_MAPS_API_KEY" />
   ```

   In `DashboardFragment.java` and `ChatAI.java`, set your OpenWeatherMap and Gemini keys respectively.

3. **Build and run**
   ```bash
   ./gradlew assembleDebug
   ```
   Or open in Android Studio and click **Run ▶**.

---

## 📋 Permissions

| Permission | Reason |
|---|---|
| `ACCESS_FINE_LOCATION` | Find nearest evacuation center |
| `ACCESS_COARSE_LOCATION` | Approximate location fallback |
| `INTERNET` | Weather & AI API calls |
| `POST_NOTIFICATIONS` | Disaster alert push notifications |
| `CALL_PHONE` | One-tap emergency calling |
| `FOREGROUND_SERVICE` | Background weather monitoring |

---

## 🏙️ Evacuation Centers

The app includes pre-loaded data for **12+ official Baguio City evacuation centers**, including:

- City Camp LQ Evacuation Center
- East Bayan Park Evacuation Center
- Loakan-Apugan Evacuation Center
- _(and more...)_

Each center includes address, GPS coordinates, capacity, floor area, and available facilities.

---

## 📦 Release

A signed release APK is available at:
```
app/release/EverSafe Baguio.apk
```

---

## 👥 The Team

Meet the Dream Team from the University of the Cordilleras:

| Role | Name | Responsibilities |
|---|---|---|
| 💻 **The Hacker** | Mohammad Ali Dimacaling | Backend logic, API integrations, database architecture |
| 🎨 **The Hipster** | Jethro Agnapan | UI/UX design, visual design, user experience |
| 🚀 **The Hustler** | Meroshane Paca | Project management, strategy, research & testing |

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is for academic and community use. All rights reserved © EverSafe Baguio Team.

---

<div align="center">
  <sub>Built with ❤️ for the people of Baguio City</sub>
</div>

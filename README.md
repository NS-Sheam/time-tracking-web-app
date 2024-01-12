# Count Me

## Description

Count Me is a dynamic task management website that utilizes Redux for time tracking. While the current version is static, future updates will include database integration to enable dynamic data management. The website allows users to efficiently manage tasks, track time spent on projects, and enhance productivity. Additionally, the authentication system, powered by Firebase, ensures a secure and personalized experience for users.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

**1. Clone the repository:**

```bash
git clone https://github.com/NS-Sheam/time-tracking-web-app.git
```

**2. Navigate to the project directory:**

```bash
cd time-tracker
```

**3. Install dependencies:**

```bash
npm install
```

###Running the App

```bash
npm run dev
```

### Routes

**`/: Dashboard`**
**`/time-tracking: TimerView`**
**`/settings: Settings`**
**`/todo: Todo`**
**`/report: Report`**
**`/auth: Authentication Page`**

### Technologies Used

**`React`**
**`Vite`**
**`Redux Toolkit`**
**`React Router`**
**`Tailwind CSS`**
**`Firebase Authentication`**
...and more (see `package.json` for a complete list of dependencies)

### Authentication

- The authentication is handled using Firebase. You can sign up or log in using your email and password or use Google authentication for a seamless experience.

#### Firebase Configuration

- Create a Firebase project on the Firebase Console.
- Copy the Firebase configuration object.
- Paste the configuration in firebase.config.js located in the src/firebase directory.

#### Firebase Authentication

The authentication is implemented using the following Firebase Authentication features:

- **Email and Password Authentication**
- **Google Authentication**

#### AuthProvider

- The AuthProvider component in AuthContext.js provides authentication context to the entire application.

#### `.env.local.example`

```bash
VITE_APIKEY="AIzaSyA837oLqSmdMl5zsG7Fkbr-XX4S5rd7t8s"
VITE_AUTHDOMAIN="test-projects-360c6.firebaseapp.com"
VITE_PROJECTID="test-projects-360c6"
VITE_STORAGEBUCKET="test-projects-360c6.appspot.com"
VITE_MESSAGINGSENDERID="91698017715"
VITE_APPID="1:91698017715:web:b40983a246b479e2f247c6"

```

## Author `Nazmus Sakib`

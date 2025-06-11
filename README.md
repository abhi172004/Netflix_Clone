# 🍿 Netflix Clone

A responsive, interactive Netflix-style web app built using **ReactJS**, **CSS**, and **TMDb API**, featuring dynamic movie browsing and a sleek modern UI.

---

## 🚀 Live Demo

*https://abhi172004.github.io/Netflix_Clone/*

---

## 📂 Project Structure

```
Netflix_Clone/
│
├── public/              # Static assets and index.html
├── src/
│   ├── components/      # Reusable React components (e.g. Navbar, Row, Banner)
│   ├── requests.js      # TMDb API endpoints
│   ├── App.js           # Root app component
│   ├── index.js         # ReactDOM entry point
│   └── styles/          # CSS files
├── .env                 # Environment variables (TMDb API key)
├── package.json         # Project metadata and dependencies
└── README.md            # This documentation file
```

---

## ✨ Features

* Browse trending, popular, and upcoming movies
* Embedded trailers via YouTube player
* Responsive layout with custom CSS
* Modular React components
* Smooth horizontal scrolling for movie rows

---

## 🛠 Tech Stack

* **ReactJS (CRA)**
* **CSS3** (Flexbox, media queries)
* **Axios** for API calls
* **TMDb API** — for movie & trailer data
* **React YouTube** (for embedded video trailers)

---

## 🚧 How It Works

1. TMDb API provides movie categories and trailer data.
2. Axios requests fetch data and populate component props.
3. The Banner, Row, and YouTube components render structured content.
4. Dynamic routing and conditional rendering handle the trailer modal.

---

## 🧩 Setup & Installation

```bash
git clone https://github.com/abhi172004/Netflix_Clone.git
cd Netflix_Clone
npm install
```

1. Create a `.env` file with your TMDb API key:

   ```env
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```
2. Run the app:

   ```bash
   npm start
   ```

---

## 📸 Screenshots

*![image](https://github.com/user-attachments/assets/a2687bfb-08e1-41e5-8814-d560bfb1d0bf)
![image](https://github.com/user-attachments/assets/8fae9dfe-91e6-4144-a808-9e1bc4f20fcf)
![image](https://github.com/user-attachments/assets/2b416bd3-5f58-460e-ae7e-58289a8b9a41)*

---

## 🔄 Future Improvements

* Add a search bar for direct movie search
* User profiles and watchlists
* Genre-based browsing and filtering
* Lazy load movie thumbnails
* Server-side rendering (Next.js version)

---

## 🛠 Contributing

1. Fork the repository
2. Branch from `main` (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Create a pull request

---

## 👤 Author

**Abhijeet Bhise** – Front‑end Developer
GitHub: [@abhi172004](https://github.com/abhi172004)

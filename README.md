# 🌐・Misty Sync API  
A public API that collects and provides public information from Discord users and servers. It also generates dynamic user banners with profile details. Built using: Express, Discord.js, Canvas, Axios and more...

## 🧩・To start the project follow a few simple steps:

1. Clone the project from GitHub using:
```
git clone https://github.com/AubreyFBG/misty-sync-api.git
``` 
2. Create and configure your `.env` file with: 
```
SELFBOT=Your Discord Self Bot Token
```

3. Install the required dependencies:   
```
npm install
```
4. Start the project:   
```
node .
```
5. Open the API in your browser or API tester:   
```
http://localhost:8080/
```

### ✅ Example endpoints:
- `/user/:id` → Get user data  
- `/invite/:inviteURL` → Get server data  
- `/user/:id?createImage=true` → Generate a user banner image  

### ⚠️ Notes:
- For user data, the bot not needs to share a guild with the user.
- Make sure the bot has the necessary permissions to view server and user data.

## 🍥・Project Preview:
<img width="1919" height="1079" alt="imageMistySyncAPI" src="https://github.com/user-attachments/assets/87c5672d-5137-47fd-9d53-ea44ca8136e1" />


## 🔧・Built With:
- Node.js  
- Express  
- Discord.js  
- Canvas  
- Axios  

---

© 2025 – Luis Ricardo Alves Chaves

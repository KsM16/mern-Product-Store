# 📝 MERN Product Listing Site


*A modern product listing web application built with the MERN stack*

## 📖 About the Project  
The **MERN Product Listing Site** is a **full-stack application** that allows users to **add, update, and delete product listings** with details such as product name, image, and price. This project provides a **simple and intuitive interface** for managing product catalogs, with future scope for **payment integration and a full-fledged online retail store**.

## 🔥 Features  
✅ **Add Products** – Upload product name, image, and price  
✅ **Update & Delete Products** – Modify or remove listings easily  
✅ **User Authentication** – Secure login/signup with JWT  
✅ **Responsive UI** – Optimized for mobile and desktop  
✅ **Future Scope** – Payments and online retail store expansion  

## 🛠️ Tech Stack  
### **Frontend:**
<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" alt="React.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50" alt="JavaScript"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="50" alt="HTML5"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="50" alt="CSS3"/>
</p>

### **Backend:**
<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" alt="Node.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="50" alt="Express.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="50" alt="MongoDB"/>
</p>

### **Authentication & Future Payments:**
<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg" height="50" alt="JWT Authentication"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg" height="50" alt="Stripe Payments (Future Scope)"/>
</p>

## 📷 Screenshots  
### 🔹 Home Page  
![Home Screenshot](https://via.placeholder.com/800x400?text=Home+Page)  

### 🔹 Add Product Form  
![Add Product Screenshot](https://via.placeholder.com/800x400?text=Add+Product)  

### 🔹 Edit Product  
![Edit Product Screenshot](https://via.placeholder.com/800x400?text=Edit+Product)  

### 🔹 Delete Confirmation  
![Delete Screenshot](https://via.placeholder.com/800x400?text=Delete+Product)  

## 🚀 Installation & Setup  
### **Step 1: Clone the repository**  
```bash
 git clone https://github.com/KsM16/mern-Product-Store.git
 cd mern-Product-Store
```

### **Step 2: Backend Setup**  
```bash
 cd server
 npm install
 npm start
```

### **Step 3: Frontend Setup**  
```bash
 cd client
 npm install
 npm start
```

### **Step 4: Set Environment Variables**  
Create a `.env` file in the **server** directory and add:
```plaintext
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## ⚡ Major Challenges Faced  
### ❌ **Managing Product Updates Efficiently**  
- **Issue:** Handling updates without unnecessary re-renders.
- **Solution:** Optimized React state management and API calls.

### ❌ **Ensuring Secure Product Deletion**  
- **Issue:** Preventing accidental deletions.
- **Solution:** Added confirmation pop-ups before deletion.

### ❌ **Authentication & User Access Control**  
- **Issue:** Restricting unauthorized actions.
- **Solution:** Implemented **role-based authentication (RBAC)**.

## 🤝 Contributing  
Contributions are welcome! To contribute:  
1. **Fork** the repository  
2. **Create** a feature branch: `git checkout -b feature-branch`  
3. **Commit** changes: `git commit -m "Add new feature"`  
4. **Push** to the branch: `git push origin feature-branch`  
5. **Submit** a Pull Request  



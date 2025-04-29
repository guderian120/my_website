# Personal Portfolio Website

This is my **personal portfolio website**—a fast, responsive, and fully static site deployed on [Netlify](https://www.netlify.com) with a serverless backend for contact form handling via **AWS Lambda**.

## 🚀 Live Demo

Check it out here: [https://andyamponsah.netlify.app](https://andyamponsah.netlify.app)  


## ⚙️ Tech Stack

- **HTML5 / CSS3 / JavaScript**
- **Netlify** (Static Hosting + CI/CD)
- **AWS Lambda** (Serverless Contact Form Handler)
- **Netlify CLI** (for local builds and testing)
- **GitHub** (Version control and CI trigger)

## 📬 Contact Form

The contact form is powered by a **serverless SMTP handler** built with **AWS Lambda**. This allows you to receive messages without needing a backend server or third-party form services.

- Messages are processed via AWS SES (or SMTP)
- Lambda function is invoked via Netlify’s form submission feature or an API call
- No backend server required — simple, secure, and fast

## 🔄 Continuous Deployment

Every commit pushed to the `master` branch automatically triggers a new build and deployment on Netlify. This CI/CD workflow ensures that the live site is always in sync with the latest code in the repository.

## 🛠 Setup & Development

To run locally:

```bash
npm install netlify-cli -g
netlify dev


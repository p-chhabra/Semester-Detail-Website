# **Semester Detail Website**

## **About**

Semester Detail Website is an online platform where a student can access the details related to different courses of all semesters with comfort and ease. It contains information on various fronts for all courses in a user friendly and easy to navigate manner:

- Syllabus of every course.
- Past performance in the course by previous batches, i.e mean SGPI, median SGPI, highest SGPI etc;
- Relevance of the course from the perspective of placements and competitive exams;
- An open comment section for every course, where anyone can post information regarding that subject.
- Hand written notes by previous batches
- Recommended books and sources to study from

### **Problem Faced by students**

It is really hard to retrieve any sort of information related to courses of a semester as students. Even the basic task of finding the syllabus of a desired course in a pdf is cumbersome task. Moreover there is no official repository for notes, sources, relevance, past grades etc for a every course for students to evaluate the importance and difficulty of a subject.

## **Framework Used**

**NEXTJS** : [Next.js](https://nextjs.org/) is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.

### **Frontend**

The frontend is designed as a **SPA** (Single page application) with user friendly UI and easy navigation.
**Static site generation** with dynamic file based routes has been used to improve SEO and improve load times of the website.

### **Database**

A local **json** has been used to store information regarding courses of all semesters and [MongoDB Atlas](https://www.mongodb.com/atlas/database) is used to store comments/reviews for every course.

## **PREVIEW**

### **Home Page**

![Home Page](/public//website-ss/home.png)

### **Courses Page**

![Courses Page](/public//website-ss/courses.png)

### **Course Detail Page**

![CourseDetail Page](/public//website-ss/courseDetail.png)
Scroll down
![CourseDetail Page](/public//website-ss/courseDetail2.png)

### **Contact Page**

![Contact Page](/public//website-ss/contact.png)

## **How to run development server**

To run this project on your local machine, you should have **version 18** or higher of **Nodejs** installed on your machine.

### **Steps to run the project in your local environment :**

- Git clone the [Semester Detail Website](https://github.com/p-chhabra/Semester-Detail-Website) repository to your local machine.
- run the following command to install all the required dependencies for the project in the root directory of the project.

```bash
npm install
```

- to star the development server , run the following command

```bash
npm run dev
```

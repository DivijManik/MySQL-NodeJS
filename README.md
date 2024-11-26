# MySQL-NodeJS
 MySQL & api in JavaScript

# models
 - post (models/post.js)

# migrate models to database

**Command**

 `sequelize db:migrate`

# Get posts
 url - `localhost:3000/posts`

 api code - (routes/posts.js)

# Post posts
  url - `localhost:3000/posts`

**Json Model for Post requests**

{\
    "title": "My Blog Title",\
    "content": "This is my first blog post",\
    "imageUrl": null,\
    "categoryId": "1"\
}
/*
   Filename: sophisticated_code.js
   
   Description: This file contains a complex and elaborate code implementing a social media platform.
*/

// Define the User class
class User {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.friends = [];
  }

  // Method to add a friend
  addFriend(user) {
    this.friends.push(user);
  }

  // Method to get friend list
  getFriendList() {
    return this.friends;
  }
}

// Define the Post class
class Post {
  constructor(content, user) {
    this.content = content;
    this.user = user;
    this.likes = 0;
    this.comments = [];
  }

  // Method to add a like
  addLike() {
    this.likes++;
  }

  // Method to add a comment
  addComment(comment) {
    this.comments.push(comment);
  }
}

// Create users
const user1 = new User("John Doe", 25, "New York");
const user2 = new User("Jane Smith", 30, "London");

// Add friends
user1.addFriend(user2);

// Create posts
const post1 = new Post("Hello world!", user1);
const post2 = new Post("This is my first post.", user2);

// Add likes and comments to the posts
post1.addLike();
post1.addLike();
post2.addLike();
post2.addComment("Nice post!");

// Display users' friend lists
console.log(user1.name + "'s friends:", user1.getFriendList());
console.log(user2.name + "'s friends:", user2.getFriendList());

// Display posts' details
console.log("Post 1:", post1);
console.log("Post 2:", post2);
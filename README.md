# Assessment

Upload the assessment to your GitHub/Bitbucket profile when you are done

## Routing assesment

When application is loaded, check if user is logged in

- IF `isLoggedIn === true` -> redirect to /admin
- IF `isLoggedIn === false` -> redirect to /login

After user clicks Login - `AuthService` gets updated with userPermissions
Use `userPermissions` and [Angular Guards](https://angular.io/guide/router#preventing-unauthorized-access) to:

- Allow access to `/posts` if user has 'catalog.read' permissions
- Allow acces to `/users` if user has 'user.read' permissions

## Posts Assessment

For this assessment it is enough to use `https://jsonplaceholder.typicode.com/`

- Use any styles framework
- Create a page which will display list of posts

  - Clicking on a Post redirect to a Post Details page

- Create a Post details page
  - Post details page should load data from API `https://jsonplaceholder.typicode.com/posts/${POST_ID}`
  - Post details page should show Post Author Name and Email from `https://jsonplaceholder.typicode.com/users/${userId}`
    - Cicking on Author Name - redirect to User Details page

## Users Assessment

For this assessment it is enough to use `https://jsonplaceholder.typicode.com/`

- Use any styles framework
- Create a page which will display list of users

- Create a User details page
  - User details page should load data from API `https://jsonplaceholder.typicode.com/users/${userId}`
  - User details page should display User Name, address, and company information

## Optional

- On User Details page - show how many Posts where created by current user (`https://jsonplaceholder.typicode.com/posts`)

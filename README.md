# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

There is an api https://reactapi.bsite.net/api/Employee/ to process the list of employees. And several users allegedly interact with it.
you need to do the usual processing of crud operations using redux. filtering, sorting. each api request has a delay of 5-6 seconds.
The user should not see any delays in the api, except for the first download. 
make 5 buttons: 
examples:
curl -X 'GET' \
  'https://reactapi.bsite.net/api/Employee' \
  -H 'accept: text/plain'

curl -X 'POST' \
  'https://reactapi.bsite.net/api/Employee' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "employeeId": 0,
  "firstName": "string",
  "lastName": "string",
  "birthday": "2023-03-26T15:56:30.328Z",
  "height": 0
}'

curl -X 'PUT' \
  'https://reactapi.bsite.net/api/Employee' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "employeeId": 0,
  "firstName": "string",
  "lastName": "string",
  "birthday": "2023-03-27T10:43:13.607Z",
  "height": 0
}'

curl -X 'GET' \
  'https://reactapi.bsite.net/api/Employee/1' \
  -H 'accept: */*'

curl -X 'DELETE' \
  'https://reactapi.bsite.net/api/Employee/1' \
  -H 'accept: */*'

EmployeeModel{
employeeId	integer($int32)
nullable: true
firstName	string
nullable: true
lastName	string
nullable: true
birthday	string($date-time)
nullable: true
height	integer($int32)
}
Please write only codes all files and with redux, @reduxjs/toolkit, react-router-dom, react-redux, react-saga

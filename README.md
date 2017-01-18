# Youtube Video Explorer App With React/Redux/LocalSotrage
Browsers (tested): Chrome - Version 54.0.2840, Firefox 50.0 and Safari 6.2.8.

###Libraries/Frameworks/Bundlers/Server used###
* React
* Redux
* React-Redux
* Bootstrap , React-Boostrap - For gridlayouting and Widgets.
* JsonP - for external API calls.
* lodash - for limiting api calls/performance.
* Bootstrap-slider - A Boostrap slider widget. Have written a React Wrapper over this Bootstrap widget.
* ReactAutosugest - ReactLibrary for autosuggest.
* Mocha, Chai and Jsdom - For Unit testing
* ESlint
* Webpack with Babel, Saas and Style Loader, Webpack-Dev-server

###Code organization###
* All the actions and corresponding action types are stored in actions directory within src.
* All the pure reducer functions are stored in the reducers directory within src.
* All the services used across in the application are stored in the services directory within src.
* All the react components are segregated into "Stateful container components", "Stateless layout components", "Stateless presentation view components" and stored in corresponding directories within src/components directory.
* The app's main component 'app.js', app's redux store 'store.js' , app's middleware 'middleware.js', and app's trigger point 'index.js' are stored directly under src directory.
* Each stateless component's(layout/view)  styles are stored with same name in the styles directory. (Note : It makes more sense to have scss along with components in same folder, but time constraint putting all the styles in styles directory)
* Unit tests and the corresponding configuration are stored in test directory

###Getting Started###
Note : Pre requisites - Install npm by installing NodeJS.
Clone and repository and perform the following for app to run
```
	> npm install
	> npm start
```
After you started the webpack-dev-server, you can use the below URL's for testing the app.
[http://localhost:8008/](http://localhost:8008/)

###Notes to the Evaluator###
* The app is configured to be unit test ready with Mocha,Chai and JSDOM. I have infact unit tested the "VideoItem" component and your can run the unitests using
```
	> npm test
```
* The active Tab behaviour is dynamic. Irrespective of which tab you are in ("Videos search" or "My videos"), if there are any user actions in the Search component(searchterm change or year change or category change) then that will trigger the "Videos search" tab to become the active tab.
* If there are no videos/entries matching the criteria/filter then "No Results"  message is displayed. 
* Used the basic UI features that would suffice the required functionality. Emphasis was not given to produce rich graphical experince , considering the time. Please let me know otherwise, infact I can do rich UX page as well. For easing the dev effort I have (relied on)/used  the bootstrap layouting for the RWD.
* The app is eslint config ready. Infact added some basic eslint rules.
* Regarding scss per component, tried to align closley to the concept of "CSS Modules", although not placed scss in same location as the component (time factor). Also I can also configure the webpack to compile and output all scss into a single css file using ExtractTextPlugin- let me know if needed.
* Didn't see the need for the ReactRouter functionality for just the two tab application.



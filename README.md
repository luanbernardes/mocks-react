## Install

- Install this this package in your project  
- Add init mock service work function to intercept requests `initMockServiceWorker()` in your index, for example:
   ```
   // Init intercept requests (using service worker) to mock requests
   // just in development or staging environment
   if (env !== 'production') {
      const objMocks:GroupMockDebug[] = {YOUR MOCKS IN HERE};
  
      initMockServiceWorker(objMocks);
   }
  
   // here your React render, it is just a e.g.
   ReactDOM.render(
      <React.StrictMode>
          <App />
      </React.StrictMode>,
      document.getElementById('root')
   );
   ```
  - the first param is a type `GroupMockDebug[]` with all mocks do has
  - you can organize mocks with `title` inside your array `GroupMockDebug[]`
  - will intercept only mocks selected.
  - obs: don't init in production environment

- Add component in your project to you can select what to mock
    - ```
      const groupMockDebugsMock:GroupMockDebug[] = `YOUR MOCKS IN HERE`;
      
      <SelectMockContainer render={env !== 'production'} mocks={groupMockDebugsMock}>
      ```
- Add [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
    - Create a file `mockServiceWorker.js` in the `root` from folter **public**, it need to stay in the root of your application.
    - Add the this code in file you create `mockServiceWorker.js`: `self.importScripts('https://truepay-mocks.web.app/mockServiceWorker.js');`
- When you init your application, you can click on bottom left arrow to open the mock list. If it doesn't have a value selected, it won't be intercepted.

## Usage
- Click on the bottom left arrow to open the mock list.
- Select all mocks that you want to intercept.
- Reload page to apply the changes.
- Enjoy!! All requests that are intercepted will be returned with the mock data.




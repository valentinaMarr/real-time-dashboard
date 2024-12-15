# READ ME

## Real-Time Dashboard - Project Overview
This is a demo for web page that displays a personalized dashboard. 
Its main features are:
- **Real-Time Geolocation**: Displays the user's current location.
- **Local Weather Forecast**: Fetches real-time weather information.
- **Daily News**: Displays the latest news based on the user's country.
- **Dynamic Theme**: Changes the dashboard theme based on time of day and weather conditions.

### How to start the project
This project uses `pnpm` as engine (v. >= 8.9.0) and a `node` version greater than 18th. 
It is recommended to use these versions as some dependencies could not work properly with older versions. 

Before launching the project, please create a local `.env` file into project's root folder containing the variables listed within the file `.env.example`.

Finally, you can launch the app through the command `pnpm dev`.

### Technologies Used
This application is written in **Next.js** and **Typescript**. 

Why use Next.js instead of plain React.js? 

Next.js provides built-in support both for routes management and in-app APIs requests. This makes controlling navigation patterns and cookies creation easier - without importing external libraries.
Working with TypeScript ensures more predictable and maintainable behavior.

[**Tanstack Query**](https://tanstack.com/query) has also been used, as ts hooks let the developer have more control on queries related behaviors, such as: multiple queries, checking pending state, differentiate responses by the request status.

Styling has been developed through the use of **Material UI** and [**Motion dev**](https://motion.dev/). 

The APIs endpoints used to get the geolocalised data are:
- [OpenWeather](https://openweathermap.org/)
- [NewsApi](https://newsapi.org/docs/get-started)

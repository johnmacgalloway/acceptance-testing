This application displays the 5 day weather forecast for a given location.

### Features

* Enter city name, get 5 day weather forecast
* Select day, get 3 hourly forecast
* Select day again, hide 3 hourly forecast
* Daily forecast should summarise 3 hourly:
  * Most dominant condition
  * Current wind speed and direction
  * Aggregate rainfall
  * Minimum and maximum temperatures
* All values should be rounded down
* Rainfall rounded up (e.g. 0.5mm is 1mm)

We would like the application to be tested against the requirements above. Please rewrite the requirements into an appropriate format, e.g. BDD story files, adding any requirements that you think appropriate, such as edge cases or accessibility improvements.

JMaCG-----------------------------------------------------------------------------------------------------------------------------------
Under the Github location, buildit/acceptance-testing, I accessed the README and provided the following responses for the request to rewrite the features into BDD, which are offered in the ‘As A,..I Want,…So That’ format, they are broken down into Epics, Themes and User Stories:

Epics		
As A User; I Want To Know About the Weather; So That I can plan and prepare
		
		
Themes		
As A User; I Want To know the local weather forecast; So That I can plan my day
As A User; I Want To know the current environmental conditions; So That	I can respond and prepare
		
Stories		
As A User; I Want by entering a city name; So That I can get the 5 day forecast
As a User; I want by selecting today; So that I can get the a 3 hourly forecast if absent, and hidden if present, which will consist of {dominant condition, windspeed and direction, cumulative rainfall, min and max temperatures}


JMacG------------------------------------------------------------------------------------------------------------------------------------

Please write a set of automated tests against those requirements using any language and / or test framework of your choice.

The application is running in "test" mode, using a set of test data, matching that which comes from the public API at OpenWeatherMap (http://openweathermap.org/forecast5). There is test data for a number of locations, found in the folder ```src/data```.

You should find that every important part of the HTML produced has been marked with ```data-test``` attributes.

### What we are looking for

This exercise is to examine your technical knowledge, and testing skill; there are no tricks or hidden agendas. We are looking for a demonstration of your experience and skill using current testing technologies and methodologies.

Make sure that your code is clear, demonstrates good practices, and that you include a readme file explaining how to build and run your solution - please don't spend more than 2 to 4 hours on this.

JMacG---------------------------------------------------------------------------------------------------------------------------------

Build by issuing the $ npm run build

JMacG----------------------------------------------------------------------------------------------------------------------------------

Bear in mind that your solution will form the basis for a follow-up conversation.

### Checklist

Please ensure you have submitted the following:

* A pubic repository (e.g. GitHub, BitBucket) containing the requirements and automated tests
* A readme explaining
  * How to build and execute your solution
  * Details on anything further that you would like to achieve given more time, including any trade-offs that you may have made

Good luck and thank you for your time - we look forward to seeing your creation.

### Running the app locally

You'll need node and npm installed - first off, install the required dependencies:

    $ npm install

To start up the application:

    $ npm run develop

# Goedemorgen!
Goedemorgen! is a check-up application for elders. In the application, elders can join a community of neighbours. Within said community they can let each other know they are still fine and well. 

They also can ask for help within their community. Dependant on said question, you could ask for help from within your family. When help is needed a request will be send.

## Prerequisites 
* Node.js > 12
* NPM
* Expo Go

## Base depencies
* [react-navigation](https://reactnavigation.org/) navigation library;

## Usage and getting the project working
To get the project up and running, do the following:

1. Clone the github repository with the following command: <br> `git clone https://github.com/TzunderWulf/goedemorgen.git`
2. Once cloned, enter the folder and install the packages: <br> `npm install`
3. After installing the packages, run the project: <br> `npx expo start`

## Styleguide (coding and design)
For the styleguide in terms of code, ESLint is used.

For the styleguide in terms of design for components, it can be viewed [here](https://drive.google.com/file/d/1dimTGHL8bG8kvCxIQ9DzCyQ6XOt7ZwpS/view?usp=sharing). 

## Folders
Three folders are managed for this:

* **Assets**: in this folder all the assets are contained, everything from images to icons.
* **Localization**: in this folder all the language and locatization files are stored. For each locale, create a file.Inside define an object then maintain the nesting sorted by the screen that contains the text that you need and the text you want to show. 
* **Components**: in this folder all the compontents are stored, things like buttons, inputs and headings.
* **Screens**: folder to contain all screens within the application.

## Contribution
If you feel like contributing, please open a issue with your addition.

### How to contribute
Once your issue is accepted, do the following steps:
* Fork the project on Github
* Install development dependencies
* Create a topic branch for your changes
* Ensure that you provide documentatio (patches won't be accepted without)
* Create a pull request on Github (these are also a great place to start a conversation around a patch as early as possible)

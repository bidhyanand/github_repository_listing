

# Github Repository Finder

A brief description of what this project does and who it's for


## Run Locally

Clone the project

```bash
  git clone https://github.com/bidhyanand/github_repository_listing.git
```

Go to the project directory

```bash
  cd github_repository_listing
```

Install dependencies

```bash
  yarn
```
Build the project

```bash
  yarn build
```

Start the server

```bash
  yarn start
```


## To run in Browser

url: http://localhost:3000
## Deployment

This project is deployed in the Netlify

Netlify: Develop and deploy websites and apps and preview in real time how its look like.

https://github-repository-listing.netlify.app/


## Tech Stack

**Client:** React, react-router-dom, typescript

**Design:** TailwindCSS

**Apis:** https://api.github.com/




## Documentation

> Github repository listing is such a website in whic user enter any repos name get their result on clicking the search icon.

>User can also sort the data according to the last updated time,forks and stars.

> User can also adust the number of repos that can be viewed at one time.

>By clicking on the repos name and author of repos you will be visited to the therir respective repos and git hub profile.


## Screenshots


![App Screenshot](https://res.cloudinary.com/dhxccll9e/image/upload/v1673426830/scrrenshots/Screenshot_2023-01-11_at_14.26.55_a5vtbn.png)

![App Screenshot](https://res.cloudinary.com/dhxccll9e/image/upload/v1673426853/scrrenshots/Screenshot_2023-01-11_at_14.27.32_ft5sf0.png)


![App Screenshot](https://res.cloudinary.com/dhxccll9e/image/upload/v1673426846/scrrenshots/Screenshot_2023-01-11_at_14.30.06_urlmbf.png)

![App Screenshot](https://res.cloudinary.com/dhxccll9e/image/upload/v1673426846/scrrenshots/Screenshot_2023-01-11_at_14.28.06_bpegbs.png)



##  Folder Structure 


![App screenshot](https://res.cloudinary.com/dhxccll9e/image/upload/v1673427183/scrrenshots/Screenshot_2023-01-11_at_14.37.35_rsqgga.png)

**src** folder contain the componnent,models,services

**Components**
>Inside the compnents folder the three folder i.e pagination,repositoriesDetail and repositories search folder consist of each of their file with their respective features.

**models**

>models are the folders in which the all the respective interfaces are declared in their respective files.

**services**

>services are the folder for making the api's calling through their services

>inside the services folder there is apiServices folder and apiHelpers and apiUrls files also present in the services

>the main pursore of making the service folder for calling the apis

**App.tsx**

>Routing are done in the App.tsx files.







## Future Addition

For the future addition of the component in the project developer can easily make folder inside the components and easily handle it .

To add the routing for the future purpose developer can esaily make path and element in the router function of App.tsx

Due to the easily naming convention in the projects and proper folder structure new developer can easily undersatnd the folder structure , code and make their desired changes according to their will .
## Reason for choosing packages in the project

>React js is popular framework to build the website and widely demanded developer in the current situation

>Using talwind css it saves our styling time.Altough i have completed many project in tailwind which make me easy to remind the components.

>I havent used v6 router dom so in this period i know the changes of router dom from v5 to v6 and also succesfully used int he project.

>TypeScript extends JavaScript and improves the developer experience and typescript don't let progrmammer to write messy code.
## Problem faces during this project

primary problem arises during this project is to maintain the typescript data i tried my best to maintain the code using the typescript.
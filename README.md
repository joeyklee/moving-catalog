# Moving Catalog
***your image names can't have spaces in them!***

## About
We all move eventually. And when that time comes, you can show show your things to your friends and aquaintances with this hacky moving catalog. 

## Requirements
* github account 
* basic undertanding of github and github pages
* gmail + google drive + google forms

## Setup:
assumes you can set up github (I will write more instructions later if you don't.)
### Fork this repo
Yes - do it :)

### Create a gh-pages branch
Yes, do that too

### now check if it is working
navigate to: `yourGithubId.github.io/moving-catalog`

if it is working then proceed...

### Make a google spreadsheet of your items
You can only have these columns (for now):

```
item    cost    condition   comments    available   img
```

for example:

```
item    cost    condition   comments    available   img
chair   20      great                   yes 
table   15      great                   yes 
desk    30      great                   yes 
bike    200     working           
couch   100     great                   yes         img/couch-1.JPG
```

* your images will all go into the `img` folder 
* after someone purchases or claims an item, just remove the `yes` from that record. I wouldn't delete the whole row since the person might flake.
* if you make any changes they will update automatically on the site so don't worry.
* you don't need to finish inputting all the items before you continue to the next step.

You're going to now:
* file --> publish to the web --> change "entire spreadsheet" TO "sheet1" --> make sure the box for "automatically republish when changes are made" is clicked! --> publish --> copy the link.
* it should look something like this: `https://docs.google.com/spreadsheets/d/18CY89mk23JefG3rqmqBaZxSaKV0f4X-PPzEGtJaWSB4/pubhtml?gid=0&single=true`

Now open up the `main.js` file:
* replace the text after `url =` with your new url. Be sure to have opening and closing quotation marks
* it should look like this but with your url: `url = "https://docs.google.com/spreadsheets/d/18CY89mk23JefG3rqmqBaZxSaKV0f4X-PPzEGtJaWSB4/pubhtml?gid=0&single=true"`
* commit the changes via github

## Make a google form:
* you want to make a google form with the like the following:
```
Moving Catalog 🚀
Please fill out the form below to claim the item in the moving catalog. Please give 24 hours for a response 🌈
+ Email address
+ Item Name?
+ Your Name?
+ Email
+ Phone number
+ Can you pick it up?
+ When are you available to claim the item?
```

* when you press `send` you must choose the option with the `< >` --> then copy that iframe html text 
* --> now go to the `index.html` file and replace the `<iframe>... </iframe>` with your new iframe text. you will see something that says `!!!! REPLACE ME!!!!`
* Commmit the changes via github

Now everything should be running:
* navigate to: `yourGithubId.github.io/moving-catalog`

fingers crossed! 

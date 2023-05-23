# project-ami-sfmoma

## Build process:

To test locally, run `npm run dev` from the root of the folder. You can then test it locally, but some of the images won't work because the build folder places them in a different directory than when testing locally. 


To make a build, run `npm run build` from the root of the folder. You can then upload those files to the fvdev3 server. Just replace all the files under "ami.fablevision-dev.com" with the ones created in the "dist" folder after building.

That will update the site here: https://ami.fablevision-dev.com/#/

## Updating spreadsheet

The spreadsheet with all the data for the questions and information is here: https://docs.google.com/spreadsheets/d/17e1aJmcrjGwgdK8l8cApNmpgbbCUgu4N69X70TxfinY/edit#gid=1201255741

After making changes, click `Export JSON`, then `Export JSON for all sheets`. Copy this, and paste it into the "text.json" file in the project. Then re-build. 

Note: Make sure all the fields are "text" fields in the google sheet. Numbers and dates and such won't work, and you can make sure they're formatted as text fields by entering the numbers / dates with a ` character before the data.

//command line
//dir for everything in current direcoty
//cd for change directory
//node script.js for running script
//cls to clear screen 
//cd / 
//cd ~ user directory
//cd .. 
//in windows use \ and not / for windows path 

//mkdir  makes a folder
//rmdir removes a folder
//touch makes a file
//rm removes a file
//echo writes to the terminal
//clear clears the terminal
//cls to clear screen
//echo > index.html creates html file in windows
//start . opens the file we're currently in (open .  on mac)
//start index.html opens the page
//open an app like sumblime text
//start -a "Sublime Text"
//-a for line 'a' , then "application name"
//mv a file (mv for mac )
//rename index.html about.html in windows

//git hub pt1
//what is a pull request
//what is a commit
//what is a branch
//what is a merge
//what is a pull request
//use github as a centralized location for a file.
//these are the steps in merging so that we work on the same
//project
//create repository
//under 'code' (green button) choose clone or download (https tab)
//copy link
//open terminal and cd directory whatever folder you want it to be
//git clone link
//git add . (add all files)
//git commit -m "message"
//git push -u origin master (push to master branch)
//go to github, click compare & pull request
//click create pull request
//make sure you put the right path 
//for ex., its not c:\desktop\lina its C:\Users\Tim\Desktop\Lina
//anyway 1st we use git clone **paste in the github link you copied**
//this copies the github stuffs
//if you go to the lina foler, it should be there (the background-generator folder )
//the .git hidden folder is inside the background-generator folder
//now you can copy the lina files into the background-generator folder

//now cd to the background-generator folder
//need to sync the files on github using git status
//git status tells us what files are not in the background-generator on github site
//it then prompts you to use 'git add' to update the file and add the 'missing' files
//then do git add for each missing file (git add index.html, git add script.js, etc)
//then re-run git status
//if successful, it'll say 'changes to be committed
//then do git commit (just to confirm you files you added are infact what you wanna add )

//last step, do git push  => black box stuffs, not teacher => -u origin master. in short just do git push for now
//then refresh github page and docs should be there. 
//now yo need a copy of Linas files into your folder so you can get started
//go to terminal, cd to Tim
//git clone https://github.com/timthetech30/background-generator.git
//folder should now be in tim folder
//any changes made on one file, run git status
//the modified file will display, then run git add index.html (if multiple files do git add .)
//then git commit -m ""changing title" 
//then git push
//then refresh on github site, you should see the update
//if you click on the file that was actually modified
//one line is red, the green below is what it is now 
//but how does Lina know on her desktop that you made changes...
//use git pull to pull the latest changes
//if I come in the morning I wanna see if any changes were made after I left
//run git pull

//**add'tl steps below are from blackbox not teacher, ignore for now */
//cd Background-Generator
//cp -R ../lina/* ./ (copies everything from lina to Background Generator)







//this is from codeium below
//git add . (add all files)
// # Clone the repository
// git clone <repository_link>

// # Change directory to the desired folder
// cd <folder_path>

// # Add all files to the staging area
// git add .

// # Commit the changes with a message
// git commit -m "message"

// # Push the changes to the remote repository (master branch)
// git push -u origin master

// # Go to GitHub and click on "Compare & pull request"
// # Click on "Create pull request"

// # Make sure to put the correct path for the pull request
// # For example, if the path is "C:\desktop\lina", it should be "C:\Users\Tim\Desktop\Lina"

// # After the pull request is created, the GitHub repository will be updated

// # To copy the GitHub files to the local folder
// # Go to the desired folder (e.g., "lina folder")
// # Add all files to the staging area
// git add .
// # Commit the changes with a message
// git commit -m "message"
// # Push the changes to the remote repository (master branch)
// git push -u origin master

// # Go to GitHub and click on "Compare & pull request"
// # Click on "Create pull request"
// # Merge the pull request into the main repository





//part 2 of git and git hub
//each day you wanna do a git pull to see if anychanges were made
//make sure you're not in master branch
//run a git branch and it'll tell you what branches you have
//teacher called 'master' my github called it 'main'
//add a branch => git branch 'name of branch'
//then git branch to confirm your new branch is part of list
//change branch, git checkout 'name of branch you wanna be in'
//change the h3
//then run git status to list the modified files
//then git add .
//then git status to confirm
//then git commit -m"


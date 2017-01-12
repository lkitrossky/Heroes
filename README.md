# Heroes
Learning Angular project from https://angular.io/docs/ts/latest/tutorial/

# Setup
Register on GitHub and add a projects (Heroes) 

On Linux choose a folder, like ~/Angular1,  and cd to it
```
cd ~/Angular1
git clone https://github.com/angular/quickstart  Heroes   #clone the initial project quickstart
cd Heroes/
pwd
/home/levi/Angular1/Heroes
rm -rf .git   #disconnect from the original Git repository  
#possible wuthout then use "git remote set-url  origin  https://github.com/lkitrossky/Heroes "
git init
git add .
git remote add  origin  https://github.com/lkitrossky/Heroes   # adding for the first time.
git remote -v
*origin	https://github.com/lkitrossky/Heroes (fetch)
origin	https://github.com/lkitrossky/Heroes (push)*
git fetch
git commit
```
The original start as quict start is ready

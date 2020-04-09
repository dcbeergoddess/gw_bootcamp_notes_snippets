##  GIT

created to solve problem. Websites started become more complex and one person websites. Usually built by teams working on same code or different aspects. Before wouldn’t be able to roll back to old code after someone might decided to change their mind.

## Collaborative Coding
1. Version control (go back to old codes)
2. Can look at different versions side to side you can decide to resolve the conflict
3. Everything do is GIT is in branches. Most common is master branch. Branch = personal copy
	A. We’ll be using master branch. 
	B. Before you push to branch you pull 
4. A: use it to make copies of what you are doing B. Multiple people can use on same code base

## GitHub
1. Allow people for anywhere in the world to access
2. Open Source products
3. You can modify code and push a potential change
4. Prior to git and github open source was not common
5. Can see how many people have collaborated on code
6. You can make private repos for personal stuff (can add people to private repo)
7. Class will be public repos
8. Nobody can push repos. Must send pull request to author
9. You can always see who did certain commits even when copying a repo. Original author gets collaborative acknowlegement for their commits
10. Repo is just a collection of code

## Git pull every morning

	Steps
	1. Go into lessons under boot camp directory on computer
	2. Get to root level of project
	3. Type: git pull origin master
	4. Will overwrite files you might have modified in directory
			Why we copy files to another directory 

	5. Git remote -v (can see locations set up in origin)
     Can make repos in git hub from pull from git lab


## CREATE NEW REPO
1. . Click on create new
	B. Should have user name. Type in name fo repos (lowercase, no space, underscore or dashes)
	C. Description not super necessary
	D. Make public
	E. Check initial the repository with a read me
		a. None and none for now for licensing
2. . Easier to clone or download 
	A. Copy address
3. Move into homework inside your gw folder in Terminal or Git Bash
	A. Type: git clone
	B. Paste code you copied
	C. Type ls after and should have repo
	D. Cd into repo
	E. Ls
	F. Should have read me.md
	G. Type code . To open up in VA code
	H. Create webpage, new file
	I. Index.html
		a. Shortcut works in html file (will not work in non html)
			1. ! And then tab inside document
				A. Auto complete standard open document
			2. genrate initial HTML
			3. Leave metal name=“viewport” etc for now. Will use later
				A. Scales, etc.
	J. Go back to terminal and type ls
		a. Will have index.html
	K. Type: get status
		a. Untracked files (not sure what to do with index.html, git is not paying attention to it yet)
	L. type: git add index.html
	M. Type: git status
		a. New file: index.html (turns to green)
	N. Type: git commit -m “enter message”
		a. Right now this git commit only exists on your machine need to send to repo next
	O. Type: git push origin master
		a. Master is the branch we are working with (may modify slightly later but for now origin master)
	P. go back to web browser
		a. Reload page
		b. Should see index.html file
	Q. Make change again and make sure to save in VS code
		a. Git add -A (will change everything that has been changed)
	R. employers like regular pushes instead of at end of project 2-3 pushes for every homework assignment in beginning and more as they get more complicated
		a. Git add
		b. Git commit
		c. Git push
	S. Use address from browser bar to send to instructors for homework 
		a. Will send web page as well (show next class)
	T. Can run terminal git process in VS Code
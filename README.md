webpack project for github pages

main folder and dist folder have separate gits so I can use webpack w/ an internal folder.

/githubpages/ has a .git
this is intended for a code repo
node_modules and dist are ignored
seems to be missing from gituhub, instead there were ghpages04 test, so that was deleted
git init
crreate repo online
git remote add origin https://github.com/rphunt/gitpages_src.git
git push -u origin master




/githubpages/dist has a separate .git
dist is intended for the actual github home page
git clone https://github.com/rphunt/rphunt.github.io.git


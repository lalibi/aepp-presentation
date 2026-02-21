$releaseName = Get-Date -Format 'yyyy/MM/dd'
$releaseBranch = "release/$releaseName"
$releaseMessage = Get-Date -Format 'dddd, dd MMM yyyy'

# Ensure uncommitted work is safe before touching master.
git checkout develop
git stash push -u -m "publish.ps1 auto-stash"

git checkout master
git pull

git checkout develop
git checkout -b $releaseBranch

git checkout master
git merge --no-ff $releaseBranch -m "$releaseMessage"
git tag -a $releaseName -m "$releaseMessage"
git push --force-with-lease

git checkout develop
git merge --no-ff $releaseBranch
git push --force-with-lease

git branch -d $releaseBranch
git stash pop

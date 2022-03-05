git stash -u

git checkout develop
git flow release start (Get-Date -Format 'yyyy/MM/dd')
git flow release finish (Get-Date -Format 'yyyy/MM/dd') -m (Get-Date -Format 'dddd, dd MMM yyyy')
git push --force-with-lease

git checkout master
git push --force-with-lease
Sleep 5
git pull

git stash pop

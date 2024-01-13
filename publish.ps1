git checkout master
git pull

git checkout develop
git stash -u
git flow release start (Get-Date -Format 'yyyy/MM/dd')
git flow release finish (Get-Date -Format 'yyyy/MM/dd') -m (Get-Date -Format 'dddd, dd MMM yyyy')
git push --force-with-lease

git checkout master
git push --force-with-lease

git checkout develop
git stash pop

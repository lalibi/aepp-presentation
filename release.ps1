git stash -k -u
git checkout develop
git flow release start (Get-Date -Format 'yyyy/MM/dd')
git flow release finish (Get-Date -Format 'yyyy/MM/dd') -m (Get-Date -Format 'dddd, dd MMM yyyy')

git stash pop
git pull

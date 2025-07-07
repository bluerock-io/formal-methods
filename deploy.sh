rm -rf _github
git clone --depth=1 -b github-pages git@gitlab.com:bedrocksystems/formal-methods/website.git _github
(cd _github; git checkout -b github-pages; git rm -rf *)
npx @11ty/eleventy --input=. --output=_github --pathprefix='formal-methods/'
(cd _github; git add .)
REV=`git rev-parse HEAD`
(cd _github; git commit -a -m $REV)

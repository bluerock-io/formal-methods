rm -rf _github
git clone --depth=1 -b github-pages git@github.com:bluerock-io/formal-methods.git _github
(cd _github; git checkout github-pages; git rm -rf *)
npx @11ty/eleventy --input=. --output=_github --pathprefix='formal-methods/'
(cd _github; git add .)
REV=`git rev-parse HEAD`
(cd _github; git commit -a -m $REV)

# description
a package convert markdown file to html file , with all css in one single html file. can set specified path of file to convert , ofcourse the target dir to put into.
# installation
through npm : `npm install md-pillar -g`,set `mdtohtml` as global command.

# example
incase we have a file to convert:`C:/Users/hajerbin/Desktop/test.md`,
and a target dir where we want to convert into:`C:/Users/hajerbin/Desktop/result`
then example is:`mdtohtml  C:/Users/hajerbin/Desktop/test.md  C:/Users/hajerbin/Desktop/result`

# tips
- the path of `.md` can be relative or absolute, if none of them ,will default as `./index.md`
- the path of `target_dir` can be relative or absolute,if none of them, will default as `./`

# Info
This repository contains the webpage of the high performance visualization group at KAUST.
The webpage is built using Jekyll and served at [vccvisualization.org](vccvisualization.org) or [vccvisualization.github.io](vccvisualization.github.io).

WARNING: Everything that is committed to the master branch of this repository will be built on github servers and immediately go live on github pages.

# How To Edit
To edit the page clone this repository and make changes to the yml and md files. Before you push your changes to github you have to locally build the webpage and check if everything works.

## Local Builds
If you are building the webpage for the first time, download and install [Jekyll](https://jekyllrb.com/docs/windows/) and [Ruby](https://rubyinstaller.org/). The steps are:
1. Download and install a package manager version from RubyInstaller Downloads.
2. Install Jekyll and Bundler via a command prompt window: `gem install jekyll bundler`
3. Check if Jekyll installed properly: `jekyll -v`

To build and serve the local version of the webpage:
1. On the command line, go to the directory of this repository
2. type: `bundle install`
3. type: `jekyll serve`
4. In your browser navigate to http://localhost:4000/

## Adding a Publication
You can add PDFs, videos, teaser images and thumbnails to the publications subdirectory. 
The thumbnails must be 150x100px and should be small (in bytes). The teaser images should be wide, e.g. aspect ratio between 4:2 and 4:1.
To create a new publication entry, go to the _research subdirectory and create a new md file following the naming conventions of the other files (Year-Month-FirstAuthorLastName_ShortTitle).

## Adding a Person
To create a new person entry, go to the _people subdirectory and create a md file.







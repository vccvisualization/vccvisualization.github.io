---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       holo

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   The Hologram in My Hand: How Effective is Interactive Exploration of 3D Visualizations in Immersive Tangible Augmented Reality?

#include in selected publications on front page (optional, delete line if not applicable)
#display: selected

#list all publication authors in correct order
authors:
 - Benjamin Bach
 - Ronell Sicat
 - Johanna Beyer
 - Maxime Cordeil
 - Hanspeter Pfister
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.24, No.1 (Proceedings IEEE Information Visualization 2017), pp. 457-467
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Information Visualization 2017

#specify publication year
year:       2018

#insert abstract of publication
abstract:   >
   We report on a controlled user study comparing three visualization environments for common 3D exploration. Our environments differ in how they exploit natural human perception and interaction capabilities. We compare an augmented-reality head-mounted display (Microsoft HoloLens), a handheld tablet, and a desktop setup. The novel head-mounted HoloLens display projects stereoscopic images of virtual content into a user's real world and allows for interaction in-situ at the spatial position of the 3D hologram. The tablet is able to interact with 3D content through touch, spatial positioning, and tangible markers, however, 3D content is still presented on a 2D surface. Our hypothesis is that visualization environments that match human perceptual and interaction capabilities better to the task at hand improve understanding of 3D visualizations. To better understand the space of display and interaction modalities in visualization environments, we first propose a classification based on three dimensions: perception, interaction, and the spatial and cognitive proximity of the two. Each technique in our study is located at a different position along these three dimensions. We asked 15 participants to perform four tasks, each task having different levels of difficulty for both spatial perception and degrees of freedom for interaction. Our results show that each of the tested environments is more effective for certain tasks, but that generally the desktop environment is still fastest and most precise in almost all cases.
 
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2018_bach_holo.png'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2018_bach_holo_thumbnail.jpg'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://www.youtube.com/watch?v=NalVXf7Snhw'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://vimeo.com/237673207'

#link to publication pdf (optional)
pdf:        './publications/2018_bach_holo.pdf'


#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Bach2018holo,<br>
   &nbsp;&nbsp;title = {The Hologram in My Hand: How Effective is Interactive Exploration of 3D Visualizations in Immersive Tangible Augmented Reality?},<br>
   &nbsp;&nbsp;author = {Benjamin Bach and Ronell Sicat and Johanna Beyer and Maxime Cordeil and Hanspeter Pfister},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Information Visualization 2017)},<br>
   &nbsp;&nbsp;year = {2018}<br>
   &nbsp;&nbsp;volume = {24},<br>
   &nbsp;&nbsp;number = {1},<br>
   &nbsp;&nbsp;pages = {457-467}<br>
  }
  
#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: Code
#   type:  github
#   url:   'https://github.com/ronellsicat/DxR'
# - title: ExampleSlides
#   type:  slides
#   url:   './publications/presentation.pptx' 
   
#don't forget the leading and trailing --- in a YAML file
---
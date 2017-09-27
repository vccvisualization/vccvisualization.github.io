---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:      petascale

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Interactive Volume Exploration of Petascale Microscopy Data Streams Using a Visualization-Driven Virtual Memory Approach

#include in selected publications on front page (optional, delete line if not applicable)
display: selected

#list all publication authors in correct order
authors:
 - Markus Hadwiger 
 - Johanna Beyer
 - Won-Ki Jeong
 - Hanspeter Pfister

#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.18, No.12 (Proceedings IEEE Scientific Visualization 2012), pp. 2285-2294
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2012 (Honorable Mention Best Paper)

#specify publication year
year:       2012

#insert abstract of publication
abstract:   >
   This paper presents the first volume visualization system that scales to petascale volumes imaged as a continuous stream of high-resolution electron microscopy images. Our architecture scales to dense, anisotropic petascale volumes because it: (1) decouples construction of the 3D multi-resolution representation required for visualization from data acquisition, and (2) decouples sample access time during ray-casting from the size of the multi-resolution hierarchy. Our system is designed around a scalable multi-resolution virtual memory architecture that handles missing data naturally, does not pre-compute any 3D multi-resolution representation such as an octree, and can accept a constant stream of 2D image tiles from the microscopes. A novelty of our system design is that it is visualization-driven: we restrict most computations to the visible volume data. Leveraging the virtual memory architecture, missing data are detected during volume ray-casting as cache misses, which are propagated backwards for on-demand out-of-core processing. 3D blocks of volume data are only constructed from 2D microscope image tiles when they have actually been accessed during ray-casting. We extensively evaluate our system design choices with respect to scalability and performance, compare to previous best-of-breed systems, and illustrate the effectiveness of our system for real microscopy data from neuroscience.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2012_hadwiger_petascale.png'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2012_hadwiger_thumbnail1.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2012_hadwiger_petascale.mp4'

#link to publication pdf (optional)
pdf:        './publications/2012_hadwiger_petascale.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &emsp; will insert a tab character to prettify the citation
citation:   >
  @article{Hadwiger2012Petascale,<br>
   &emsp;title = {Interactive Volume Exploration of Petascale Microscopy Data Streams Using a Visualization-Driven Virtual Memory Approach},<br>
   &emsp;author = {Hadwiger, Markus and Beyer, Johanna and Jeong, Won-Ki and Pfister, Hanspeter},<br>
   &emsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Scientific Visualization 2012)},<br>
   &emsp;year = {2012},<br>
   &emsp;volume = {18},<br>
   &emsp;number = {12},<br>
   &emsp;pages = {2285--2294}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
#links: 
# - title: ExampleCode
#   type:  code
#   url:   './publications/supplementary1.zip' 
# - title: ExampleSlides
#   type:  slides
#   url:   './publications/presentation.pptx' 

#don't forget the leading and trailing --- in a YAML file
---
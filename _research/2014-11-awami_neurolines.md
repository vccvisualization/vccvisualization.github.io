---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:      neurolines

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   NeuroLines: A Subway Map Metaphor for Visualizing Nanoscale Neuronal Connectivity

#include in selected publications on front page (optional, delete line if not applicable)
display: selected

#list all publication authors in correct order
authors:
 - Ali K. Al-Awami
 - Johanna Beyer
 - Hendrik Strobelt
 - Narayanan Kasthuri
 - Jeff W. Lichtman
 - Hanspeter Pfister
 - Markus Hadwiger 
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.20, No.12 (Proceedings IEEE Information Visualization 2014), pp. 2369-2378
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Information Visualization 2014 (Honorable Mention Best Paper)

#specify publication year
year:       2014

#insert abstract of publication
abstract:   >
   NeuroLines is a novel visualization technique designed for scalable detailed analysis of neuronal connectivity at the nanoscale level. The topology of 3D brain tissue data is abstracted into a multi-scale, relative distance-preserving subway map visualization that allows domain scientists to conduct an interactive analysis of neurons and their connectivity. Nanoscale connectomics aims at reverse-engineering the wiring of the brain. Reconstructing and analyzing the detailed connectivity of neurons and neurites (axons, dendrites) will be crucial to understanding the brain and its development and diseases. However, the enormous scale and complexity of nanoscale neuronal connectivity pose big challenges to existing visualization techniques in terms of scalability. NeuroLines offers a scalable visualization framework that can interactively render thousands of neurites, and that supports the detailed analysis of neuronal structures and their connectivity. In our paper we describe and analyze the design of NeuroLines based on two real-world use-cases of our collaborators in developmental neuroscience, and investigate its scalability to large-scale neuronal connectivity data.

#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2014_awami_neurolines.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2014_awami_thumbnail.jpg'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2014_awami_neurolines.mp4'

#link to publication pdf (optional)
pdf:        './publications/2014_awami_neurolines.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Awami2014Neurolines,<br>
   &nbsp;&nbsp;title = {NeuroLines: A Subway Map Metaphor for Visualizing Nanoscale Neuronal Connectivity},<br>
   &nbsp;&nbsp;author = {Al-Awami, Ali K. and Beyer, Johanna and Strobelt, Hendrik and Kasthuri, Narayanan and Lichtman, Jeff W. and Pfister, Hanspeter and Hadwiger, Markus},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Information Visualization 2014)},<br>
   &nbsp;&nbsp;year = {2014},<br>
   &nbsp;&nbsp;volume = {20},<br>
   &nbsp;&nbsp;number = {12},<br>
   &nbsp;&nbsp;pages = {2369--2378},<br>
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
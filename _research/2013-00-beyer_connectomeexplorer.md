---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:      connectomeexplorer

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   ConnectomeExplorer: Query-Guided Visual Analysis of Large Volumetric Neuroscience Data

#include in selected publications on front page (optional, delete line if not applicable)
display: selected

#list all publication authors in correct order
authors:
 - Johanna Beyer
 - Ali K. Al-Awami
 - Narayanan Kasthuri
 - Jeff W. Lichtman
 - Hanspeter Pfister
 - Markus Hadwiger 

#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.19, No.12 (Proceedings IEEE Scientific Visualization 2013), pp. 2868-2877
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2013

#specify publication year
year:       2013

#insert abstract of publication
abstract:   >
   This paper presents ConnectomeExplorer, an application for the interactive exploration and query-guided visual analysis of large volumetric electron microscopy (EM) data sets in connectomics research. Our system incorporates a knowledge-based query algebra that supports the interactive specification of dynamically evaluated queries, which enable neuroscientists to pose and answer domain-specific questions in an intuitive manner. Queries are built step by step in a visual query builder, building more complex queries from combinations of simpler queries. Our application is based on a scalable volume visualization framework that scales to multiple volumes of several teravoxels each, enabling the concurrent visualization and querying of the original EM volume, additional segmentation volumes, neuronal connectivity, and additional meta data comprising a variety of neuronal data attributes. We evaluateour application on a data set of roughly one terabyte of EM data and 750 GB of segmentation data, containing over 4,000 segmented stuctures and 1,000 synapses. We demonstrate typical use-case scenarios of our collaborators in neuroscience, where our system has enabled them to answer specific scientific questions using interactive querying and analysis on the full-size data for the first time.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2013_beyer_connectomeexplorer.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2013_beyer_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2013_beyer_connectomeexplorer.mp4'

#link to publication pdf (optional)
pdf:        './publications/2013_beyer_connectomeexplorer.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &emsp; will insert a tab character to prettify the citation
citation:   >
  @article{Beyer2013ConnectomeExplorer,<br>
   &emsp;title = {ConnectomeExplorer: Query-Guided Visual Analysis of Large Volumetric Neuroscience Data},<br>
   &emsp;author = {Beyer, Johanna and Al-Awami, Ali K. and Kasthuri, Narayanan and Lichtman, Jeff W. and Pfister, Hanspeter and Hadwiger, Markus},<br>
   &emsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Scientific Visualization 2013)},<br>
   &emsp;year = {2013},<br>
   &emsp;volume = {19},<br>
   &emsp;number = {12},<br>
   &emsp;pages = {2868--2877}<br>
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
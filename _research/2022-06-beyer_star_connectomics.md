---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       starconnectomics

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   A Survey of Visualization and Analysis in High-Resolution Connectomics
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Johanna Beyer
 - Jakob Troidl
 - Saeed Boorboor
 - Markus Hadwiger
 - Arie Kaufman
 - Hanspeter Pfister

#insert publication venue (displayed on publication page)
venue:      >
   Computer Graphics Forum, Vol.41, No.3, pp. 573-607
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   Eurovis STARs 2022

#specify publication year
year:       2022

#insert abstract of publication
abstract:   >
   The field of connectomics aims to reconstruct the wiring diagram of neurons and synapses to enable new insights into the workings of the brain. Reconstructing and analyzing the neuronal connectivity, however, relies on many individual steps, starting from high-resolution data acquisition to automated segmentation, proofreading, interactive data exploration, and circuit analysis. All of these steps have to handle large and complex datasets and rely on or benefit from integrated visualization methods. In this state-of-the-art report, we describe visualization methods that can be applied throughout the connectomics pipeline, from data acquisition to circuit analysis. We first define the different steps of the pipeline and focus on how visualization is currently integrated into these steps. We also survey open science initiatives in connectomics, including usable open-source tools and publicly available datasets. Finally, we discuss open challenges and possible future directions of this exciting research field.

#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2022_beyer_connectomics.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2022_beyer_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://vimeo.com/'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=JSHjLvIulY0'

#link to publication pdf (optional)
pdf:         'https://vcg.seas.harvard.edu/publications/connectomics-survey/paper'

#link to appendix pdf (optional)
#pdfsupp:     'https://vcg.seas.harvard.edu/publications/barrio/supplementary-material'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Beyer2022ConnectomicsSTAR,<br>
   &nbsp;&nbsp;title = {A Survey of Visualization and Analysis in High-Resolution Connectomics},<br>
   &nbsp;&nbsp;author = {Beyer, Johanna and Troidl, Jakob and Boorboor, Saeed and Hadwiger, Markus and Kaufman, Arie and Pfister, Hanspeter},<br>
   &nbsp;&nbsp;journal = {Computer Graphics Forum},<br>
   &nbsp;&nbsp;volume = {41},<br>
   &nbsp;&nbsp;number = {3},<br>
   &nbsp;&nbsp;pages = {573--607},<br>
   &nbsp;&nbsp;year = {2022}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
- title: Survey Papers
  type:  web
  url:   'https://connectomics-vis-survey.github.io/'
# - title: Slides
#   type:  slides
#   url:   './publications/2021_herter_slides.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/thinvolvis'
 
---
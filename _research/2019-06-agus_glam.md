---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       glam

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
 Interactive Volumetric Visual Analysis of Glycogen-derived Energy Absorption in Nanometric Brain Structures

#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order
authors:
 - Marco Agus
 - Corrado Cali
 - Ali Al-Awami
 - Enrico Gobbetti
 - Pierre Magistretti
 - Markus Hadwiger
 
#insert publication venue (displayed on publication page)
venue:      >
  Computer Graphics Forum, Vol.38, No.3 (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2019), pp. 427-439
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   Eurovis 2019

#specify publication year
year:       2019

#insert abstract of publication
abstract:   >
   Digital acquisition and processing techniques are changing the way neuroscience investigation is carried out. Emerging applications range from statistical analysis on image stacks to complex connectomics visual analysis tools targeted to develop and test hypotheses of brain development and activity. In this work, we focus on neuroenergetics, a field where neuroscientists analyze nanoscale brain morphology and relate energy consumption to glucose storage in form of glycogen granules. In order to facilitate the understanding of neuroenergetic mechanisms, we propose a novel customized pipeline for the visual analysis of nanometric-level reconstructions based on electron microscopy image data. Our framework supports analysis tasks by combining (i) a scalable volume visualization architecture able to selectively render image stacks and corresponding labelled data, (ii) a method for highlighting distance-based energy absorption probabilities in form of glow maps, and (iii) a hybrid connectivity-based and absorption-based interactive layout representation able to support queries for selective analysis of areas of interest and potential activity within the segmented datasets. This working pipeline is currently used in a variety of studies in the neuroenergetics domain. Here, we discuss a test case in which the framework was successfully used by domain scientists for the analysis of aging effects on glycogen metabolism, extracting knowledge from a series of nanoscale brain stacks of rodents somatosensory cortex.
 
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2019_agus_glam.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2019_agus_glam_thumbnail.jpg'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2019_agus_glam.mp4'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://vimeo.com/237673207'

#link to publication pdf (optional)
pdf:        './publications/2019_agus_glam.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Agus2019ivv,<br>
   &nbsp;&nbsp;author = {Ronell Sicat and Jiabao Li and JunYoung Choi and Maxime Cordeil and Won-ki Jeong and Benjamin Bach and Hanspeter PfisterMarco Agus and Corrado Cal\`i and Ali Al-Awami and Enrico Gobbetti and Pierre Magistretti and Markus Hadwiger},<br>
   &nbsp;&nbsp;title = {Interactive Volumetric Visual Analysis of Glycogen-derived Energy Absorption in Nanometric Brain Structures},<br>
   &nbsp;&nbsp;journal = {Computer Graphics Forum (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2019},<br>
   &nbsp;&nbsp;volume = {38},<br>
   &nbsp;&nbsp;number = {3},<br>
   &nbsp;&nbsp;pages = {427--439},<br>
   &nbsp;&nbsp;year = {2019}<br>
  }
  
#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: Code
# type:  github
#   url:   'https://github.com/ronellsicat/DxR'
# - title: ExampleSlides
#   type:  slides
#   url:   './publications/presentation.pptx' 
   
#don't forget the leading and trailing --- in a YAML file
---
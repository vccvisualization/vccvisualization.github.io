---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:      seivis

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   SeiVis: An Interactive Visual Subsurface Modeling Application

#include in selected publications on front page (optional, delete line if not applicable)
display: selected

#list all publication authors in correct order
authors:
 - Thomas Höllt
 - Wolfgang Freiler
 - Fritz M. Gschwantner
 - Helmut Doleisch
 - Gabor Heinemann
 - Markus Hadwiger

#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.18, No.12 (Proceedings IEEE Scientific Visualization 2012), pp. 2226-2235
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2012

#specify publication year
year:       2012

#insert abstract of publication
abstract:   >
   The most important resources to fulfill today’s energy demands are fossil fuels, such as oil and natural gas. When exploiting hydrocarbon reservoirs, a detailed and credible model of the subsurface structures is crucial in order to minimize economic and ecological risks. Creating such a model is an inverse problem: reconstructing structures from measured reflection seismics. The major challenge here is twofold: First, the structures in highly ambiguous seismic data are interpreted in the time domain. Second, a velocity model has to be built from this interpretation to match the model to depth measurements from wells. If it is not possible to obtain a match at all positions, the interpretation has to be updated, going back to the first step. This results in a lengthy back and forth between the different steps, or in an unphysical velocity model in many cases. This paper presents a novel, integrated approach to interactively creating subsurface models from reflection seismics. It integrates the interpretation of the seismic data using an interactive horizon extraction technique based on piecewise global optimization with velocity modeling. Computing and visualizing the effects of changes to the interpretation and velocity model on the depth-converted model on the fly enables an integrated feedback loop that enables a completely new connection of the seismic data in time domain and well data in depth domain. Using a novel joint time/depth visualization, depicting side-by-side views of the original and the resulting depth-converted data, domain experts can directly fit their interpretation in time domain to spatial ground truth data. We have conducted a domain expert evaluation, which illustrates that the presented workflow enables the creation of exact subsurface models much more rapidly than previous approaches.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2012_hoellt_seivis.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2012_hoellt_thumbnail.jpg'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2012_hoellt_seivis.mp4'

#link to publication pdf (optional)
pdf:        './publications/2012_hoellt_seivis.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &emsp; will insert a tab character to prettify the citation
citation:   >
  @article{Hadwiger2012Petascale,<br>
   &emsp;title = {SeiVis: An Interactive Visual Subsurface Modeling Application},<br>
   &emsp;author = {H{\"o}llt, Thomas and Freiler, Wolfgang and Gschwantner, Fritz M. and Doleisch, Helmut and Heinemann, Gabor and Hadwiger, Markus},<br>
   &emsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Scientific Visualization 2012)},<br>
   &emsp;year = {2012},<br>
   &emsp;volume = {18},<br>
   &emsp;number = {12},<br>
   &emsp;pages = {2226--2235}<br>
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
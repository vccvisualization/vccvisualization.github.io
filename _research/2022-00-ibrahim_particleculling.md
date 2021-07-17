---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       particleculling

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Probabilistic Occlusion Culling using Confidence Maps for High-Quality Rendering of Large Particle Data

#include in selected publications on front page (optional, delete line if not applicable)
display: selected

#list all publication authors in correct order
authors:
 - Mohamed Ibrahim
 - Peter Rautek
 - Guido Reina
 - Marco Agus
 - Markus Hadwiger 
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.28, No.2 (Proceedings IEEE VIS 2021), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE VIS 2021

#specify publication year
year:       2022

#insert abstract of publication
abstract:   >
   Achieving high rendering quality in the visualization of large particle data, for example from large-scale molecular dynamics simulations, requires a significant amount of sub-pixel super-sampling, due to very high numbers of particles per pixel. Although it is impossible to super-sample all particles of large-scale data at interactive rates, efficient occlusion culling can decouple the overall data size from a high effective sampling rate of visible particles. However, while the latter is essential for domain scientists to be able to see important data features, performing occlusion culling by sampling or sorting the data is usually slow or error-prone due to visibility estimates of insufficient quality. We present a novel probabilistic culling architecture for super-sampled high-quality rendering of large particle data. Occlusion is dynamically determined at the sub-pixel level, without explicit visibility sorting or data simplification. We introduce confidence maps to probabilistically estimate confidence in the visibility data gathered so far. This enables progressive, confidence-based culling, helping to avoid wrong visibility decisions. In this way, we determine particle visibility with high accuracy, although only a small part of the data set is sampled. This enables extensive super-sampling of (partially) visible particles for high rendering quality, at a fraction of the cost of sampling all particles. For real-time performance with millions of particles, we exploit novel features of recent GPU architectures to group particles into two hierarchy levels, combining fine-grained culling with high frame rates.
 
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2021_ibrahim_particleculling.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2021_ibrahim_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      './publications/2017_ibrahim_SNDF.mp4'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://vimeo.com/237673207'

#link to publication pdf (optional)
#pdf:        './publications/2021_ibrahim_particleculling.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Ibrahim2021ProbabilisticParticleOcclusionCulling,<br>
   &nbsp;&nbsp;title = {Probabilistic Occlusion Culling using Confidence Maps for High-Quality Rendering of Large Particle Data},<br>
   &nbsp;&nbsp;author = {Ibrahim, Mohamed and Rautek, Peter and Reina, Guido and Agus, Marco and Hadwiger, Markus},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE VIS 2021)},<br>
   &nbsp;&nbsp;year = {2022}<br>
   &nbsp;&nbsp;volume = {28},<br>
   &nbsp;&nbsp;number = {2},<br>
   &nbsp;&nbsp;pages = {to appear}<br>
  }
  
#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: Supplementary Materials
#   type:  pdf
#   url:   './publications/2017_ibrahim_SNDF_supplementary.pdf'
# - title: Code
#   type:  github
#   url:   'https://bitbucket.org/moeizle/sndfs/'
# - title: ExampleSlides
#   type:  slides
#   url:   './publications/presentation.pptx' 
   
#don't forget the leading and trailing --- in a YAML file
---
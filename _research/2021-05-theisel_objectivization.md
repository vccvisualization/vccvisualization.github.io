---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       objectivization

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Vortex Criteria can be Objectivized by Unsteadiness Minimization
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Holger Theisel
 - Markus Hadwiger
 - Peter Rautek
 - Thomas Theußl
 - Tobias Günther
 
#insert publication venue (displayed on publication page)
venue:      >
   Physics of Fluids 33(10), 107115

#insert short venue (displayed in box in publication list)
shortvenue: >
   Physics of Fluids

#specify publication year
year:       2021

#insert abstract of publication
abstract:   >
   Reference frame optimization is a generic framework to calculate a spatially-varying observer field that views an unsteady fluid flow in a reference frame that is as-steady-as-possible. In this paper, we show that the optimized vector field is objective, i.e., it is independent of the initial Euclidean transformation of the observer. To check objectivity, the optimized velocity vectors and the coordinates in which they are defined must both be connected by an Euclidean transformation. In this paper we show that a recent publication [1] applied this definition incorrectly, falsely concluding that reference frame optimizations are not objective. Further, we prove the objectivity of the variational formulation of the reference frame optimization proposed in [1], and discuss how the variational formulation relates to recent local and global optimization approaches to unsteadiness minimization.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2021_theisel_objectivization.jpg'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2021_theisel_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://vimeo.com/458350874'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=3WW2Bdg5tY8'

#link to publication pdf (optional)
pdf:        'https://doi.org/10.1063/5.0063817'

#link to appendix pdf (optional)
#pdfsupp:   'https://arxiv.org/pdf/2106.16169.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Theisel2021Objectivization,<br>
   &nbsp;&nbsp;title = {Vortex Criteria can be Objectivized by Unsteadiness Minimization},<br>
   &nbsp;&nbsp;author = {Theisel, Holger and Hadwiger, Markus and Rautek, Peter and Theu{\ss}l, Thomas and G{\"u}nther, Tobias},<br>
   &nbsp;&nbsp;journal = {Physics of Fluids},<br>
   &nbsp;&nbsp;number = {33},<br>
   &nbsp;&nbsp;issue = {10},<br>
   &nbsp;&nbsp;pages = {107115},<br>
   &nbsp;&nbsp;year = {2021}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
- title: arXiv version
  type:  pdf
  url:   'https://arxiv.org/pdf/2106.16169.pdf' 
# - title: Slides
#   type:  slides
#   url:   './publications/2020_rautek_killingsurfaces_slides.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/killingsurfaces'
 
---
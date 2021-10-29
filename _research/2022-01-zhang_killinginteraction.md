---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       killinginteraction

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Interactive Exploration of Physically-Observable Objective Vortices in Unsteady 2D Flow
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Xingdi Zhang
 - Markus Hadwiger
 - Thomas Theußl
 - Peter Rautek
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.28, No.2 (Proceedings IEEE VIS 2021), to appear
  
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE VIS 2021 <span style="color:rgb(180,0,0);">(Honorable Mention Best Paper)</span>

#specify publication year
year:       2022

#insert abstract of publication
abstract:   >
   State-of-the-art computation and visualization of vortices in unsteady fluid flow employ objective vortex criteria, which makes them independent of reference frames or observers. However, objectivity by itself, although crucial, is not sufficient to guarantee that one can identify physically-realizable observers that would perceive or detect the same vortices. Moreover, a significant challenge is that a single reference frame is often not sufficient to accurately observe multiple vortices that follow different motions. This paper presents a novel framework for the exploration and use of an interactively-chosen set of observers, of the resulting relative velocity fields, and of objective vortex structures. We show that our approach facilitates the objective detection and visualization of vortices relative to well-adapted reference frame motions, while at the same time guaranteeing that these observers are in fact physically realizable. In order to represent and manipulate observers efficiently, we make use of the low-dimensional vector space structure of the Lie algebra of physically-realizable observer motions. We illustrate that our framework facilitates the efficient choice and guided exploration of objective vortices in unsteady 2D flow, on planar as well as on spherical domains, using well-adapted reference frames.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:      './publications/2021_zhang_killinginteraction.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:   './publications/2021_zhang_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:       'https://vimeo.com/584574144'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
talk:       'https://www.youtube.com/watch?v=g6pNtQBWIt0'

#link to publication pdf (optional)
pdf:         './publications/2021_zhang_killinginteraction.pdf'

#link to appendix pdf (optional)
#pdfsupp:    './publications/2021_zhang_killinginteraction_appendixes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Zhang2021KillingObserverInteraction,<br>
   &nbsp;&nbsp;title = {Interactive Exploration of Physically-Observable Objective Vortices in Unsteady 2D Flow},<br>
   &nbsp;&nbsp;author = {Zhang, Xingdi and Hadwiger, Markus and Theu{\ss}l, Thomas and Rautek, Peter},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE VIS 2021)},<br>
   &nbsp;&nbsp;year = {2022}<br>
   &nbsp;&nbsp;volume = {28},<br>
   &nbsp;&nbsp;number = {2},<br>
   &nbsp;&nbsp;pages = {to appear}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: HQ Paper + Appendix
#   type:  pdf
#   url:   './publications/2020_rautek_killingsurfaces_with_appendixes_hq.pdf' 
# - title: Slides
#   type:  slides
#   url:   './publications/2020_rautek_killingsurfaces_slides.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/killingsurfaces'
 
---
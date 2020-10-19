---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       killingsurfaces

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Objective Observer-Relative Flow Visualization in Curved Spaces for Unsteady 2D Geophysical Flows
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Peter Rautek
 - Matej Mlejnek
 - Johanna Beyer
 - Jakob Troidl
 - Hanspeter Pfister
 - Thomas Theußl
 - Markus Hadwiger
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.27, No.2 (Proceedings IEEE Scientific Visualization 2020), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2020 <span style="color:rgb(180,0,0);">(Best Paper Award)</span>

#specify publication year
year:       2021

#insert abstract of publication
abstract:   >
   Computing and visualizing features in fluid flow often depends on the observer, or reference frame, relative to which the input velocity field is given. A desired property of feature detectors is therefore that they are objective, meaning independent of the input reference frame. However, the standard definition of objectivity is only given for Euclidean domains and cannot be applied in curved spaces. We build on methods from mathematical physics and Riemannian geometry to generalize objectivity to curved spaces, using the powerful notion of symmetry groups as the basis for definition. From this, we develop a general mathematical framework for the objective computation of observer fields for curved spaces, relative to which other computed measures become objective. An important property of our framework is that it works intrinsically in 2D, instead of in the 3D ambient space. This enables a direct generalization of the 2D computation via optimization of observer fields in flat space to curved domains, without having to perform optimization in 3D. We specifically develop the case of unsteady 2D geophysical flows given on spheres, such as the Earth. Our observer fields in curved spaces then enable objective feature computation as well as the visualization of the time evolution of scalar and vector fields, such that the automatically computed reference frames follow moving structures like vortices in a way that makes them appear to be steady.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2020_rautek_killingsurfaces.jpg'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2020_rautek_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      'https://vimeo.com/458350874'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
talk:       'https://youtu.be/3WW2Bdg5tY8'

#link to publication pdf (optional)
pdf:        './publications/2020_rautek_killingsurfaces.pdf'

#link to appendix pdf (optional)
pdfsupp:    './publications/2020_rautek_killingsurfaces_appendixes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Rautek2020ObserverKillingFieldsOnSurfaces,<br>
   &nbsp;&nbsp;title = {Objective Observer-Relative Flow Visualization in Curved Spaces for Unsteady 2D Geophysical Flows},<br>
   &nbsp;&nbsp;author = {Rautek, Peter and Mlejnek, Matej and Beyer, Johanna and Troidl, Jakob and Pfister, Hanspeter and Theu{\ss}l, Thomas and Hadwiger, Markus},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Scientific Visualization 2020)},<br>
   &nbsp;&nbsp;year = {2021}<br>
   &nbsp;&nbsp;volume = {27},<br>
   &nbsp;&nbsp;number = {2},<br>
   &nbsp;&nbsp;pages = {to appear}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
 - title: HQ Paper + Appendix
   type:  pdf
   url:   './publications/2020_rautek_killingsurfaces_with_appendixes_hq.pdf' 
# - title: Slides
#   type:  slides
#   url:   './publications/2020_rautek_killingsurfaces_slides.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/killingsurfaces'
 
---
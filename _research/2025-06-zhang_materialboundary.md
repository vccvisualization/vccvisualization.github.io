---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       materialboundary

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      > 
   Enhancing Material Boundary Visualizations in 2D Unsteady Flow through Local Reference Frame Transformations
   
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Xingdi Zhang
 - Peter Rautek
 - Thomas Theußl
 - Markus Hadwiger
 
#insert publication venue (displayed on publication page)
venue:      >
   Computer Graphics Forum, Vol.44, No.3 (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2025), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   Eurovis 2025

#specify publication year
year:       2025

#insert abstract of publication
abstract:   >
   We present a novel technique for the extraction, visualization, and analysis of material boundaries and Lagrangian coherent structures (LCS) in 2D unsteady flow fields relative to local reference frame transformations. In addition to the input flow field, we leverage existing methods for computing reference frames adapted to local fluid features, in particular those that minimize the observed time derivative. 
   Although, by definition, transforming objective tensor fields between reference frames does not change the tensor field, we show that transforming objective tensors, such as the finite-time Lyapunov exponent (FTLE) or Lagrangian-averaged vorticity deviation (LAVD), or the second-order rate-of-strain tensor, into local reference frames that are naturally adapted to coherent fluid structures has several advantages: (1) The transformed fields enable analyzing LCS in space-time visualizations that are adapted to each structure; (2) They facilitate extracting geometric features, such as iso-surfaces and ridge lines, in a straightforward manner with high accuracy. The resulting visualizations are characterized by lower geometric complexity and enhanced topological fidelity. To demonstrate the effectiveness of our technique, we measure geometric complexity and compare it with iso-surfaces extracted in the conventional reference frame. 
   We show that the decreased geometric complexity of the iso-surfaces in the local reference frame, not only leads to improved geometric and topological results, but also to a decrease in computation time.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2025_zhang_boundary_teaser.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2025_zhang_boundary_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:       'https://www.youtube.com/watch?v=Qkzcqjoj7Y8'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=qiLjCvrpdZU'

#link to publication pdf (optional)
pdf:        './publications/2025_zhang_boundary.pdf'

#link to appendix pdf (optional)
pdfsupp:    './publications/2025_zhang_boundary_appendix.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Zhang2025MaterialBoundary,<br>
   &nbsp;&nbsp;title = {Enhancing Material Boundary Visualizations in 2D Unsteady Flow through Local Reference Frame Transformations},<br>
   &nbsp;&nbsp;author = {Zhang, Xingdi and Rautek, Peter and Theu{\ss}l, Thomas and Hadwiger, Markus},<br>
   &nbsp;&nbsp;journal = {Computer Graphics Forum (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2025)},<br>
   &nbsp;&nbsp;volume = {44},<br>
   &nbsp;&nbsp;number = {3},<br>
   &nbsp;&nbsp;pages = {to appear},<br>
   &nbsp;&nbsp;year = {2025}<br>
}

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: Slides
#   type:  slides
#   url:   './publications/2023_rautek_vortexlens_slides.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/vortexlens'
 
---
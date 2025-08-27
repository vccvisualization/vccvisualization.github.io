---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       mlsobservers

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Locally Adapted Reference Frame Fields using Moving Least Squares
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Julio Rey Ramirez
 - Peter Rautek
 - Tobias Günther
 - Markus Hadwiger
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.32, No.1 (Proceedings IEEE VIS 2025), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE VIS 2025

#specify publication year
year:       2026

#insert abstract of publication
abstract:   >
   The detection and analysis of features in fluid flow are important tasks in fluid mechanics and flow visualization. One recent class of methods to approach this problem is to first compute objective optimal reference frames, relative to which the input vector field becomes as steady as possible. However, existing methods either optimize locally over a fixed neighborhood, which might not match the extent of interesting features well, or perform global optimization, which is costly. We propose a novel objective method for the computation of optimal reference frames that automatically adapts to the flow field locally, without having to choose neighborhoods a priori. We enable adaptivity by formulating this problem as a moving least squares approximation, through which we determine a continuous field of reference frames. To incorporate fluid features into the computation of the reference frame field, we introduce the use of a scalar guidance field into the moving least squares approximation. The guidance field determines a curved manifold on which a regularly sampled input vector field becomes a set of irregularly spaced samples, which then forms the input to the moving least squares approximation. Although the guidance field can be any scalar field, by using a field that corresponds to flow features the resulting reference frame field will adapt accordingly. We show that using an FTLE field as the guidance field results in a reference frame field that adapts better to local features in the flow than prior work. However, our moving least squares framework is formulated in a very general way, and therefore other types of guidance fields could be used in the future to adapt to local fluid features.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2025_rey_mlsobservers.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2025_rey_mlsobservers_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:       'https://www.youtube.com/watch?v=c6CBPzRL_Tw'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=qiLjCvrpdZU'

#link to publication pdf (optional)
pdf:        './publications/2025_rey_mlsobservers.pdf'

#link to appendix pdf (optional)
pdfsupp:    './publications/2025_rey_mlsobservers_supp.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Rey2025MLSObservers,<br>
   &nbsp;&nbsp;title = {Locally Adapted Reference Frame Fields using Moving Least Squares},<br>
   &nbsp;&nbsp;author = {Rey Ramirez, Julio and Rautek, Peter and G{\"u}nther, Tobias and Hadwiger, Markus},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE VIS 2025)},<br>
   &nbsp;&nbsp;year = {2026},<br>
   &nbsp;&nbsp;volume = {32},<br>
   &nbsp;&nbsp;number = {1},<br>
   &nbsp;&nbsp;pages = {to appear}<br>
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

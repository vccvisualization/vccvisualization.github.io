---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       observerspaces

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Exploring 3D Unsteady Flow using 6D Observer Space Interactions
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Xingdi Zhang
 - Amani Ageeli
 - Thomas Theußl
 - Markus Hadwiger
 - Peter Rautek
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.32, No.1 (Proceedings IEEE VIS 2025), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE VIS 2025 <span style="color:rgb(180,0,0);">(Honorable Mention Best Paper)</span>

#specify publication year
year:       2026

#insert abstract of publication
abstract:   >
   Visualizing and analyzing 3D unsteady flow fields is a very challenging task. We approach this problem by leveraging the mathematical foundations of 3D observer fields to explore and analyze 3D flows in reference frames that are more suitable to visual analysis than the input reference frame. We design novel interactive tools for determining, filtering, and combining reference frames for observer-aware 3D unsteady flow visualization. We represent the space of reference frame motions in a 3D spatial domain via a 6D parameter space, in which every observer is a time-dependent curve. Our framework supports operations in this 6D observer space by separately focusing on two 3D subspaces, for 3D translations, and 3D rotations, respectively. We show that this approach facilitates a variety of interactions with 3D flow fields. Building on the interactive selection of observers, we furthermore introduce novel techniques such as observer-aware streamline- and pathline-filtering as well as observer-aware isosurface animations of scalar fluid properties for the enhanced visualization and analysis of 3D unsteady flows. We discuss the theoretical underpinnings as well as practical implementation considerations of our approach, and demonstrate the benefits of its 6+1D observer-based methodology on several 3D unsteady flow datasets.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2025_zhang_observerspaces.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2025_zhang_observerspaces_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:       'https://www.youtube.com/watch?v=c6CBPzRL_Tw'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=qiLjCvrpdZU'

#link to publication pdf (optional)
#pdf:        './publications/2025_zhang_observerspaces.pdf'

#link to appendix pdf (optional)
#pdfsupp:    './publications/2025_zhang_observerspaces_appendixes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Zhang2025ObserverSpaces,<br>
   &nbsp;&nbsp;title = {Exploring 3D Unsteady Flow using 6D Observer Space Interactions},<br>
   &nbsp;&nbsp;author = {Zhang, Xingdi and Ageeli, Amani and Theu{\ss}l, Thomas and Hadwiger, Markus and Rautek, Peter},<br>
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
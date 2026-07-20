---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       lagrangianhamiltonian

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   A Generic Lagrangian-Hamiltonian Framework for Optimal Reference Frames in Unsteady Flow
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Xingdi Zhang
 - Amani Ageeli
 - Thomas Theußl
 - Peter Rautek
 - Markus Hadwiger
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.33, No.1 (Proceedings IEEE VIS 2026), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE VIS 2026

#specify publication year
year:       2027

#insert abstract of publication
abstract:   >
   Flow visualization inherently depends on a reference frame or observer, relative to which velocities are measured. Recent research has addressed the explicit computation of optimal observers. However, although all techniques share many similarities, the differences can be significant, and no method fulfills all desirable criteria. More accurate methods can be slow, whereas faster approaches can be less accurate, which means that the observers are less optimal. In this paper, we present a novel generic variational framework that combines the best of both worlds, and offers better trade-offs between accuracy and computational efficiency. We build on ideas from Lagrangian and Hamiltonian mechanics to unify previous methods, while at the same time enabling more flexibility and novel algorithmic features. In this way, our framework can also serve as a principled foundation for analysis, comparison, and future advances in this area. We first formulate the observer optimization problem in terms of Lagrangian functions, where an optimal solution must solve the second-order Euler-Lagrange equation. We then expand toward a Hamiltonian perspective, which reduces the second-order equation to first-order. However, we use a hybrid Lagrangian-Hamiltonian approach to combine the advantages of each. By defining Hamiltonian vector fields in an observer phase space, optimal observers simply become integral curves. Our hybrid method computes these vector fields directly from the Lagrangian representing the cost to minimize. Finally, we show how this foundation also enables direct insights into flow field properties, by defining the novel notion of intrinsically steady flows using the Hamiltonian function.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2026_zhang_lagrangianhamiltonian.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2026_zhang_lagrangianhamiltonian_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:       'https://www.youtube.com/watch?v=WKqzLwZBlyM'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=qiLjCvrpdZU'

#link to publication pdf (optional)
#pdf:        './publications/2026_zhang_lagrangianhamiltonian.pdf'

#link to appendix pdf (optional)
#pdfsupp:    './publications/2026_zhang_lagrangianhamiltonian_appendixes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Zhang2026LagrangianHamiltonianObserverFramework,<br>
   &nbsp;&nbsp;title = {A Generic Lagrangian-Hamiltonian Framework for Optimal Reference Frames in Unsteady Flow},<br>
   &nbsp;&nbsp;author = {Zhang, Xingdi and Ageeli, Amani and Theu{\ss}l, Thomas and Rautek, Peter and Hadwiger, Markus},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE VIS 2026)},<br>
   &nbsp;&nbsp;year = {2027},<br>
   &nbsp;&nbsp;volume = {33},<br>
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

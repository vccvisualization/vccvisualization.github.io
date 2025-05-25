---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       vortextransformer

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   VortexTransformer: End-to-End Objective Vortex Detection in 2D Unsteady Flow Using Transformers
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Xingdi Zhang
 - Peter Rautek
 - Markus Hadwiger
 
#insert publication venue (displayed on publication page)
venue:      >
   Computer Graphics Forum, Vol.44, No.2 (Proceedings Eurographics 2025), to appear

#insert short venue (displayed in box in publication list)
shortvenue: >
   Eurographics 2025

#specify publication year
year:       2025

#insert abstract of publication
abstract:   >
   Vortex structures play a pivotal role in understanding complex fluid dynamics, yet defining them rigorously remains challenging. One hard criterion is that a vortex detector must be objective, i.e., it needs to be indifferent to reference frame transformations. We propose VortexTransformer, a novel deep learning approach using point transformer architectures to directly extract vortex structures from pathlines. Unlike traditional methods that rely on grid-based velocity fields in the Eulerian frame, our approach operates entirely on a Lagrangian representation of the flow field (i.e., pathlines), enabling objective identification of both strong and weak vortex structures. To train VortexTransformer, we generate a large synthetic dataset using parametric flow models to simulate diverse vortex configurations, ensuring a robust ground truth. We compare our method against CNN and UNet architectures, applying the trained models to real-world flow datasets. VortexTransformer is an end-to-end detector, which means that reference frame transformations as well as vortex detection are handled implicitly by the network, demonstrating the ability to extract vortex boundaries without the need for parameters such as arbitrary thresholds, or an explicit definition of a vortex. Our method offers a new approach to determining objective vortex labels by using the objective pairwise distances of material points for vortex detection and is adaptable to various flow conditions.

#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2025_zhang_vortextransformers_teaser.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2025_zhang_vortextransformers_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:       'https://www.youtube.com/watch?v=c6CBPzRL_Tw'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=qiLjCvrpdZU'

#link to publication pdf (optional)
pdf:        './publications/2025_zhang_vortex_transformers.pdf'

#link to appendix pdf (optional)
#pdfsupp:    './publications/_appendixes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Zhang2025VortexTransformer,<br>
   &nbsp;&nbsp;title = {VortexTransformer: End-to-End Objective Vortex Detection in 2D Unsteady Flow Using Transformers},<br>
   &nbsp;&nbsp;author = {Zhang, Xingdi and Rautek, Peter and Hadwiger, Markus},<br>
   &nbsp;&nbsp;journal = {Computer Graphics Forum (Proceedings Eurographics 2025)},<br>
   &nbsp;&nbsp;volume = {44},<br>
   &nbsp;&nbsp;number = {2},<br>
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
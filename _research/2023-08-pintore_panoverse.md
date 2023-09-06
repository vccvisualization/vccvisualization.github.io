---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       panoverse

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   PanoVerse: automatic generation of stereoscopic environments from single indoor panoramic images for Metaverse applications
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Giovanni Pintore
 - Alberto Jaspe-Villanueva
 - Markus Hadwiger
 - Enrico Gobbetti
 - Jens Schneider
 - Marco Agus
 
#insert publication venue (displayed on publication page)
venue:      >
   ACM SIGGRAPH Web3D

#insert short venue (displayed in box in publication list)
shortvenue: >
   Web3D 2023

#specify publication year
year:       2023

#insert abstract of publication
abstract:   >
   We present a novel framework, dubbed PanoVerse, for the automatic creation and presentation of immersive stereoscopic environments from a single indoor panoramic image. Once per 360° shot, a novel data-driven architecture generates a fixed set of panoramic stereo pairs distributed around the current central view-point. Once per frame, directly on the HMD, we rapidly fuse the precomputed views to seamlessly cover the exploration workspace. To realize this system, we introduce several novel techniques that combine and extend state-of-the art data-driven techniques. In particular, we present a gated architecture for panoramic monocular depth estimation and, starting from the re-projection of visible pixels based on predicted depth, we exploit the same gated architecture for inpainting the occluded and disoccluded areas, introducing a mixed GAN with self-supervised loss to evaluate the stereoscopic consistency of the generated images. At interactive rates, we interpolate precomputed panoramas to produce photorealistic stereoscopic views in a lightweight WebXR viewer. The system works on a variety of available VR headsets and can serve as a base component for Metaverse applications. We demonstrate our technology on several indoor scenes from publicly available data.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2023-pintore_jaspe-panoverse-teaser.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2023-pintore_jaspe-panoverse-thumb.jpg'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://vimeo.com/458350874'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=3WW2Bdg5tY8'

#link to publication pdf (optional)
pdf:        './publications/2023-pintore_jaspe-panoverse.pdf'

#link to appendix pdf (optional)
#pdfsupp:   'https://arxiv.org/pdf/2306.06925.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{PintoreAndJaspe2023Panoverse,<br>
   &nbsp;&nbsp;title = {PanoVerse: automatic generation of stereoscopic environments from single indoor panoramic images for Metaverse applications},<br>
   &nbsp;&nbsp;author = {Pintore, Giovanni and Jaspe-Villanueva, Alberto and Hadwiger, Markus and Gobbetti, Enrico and Schneider, Jens and Agus, Marco},<br>
   &nbsp;&nbsp;booktitle = {Proc. Web3D 2023 - 28th International ACM Conference on 3D Web Technology},<br>
   &nbsp;&nbsp;month = {October},<br>
   &nbsp;&nbsp;year = {2023},<br>
   &nbsp;&nbsp;doi = {10.1145/3611314.3615914},<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
- title: Publisher version
  type:  web
  url:   'https://doi.org/10.1145/3611314.3615914'
#- title: arXiv paper
#  type:  pdf
#  url:   'https://arxiv.org/pdf/2306.06925.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/killingsurfaces'
 
---
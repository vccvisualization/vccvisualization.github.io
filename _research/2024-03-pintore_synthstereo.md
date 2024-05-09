---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       synthstereo

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Deep synthesis and exploration of omnidirectional stereoscopic environments from a single surround-view panoramic image
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Giovanni Pintore
 - Alberto Jaspe-Villanueva
 - Markus Hadwiger
 - Jens Schneider
 - Marco Agus
 - Fabio Marton
 - Fabio Bettio
 - Enrico Gobbetti
 
#insert publication venue (displayed on publication page)
venue:      >
   Computers & Graphics. Vol 119 (to appear)

#insert short venue (displayed in box in publication list)
shortvenue: >
   Computer & Graphics

#specify publication year
year:       2024

#insert abstract of publication
abstract:   >
   We introduce an innovative approach to automatically generate and explore immersive stereoscopic indoor environments derived from a single monoscopic panoramic image in an equirectangular format. Once per 360° shot, we estimate the per-pixel depth using a gated deep network architecture. Subsequently, we synthesize a collection of panoramic slices through reprojection and view-synthesis employing deep learning. These slices are distributed around the central viewpoint, with each slice’s projection center placed on the circular path covered by the eyes during a head rotation. Furthermore, each slice encompasses an angular extent sufficient to accommodate the potential gaze directions of both the left and right eye and to provide context for reconstruction. For fast display, a stereoscopic multiple-center-of-projection stereo pair in equirectangular format is composed by suitably blending the precomputed slices. At run-time, the pair is loaded in a lightweight WebXR viewer that responds to head rotations, offering both motion and stereo cues. The approach combines and extends state-of-the-art data-driven techniques, incorporating several innovations. Notably, a gated architecture is introduced for panoramic monocular depth estimation. Leveraging the predicted depth, the same gated architecture is then applied to the re-projection of visible pixels, facilitating the inpainting of occluded and disoccluded regions by incorporating a mixed Generative Adversarial Network (GAN). The resulting system works on a variety of available VR headsets and can serve as a base component for immersive applications. We demonstrate our technology on several indoor scenes from publicly available data.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2024-CAG-synth_stereo_pano-teaser.jpg'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2024-CAG-synth_stereo_pano-thumb.jpg'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      'https://www.youtube.com/watch?v=Qzuef6cjY1Q'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=3WW2Bdg5tY8'

#link to publication pdf (optional)
pdf:        './publications/2024-CAG-synth_stereo_pano.pdf'

#link to appendix pdf (optional)
#pdfsupp:   'https://arxiv.org/pdf/2306.06925.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{PintoreAndJaspe2023Panoverse,<br>
   &nbsp;&nbsp;title = {Deep synthesis and exploration of omnidirectional stereoscopic environments from a single surround-view panoramic image},<br>
   &nbsp;&nbsp;author = {Pintore, Giovanni and Jaspe-Villanueva, Alberto and Hadwiger, Markus and Schneider, Jens and Agus, Marco and Marton, Fabio and Bettio, Fabio and Gobbetti, Enrico},<br>
   &nbsp;&nbsp;journal = {Computers & Graphics},<br>
   &nbsp;&nbsp;volume = {119},<br>
   &nbsp;&nbsp;month = {March},<br>
   &nbsp;&nbsp;year = {2024},<br>
   &nbsp;&nbsp;doi = {10.1016/j.cag.2024.103907},<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
- title: Publisher version
  type:  web
  url:   'https://doi.org/10.1016/j.cag.2024.103907'
- title: Online demos
  type: web
  url: 'https://albertojaspe.net/publications/2024-CAG-synth_stereo_pano.html'

#- title: arXiv paper
#  type:  pdf
#  url:   'https://arxiv.org/pdf/2306.06925.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/killingsurfaces'
 
---

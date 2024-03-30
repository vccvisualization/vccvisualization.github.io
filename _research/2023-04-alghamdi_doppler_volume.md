---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       dopplervolume

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Doppler Volume Rendering: A Dynamic, Piecewise Linear Spectral Representation for Visualizing Astrophysics Simulations
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Reem Alghamdi
 - Thomas Müller
 - Alberto Jaspe-Villanueva
 - Markus Hadwiger
 - Filip Sadlo
 
#insert publication venue (displayed on publication page)
venue:      >
   Computer Graphics Forum, Vol.43, No.3 (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2023), pp. 39-49
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   Eurovis 2023

#specify publication year
year:       2023

#insert abstract of publication
abstract:   >
   We present a novel approach for rendering volumetric data including the Doppler effect of light, which is crucial for the case of very high velocities of the matter that is emitting light. Similar to the acoustic Doppler effect, which is caused by the relative movement between a sound emitter and an observer, light waves as electromagnetic radiation also experience a compression or expansion when the light emitter and an observer move relative to one another. To take this effect into account, we employ spectral volume rendering in an emission/absorption model, with voxels emitting and attenuating light at different wavelengths. Our approach enables accurate computation of the Doppler effect of light in realtime volume rendering, with relative motion provided by an additional 3D velocity vector field. In particular, we propose a new representation for light spectra that uses a dynamic set of piecewise linear basis functions, tailored to accurate and efficient evaluation of the Doppler effect in volume rendering. Our basis functions are used during light accumulation along viewing rays to achieve higher efficiency and accuracy compared to point-based spectral representations. Our method is particularly useful for analyzing astrophysical simulations.

#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2023_alghamdi_doppler_volume.jpg'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2023_alghamdi_doppler_volume_thumbnail.jpg'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2023_alghamdi_doppler_volume.mp4'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=JSHjLvIulY0'

#link to publication pdf (optional)
pdf:         './publications/2023_alghamdi_doppler_volume.pdf'

#link to appendix pdf (optional)
pdfsupp:     './publications/2023_alghamdi_doppler_volume_supplemental.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Alghamdi2023Doppler,<br>
   &nbsp;&nbsp;title = {Doppler Volume Rendering: A Dynamic, Piecewise Linear Spectral Representation for Visualizing Astrophysics Simulations},<br>
   &nbsp;&nbsp;author = {Alghamdi, Reem and Müller, Thomas and Jaspe-Villanueva, Alberto and Hadwiger, Markus and Sadlo, Filip},<br>
   &nbsp;&nbsp;journal = {Computer Graphics Forum (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2023)},<br>
   &nbsp;&nbsp;volume = {42},<br>
   &nbsp;&nbsp;number = {3},<br>
   &nbsp;&nbsp;pages = {39--49},<br>
   &nbsp;&nbsp;year = {2023}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: Slides
#   type:  slides
#   url:   './publications/2021_herter_slides.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/thinvolvis'
 
---
---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       thinvolvis

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Thin-Volume Visualization on Curved Domains
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Felix Herter
 - Hans-Christian Hege
 - Markus Hadwiger
 - Verena Lepper
 - Daniel Baum
 
#insert publication venue (displayed on publication page)
venue:      >
   Computer Graphics Forum (Proceedings Eurovis 2021), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   Eurovis 2021

#specify publication year
year:       2021

#insert abstract of publication
abstract:   >
   Thin, curved structures occur in many volumetric datasets. Their analysis using classical volume rendering is difficult because parts of such structures can bend away or hide behind occluding elements. This problem cannot be fully compensated by effective navigation alone, because structure-adapted navigation in the volume is cumbersome and only parts of the structure are visible in each view. We solve this problem by rendering a spatially transformed view into the volume so that an unobscured visualization of the entire curved structure is obtained. As a result, simple and intuitive navigation becomes possible. The domain of the spatial transform is defined by a triangle mesh that is topologically equivalent to an open disc and that approximates the structure of interest. The rendering is based on ray-casting in which the rays traverse the original curved sub-volume. In order to carve out volumes of varying thickness, the lengths of the rays as well as the position of the mesh vertices can be easily modified in a view-controlled manner by interactive painting. We describe a prototypical implementation and demonstrate the interactive visual inspection of complex structures from digital humanities, biology, medicine, and materials science. Displaying the structure as a whole enables simple inspection of interesting substructures in their original spatial context. Overall, we show that transformed views utilizing ray-casting-based volume rendering supported by guiding surface meshes and supplemented by local, interactive modifications of ray lengths and vertex positions, represent a simple but versatile approach to effectively visualize thin, curved structures in volumetric data.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2021_herter_thinvolvis.jpg'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2021_herter_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://vimeo.com/'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?'

#link to publication pdf (optional)
#pdf:        './publications/2021_herter_thinvolvis.pdf'

#link to appendix pdf (optional)
#pdfsupp:    './publications/2021_herter_thinvolvis_appendixes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Herter2021ThinVolumeVisualization,<br>
   &nbsp;&nbsp;title = {Thin-Volume Visualization on Curved Domains},<br>
   &nbsp;&nbsp;author = {Herter, Felix and Hege, Hans-Christian and Hadwiger, Markus and Lepper, Verena and Baum, Daniel},<br>
   &nbsp;&nbsp;journal = {Computer Graphics Forum (Proceedings Eurovis 2021)},<br>
   &nbsp;&nbsp;year = {2021}<br>
   &nbsp;&nbsp;pages = {to appear}<br>
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
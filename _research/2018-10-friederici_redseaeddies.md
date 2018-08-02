---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       redseaeddies

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   A Lagrangian Method for Extracting Eddy Boundaries in the Red Sea and the Gulf of Aden
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Anke Friederici
 - Habib Toye Mahamadou Kele
 - Ibrahim Hoteit
 - Tino Weinkauf
 - Holger Theisel
 - Markus Hadwiger
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Scientific Visualization 2018 Short Papers, to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2018 Short Papers

#specify publication year
year:       2018

#insert abstract of publication
abstract:   >
   Mesoscale ocean eddies play a major role for both the intermixing of water and the transport of biological mass. This makes the identification and tracking of their shape, location and deformation over time highly important for a number of applications. While eddies maintain a roughly circular shape in the free ocean, the narrow basins of the Red Sea and Gulf of Aden lead to the formation of irregular eddy shapes that existing methods struggle to identify. We propose the following model: Inside an eddy, particles rotate around a common core and thereby remain at a constant distance under a certain parametrization. The transition to the more unpredictable flow on the outside can thus be identified as the eddy boundary. We apply this algorithm on a realistic simulation of the Red Sea circulation, where we are able to identify the shape of irregular eddies robustly and more coherently than previous methods. We visualize the eddies as tubes in space-time to enable the analysis of their movement and deformation over several weeks.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2018_friederici_redseaeddies.jpg'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2018_friederici_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2018_friederici_redseaeddies.mp4'

#link to publication pdf (optional)
pdf:        './publications/2018_friederici_redseaeddies.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &emsp; will insert a tab character to prettify the citation
citation:   >
  @inproceedings{Friederici2018RedSeaEddies,<br>
   &emsp;title = {A Lagrangian Method for Extracting Eddy Boundaries in the Red Sea and the Gulf of Aden},<br>
   &emsp;author = {Friedrici, Anke and Toye Mahamadou Kele, Habib and Hoteit, Ibrahim and Weinkauf, Tino and Theisel, Holger and Hadwiger, Markus},<br>
   &emsp;booktitle = {IEEE Scientific Visualization 2018 Short Papers},<br>
   &emsp;year = {2018}<br>
   &emsp;pages = {to appear}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
 - title: Supplementary Parameter Studies
   type:  pdf
   url:   './publications/2018_friederici_redseaeddies_supplementary.pdf' 
# - title: ExampleSlides
#  type:  slides
#   url:   './publications/presentation.pptx'
   
 #don't forget the leading and trailing --- in a YAML file
---
---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       barrio

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Barrio: Customizable Spatial Neighborhood Analysis and Comparison for Nanoscale Brain Structures
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Jakob Troidl
 - Corrado Cali
 - Eduard Gröller
 - Hanspeter Pfister
 - Markus Hadwiger
 - Johanna Beyer

#insert publication venue (displayed on publication page)
venue:      >
   Computer Graphics Forum, Vol.41, No.3 (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2022), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   Eurovis 2022

#specify publication year
year:       2022

#insert abstract of publication
abstract:   >
   High-resolution electron microscopy imaging allows neuroscientists to reconstruct not just entire cells but individual cell substructures (i.e., cell organelles) as well. Based on these data, scientists hope to get a better understanding of brain function and development through detailed analysis of local organelle neighborhoods. In-depth analyses require efficient and scalable comparison of a varying number of cell organelles, ranging from two to hundreds of local spatial neighborhoods. Scientists need to be able to analyze the 3D morphologies of organelles, their spatial distributions and distances, and their spatial correlations. We have designed Barrio as a configurable framework that scientists can adjust to their preferred workflow, visualizations, and supported user interactions for their specific tasks and domain questions. Furthermore, Barrio provides a scalable comparative visualization approach for spatial neighborhoods that automatically adjusts visualizations based on the number of structures to be compared. Barrio supports small multiples of spatial 3D views as well as abstract quantitative views, and arranges them in linked and juxtaposed views. To adapt to new domain-specific analysis scenarios, we allow the definition of individualized visualizations and their parameters for each analysis session. We present an in-depth case study for mitochondria analysis in neuronal tissue and demonstrate the usefulness of Barrio in a qualitative user study with neuroscientists.

#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2022_troidl_barrio.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2022_troidl_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://vimeo.com/'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=JSHjLvIulY0'

#link to publication pdf (optional)
#pdf:        'https://onlinelibrary.wiley.com/doi/epdf/10.1111/cgf.14296'
#pdf:        './publications/2022_troidl_barrio.pdf'

#link to appendix pdf (optional)
#pdfsupp:    './publications/2022_troidl_barrio_appendixes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Troidl2022Barrio,<br>
   &nbsp;&nbsp;title = {Barrio: Customizable Spatial Neighborhood Analysis and Comparison for Nanoscale Brain Structures},<br>
   &nbsp;&nbsp;author = {Troidl, Jakob and Cali, Corrado and Gr{\"o}ller, Eduard and Pfister, Hanspeter and Hadwiger, Markus and Beyer, Johanna},<br>
   &nbsp;&nbsp;journal = {Computer Graphics Forum (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2022},<br>
   &nbsp;&nbsp;year = {2022},<br>
   &nbsp;&nbsp;volume = {41},<br>
   &nbsp;&nbsp;number = {3},<br>
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
---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters
  
# URL handle for generated webpage
slug:       bhjbottlenecks

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   A Novel framework for visual detection and exploration of performance bottlenecks in organic photovoltaic solar cell materials

#include in selected publications on front page (optional, delete line if not applicable)
#display: selected

#list all publication authors in correct order
authors:
 - Amal Aboulhassan
 - Daniel Baum
 - Olga Wodo
 - Baskar Ganapathysubramanian
 - Aram Amassian
 - Markus Hadwiger 
 
#insert publication venue (displayed on publication page)
venue:      >
   Computer Graphics Forum, Vol.34, No.3 (Proceedings of Eurographics/IEEE Symposium on Visualization, Eurovis 2015), pp. 401-410
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   Eurovis 2015

#specify publication year
year:       2015

#insert abstract of publication
abstract:   >
   Current characterization methods of the so-called Bulk Heterojunction (BHJ), which is the main material of Organic Photovoltaic (OPV) solar cells, are limited to the analysis of global fabrication parameters. This reduces the efficiency of the BHJ design process, since it misses critical information about the local performance bottlenecks in the morphology of the material. In this paper, we propose a novel framework that fills this gap through visual characterization and exploration of local structure-performance correlations. We also propose a formula that correlates the structural features with the performance bottlenecks. Since research into BHJ materials is highly multidisciplinary, our framework enables a visual feedback strategy that allows scientists to build intuition about the best choices of fabrication parameters. We evaluate the usefulness of our proposed system by obtaining new BHJ characterizations. Furthermore, we show that our approach could substantially reduce the turnaround time.

#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2015_aboulhassan_bhjbottlenecks.png'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2015_aboulhassan_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://www.youtube.com/watch?v=xxxxxx'

#link to publication pdf (optional)
pdf:        './publications/2015_aboulhassan_bhjbottlenecks.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &emsp; will insert a tab character to prettify the citation
citation:   >
  @article{Aboulhassan2015Novel,<br>
   &emsp;author = {Aboulhassan, Amal and Baum, Daniel and Wodo, Olga and Ganapathysubramanian, Baskar and Amassian, Aram and Hadwiger, Markus},<br>
   &emsp;title = {A Novel Framework for Visual Detection and Exploration of Performance Bottlenecks in Organic Photovoltaic Solar Cell Materials},<br>
   &emsp;journal = {Computer Graphics Forum},<br>
   &emsp;volume = {34},<br>
   &emsp;number = {3},<br>
   &emsp;pages = {401--410},<br>
   &emsp;year = {2015}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
#links: 
# - title: ExampleCode
#   type:  code
#   url:   './publications/supplementary1.zip' 
# - title: ExampleSlides
#   type:  slides
#   url:   './publications/presentation.pptx' 

#don't forget the leading and trailing --- in a YAML file
---
---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters
  
# URL handle for generated webpage
slug:       bhjanalysis

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Comparative Visual Analysis of Structure-Performance Relations in Complex Bulk-Heterojunction Morphologies

#include in selected publications on front page (optional, delete line if not applicable)
display: selected

#list all publication authors in correct order
authors:
 - Amal Aboulhassan
 - Ronell Sicat
 - Daniel Baum
 - Olga Wodo
 - Markus Hadwiger 
 
#insert publication venue (displayed on publication page)
venue:      >
   Computer Graphics Forum, Vol.36, No.3 (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2017), pp. 329-339
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   Eurovis 2017

#specify publication year
year:       2017

#insert abstract of publication
abstract:   >
   The structure of Bulk-Heterojunction (BHJ) materials, the main component of organic photovoltaic solar cells, is very complex, and the relationship between structure and performance is still largely an open question. Overall, there is a wide spectrum of fabrication configurations resulting in different BHJ morphologies and correspondingly different performances. Current state-of-the-art methods for assessing the performance of BHJ morphologies are either based on global quantification of morphological features or simply on visual inspection of the morphology based on experimental imaging. This makes finding optimal BHJ structures very challenging. Moreover, finding the optimal fabrication parameters to get an optimal structure is still an open question. In this paper, we propose a visual analysis framework to help answer these questions through comparative visualization and parameter space exploration for local morphology features. With our approach, we enable scientists to explore multivariate correlations between local features and performance indicators of BHJ morphologies. Our framework is built on shape-based clustering of local cubical regions of the morphology that we call patches. This enables correlating the features of clusters with intuition-based performance indicators computed from geometrical and topological features of charge paths.

#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2017_aboulhassan_bhjanalysis.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2017_aboulhassan_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://www.youtube.com/watch?v=xxxxxx'

#link to publication pdf (optional)
pdf:        './publications/2017_aboulhassan_bhjanalysis.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Aboulhassan2017BHJAnalysis,<br>
   &nbsp;&nbsp;author = {Aboulhassan, Amal and Sicat, Ronell and Baum, Daniel and Wodo, Olga and Hadwiger, Markus},<br>
   &nbsp;&nbsp;title = {Comparative Visual Analysis of Structure-Performance Relations in Complex Bulk-Heterojunction Morphologies},<br>
   &nbsp;&nbsp;journal = {Computer Graphics Forum (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2017},<br>
   &nbsp;&nbsp;volume = {36},<br>
   &nbsp;&nbsp;number = {3},<br>
   &nbsp;&nbsp;pages = {329--339},<br>
   &nbsp;&nbsp;year = {2017}<br>
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
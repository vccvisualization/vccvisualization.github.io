---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:      fenwicktree

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   A Versatile and Efficient GPU Data Structure for Spatial Indexing

#include in selected publications on front page (optional, delete line if not applicable)
#display: selected

#list all publication authors in correct order
authors:
 - Jens Schneider
 - Peter Rautek

#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.23, No.1 (Proceedings IEEE Scientific Visualization 2016), pp. 911-920
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2016

#specify publication year
year:       2017

#insert abstract of publication
abstract:   >
   In this paper we present a novel GPU-based data structure for spatial indexing. Based on Fenwick trees-a special type of binary indexed trees-our data structure allows construction in linear time. Updates and prefixes can be computed in logarithmic time, whereas point queries require only constant time on average. Unlike competing data structures such as summed-area tables and spatial hashing, our data structure requires a constant amount of bits for each data element, and it offers unconstrained point queries. This property makes our data structure ideally suited for applications requiring unconstrained indexing of large data, such as block-storage of large and block-sparse volumes. Finally, we provide asymptotic bounds on both run-time and memory requirements, and we show applications for which our new data structure is useful.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2017_schneider_fenwick.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2017_schneider_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://www.youtube.com/watch?v=xxxxxx'

#link to publication pdf (optional)
pdf:        './publications/2017_schneider_fenwick.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Schneider2017Fenwick,<br>
   &nbsp;&nbsp;title = {A Versatile and Efficient GPU Data Structure for Spatial Indexing},<br>
   &nbsp;&nbsp;author = {Schneider, Jens and Rautek, Peter},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Scientific Visualization 2016)},<br>
   &nbsp;&nbsp;year = {2017},<br>
   &nbsp;&nbsp;volume = {23},<br>
   &nbsp;&nbsp;number = {1},<br>
   &nbsp;&nbsp;pages = {911--920},<br>
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
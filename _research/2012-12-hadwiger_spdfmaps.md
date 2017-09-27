---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:      spdfmaps

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Sparse PDF Maps for Non-Linear Multi-Resolution Image Operations

#include in selected publications on front page (optional, delete line if not applicable)
display: selected

#list all publication authors in correct order
authors:
 - Markus Hadwiger 
 - Ronell Sicat
 - Johanna Beyer
 - Jens Krüger
 - Torsten Möller

#insert publication venue (displayed on publication page)
venue:      >
   ACM Transactions on Graphics, Vol.31, No.6 (Proceedings ACM Siggraph Asia 2012), pp. 133:1-133:12
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   ACM Siggraph Asia 2012

#specify publication year
year:       2012

#insert abstract of publication
abstract:   >
   We introduce a new type of multi-resolution image pyramid for high-resolution images called sparse pdf maps (sPDF-maps). Each pyramid level consists of a sparse encoding of continuous probability density functions (pdfs) of pixel neighborhoods in the original image. The encoded pdfs enable the accurate computation of non-linear image operations directly in any pyramid level with proper pre-filtering for anti-aliasing, without accessing higher or lower resolutions. The sparsity of sPDF-maps makes them feasible for gigapixel images, while enabling direct evaluation of a variety of non-linear operators from the same representation. We illustrate this versatility for antialiased color mapping, O(n) local Laplacian filters, smoothed local histogram filters (e.g., median or mode filters), and bilateral filters.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2012_hadwiger_spdfmaps.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2012_hadwiger_thumbnail2.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2012_hadwiger_spdfmaps.mp4'

#link to publication pdf (optional)
pdf:        './publications/2012_hadwiger_spdfmaps.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &emsp; will insert a tab character to prettify the citation
citation:   >
  @article{Hadwiger2012SPDFMaps,<br>
   &emsp;title = {Sparse PDF Maps for Non-Linear Multi-Resolution Image Operations},<br>
   &emsp;author = {Hadwiger, Markus and Sicat, Ronell and Beyer, Johanna and Kr{\"u}ger, Jens and M{\"o}ller, Torsten},<br>
   &emsp;journal = {ACM Transactions on Graphics (Proceedings ACM Siggraph Asia 2012)},<br>
   &emsp;year = {2012},<br>
   &emsp;volume = {31},<br>
   &emsp;number = {6},<br>
   &emsp;pages = {133:1--133:12}<br>
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
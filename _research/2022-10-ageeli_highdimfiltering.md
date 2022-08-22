---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       highdimfiltering

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Multivariate Probabilistic Range Queries for Scalable Interactive 3D Visualization
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Amani Ageeli
 - Alberto Jaspe-Villanueva
 - Ronell Sicat
 - Florian Mannuss
 - Peter Rautek
 - Markus Hadwiger

#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.29, No.2 (Proceedings IEEE Scientific Visualization 2022), to appear

#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2022

#specify publication year
year:       2023

#insert abstract of publication
abstract:   >
   Large-scale scientific data, such as weather and climate simulations, often comprise a large number of attributes for each data sample, like temperature, pressure, humidity, and many more. Interactive visualization and analysis require filtering according to any desired combination of attributes, in particular logical AND operations, which is challenging for large data and many attributes. Many general data structures for this problem are built for and scale with a fixed number of attributes, and scalability of joint queries with arbitrary attribute subsets remains a significant problem. We propose a flexible probabilistic framework for multivariate range queries that decouples all attribute dimensions via projection, allowing any subset of attributes to be queried with full efficiency. Moreover, our approach is output-sensitive, mainly scaling with the cardinality of the query result rather than with the input data size. This is particularly important for joint attribute queries, where the query output is usually much smaller than the whole data set. Additionally, our approach can split query evaluation between user interaction and rendering, achieving much better scalability for interactive visualization than the previous state of the art. Furthermore, even when a multi-resolution strategy is used for visualization, queries are jointly evaluated at the finest data granularity, because our framework does not limit query accuracy to a fixed spatial subdivision.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2022_ageeli_highdimfiltering.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2022_ageeli_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://vimeo.com/458350874'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=3WW2Bdg5tY8'

#link to publication pdf (optional)
#pdf:        './publications/2022_ageeli_highdimfiltering.pdf'

#link to appendix pdf (optional)
#pdfsupp:    './publications/2020_rautek_killingsurfaces_appendixes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Ageeli2022HighDimensionalAttributeFiltering,<br>
   &nbsp;&nbsp;title = {Multivariate Probabilistic Range Queries for Scalable Interactive 3D Visualization},<br>
   &nbsp;&nbsp;author = {Ageeli, Amani and {Jaspe Villanueva}, Alberto and Sicat, Ronell and Mannuss, Florian and Rautek, Peter and Hadwiger, Markus},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Scientific Visualization 2022)},<br>
   &nbsp;&nbsp;year = {2023},<br>
   &nbsp;&nbsp;volume = {29},<br>
   &nbsp;&nbsp;number = {2},<br>
   &nbsp;&nbsp;pages = {to appear}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: HQ Paper + Appendix
#   type:  pdf
#   url:   './publications/2020_rautek_killingsurfaces_with_appendixes_hq.pdf' 
# - title: Slides
#   type:  slides
#   url:   './publications/2020_rautek_killingsurfaces_slides.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/killingsurfaces'
 
---
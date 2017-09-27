---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters
  
# URL handle for generated webpage
slug:       vislang

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   ViSlang: A System for Interpreted Domain-specific Languages for Scientific Visualization

#include in selected publications on front page (optional, delete line if not applicable)
display: selected

#list all publication authors in correct order
authors:
 - Peter Rautek
 - Stefan Bruckner
 - M. Eduard Gröller
 - Markus Hadwiger 
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.20, No.12 (Proceedings IEEE Scientific Visualization 2014), pp. 2388-2396
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2014

#specify publication year
year:       2014

#insert abstract of publication
abstract:   >
   Researchers from many domains use scientific visualization in their daily practice. Existing implementations of algorithms usually come with a graphical user interface (high-level interface), or as software library or source code (low-level interface). In this paper we present a system that integrates domain-specific languages (DSLs) and facilitates the creation of new DSLs. DSLs provide an effective interface for domain scientists avoiding the difficulties involved with low-level interfaces and at the same time offering more flexibility than high-level interfaces. We describe the design and implementation of ViSlang, an interpreted language specifically tailored for scientific visualization. A major contribution of our design is the extensibility of the ViSlang language. Novel DSLs that are tailored to the problems of the domain can be created and integrated into ViSlang. We show that our approach can be added to existing user interfaces to increase the flexibility for expert users on demand, but at the same time does not interfere with the user experience of novice users. To demonstrate the flexibility of our approach we present new DSLs for volume processing, querying and visualization. We report the implementation effort for new DSLs and compare our approach with Matlab and Python implementations in terms of run-time performance.

#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2014_rautek_vislang.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2014_rautek_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      'https://www.youtube.com/watch?v=DbWazwyMRNw'

#link to publication pdf (optional)
pdf:        './publications/2014_rautek_vislang.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &emsp; will insert a tab character to prettify the citation
citation:   >
  @article{Rautek2014Vislang,<br>
   &emsp;title = {ViSlang: A system for interpreted domain-specific languages for scientific visualization},<br>
   &emsp;author = {Rautek, Peter and Bruckner, Stefan and Gr{\"o}ller, M Eduard and Hadwiger, Markus},<br>
   &emsp;journal = {IEEE transactions on visualization and computer graphics},<br>
   &emsp;volume = {20},<br>
   &emsp;number = {12},<br>
   &emsp;pages = {2388--2396},<br>
   &emsp;year = {2014},<br>
   &emsp;publisher = {IEEE}
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
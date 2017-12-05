---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       foldandfit

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
 Fold and fit: Space conserving shape editing

#include in selected publications on front page (optional, delete line if not applicable)


#list all publication authors in correct order
authors:
 - Mohamed Ibrahim
 - Dong-Ming Yan 
 
#insert publication venue (displayed on publication page)
venue:      >
 Computers & Graphics (Special Issue on CAD/Graphics)

#insert short venue (displayed in box in publication list)
shortvenue: >
 Computers & Graphics 2017

#specify publication year
year:       2017

#insert abstract of publication
abstract:   >
 We present a framework that folds man-made objects in a structure-aware manner for space-conserving storage and transportation. Given a segmented 3D mesh of a man-made object, our framework jointly optimizes for joint locations, the folding order, and folding angles for each part of the model, enabling it to transform into a spatially efficient configuration while keeping its original functionality as intact as possible. That is, if a model is supposed to withstand several forces in its initial state to serve its functionality, our framework places the joints between the parts of the model such that the model can withstand forces with magnitudes that are comparable to the magnitudes applied on the unedited model. Furthermore, if the folded shape is not compact, our framework proposes further segmentation of the model to improve its compactness in its folded state.
 
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2017_ibrahim_foldandfit.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2017_ibrahim_foldandfit_thumbnail.jpg'

#link to publication pdf (optional)
pdf:        './publications/2017_ibrahim_foldandfit.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &emsp; will insert a tab character to prettify the citation
#citation:   >
#  @article{IBRAHIM2017,<br>
# &emsp;title = "Fold and fit: Space conserving shape editing",<br>
# &emsp;journal = "Computers & Graphics",<br>
# &emsp;year = "2017",<br>
# &emsp;issn = "0097-8493",<br>
# &emsp;doi = "https://doi.org/10.1016/j.cag.2017.08.002",<br>
# &emsp;url = "http://www.sciencedirect.com/science/article/pii/S0097849317301310",<br>
# &emsp;author = "Mohamed Ibrahim and Dong-Ming Yan",<br>
# &emsp;keywords = "Folding, Shape editing, Segmentation, Functional feasibility"<br>
# }
  
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
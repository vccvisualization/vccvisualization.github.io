---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters
  
# URL handle for generated webpage
slug:       spdfvolumes

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Sparse PDF Volumes for Consistent Multi-Resolution Volume Rendering

#include in selected publications on front page (optional, delete line if not applicable)
display: selected

#list all publication authors in correct order
authors:
 - Ronell Sicat
 - Jens Krüger
 - Torsten Möller
 - Markus Hadwiger 
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.20, No.12 (Proceedings IEEE Scientific Visualization 2014), pp. 2417-2426
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2014

#specify publication year
year:       2014

#insert abstract of publication
abstract:   >
   This paper presents a new multi-resolution volume representation called sparse pdf volumes, which enables consistent multi-resolution volume rendering based on probability density functions (pdfs) of voxel neighborhoods. These pdfs are defined in the 4D domain jointly comprising the 3D volume and its 1D intensity range. Crucially, the computation of sparse pdf volumes exploits data coherence in 4D, resulting in a sparse representation with surprisingly low storage requirements. At run time, we dynamically apply transfer functions to the pdfs using simple and fast convolutions. Whereas standard low-pass filtering and down-sampling incur visible differences between resolution levels, the use of pdfs facilitates consistent results independent of the resolution level used. We describe the efficient out-of-core computation of large-scale sparse pdf volumes, using a novel iterative simplification procedure of a mixture of 4D Gaussians. Finally, our data structure is optimized to facilitate interactive multi-resolution volume rendering on GPUs.

#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2014_sicat_spdfvolumes.png'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2014_sicat_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      'https://www.youtube.com/watch?v=hAWBevfB1oE'

#link to publication pdf (optional)
pdf:        './publications/2014_sicat_spdfvolumes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Sicat2014SPDFVolumes,<br>
   &nbsp;&nbsp;title = {Sparse PDF Volumes for Consistent Multi-Resolution Volume Rendering},<br>
   &nbsp;&nbsp;author = {Sicat, Ronell and Kr{\"u}ger, Jens and M{\"o}ller, Torsten and Hadwiger, Markus},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Scientific Visualization 2014)},<br>
   &nbsp;&nbsp;year = {2014},<br>
   &nbsp;&nbsp;volume = {20},<br>
   &nbsp;&nbsp;number = {12},<br>
   &nbsp;&nbsp;pages = {2417--2426}<br>
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
---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       dvr

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
 A framework for GPU-accelerated exploration of massive time-varying rectilinear scalar volumes

#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order
authors:
 - Fabio Marton
 - Marco Agus
 - Enrico Gobbetti
 
#insert publication venue (displayed on publication page)
venue:      >
  Computer Graphics Forum, Vol.38, No.3 (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2019), pp. 53-66
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   Eurovis 2019

#specify publication year
year:       2019

#insert abstract of publication
abstract:   >
 We introduce a novel flexible approach to spatiotemporal exploration of rectilinear scalar volumes. Our out-of-core representation, based on per-frame levels of hierarchically tiled non-redundant 3D grids, efficiently supports spatiotemporal random access and streaming to the GPU in compressed formats. A novel low-bitrate codec able to store into fixed-size pages a variable-rate approximation based on sparse coding with learned dictionaries is exploited to meet stringent bandwidth constraint during time-critical operations, while a near-lossless representation is employed to support high-quality static frame rendering. A flexible high-speed GPU decoder and raycasting framework mixes and matches GPU kernels performing parallel object-space and image-space operations for seamless support, on fat and thin clients, of different exploration use cases, including animation and temporal browsing, dynamic exploration of single frames, and high-quality snapshots generated from near-lossless data. The quality and performance of our approach are demonstrated on large data sets with thousands of multi-billion-voxel frames. 
 
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2019_agus_dvr.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2019_agus_dvr_thumbnail.jpg'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2019_agus_dvr.mp4'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://vimeo.com/237673207'

#link to publication pdf (optional)
pdf:        './publications/2019_agus_dvr.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Agus2019ivv,<br>
   &nbsp;&nbsp;author = {Fabio Marton and Marco Agus and Enrico Gobbetti},<br>
   &nbsp;&nbsp;title = {A framework for GPU-accelerated exploration of massive time-varying rectilinear scalar volumes},<br>
   &nbsp;&nbsp;journal = {Computer Graphics Forum (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2019},<br>
   &nbsp;&nbsp;volume = {38},<br>
   &nbsp;&nbsp;number = {3},<br>
   &nbsp;&nbsp;pages = {53--66},<br>
   &nbsp;&nbsp;year = {2019}<br>
  }
  
#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: Code
# type:  github
#   url:   'https://github.com/ronellsicat/DxR'
# - title: ExampleSlides
#   type:  slides
#   url:   './publications/presentation.pptx' 
   
#don't forget the leading and trailing --- in a YAML file
---
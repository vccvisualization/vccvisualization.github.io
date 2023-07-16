---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       residencyoctree

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Residency Octree: A Hybrid Approach for Scalable Web-Based Multi-Volume Rendering
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Lukas Herzberger
 - Markus Hadwiger
 - Robert Krüger
 - Peter Sorger
 - Hanspeter Pfister
 - Eduard Gröller
 - Johanna Beyer
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.30, No.1 (Proceedings IEEE VIS 2023), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE VIS 2023

#specify publication year
year:       2024

#insert abstract of publication
abstract:   >
   We present a hybrid multi-volume rendering approach based on a novel Residency Octree that combines the advantages of out-of-core volume rendering using page tables with those of standard octrees. Octree approaches work by performing hierarchical tree traversal. However, in octree volume rendering tree traversal and the selection of data resolution are intrinsically coupled. This makes fine-grained empty-space skipping costly. Page tables, on the other hand, allow access to any cached brick from any resolution. However, they do not offer a clear and efficient strategy for substituting missing high-resolution data with lower-resolution data. We enable flexible mixed-resolution out-of-core multi-volume rendering by decoupling the cache residency of multi-resolution data from a resolution-independent spatial subdivision determined by the tree. Instead of one-to-one node to brick correspondences, each residency octree node is mapped to a set of bricks from different resolution levels. This makes it possible to efficiently and adaptively choose and mix resolutions, adapt sampling rates, and compensate for cache misses. At the same time, residency octrees support fine-grained empty-space skipping, independent of the data subdivision used for caching. Finally, to facilitate collaboration and outreach, and to eliminate local data storage, our implementation is a web-based, pure client-side renderer using WebGPU and WebAssembly. Our method is faster than prior approaches and efficient for many data channels with a flexible and adaptive choice of data resolution.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2023_herzberger_residencyoctree.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2023_herzberger_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      './publications/2023_2023_herzberger_residencyoctree.mp4'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://vimeo.com/303253176'

#link to publication pdf (optional)
#pdf:        './publications/2023_herzberger_residencyoctree.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Herzberger2023ResidencyOctree,<br>
   &nbsp;&nbsp;title = {Residency Octree: A Hybrid Approach for Scalable Web-Based Multi-Volume Rendering},<br>
   &nbsp;&nbsp;author = {Herzberger, Lukas and Hadwiger, Markus and Kr{\"u}ger, Robert and Sorger, Peter and Pfister, Hanspeter and Gr{\"o}ller, Eduard and Beyer, Johanna},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE VIS 2023)},<br>
   &nbsp;&nbsp;year = {2024},<br>
   &nbsp;&nbsp;volume = {30},<br>
   &nbsp;&nbsp;number = {1},<br>
   &nbsp;&nbsp;pages = {to appear}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: Supplementary Evaluation
#   type:  pdf
#   url:   './publications/2023_herzberger_supplementary.pdf' 
# - title: ExampleSlides
#  type:  slides
#   url:   './publications/presentation.pptx'
   
 #don't forget the leading and trailing --- in a YAML file
---
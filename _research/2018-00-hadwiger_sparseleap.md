---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       sparseleap

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   SparseLeap: Efficient Empty Space Skipping for Large-Scale Volume Rendering
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Markus Hadwiger
 - Ali K. Al-Awami
 - Johanna Beyer
 - Marco Agus
 - Hanspeter Pfister
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.24, No.1 (Proceedings IEEE Scientific Visualization 2017)
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2017

#specify publication year
year:       2018

#insert abstract of publication
abstract:   >
   Recent advances in data acquisition produce volume data of very high resolution and large size, such as terabyte-sized microscopy volumes. These data often contain many fine and intricate structures, which pose huge challenges for volume rendering, and make it particularly important to efficiently skip empty space. This paper addresses two major challenges: (1) The complexity of large volumes containing fine structures often leads to highly fragmented space subdivisions that make empty regions hard to skip efficiently. (2) The classification of space into empty and non-empty regions changes frequently, because the user or the evaluation of an interactive query activate a different set of objects, which makes it unfeasible to pre-compute a well-adapted space subdivision. We describe the novel SparseLeap method for efficient empty space skipping in very large volumes, even around fine structures. The main performance characteristic of SparseLeap is that it moves the major cost of empty space skipping out of the ray-casting stage. We achieve this via a hybrid strategy that balances the computational load between determining empty ray segments in a rasterization (object-order) stage, and sampling non-empty volume data in the ray-casting (image-order) stage. Before ray-casting, we exploit the fast hardware rasterization of GPUs to create a ray segment list for each pixel, which identifies non-empty regions along the ray. The ray-casting stage then leaps over empty space without hierarchy traversal. Ray segment lists are created by rasterizing a set of fine-grained, view-independent bounding boxes. Frame coherence is exploited by re-using the same bounding boxes unless the set of active objects changes. We show that SparseLeap scales better to large, sparse data than standard octree empty space skipping.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2017_hadwiger_sparseleap.jpg'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2017_hadwiger_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      'https://www.youtube.com/watch?v=SUEhzkwX4KI'

#link to publication pdf (optional)
pdf:        './publications/2017_hadwiger_sparseleap.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &emsp; will insert a tab character to prettify the citation
citation:   >
   @article{Hadwiger2017Sparseleap,<br>
   &emsp;title = {SparseLeap: Efficient Empty Space Skipping for Large-Scale Volume Rendering},<br>
   &emsp;author = {Hadwiger, Markus and Al-Awami, Ali K. and Beyer, Johanna and Agus, Marco and Pfister, Hanspeter},<br>
   &emsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE SciVis 2017)},<br>
   &emsp;year = {2017}<br>
   }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
#links: 
# - title: ExampleCode
#   type:  code
#   url:   './publications/supplementary1.zip' 
# - title: ExampleSlides
#  type:  slides
#   url:   './publications/presentation.pptx'
   
 #don't forget the leading and trailing --- in a YAML file
---
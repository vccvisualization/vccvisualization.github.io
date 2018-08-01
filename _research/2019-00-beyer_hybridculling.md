---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       hybridculling

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Culling for Extreme-Scale Segmentation Volumes: A Hybrid Deterministic and Probabilistic Approach
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Johanna Beyer
 - Haneen Mohammed
 - Marco Agus
 - Ali K. Al-Awami
 - Hanspeter Pfister
 - Markus Hadwiger
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.25, No.1 (Proceedings IEEE Scientific Visualization 2018), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2018

#specify publication year
year:       2019

#insert abstract of publication
abstract:   >
   With the rapid increase in raw volume data sizes, such as terabyte-sized microscopy volumes, the corresponding segmentation label volumes have become extremely large as well. We focus on integer label data, whose efficient representation in memory, as well as fast random data access, pose an even greater challenge than the raw image data. Often, it is crucial to be able to rapidly identify which segments are located where, whether for empty space skipping for fast rendering, or for spatial proximity queries. We refer to this process as culling. In order to enable efficient culling of millions of labeled segments, we present a novel hybrid approach that combines deterministic and probabilistic representations of label data in a data-adaptive hierarchical data structure that we call the label list tree. In each node, we adaptively encode label data using either a probabilistic constant-time access representation for fast conservative culling, or a deterministic logarithmic-time access representation for exact queries. We choose the best data structures for representing the labels of each spatial region while building the label list tree. At run time, we further employ a novel query-adaptive culling strategy. While filtering a query down the tree, we prune it successively, and in each node adaptively select the representation that is best suited for evaluating the pruned query, depending on its size. We show an analysis of the efficiency of our approach with several large data sets from connectomics, including a brain scan with more than 13 million labeled segments, and compare our method to conventional culling approaches. Our approach achieves significant reductions in storage size as well as faster query times.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2018_beyer_hybridculling.jpg'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2018_beyer_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2018_beyer_hybridculling.mp4'

#link to publication pdf (optional)
pdf:        './publications/2018_beyer_hybridculling.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &emsp; will insert a tab character to prettify the citation
citation:   >
  @article{Beyer2019HybridCulling,<br>
   &emsp;title = {Culling for Extreme-Scale Segmentation Volumes: A Hybrid Deterministic and Probabilistic Approach},<br>
   &emsp;author = {Beyer, Johanna and Mohammed, Haneen and Agus, Marco and Al-Awami, Ali K. and Pfister, Hanspeter and Hadwiger, Markus},<br>
   &emsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Scientific Visualization 2018)},<br>
   &emsp;year = {2019}<br>
   &emsp;volume = {25},<br>
   &emsp;number = {1},<br>
   &emsp;pages = {to appear}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
 - title: Supplementary Material (Additional Evaluation)
   type:  text
   url:   './publications/2018_beyer_hybridculling_supplementary.pdf' 
# - title: ExampleSlides
#  type:  slides
#   url:   './publications/presentation.pptx'
   
 #don't forget the leading and trailing --- in a YAML file
---
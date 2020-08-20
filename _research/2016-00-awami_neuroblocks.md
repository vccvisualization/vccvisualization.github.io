---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:      neuroblocks

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   NeuroBlocks - Visual Tracking of Segmentation and Proofreading for Large Connectomics Projects

#include in selected publications on front page (optional, delete line if not applicable)
#display: selected

#list all publication authors in correct order
authors:
 - Ali K. Al-Awami
 - Johanna Beyer
 - Daniel Haehn
 - Narayanan Kasthuri
 - Jeff W. Lichtman
 - Hanspeter Pfister
 - Markus Hadwiger 

#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.22, No.1 (Proceedings IEEE Scientific Visualization 2015), pp. 738-746
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2015

#specify publication year
year:       2016

#insert abstract of publication
abstract:   >
   In the field of connectomics, neuroscientists acquire electron microscopy volumes at nanometer resolution in order to reconstruct a detailed wiring diagram of the neurons in the brain. The resulting teaser volumes, which often are hundreds of terabytes in size, need to be segmented to identify cell boundaries, synapses, and important cell organelles. However, the segmentation process of a single volume is very complex, time-intensive, and usually performed using a diverse set of tools and many users. To tackle the associated challenges, this paper presents NeuroBlocks, which is a novel visualization system for tracking the state, progress, and evolution of very large volumetric segmentation data in neuroscience. NeuroBlocks is a multi-user web-based application that seamlessly integrates the diverse set of tools that neuroscientists currently use for manual and semi-automatic segmentation, proofreading, visualization, and analysis. NeuroBlocks is the first system that integrates this heterogeneous tool set, providing crucial support for the management, provenance, accountability, and auditing of large-scale segmentations. We describe the design of NeuroBlocks, starting with an analysis of the domain-specific tasks, their inherent challenges, and our subsequent task abstraction and visual representation. We demonstrate the utility of our design based on two case studies that focus on different user roles and their respective requirements for performing and tracking the progress of segmentation and proofreading in a large real-world connectomics project.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2015_awami_neuroblocks.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2015_awami_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2015_awami_neuroblocks.mp4'

#link to publication pdf (optional)
pdf:        './publications/2015_awami_neuroblocks.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Awami2016Neuroblocks,<br>
   &nbsp;&nbsp;title = {NeuroBlocks - Visual Tracking of Segmentation and Proofreading for Large Connectomics Projects},<br>
   &nbsp;&nbsp;author = {Al-Awami, Ali K. and Beyer, Johanna and Haehn, Daniel and Kasthuri, Narayanan and Lichtman, Jeff W. and Pfister, Hanspeter and Hadwiger, Markus},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Scientific Visualization 2015)},<br>
   &nbsp;&nbsp;year = {2016},<br>
   &nbsp;&nbsp;volume = {22},<br>
   &nbsp;&nbsp;number = {1},<br>
   &nbsp;&nbsp;pages = {738--746}<br>
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
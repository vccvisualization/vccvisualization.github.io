---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       abstractocyte

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      'Abstractocyte: A Visual Tool for Exploring Nanoscale Astroglial Cells'
   
#include in selected publications on front page (optional, delete line if not applicable)
display:    selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Haneen Mohammed
 - Ali K. Al-Awami
 - Johanna Beyer
 - Corrado Cali
 - Pierre Magistretti
 - Hanspeter Pfister
 - Markus Hadwiger
 
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
   This paper presents Abstractocyte, a system for the visual analysis of astrocytes and their relation to neurons, in nanoscale volumes of brain tissue. Astrocytes are glial cells, i.e., non-neuronal cells that support neurons and the nervous system. The study of astrocytes has immense potential for understanding brain function. However, their complex and widely-branching structure requires high-resolution electron microscopy imaging and makes visualization and analysis challenging. Furthermore, the structure and function of astrocytes is very different from neurons, and therefore requires the development of new visualization and analysis tools. With Abstractocyte, biologists can explore the morphology of astrocytes using various visual abstraction levels, while simultaneously analyzing neighboring neurons and their connectivity. We define a novel, conceptual 2D abstraction space for jointly visualizing astrocytes and neurons. Neuroscientists can choose a specific joint visualization as a point in this space. Interactively moving this point allows them to smoothly transition between different abstraction levels in an intuitive manner. In contrast to simply switching between different visualizations, this preserves the visual context and correlations throughout the transition. Users can smoothly navigate from concrete, highly-detailed 3D views to simplified and abstracted 2D views. In addition to investigating astrocytes, neurons, and their relationships, we enable the interactive analysis of the distribution of glycogen, which is of high importance to neuroscientists. We describe the design of Abstractocyte, and present three case studies in which neuroscientists have successfully used our system to assess astrocytic coverage of synapses, glycogen distribution in relation to synapses, and astrocytic-mitochondria coverage.
 
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2017_mohammed_abstractocyte.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2017_mohammed_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2017_mohammed_abstractocyte.mp4'

#link to publication pdf (optional)
pdf:        './publications/2017_mohammed_abstractocyte.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &emsp; will insert a tab character to prettify the citation
citation:   >
  @article{Mohammed2018Abstractocyte,<br>
   &emsp;title = {Abstractocyte: A Visual Tool for Exploring Nanoscale Astroglial Cells},<br>
   &emsp;author = {Mohammed, Haneen and Al-Awami, Ali K. and Beyer, Johanna and Cali, Corrado and Magistretti, Pierre and Pfister, Hanspeter and Hadwiger, Markus},<br>
   &emsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Scientific Visualization 2017)},<br>
   &emsp;year = {2018}<br>
   &emsp;volume = {24},<br>
   &emsp;number = {1},<br>
   &emsp;pages = {to appear}<br>
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
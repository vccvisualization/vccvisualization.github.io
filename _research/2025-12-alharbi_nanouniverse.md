---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       nanouniverse

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Nanouniverse: Virtual Instancing of Structural Detail and Adaptive Shell Mapping
   
#include in selected publications on front page (optional, delete line if not applicable)
#display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Ruwayda Alharbi
 - Ondrej Strnad
 - Markus Hadwiger
 - Ivan Viola

#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.31, No.12, pp. 10924-10941

#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE TVCG 2025

#specify publication year
year:       2025

#insert abstract of publication
abstract:   >
   Rendering huge biological scenes with atomistic detail presents a significant challenge in molecular visualization due to the memory limitations inherent in traditional rendering approaches. In this paper, we propose a novel method for the interactive rendering of massive molecular scenes based on hardware-accelerated ray tracing. Our approach circumvents GPU memory constraints by introducing virtual instantiation of full-detail scene elements. Using instancing significantly reduces memory consumption while preserving the full atomistic detail of scenes comprising trillions of atoms, with interactive rendering performance and completely free user exploration. We utilize coarse meshes as proxy geometries to approximate the overall shape of biological compartments, and access all atomistic detail dynamically during ray tracing. We do this via a novel adaptive technique utilizing a volumetric shell layer of prisms extruded around proxy geometry triangles, and a virtual volume grid for the interior of each compartment. Our algorithm scales to enormous molecular scenes with minimal memory consumption and the potential to accommodate even larger scenes. Our method also supports advanced effects such as clipping planes and animations. We demonstrate the efficiency and scalability of our approach by rendering tens of instances of Red Blood Cell and SARS-CoV-2 models theoretically containing more than 20 trillion atoms.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2025_alharbi_nanouniverse.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2025_alharbi_nanouniverse_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      './publications/2025_alharbi_nanouniverse.mp4'

#link to publication pdf (optional)
pdf:        'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11194755'

#link to appendix pdf (optional)
#pdfsupp:    './publications/2025_alharbi_nanouniverse_supp.pdf' 

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Alharbi2025Nanouniverse,<br>
   &nbsp;&nbsp;title = {Nanouniverse: Virtual Instancing of Structural Detail and Adaptive Shell Mapping},<br>
   &nbsp;&nbsp;author = {Alharbi, Ruwayda and Strnad, Ondřej and Hadwiger, Markus and Viola, Ivan},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics},<br>
   &nbsp;&nbsp;number = {31},<br>
   &nbsp;&nbsp;issue = {12},<br>
   &nbsp;&nbsp;pages = {10924--10941},<br>
   &nbsp;&nbsp;year = {2025},<br>
   &nbsp;&nbsp;doi = {10.1109/TVCG.2025.3618914}<br>
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
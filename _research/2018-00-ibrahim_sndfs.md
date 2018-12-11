---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       sndfs

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Screen-Space Normal Distribution Function Caching for Consistent Multi-Resolution Rendering of Large Particle Data

#include in selected publications on front page (optional, delete line if not applicable)
display: selected

#list all publication authors in correct order
authors:
 - Mohamed Ibrahim
 - Patrick Wickenhäuser
 - Peter Rautek
 - Guido Reina
 - Markus Hadwiger 
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.24, No.1 (Proceedings IEEE Scientific Visualization 2017), pp. 944-953
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2017

#specify publication year
year:       2018

#insert abstract of publication
abstract:   >
   Molecular dynamics (MD) simulations are crucial to investigating important processes in physics and thermodynamics. The simulated atoms are usually visualized as hard spheres with Phong shading, where individual particles and their local density can be perceived well in close-up views. However, for large-scale simulations with 10 million particles or more, the visualization of large fields-of-view usually suffers from strong aliasing artifacts, because the mismatch between data size and output resolution leads to severe under-sampling of the geometry. Excessive super-sampling can alleviate this problem, but is prohibitively expensive. This paper presents a novel visualization method for large-scale particle data that addresses aliasing while enabling interactive high-quality rendering. We introduce the novel concept of screen-space normal distribution functions (S-NDFs) for particle data. S-NDFs represent the distribution of surface normals that map to a given pixel in screen space, which enables high-quality re-lighting without re-rendering particles. In order to facilitate interactive zooming, we cache S-NDFs in a screen-space mipmap (S-MIP). Together, these two concepts enable interactive, scale-consistent re-lighting and shading changes, as well as zooming, without having to re-sample the particle data. We show how our method facilitates the interactive exploration of real-world large-scale MD simulation data in different scenarios.
 
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2017_ibrahim_SNDF.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2017_ibrahim_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2017_ibrahim_SNDF.mp4'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
talk:       'https://vimeo.com/237673207'

#link to publication pdf (optional)
pdf:        './publications/2017_ibrahim_SNDF.pdf'


#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Ibrahim2018SNDFs,<br>
   &nbsp;&nbsp;title = {Screen-Space Normal Distribution Function Caching for Consistent Multi-Resolution Rendering of Large Particle Data},<br>
   &nbsp;&nbsp;author = {Ibrahim, Mohamed and Wickenh\"{a}user, Patrick and Rautek, Peter and Reina, Guido and Hadwiger, Markus},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Scientific Visualization 2017)},<br>
   &nbsp;&nbsp;year = {2018}<br>
   &nbsp;&nbsp;volume = {24},<br>
   &nbsp;&nbsp;number = {1},<br>
   &nbsp;&nbsp;pages = {944--953}<br>
  }
  
#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
 - title: Supplementary Material
   type:  pdf
   url:   './publications/2017_ibrahim_SNDF_supplementary.pdf' 
# - title: ExampleSlides
#   type:  slides
#   url:   './publications/presentation.pptx' 
   
#don't forget the leading and trailing --- in a YAML file
---
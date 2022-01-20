---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       teracellvis

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Real-Time Visualization of Large-Scale Geological Models with Nonlinear Feature-Preserving Levels of Detail

#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Ronell Sicat
 - Mohamed Ibrahim
 - Amani Ageeli
 - Florian Mannuss
 - Peter Rautek
 - Markus Hadwiger
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics

#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE TVCG 2022

#specify publication year
year:       2022

#insert abstract of publication
abstract:   >
   The rapidly growing size and complexity of 3D geological models has increased the need for level-of-detail techniques and compact encodings to facilitate interactive visualization. For large-scale hexahedral meshes, state-of-the-art approaches often employ wavelet schemes for level of detail as well as for data compression. Here, wavelet transforms serve two purposes: (1) they achieve substantial compression for data reduction; and (2) the multiresolution encoding provides levels of detail for visualization. However, in coarser detail levels, important geometric features, such as geological faults, often get too smoothed out or lost, due to linear translation-invariant filtering. The same is true for attribute features, such as discontinuities in porosity or permeability. We present a novel, integrated approach addressing both purposes above, while preserving critical data features of both model geometry and its attributes. Our first major contribution is that we completely decouple the computation of levels of detail from data compression, and perform nonlinear filtering in a high-dimensional data space jointly representing the geological model geometry with its attributes. Computing detail levels in this space enables us to jointly preserve features in both geometry and attributes. While designed in a general way, our framework specifically employs joint bilateral filters, computed efficiently on a high-dimensional permutohedral grid. For data compression, after the computation of all detail levels, each level is separately encoded with a standard wavelet transform. Our second major contribution is a compact GPU data structure for the encoded mesh and attributes that enables direct real-time GPU visualization without prior decoding.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2022_sicat_tcv.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2022_sicat_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://vimeo.com/458350874'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=3WW2Bdg5tY8'

#link to publication pdf (optional)
#pdf:        'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9576578'

#link to appendix pdf (optional)
#pdfsupp:   'https://arxiv.org/pdf/2106.16169.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
@article{Sicat2022TeraCellVis,<br>
  &nbsp;&nbsp;title = {Real-Time Visualization of Large-Scale Geological Models with Nonlinear Feature-Preserving Levels of Detail},<br>
  &nbsp;&nbsp;author = {Sicat, Ronell and Ibrahim, Mohamed, and Ageeli, Amani, and Mannus, Florian, and Rautek, Peter and Hadwiger, Markus},<br>
  &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics},<br>
  &nbsp;&nbsp;number = {to appear},<br>
  &nbsp;&nbsp;issue = {to appear},<br>
  &nbsp;&nbsp;pages = {to appear},<br>
  &nbsp;&nbsp;year = {2022}<br>
}

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
- title: Publisher version
  type:  web
  url:   'https://doi.org/10.1109/TVCG.2021.3120372'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/killingsurfaces'
 
---
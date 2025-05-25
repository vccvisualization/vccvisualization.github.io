---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       lactea

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      > 
   Lactea: Web-Based Spectrum-Preserving Multi-Resolution Visualization of the GAIA Star Catalog
   
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Reem Alghamdi
 - Markus Hadwiger
 - Guido Reina
 - Alberto Jaspe-Villanueva
 
#insert publication venue (displayed on publication page)
venue:      >
   Computer Graphics Forum, Vol.44, No.3 (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2025), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   Eurovis 2025

#specify publication year
year:       2025

#insert abstract of publication
abstract:   >
   The explosion of data in astronomy has resulted in an era of unprecedented opportunities for discovery. The GAIA mission's catalog, containing a large number of light sources (mostly stars) with several parameters such as sky position and proper motion, is playing a significant role in advancing astronomy research and has been crucial in various scientific breakthroughs over the past decade. In its current release, more than 200 million stars contain a calibrated continuous spectrum, which is essential for characterizing astronomical information such as effective temperature and surface gravity, and enabling complex tasks like interstellar extinction detection and narrow-band filtering.
   Even though numerous studies have been conducted to visualize and analyze the data in the SciVis and AstroVis communities, no work has attempted to leverage spectral information for visualization in real time. Interactive exploration of such complex, massive data presents several challenges for visualization.
   This paper introduces a novel multi-resolution, spectrum-preserving data structure and a progressive, real-time visualization algorithm to handle the sheer volume of the data efficiently, enabling interactive visualization and exploration of the whole catalog's spectra. We show the efficiency of our method with our open-source, interactive, web-based tool for exploring the GAIA catalog, and discuss astronomically relevant use cases of our system. 
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2025_05_alghamdi_lactea_teaser.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2025_05_alghamdi_lactea_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:       'https://www.youtube.com/watch?v=mR2bpCEupvk'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=qiLjCvrpdZU'

#link to publication pdf (optional)
pdf:        './publications/2025_05_alghamdi_lactea.pdf'

#link to appendix pdf (optional)
pdfsupp:    './publications/2025_05_alghamdi_lactea_appendix.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{alghamdi2025Lactea,<br>
   &nbsp;&nbsp;title = {Lactea: Web-Based Spectrum-Preserving Multi-Resolution Visualization of the GAIA Star Catalog},<br>
   &nbsp;&nbsp;author = {Alghamdi, Reem and Hadwiger, Markus and Reina, Guido and Jaspe-Villanueva, Alberto},<br>
   &nbsp;&nbsp;journal = {Computer Graphics Forum (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2025)},<br>
   &nbsp;&nbsp;volume = {44},<br>
   &nbsp;&nbsp;number = {3},<br>
   &nbsp;&nbsp;pages = {to appear},<br>
   &nbsp;&nbsp;year = {2025}<br>
}

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: Slides
#   type:  slides
#   url:   './publications/2025_05_alghamdi_lactea_slides.pdf'
- title: Code
  type:  github
  url:   'https://github.com/vccvisualization/lactea'
 
---
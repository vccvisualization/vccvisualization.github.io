---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       thinvolvis

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   VICE: Visual Identification and Correction of Neural Circuit Errors
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Felix Gonda
 - Xueying Wang
 - Johanna Beyer
 - Markus Hadwiger
 - Jeff W. Lichtman
 - Hanspeter Pfister
 
#insert publication venue (displayed on publication page)
venue:      >
   Computer Graphics Forum (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2021), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   Eurovis 2021

#specify publication year
year:       2021

#insert abstract of publication
abstract:   >
   A connectivity graph of neurons at the resolution of single synapses provides scientists with a tool for understanding the nervous system in health and disease. Recent advances in automatic image segmentation and synapse prediction in electron microscopy (EM) datasets of the brain have made reconstructions of neurons possible at the nanometer scale. However, automatic segmentation sometimes struggles to segment large neurons correctly, requiring human effort to proofread its output. General proofreading involves inspecting large volumes to correct segmentation errors at the pixel-level, a visually intensive and time-consuming process. This paper presents the design and implementation of an analytics framework that streamlines proofreading, focusing on connectivity-related errors. We accomplish this with automated likely-error detection and synapse clustering that drives the proofreading effort with highly interactive 3D visualizations. In particular, our strategy centers on proofreading the local circuit of a single cell to ensure a basic level of completeness. We demonstrate our framework’s utility with a user study and report quantitative and subjective feedback from our users. Overall, users find the framework more efficient for proofreading, understanding evolving graphs, and sharing error correction strategies.
 
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2021_gona_vice.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2021_gonda_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://vimeo.com/'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?'

#link to publication pdf (optional)
#pdf:        './publications/2021_gonda_vice.pdf'

#link to appendix pdf (optional)
#pdfsupp:    './publications/2021_gonda_vice_appendixes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Gonda2021VisualIdentificationCorrection,<br>
   &nbsp;&nbsp;title = {VICE: Visual Identification and Correction of Neural Circuit Errors},<br>
   &nbsp;&nbsp;author = {Gonda, Felix and Wang, Xueying and Beyer, Johanna and Hadwiger, Markus and Lichtman, Jeff W. and Pfister, Hanspeter},<br>
   &nbsp;&nbsp;journal = {Computer Graphics Forum (Proceedings Eurographics/IEEE Symposium on Visualization, Eurovis 2021},<br>
   &nbsp;&nbsp;year = {2021}<br>
   &nbsp;&nbsp;pages = {to appear}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: Slides
#   type:  slides
#   url:   './publications/2021_herter_slides.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/thinvolvis'
 
---